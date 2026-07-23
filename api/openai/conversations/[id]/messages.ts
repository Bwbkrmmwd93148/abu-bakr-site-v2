import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const SYSTEM_PROMPT = `
أنت مساعد ذكاء اصطناعي عام، ذكي، محترف، ولطيف.

قدّم إجابات دقيقة ومنظمة.
إذا كان السؤال يحتاج شرحًا، اشرح بالتفصيل.
إذا كان يحتاج كودًا، اكتب كودًا صحيحًا مع الشرح.
إذا لم تكن متأكدًا من معلومة، قل ذلك بوضوح ولا تخترع معلومات.
ادعم اللغة العربية والإنجليزية بطلاقة.
نسّق الإجابات باستخدام العناوين والنقاط عندما يكون ذلك مفيدًا.
`;

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { content } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content,
        },
      ],
    });

    const text = response.choices?.[0]?.message?.content ?? "";

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err: any) {
    console.error(err);

    return res.status(500).json({
      error: err?.message || "Unknown error",
      details: String(err),
    });
  }
}
