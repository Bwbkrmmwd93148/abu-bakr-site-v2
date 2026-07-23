import { useParams } from "wouter";
import { useEffect, useState } from "react";

export default function AircraftArticle() {

  const { file } = useParams<{ file: string }>();
  const [content, setContent] = useState("");

  useEffect(() => {

    if (!file) return;

    fetch(`/research/aircraft/articles/${file}`)
      .then(res => res.text())
      .then(text => setContent(text));

  }, [file]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="rounded-2xl border border-border p-8 leading-9">

          <pre className="whitespace-pre-wrap font-sans">
            {content}
          </pre>

        </div>

      </div>
    </div>
  );
}
