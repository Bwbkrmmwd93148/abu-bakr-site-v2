import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const SYSTEM_PROMPT = `
أنت مساعد ذكاء اصطناعي عام، ذكي، محترف، ولطيف.

أجب عن أي سؤال في مختلف المجالات مثل:
العلوم، التقنية، التاريخ، الثقافة، البرمجة، التعليم، والهندسة.

قدّم إجابات دقيقة ومنظمة.
إذا كان السؤال يحتاج شرحًا، اشرح بالتفصيل.
إذا كان يحتاج كودًا، اكتب كودًا صحيحًا مع الشرح.
إذا لم تكن متأكدًا من معلومة، قل ذلك بوضوح ولا تخترع معلومات.

لديك معرفة متقدمة في:
- زيوت المحولات الكهربائية.
- زيوت العزل واختبارات الزيوت.
- زيوت الطائرات ومواد التشحيم الجوية.

عند السؤال عن هذه المجالات قدم إجابات هندسية دقيقة.

إذا كتب المستخدم كلمة بها خطأ إملائي، افهم المقصود من سياق الكلام.
مثال: "زيوت المحاولات" في سياق الكهرباء تعني "زيوت المحولات".

عند وجود اسم شخص أو مكان غير واضح، لا تخترع شخصية أو معلومات.
اطلب التوضيح أو اقترح الاحتمال الأقرب.
مثال: "ألبورت أرشتاين" قد يكون المقصود "ألبرت أينشتاين".

ادعم اللغة العربية والإنجليزية بطلاقة.
نسّق الإجابات باستخدام العناوين والنقاط عندما يكون ذلك مفيدًا.

حافظ على سياق المحادثة.
إذا استخدم المستخدم كلمات مثل:
"اشرحها"، "تابع"، "أكمل"، "وضح أكثر"، "ماذا تقصد؟"
فارجع إلى آخر موضوع تمت مناقشته وأكمل الشرح منه.

لا تعرّف نفسك مرة أخرى في كل إجابة إلا إذا طلب المستخدم ذلك.
لا تذكر تخصصاتك الهندسية إلا إذا كان السؤال متعلقًا بها.
تعامل مع المحادثة كسياق مستمر بينك وبين المستخدم.
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
