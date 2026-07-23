export default function JetEngineResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          المحركات النفاثة Jet Engines
        </h1>

        <div className="rounded-2xl border border-border p-8 space-y-8 leading-9">

          <p>
            تعد المحركات النفاثة من أهم أنظمة الطائرات الحديثة، حيث تقوم
            بتحويل الطاقة الكيميائية للوقود إلى طاقة حرارية ثم إلى قوة دفع
            تمكن الطائرة من الحركة والطيران.
          </p>

          <h2 className="text-2xl font-bold">
            أنواع المحركات النفاثة
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>Turbofan المحرك العنفي المروحي المستخدم في الطائرات المدنية.</li>
            <li>Turbojet المحرك النفاث التقليدي عالي السرعة.</li>
            <li>Turboprop المحرك التوربيني المروحي للطائرات الصغيرة.</li>
            <li>Turboshaft المستخدم في المروحيات.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            مكونات المحرك النفاث
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>Fan: المروحة الأمامية لتوليد الدفع.</li>
            <li>Compressor: ضغط الهواء قبل الاحتراق.</li>
            <li>Combustion Chamber: غرفة الاحتراق.</li>
            <li>Turbine: استخراج الطاقة من الغازات الساخنة.</li>
            <li>Nozzle: تحويل الطاقة إلى سرعة دفع.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            دورة برايتون Brayton Cycle
          </h2>

          <p>
            تعتمد المحركات النفاثة على دورة برايتون الحرارية التي تتكون من
            الانضغاط، إضافة الحرارة، التمدد، وطرد الغازات.
          </p>

          <h2 className="text-2xl font-bold">
            صيانة المحركات النفاثة
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>فحص درجات الحرارة والاهتزازات.</li>
            <li>تحليل زيوت المحركات.</li>
            <li>فحص ريش التوربين.</li>
            <li>اختبارات الأداء والضغط.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary">
            الخلاصة
          </h2>

          <p>
            تعتمد موثوقية الطائرات الحديثة على كفاءة تصميم وصيانة المحركات
            النفاثة لأنها المصدر الرئيسي للطاقة والدفع.
          </p>

        </div>

      </div>
    </div>
  );
}
