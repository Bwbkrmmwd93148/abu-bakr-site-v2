export default function AviationOil() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-6xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          زيوت الطيران
        </h1>

        <div className="rounded-2xl border border-border p-8">

          <p className="text-lg leading-9 mb-8">
            قسم متخصص في زيوت الطيران، أنواعها، خصائصها، واختباراتها
            المستخدمة للحفاظ على كفاءة وسلامة محركات الطائرات.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                الأنواع
              </h2>
              <p>
                الزيوت المعدنية والزيوت الصناعية الخاصة بمحركات الطائرات.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                الاختبارات
              </h2>
              <p>
                اللزوجة - نقطة الوميض - الأكسدة - تحليل الشوائب.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                المواصفات
              </h2>
              <p>
                ASTM - SAE - MIL Specifications.
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <h2 className="text-2xl font-bold mb-3">
                التطبيقات
              </h2>
              <p>
                محركات الطائرات المدنية والعسكرية والتوربينية.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
