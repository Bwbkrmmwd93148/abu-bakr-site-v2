import { useParams } from "wouter";
import { useEffect, useState } from "react";

export default function AviationArticle() {

  const params = useParams<{ path: string }>();
  const path = params.path || "";

  const [content, setContent] = useState("");

  useEffect(() => {

    fetch(`/research/aviation/${path}`)
      .then(res => res.text())
      .then(text => setContent(text));

  }, [path]);


  return (
    <div className="min-h-screen bg-background text-foreground pt-28">

      <div className="container mx-auto px-6 max-w-5xl">

        <div className="rounded-2xl border border-border p-8">

          <pre className="whitespace-pre-wrap leading-8 text-lg">
            {content}
          </pre>

        </div>

      </div>

    </div>
  );
}
