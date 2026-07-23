
export default function Research() {
  const items = [
    {
      title: "زيوت المحولات الكهربائية",
      desc: "التعريف والأنواع والاختبارات والصيانة",
      link: "/research/transformer-oil-basics"
    },
    {
      title: "اختبارات وصيانة زيوت المحولات",
      desc: "BDV و DGA وتحليل حالة المحول",
      link: "/research/transformer-oil-testing"
    },
    {
      title: "أساسيات الطائرات والطائرات الحربية",
      desc: "مكونات الطائرات والمحركات والصيانة الجوية",
      link: "/research/aircraft-library"
    },
    {
      title: "موسوعة هندسة الطيران المتقدمة",
      desc: "قاعدة بيانات هندسية تشمل الطائرات والمحركات والديناميكا الهوائية والمعادلات",
      link: "/research/aviation-library"
    },
    {
      title: "المحولات الجافة",
      desc: "التقنية والمميزات والاستخدامات",
      link: "/research/dry-transformer"
    },
    {
      title: "الديناميكا الهوائية Aerodynamics",
      desc: "القوى الأربع، الجناح، الرفع، المقاومة، والاستقرار والتحكم",
      link: "/research/aerodynamics"
    },
    {
      title: "المحركات النفاثة Jet Engines",
      desc: "أنواع المحركات، المكونات، دورة برايتون، والصيانة",
      link: "/research/jet-engines"
    },
    {
      title: "المحولات الزيتية",
      desc: "التصميم والتبريد والعزل",
      link: "/research/oil-transformer"
    },
    {
      title: "أعطال المحولات",
      desc: "التشخيص والأسباب وطرق المعالجة",
      link: "/research/transformer-faults"
    },
    {
      title: "صيانة المحولات",
      desc: "خطط الصيانة والفحوصات الدورية",
      link: "/research/transformer-maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-6xl">

        <h1 className="text-4xl font-bold text-primary mb-10">
          المكتبة الهندسية والأبحاث العلمية
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {items.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className="rounded-2xl border border-border p-6 hover:border-primary transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="leading-8">
                {item.desc}
              </p>

            </a>
          ))}

        </div>

      </div>
    </div>
  );
}
