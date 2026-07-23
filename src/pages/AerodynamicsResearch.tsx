export default function AerodynamicsResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          الديناميكا الهوائية Aerodynamics
        </h1>

        <div className="rounded-2xl border border-border p-8 space-y-8 leading-9">

          <p>
            تعد الديناميكا الهوائية من أهم علوم هندسة الطيران، وهي العلم الذي
            يدرس حركة الهواء حول جسم الطائرة وتأثير القوى الناتجة عن هذا
            التفاعل على الأداء والاستقرار والتحكم.
          </p>

          <h2 className="text-2xl font-bold">
            القوى الأربع المؤثرة على الطائرة
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>
              Lift قوة الرفع: القوة التي تنتج من الجناح وتحافظ على بقاء
              الطائرة في الهواء.
            </li>

            <li>
              Weight الوزن: القوة الناتجة عن الجاذبية الأرضية المؤثرة على
              كتلة الطائرة.
            </li>

            <li>
              Thrust الدفع: القوة الناتجة من المحركات والتي تدفع الطائرة
              للأمام.
            </li>

            <li>
              Drag المقاومة الهوائية: القوة التي تعاكس حركة الطائرة خلال
              الهواء.
            </li>
          </ul>

          <h2 className="text-2xl font-bold">
            شكل الجناح Airfoil
          </h2>

          <p>
            تصميم الجناح هو العامل الأساسي في توليد الرفع، حيث يؤدي اختلاف
            سرعة الهواء فوق وأسفل الجناح إلى اختلاف الضغط وتكوين قوة الرفع.
          </p>

          <h2 className="text-2xl font-bold">
            زاوية الهجوم Angle of Attack
          </h2>

          <p>
            هي الزاوية بين وتر الجناح واتجاه الهواء القادم، وتؤثر بشكل مباشر
            على مقدار الرفع والمقاومة. زيادة الزاوية بشكل كبير قد تؤدي إلى
            حالة الانهيار Stall.
          </p>

          <h2 className="text-2xl font-bold">
            الاستقرار والتحكم Flight Stability
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>
              الاستقرار الطولي Longitudinal Stability حول محور Pitch.
            </li>

            <li>
              الاستقرار الجانبي Lateral Stability حول محور Roll.
            </li>

            <li>
              الاستقرار الاتجاهي Directional Stability حول محور Yaw.
            </li>
          </ul>

          <h2 className="text-2xl font-bold">
            أسطح التحكم Control Surfaces
          </h2>

          <ul className="list-disc mr-6 space-y-3">
            <li>
              Elevator: التحكم في الحركة الرأسية.
            </li>

            <li>
              Ailerons: التحكم في الميلان الجانبي.
            </li>

            <li>
              Rudder: التحكم في الاتجاه.
            </li>

            <li>
              Flaps: زيادة الرفع أثناء الإقلاع والهبوط.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary">
            الخلاصة
          </h2>

          <p>
            تعتمد كفاءة الطائرة على فهم وتحليل الديناميكا الهوائية، حيث يتم
            تصميم الأجنحة والأسطح المتحركة لتحقيق أفضل توازن بين الرفع
            والمقاومة والاستقرار أثناء جميع مراحل الطيران.
          </p>

        </div>

      </div>
    </div>
  );
}
