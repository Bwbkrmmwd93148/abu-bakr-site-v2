export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          اتصل بي
        </h1>

        <div className="rounded-2xl border border-border p-8 space-y-6">

          <p className="text-lg leading-9">
            للتواصل والاستفسارات حول زيوت المحولات الكهربائية وزيوت الطيران
            والمحتوى الفني، يمكنكم التواصل عبر الوسائل التالية.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                التواصل العلمي
              </h2>
              <p>
                استقبال الأسئلة والملاحظات المتعلقة بالمجال الهندسي.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                التعاون
              </h2>
              <p>
                التعاون في إعداد المقالات والمراجع الفنية المتخصصة.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
