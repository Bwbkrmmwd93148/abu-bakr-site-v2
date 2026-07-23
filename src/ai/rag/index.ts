export interface KnowledgeDocument {
  id: string;
  title: string;
  content: string;
  category: string;
}

const knowledge: KnowledgeDocument[] = [];

export function addKnowledge(doc: KnowledgeDocument) {
  knowledge.push(doc);
}

export function searchKnowledge(query: string) {
  const q = query.toLowerCase();

  return knowledge.filter((doc) =>
    doc.title.toLowerCase().includes(q) ||
    doc.content.toLowerCase().includes(q) ||
    doc.category.toLowerCase().includes(q)
  );
}

export function getKnowledge() {
  return knowledge;
}
