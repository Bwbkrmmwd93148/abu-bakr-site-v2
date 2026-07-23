export default function Articles() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-6xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          المقالات العلمية
        </h1>

        <div className="rounded-2xl border border-border p-8">

          <p className="text-lg leading-9 mb-8">
            مجموعة من المقالات الفنية المتخصصة في زيوت المحولات الكهربائية
            وزيوت الطيران وتقنيات الصيانة والتحليل.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-xl p-5">
              <h2 className="text-xl font-bold mb-3">
                تحليل زيت المحولات
              </h2>
              <p>
                أهمية الاختبارات الدورية ودورها في اكتشاف الأعطال المبكرة.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-xl font-bold mb-3">
                اختبار DGA
              </h2>
              <p>
                تحليل الغازات الذائبة وتشخيص حالة المحولات الكهربائية.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-xl font-bold mb-3">
                زيوت الطيران الحديثة
              </h2>
              <p>
                التطورات الحديثة في زيوت المحركات ومواصفاتها العالمية.
              </p>
            </div>

          </div>

          <div className="mt-8 border rounded-xl p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">
              مكتبة الأبحاث والملفات العلمية
            </h2>

            <ul className="space-y-3">
              <li>
                <a href="/research/transformer-oil-basics">📄 زيوت المحولات الكهربائية: التعريف والأهمية</a>
              </li>
              <li>
                <a href="/research/transformer-oil-testing">📄 اختبارات وصيانة زيوت المحولات</a>
              </li>
              <li>
                <a href="/research/aircraft">📄 أساسيات الطائرات والطائرات الحربية</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
