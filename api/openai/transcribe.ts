import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  return res.status(200).json({
    text: "ميزة تحويل الصوت إلى نص سيتم تفعيلها لاحقاً.",
  });
}
