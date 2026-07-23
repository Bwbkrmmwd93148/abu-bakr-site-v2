#!/data/data/com.termux/files/usr/bin/bash

echo "بدء تجهيز مكتبة الأبحاث..."

# نسخ احتياطية
cp src/App.tsx src/App.backup.tsx
cp src/pages/Articles.tsx src/pages/Articles.backup.tsx

echo "تم إنشاء النسخ الاحتياطية"

# إنشاء صفحة الطائرات
cat > src/pages/AircraftResearch.tsx <<'PAGE'
export default function AircraftResearch() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-28">
      <div className="container mx-auto px-6 max-w-5xl">

        <h1 className="text-4xl font-bold text-primary mb-8">
          زيوت الطائرات والطائرات الحربية
        </h1>

        <div className="rounded-2xl border border-border p-8 space-y-8 leading-9">

          <p>
            تستخدم زيوت الطائرات في أنظمة الطيران الحديثة لتزييت
            المحركات النفاثة وحمايتها من درجات الحرارة العالية
            والظروف التشغيلية القاسية.
          </p>

          <h2 className="text-2xl font-bold">
            وظائف زيوت الطيران
          </h2>

          <ul className="list-disc mr-6 space-y-2">
            <li>تقليل الاحتكاك بين الأجزاء المتحركة.</li>
            <li>تبريد مكونات المحرك.</li>
            <li>الحماية من التآكل والأكسدة.</li>
            <li>الحفاظ على الأداء تحت درجات حرارة عالية.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            أنواع زيوت الطائرات
          </h2>

          <ul className="list-disc mr-6 space-y-2">
            <li>الزيوت المعدنية.</li>
            <li>الزيوت الصناعية Synthetic Oils.</li>
            <li>زيوت المحركات النفاثة الحديثة.</li>
          </ul>

          <h2 className="text-2xl font-bold">
            المعايير العالمية
          </h2>

          <p>
            MIL Specifications - SAE Standards - ASTM Aviation Standards
          </p>

        </div>
      </div>
    </div>
  );
}
PAGE

echo "تم إنشاء صفحة الطائرات"

# إضافة الاستيراد إذا لم يكن موجوداً
grep -q "AircraftResearch" src/App.tsx || \
sed -i "/import Contact/a import AircraftResearch from '@/pages/AircraftResearch';" src/App.tsx

# إضافة المسار إذا لم يكن موجوداً
grep -q "/research/aircraft" src/App.tsx || \
sed -i "/<Route path=\"\/articles\"/i\      <Route path=\"/research/aircraft\" component={AircraftResearch} />" src/App.tsx


echo "تم ربط المسارات"

npm run build

echo "اكتملت مكتبة الأبحاث بنجاح"
