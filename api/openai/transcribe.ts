import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { audio, mimeType } = req.body;

    const buffer = Buffer.from(audio, "base64");

    const file = new File(
      [buffer],
      "voice.webm",
      {
        type: mimeType || "audio/webm",
      }
    );

    const result = await client.audio.transcriptions.create({
      file,
      model: "whisper-large-v3-turbo",
      language: "ar",
      temperature: 0,
      response_format: "json",
      prompt:
        "النص باللغة العربية. صحح الكلمات غير الواضحة حسب السياق وتجاهل الضوضاء.",
    });

    return res.status(200).json({
      text: result.text,
    });

  } catch (e: any) {
    console.error(e);

    return res.status(500).json({
      error: e.message || "Transcription error",
    });
  }
}EOF

