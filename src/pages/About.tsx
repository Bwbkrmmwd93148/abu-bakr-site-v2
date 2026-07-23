export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          نبذة عني
        </h1>

        <div className="rounded-2xl border border-border p-8 space-y-6">
          <p className="text-lg leading-9">
            مرحبًا بكم، أنا أبو بكر محمود، مهتم بزيوت المحولات الكهربائية
            وزيوت الطيران، وأسعى إلى تقديم محتوى علمي عربي يعتمد على
            المواصفات العالمية وأفضل الممارسات الهندسية.
          </p>

          <h2 className="text-2xl font-bold text-primary">
            مجالات الاهتمام
          </h2>

          <ul className="list-disc pr-6 space-y-2 leading-8">
            <li>زيوت المحولات الكهربائية.</li>
            <li>تحليل الغازات الذائبة DGA.</li>
            <li>اختبارات جودة الزيوت.</li>
            <li>زيوت الطيران.</li>
            <li>المراجع والمواصفات العالمية.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary">
            هدف الموقع
          </h2>

          <p className="leading-9">
            إنشاء موسوعة عربية متخصصة في زيوت المحولات وزيوت الطيران تكون
            مرجعًا للمهندسين والفنيين والطلاب.
          </p>
        </div>
      </div>
    </div>
  );
}
