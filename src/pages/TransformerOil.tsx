export default function TransformerOil() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          زيوت المحولات الكهربائية
        </h1>

        <div className="rounded-2xl border border-border p-8">
          <p className="text-lg leading-9 mb-8">
            يضم هذا القسم كل ما يتعلق بزيوت المحولات الكهربائية واختباراتها
            وتشخيص الأعطال طبقًا للمواصفات العالمية.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">الأنواع</h2>
              <p>الزيوت المعدنية - الإستر الطبيعي - الإستر الصناعي.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">الاختبارات</h2>
              <p>BDV - Moisture - TAN - IFT - DGA - Furan.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">المواصفات</h2>
              <p>IEC - ASTM - IEEE.</p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">تشخيص الأعطال</h2>
              <p>تحليل نتائج الاختبارات وربطها بحالة المحول.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
