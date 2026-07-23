import { createMessages } from "../src/ai/chat";
import { search } from "../src/ai/search";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  const { message } = req.body;

  const knowledge = search(message);

  const messages = createMessages(message);

  return res.status(200).json({
    success: true,
    knowledge,
    messages,
  });
}
