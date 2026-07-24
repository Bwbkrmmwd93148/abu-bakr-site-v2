import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Send, MessageCircle, Loader2, Bot, User,
  Trash2, Mic, MicOff, Volume2, VolumeX, Square,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  streaming?: boolean;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/* ── API helpers ─────────────────────────────────────────────── */

async function createConversation(): Promise<number> {
  const res = await fetch(`${BASE}/api/openai/conversations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'محادثة جديدة' }),
  });
  return ((await res.json()) as { id: number }).id;
}

async function* streamMessage(
  conversationId: number,
  content: string,
): AsyncGenerator<string> {
  const res = await fetch(
    `${BASE}/api/openai/conversations/${conversationId}/messages`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    },
  );
  if (!res.body) return;
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop() ?? '';
    for (const line of lines) {
      if (!line.startsWith('data: ')) continue;
      try {
        const p = JSON.parse(line.slice(6)) as { content?: string; done?: boolean };
        if (p.done) return;
        if (p.content) yield p.content;
      } catch { /* skip */ }
    }
  }
}

async function transcribeAudio(blob: Blob): Promise<string> {
  const arrayBuf = await blob.arrayBuffer();
  const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuf)));
  const res = await fetch(`${BASE}/api/openai/transcribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ audio: base64, mimeType: blob.type }),
  });
  const data = await res.json() as { text: string };
  return data.text?.trim() ?? '';
}

async function speakPart(
  text: string,
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
): Promise<void> {
  const res = await fetch(`${BASE}/api/openai/tts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) return;

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);

  if (!audioRef.current) {
    audioRef.current = new Audio();
  }

  const audio = audioRef.current;

  audio.pause();
  audio.currentTime = 0;
  audio.src = url;
  audio.volume = 1;

  await new Promise<void>((resolve) => {
    audio.onended = () => {
      URL.revokeObjectURL(url);
      resolve();
    };

    audio.onerror = () => {
      URL.revokeObjectURL(url);
      resolve();
    };

    audio.play().catch((e) => {
      console.error("Audio play error", e);
      resolve();
    });
  });
}

async function speakText(
  text: string,
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
): Promise<void> {
  const parts = text.match(/[^.!؟\n]+[.!؟]?/g) || [text];

  for (const part of parts) {
    const clean = part.trim();
    if (clean) {
      await speakPart(clean, audioRef);
    }
  }
}

/* ── Component ───────────────────────────────────────────────── */

export default function AbuBakrChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const FREE_QUESTIONS = 3;
  const [convId, setConvId] = useState<number | null>(null);

  // Voice state
  const [voiceMode, setVoiceMode] = useState(false);   // auto-play AI responses
  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setVoiceMode(localStorage.getItem('abu_voice_mode') === 'on');
  }, []);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  /* Welcome message */
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'أهلاً بك. أنا أبو بكر محمود مصطفى، خبير زيوت المحولات الكهربائية والطائرات المدنية والحربية. يسعدني الإجابة على أي استفسار تقني في مجال الزيوت والسوائل الصناعية.\n\nاضغط زر الميكروفون للتحدث إليّ بصوتك.',
      }]);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /* ── Core send ─────────────────────────────────────────────── */
  const sendText = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    const usedQuestions = Number(localStorage.getItem("abu_free_questions") || "0");
    if (usedQuestions >= FREE_QUESTIONS) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "انتهت الأسئلة المجانية الثلاثة. يرجى الاشتراك لمدة شهر لمتابعة المحادثة."
      }]);
      return;
    }
    localStorage.setItem("abu_free_questions", String(usedQuestions + 1));
    setLoading(true);
    setMessages(prev => [...prev, { role: 'user', content: text }]);

    try {
      let id = convId;
      if (!id) { id = await createConversation(); setConvId(id); }

      setMessages(prev => [...prev, { role: 'assistant', content: '', streaming: true }]);

      let full = '';
      for await (const chunk of streamMessage(id, text)) {
        full += chunk;
        setMessages(prev => {
          const u = [...prev];
          u[u.length - 1] = { role: 'assistant', content: full, streaming: true };
          return u;
        });
      }

      setMessages(prev => {
        const u = [...prev];
        u[u.length - 1] = { role: 'assistant', content: full, streaming: false };
        return u;
      });

      // Auto-play TTS if voice mode is on
      if (voiceMode && full) {
        setPlaying(true);
        await speakText(full, audioRef);
        setPlaying(false);
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.',
      }]);
    } finally {
      setLoading(false);
    }
  }, [loading, convId, voiceMode]);

  /* ── Text send ─────────────────────────────────────────────── */
  const send = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    sendText(text);
  }, [input, sendText]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  /* ── Microphone ────────────────────────────────────────────── */
  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
      const mr = new MediaRecorder(stream, { mimeType });
      chunksRef.current = [];
      mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        const blob = new Blob(chunksRef.current, { type: mr.mimeType });
        setTranscribing(true);
        try {
          const text = await transcribeAudio(blob);
          if (text) {
            // Auto-send voice input immediately
            sendText(text);
          }
        } catch {
          /* ignore transcription error */
        } finally {
          setTranscribing(false);
        }
      };
      mr.start();
      mediaRecorderRef.current = mr;
      setRecording(true);
    } catch {
      alert('لم نتمكن من الوصول إلى الميكروفون. يرجى السماح بالوصول وإعادة المحاولة.');
    }
  }, [sendText]);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
    mediaRecorderRef.current = null;
    setRecording(false);
  }, []);

  const toggleRecording = useCallback(() => {
    if (recording) stopRecording();
    else startRecording();
  }, [recording, startRecording, stopRecording]);

  const clearChat = () => {
    setMessages([]);
    setConvId(null);
    if (recording) stopRecording();
  };

  /* ── Derived UI state ──────────────────────────────────────── */
  const isBusy = loading || transcribing || playing;
  const micColor = recording
    ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
    : 'bg-white/10 hover:bg-white/20 text-gray-300';

  return (
    <>
      {/* Floating toggle */}
      <motion.button
        data-testid="chat-toggle"
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
        whileTap={{ scale: 0.95 }}
        animate={open ? { rotate: 90 } : { rotate: 0 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 left-6 z-50 w-[370px] max-w-[calc(100vw-3rem)] flex flex-col rounded-2xl border border-white/10 bg-[hsl(var(--background))] shadow-2xl overflow-hidden"
            style={{ height: 560 }}
          >
            {/* ── Header ─────────────────────────────────────── */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-primary/10 shrink-0">
              <div className="relative w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-primary" />
                {playing && (
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border border-background animate-ping" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">أبو بكر محمود مصطفى</p>
                <p className="text-muted-foreground text-xs">
                  {playing ? 'يتحدث...' : recording ? 'يستمع...' : transcribing ? 'يعالج الصوت...' : 'خبير زيوت المحولات والطائرات'}
                </p>
              </div>

              {/* Voice-mode toggle */}
              <button
                onClick={async () => {
                  setVoiceMode(v => { const n = !v; localStorage.setItem('abu_voice_mode', n ? 'on' : 'off'); return n; });
                  try {
                    const a = new Audio();
                    a.volume = 0;
                    await a.play();
                    a.pause();
                  } catch {}
                }}
                className={`p-1.5 rounded-lg transition-colors ${voiceMode ? 'bg-primary/30 text-primary' : 'text-muted-foreground hover:text-white'}`}
                title={voiceMode ? 'إيقاف الرد الصوتي' : 'تفعيل الرد الصوتي'}
              >
                {voiceMode ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Clear */}
              <button
                onClick={clearChat}
                className="text-muted-foreground hover:text-white transition-colors p-1 rounded"
                title="محادثة جديدة"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Voice mode badge */}
            {voiceMode && (
              <div className="flex items-center gap-1.5 px-4 py-1.5 bg-primary/5 border-b border-white/5 text-xs text-primary/80">
                <Volume2 className="w-3 h-3" />
                الرد الصوتي مفعّل — أبو بكر سيردّ بصوته
              </div>
            )}

            {/* ── Messages ────────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center
                    ${msg.role === 'assistant' ? 'bg-primary/20 border border-primary/40' : 'bg-white/10 border border-white/20'}`}>
                    {msg.role === 'assistant'
                      ? <Bot className="w-4 h-4 text-primary" />
                      : <User className="w-4 h-4 text-gray-300" />}
                  </div>
                  <div className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap
                    ${msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-white/8 border border-white/10 text-gray-200 rounded-tl-none'}`}>
                    {msg.content}
                    {msg.streaming && (
                      <span className="inline-block w-1.5 h-4 bg-primary ml-0.5 animate-pulse rounded-sm" />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Thinking/loading indicator */}
              {loading && messages[messages.length - 1]?.role === 'user' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-white/8 border border-white/10 rounded-2xl rounded-tl-none px-3 py-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* ── Recording overlay ──────────────────────────── */}
            <AnimatePresence>
              {(recording || transcribing) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mx-3 mb-2 rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-3 flex items-center gap-3"
                >
                  {transcribing ? (
                    <>
                      <Loader2 className="w-5 h-5 text-amber-400 animate-spin shrink-0" />
                      <span className="text-sm text-amber-300">جارٍ تحويل الصوت إلى نص...</span>
                    </>
                  ) : (
                    <>
                      <div className="relative shrink-0">
                        <Mic className="w-5 h-5 text-red-400" />
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-red-300 font-medium">جارٍ التسجيل...</p>
                        <p className="text-xs text-red-400/70">اضغط مرة أخرى للإيقاف والإرسال</p>
                      </div>
                      <button
                        onClick={stopRecording}
                        className="w-7 h-7 rounded-full bg-red-500/30 flex items-center justify-center hover:bg-red-500/50 transition-colors"
                      >
                        <Square className="w-3 h-3 text-red-300 fill-red-300" />
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Input bar ──────────────────────────────────── */}
            <div className="px-3 py-3 border-t border-white/10 bg-background/50 shrink-0">
              <div className="flex gap-2 items-end">
                {/* Mic button */}
                <button
                  onClick={toggleRecording}
                  disabled={transcribing || loading || playing}
                  className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-40 ${micColor}`}
                  title={recording ? 'إيقاف التسجيل' : 'تحدث بالميكروفون'}
                  data-testid="chat-mic"
                >
                  {recording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>

                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={recording ? 'التسجيل جارٍ...' : 'اكتب سؤالك أو اضغط الميكروفون...'}
                  className="resize-none min-h-[40px] max-h-[100px] bg-white/5 border-white/10 text-sm focus:border-primary/50 flex-1"
                  rows={1}
                  data-testid="chat-input"
                  disabled={isBusy || recording}
                />

                <Button
                  onClick={send}
                  disabled={isBusy || !input.trim() || recording}
                  size="icon"
                  className="shrink-0 h-10 w-10"
                  data-testid="chat-send"
                >
                  {loading
                    ? <Loader2 className="w-4 h-4 animate-spin" />
                    : <Send className="w-4 h-4" />}
                </Button>
              </div>

              <p className="text-[10px] text-muted-foreground/40 text-center mt-1.5">
                {voiceMode
                  ? 'الوضع الصوتي مفعّل • اضغط 🔊 لإيقافه'
                  : 'اضغط Enter للإرسال • اضغط 🔊 لتفعيل الرد الصوتي'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
