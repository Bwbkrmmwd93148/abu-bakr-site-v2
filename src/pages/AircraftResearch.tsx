export default function AircraftResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          الموسوعة الهندسية للطيران والزيوت والأنظمة الصناعية
        </h1>

        <div className="rounded-2xl border border-border p-8 space-y-8 leading-9">

          <h2 className="text-2xl font-bold">
            مقدمة في الهندسة الجوية والصناعية
          </h2>

          <p>
            تجمع الهندسة الحديثة بين علوم الميكانيكا والديناميكا الحرارية
            والكهرباء والإلكترونيات والمواد المتقدمة وأنظمة التحكم والصيانة.
            وتهدف إلى تحقيق أعلى مستويات الكفاءة والاعتمادية والسلامة.
          </p>

          <h2 className="text-2xl font-bold">
            الديناميكا الهوائية Aerodynamics
          </h2>

          <p>
            تعتمد حركة الطائرة في الهواء على أربع قوى رئيسية:
            قوة الرفع Lift، الوزن Weight، الدفع Thrust، والمقاومة Drag.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>Lift: القوة التي ترفع الطائرة عن سطح الأرض.</li>
            <li>Drag: مقاومة الهواء لحركة الطائرة.</li>
            <li>Thrust: القوة الناتجة عن المحركات.</li>
            <li>Weight: وزن الطائرة وتأثير الجاذبية.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            الطيران المدني والحربي
          </h2>

          <p>
            تختلف تصميمات الطائرات حسب المهمة، فتركز الطائرات المدنية على
            الكفاءة الاقتصادية والراحة، بينما تركز الطائرات الحربية على
            السرعة والمناورة والقدرات القتالية.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>طائرات النقل التجاري Passenger Aircraft.</li>
            <li>الطائرات المقاتلة Fighter Aircraft.</li>
            <li>طائرات الاستطلاع والمراقبة.</li>
            <li>الطائرات بدون طيار UAV.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            أنظمة الطائرة الرئيسية Aircraft Systems
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>الهيكل الخارجي Fuselage Structure.</li>
            <li>الأجنحة وأنظمة التحكم.</li>
            <li>أنظمة الوقود Fuel System.</li>
            <li>الأنظمة الهيدروليكية Hydraulic System.</li>
            <li>الأنظمة الكهربائية Avionics & Electrical.</li>
          </ul>          <h2 className="text-2xl font-bold">
            المحركات النفاثة Jet Engines
          </h2>

          <p>
            تعتمد المحركات النفاثة على دورة برايتون الحرارية Brayton Cycle
            لتحويل الطاقة الكيميائية للوقود إلى طاقة حرارية ثم طاقة حركة ودفع.
          </p>

          <h3 className="text-xl font-bold">
            المحرك العنفي المروحي Turbofan
          </h3>

          <ul className="list-disc mr-6 space-y-3">
            <li>Fan: المروحة الأمامية لإنتاج الجزء الأكبر من الدفع.</li>
            <li>LPC / HPC: ضواغط الضغط المنخفض والعالي.</li>
            <li>Combustor: غرفة الاحتراق وخلط الوقود بالهواء.</li>
            <li>HPT / LPT: توربينات استخراج الطاقة.</li>
            <li>Nozzle: فوهة تسريع الغازات.</li>
          </ul>

          <h3 className="text-xl font-bold">
            دورة برايتون Brayton Cycle
          </h3>

          <ul className="list-disc mr-6 space-y-3">
            <li>1 → 2: انضغاط أدياباتي داخل الضواغط.</li>
            <li>2 → 3: إضافة الحرارة داخل غرفة الاحتراق.</li>
            <li>3 → 4: تمدد الغازات خلال التوربين.</li>
            <li>4 → 1: خروج العادم وتوليد الدفع.</li>
          </ul>

          <h3 className="text-xl font-bold">
            نسبة التدفق الجانبي Bypass Ratio
          </h3>

          <p>
            تمثل نسبة الهواء الذي يمر حول قلب المحرك إلى الهواء المار داخل
            القلب، وتعتبر من أهم عوامل كفاءة المحركات الحديثة.
          </p>

          <h2 className="text-2xl font-bold">
            وحدة الطاقة المساعدة APU
          </h2>

          <p>
            وحدة توربينية صغيرة مثبتة في ذيل الطائرة، توفر الطاقة الكهربائية
            والهواء المضغوط عند توقف المحركات الرئيسية.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>تشغيل الأنظمة الأرضية.</li>
            <li>بدء تشغيل المحركات الرئيسية.</li>
            <li>مصدر احتياطي أثناء الطيران.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            هياكل الطائرات والمواد المركبة
          </h2>

          <p>
            تستخدم سبائك الألومنيوم والتيتانيوم والمواد المركبة CFRP
            لتحقيق قوة عالية ووزن منخفض ومقاومة للتآكل.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>Wing Box صندوق الجناح.</li>
            <li>Spars العوارض الطولية.</li>
            <li>Ribs الأضلاع الهيكلية.</li>
            <li>Stringers عناصر التقوية.</li>
          </ul>          <h2 className="text-2xl font-bold">
            زيوت المحولات Transformer Oils
          </h2>

          <p>
            يعتبر زيت المحول أحد أهم مكونات منظومات القدرة الكهربائية،
            حيث يعمل كعازل كهربائي ووسط تبريد لنقل الحرارة بعيداً عن
            الملفات والقلب الحديدي.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>العزل الكهربائي بين الأجزاء الداخلية.</li>
            <li>تبريد الملفات والقلب المغناطيسي.</li>
            <li>تقليل تأثير التفريغ والانهيار الكهربائي.</li>
            <li>المساعدة في تشخيص حالة المحول.</li>
          </ul>

          <h3 className="text-xl font-bold">
            أنواع زيوت المحولات
          </h3>

          <ul className="list-disc mr-6 space-y-3">
            <li>Mineral Oil الزيوت المعدنية.</li>
            <li>Synthetic Oil الزيوت الصناعية.</li>
            <li>Natural Ester الزيوت النباتية الطبيعية.</li>
            <li>Fire Resistant Ester الزيوت المقاومة للحريق.</li>
          </ul>

          <h3 className="text-xl font-bold">
            اختبارات زيت المحولات Oil Testing
          </h3>

          <ul className="list-disc mr-6 space-y-3">
            <li>BDV اختبار قوة العزل الكهربائي.</li>
            <li>DGA تحليل الغازات الذائبة.</li>
            <li>قياس الرطوبة Water Content.</li>
            <li>اختبار الحموضة Acidity.</li>
            <li>قياس اللزوجة والخواص الفيزيائية.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            زيوت الطيران Aviation Oils
          </h2>

          <p>
            تستخدم زيوت الطيران في المحركات النفاثة والتوربينات والأنظمة
            الهيدروليكية، ويجب أن تتحمل درجات الحرارة العالية والضغط
            وظروف التشغيل القاسية.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>Jet Engine Oils زيوت المحركات النفاثة.</li>
            <li>Turbine Oils زيوت التوربينات.</li>
            <li>Hydraulic Fluids السوائل الهيدروليكية.</li>
            <li>Aircraft Greases الشحوم الخاصة بالطائرات.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            الصيانة والفحص غير المدمر NDT
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>Ultrasonic Testing.</li>
            <li>Eddy Current Testing.</li>
            <li>Dye Penetrant Inspection.</li>
            <li>Radiographic Testing.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            الأنظمة الصناعية والزيوت الهندسية
          </h2>

          <p>
            تشمل التطبيقات الصناعية زيوت المحركات، التوربينات، الضواغط،
            الأنظمة الهيدروليكية، ومعدات القدرة الثقيلة.
          </p>

          <ul className="list-disc mr-6 space-y-3">
            <li>زيوت التروس Gear Oils.</li>
            <li>زيوت الضواغط Compressor Oils.</li>
            <li>زيوت التوربينات الصناعية.</li>
            <li>مواد التشحيم الصناعية.</li>
          </ul>

        </div>
      </div>
    </div>
  );
}