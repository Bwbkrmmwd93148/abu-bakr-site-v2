import { searchKnowledge } from "../rag";

export function search(query: string) {
  const results = searchKnowledge(query);

  return {
    query,
    count: results.length,
    results,
  };
}
