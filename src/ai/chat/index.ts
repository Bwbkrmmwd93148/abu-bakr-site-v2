import { SYSTEM_PROMPT } from "../prompts/system";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export function createMessages(userMessage: string): ChatMessage[] {
  return [
    {
      role: "system",
      content: SYSTEM_PROMPT,
    },
    {
      role: "user",
      content: userMessage,
    },
  ];
}
