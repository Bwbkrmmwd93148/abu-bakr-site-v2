export default function AircraftLibrary() {

  const articles = [
    {
      title: "أساسيات الطائرات Aircraft Basics",
      desc: "مقدمة في هندسة الطائرات، المكونات الرئيسية، الهيكل، المحركات، وأنظمة التشغيل.",
      file: "aircraft-basics.md",
      icon: "✈️"
    },
    {
      title: "الديناميكا الهوائية Aerodynamics",
      desc: "القوى الأربع للطيران، تصميم الجناح، الرفع، المقاومة، الاستقرار والتحكم.",
      file: "aerodynamics.md",
      icon: "🌐"
    },
    {
      title: "المحركات النفاثة Jet Engines",
      desc: "Turbojet و Turbofan ودورة برايتون ومكونات المحرك النفاث والصيانة.",
      file: "jet-engines.md",
      icon: "🔥"
    },
    {
      title: "أنظمة الطائرة Aircraft Systems",
      desc: "التحكم، الكهرباء، الهيدروليك، الوقود، الملاحة، وإلكترونيات الطيران.",
      file: "aircraft-systems.md",
      icon: "⚙️"
    },
    {
      title: "هياكل الطائرات Aircraft Structures",
      desc: "تصميم جسم الطائرة، الأجنحة، المواد المركبة، الإجهاد والتعب المعدني.",
      file: "aircraft-structures.md",
      icon: "🏗️"
    },
    {
      title: "الطيران المدني Civil Aviation",
      desc: "طائرات الركاب، التشغيل التجاري، السلامة، وأنظمة النقل الجوي.",
      file: "civil-aviation.md",
      icon: "🛫"
    },
    {
      title: "الطيران الحربي Military Aviation",
      desc: "المقاتلات، القاذفات، الاستطلاع، الطائرات بدون طيار والحرب الإلكترونية.",
      file: "military-aviation.md",
      icon: "🛡️"
    },
    {
      title: "زيوت الطيران Aviation Oils",
      desc: "خواص زيوت المحركات النفاثة، التحليل، التبريد، والحماية من التآكل.",
      file: "aviation-oils.md",
      icon: "🛢️"
    },
    {
      title: "صيانة الطائرات Aircraft Maintenance",
      desc: "الفحص الدوري، الصيانة الوقائية، NDT، وتشخيص الأعطال.",
      file: "aircraft-maintenance.md",
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-28">

      <div className="container mx-auto px-6 max-w-6xl">

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold text-primary mb-5">
            ✈️ موسوعة الطيران والهندسة الجوية
          </h1>

          <p className="text-xl leading-9">
            مكتبة هندسية متخصصة تجمع علوم تصميم الطائرات،
            الديناميكا الهوائية، المحركات، الأنظمة، والصيانة.
          </p>

          <p className="mt-4 text-lg">
            عدد الأقسام العلمية: 9 أقسام | أكثر من 1600 سطر من المحتوى الهندسي
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          {articles.map((item) => (

            <a
              key={item.file}
              href={`/research/aircraft-article/${item.file}`}
              className="
              rounded-3xl
              border
              border-border
              p-7
              hover:border-primary
              hover:shadow-xl
              transition
              bg-card
              "
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {item.title}
              </h2>


              <p className="leading-8 text-muted-foreground">
                {item.desc}
              </p>


              <div className="mt-6 text-primary font-bold">
                قراءة البحث ←
              </div>


            </a>

          ))}

        </div>


      </div>

    </div>
  );
}
