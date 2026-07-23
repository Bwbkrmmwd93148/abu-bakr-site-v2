#!/data/data/com.termux/files/usr/bin/bash

BASE="public/research/aircraft/articles"

mkdir -p "$BASE"

cat > "$BASE/aircraft-basics.md" <<'MD'
# أساسيات الطائرات Aircraft Basics

## مقدمة
تجمع الطائرات الحديثة بين علوم الديناميكا الهوائية والميكانيكا والإلكترونيات وأنظمة التحكم.

## المكونات الأساسية
- الهيكل Airframe
- المحركات Engines
- أنظمة التحكم Flight Control
- إلكترونيات الطيران Avionics
- أنظمة الوقود Fuel Systems

## أنواع الطائرات
- الطائرات المدنية
- الطائرات العسكرية
- الطائرات بدون طيار

## الخلاصة
الطائرة منظومة هندسية متكاملة تجمع عدة علوم لتحقيق الطيران الآمن.
MD

cat > "$BASE/aerodynamics.md" <<'MD'
# الديناميكا الهوائية Aerodynamics

## القوى الأربع للطيران
- Lift الرفع
- Weight الوزن
- Thrust الدفع
- Drag المقاومة

## الجناح Airfoil
تصميم الجناح يؤثر على الرفع والأداء.

## زاوية الهجوم
زيادة زاوية الهجوم تؤثر على الرفع وقد تسبب Stall.
MD

cat > "$BASE/jet-engines.md" <<'MD'
# المحركات النفاثة Jet Engines

## الأنواع
- Turbojet
- Turbofan
- Turboprop
- Turboshaft

## المكونات
- Fan
- Compressor
- Combustion Chamber
- Turbine
- Nozzle

## دورة برايتون
تعتمد على الانضغاط والاحتراق والتمدد والعادم.
MD

cat > "$BASE/civil-aviation.md" <<'MD'
# الطيران المدني Civil Aviation

يشمل نقل الركاب والشحن والخدمات الجوية.
MD

cat > "$BASE/military-aviation.md" <<'MD'
# الطيران الحربي Military Aviation

يشمل الطائرات المقاتلة والقاذفات والاستطلاع والطائرات بدون طيار.
MD

cat > "$BASE/aircraft-systems.md" <<'MD'
# أنظمة الطائرات Aircraft Systems

تشمل الكهرباء والهيدروليك والوقود والملاحة والتحكم.
MD

cat > "$BASE/aircraft-structures.md" <<'MD'
# هياكل الطائرات Aircraft Structures

تشمل المواد المركبة والسبائك وتصميم الأجنحة.
MD

cat > "$BASE/aviation-oils.md" <<'MD'
# زيوت الطيران Aviation Oils

تشمل زيوت المحركات النفاثة وخواصها واختباراتها.
MD

cat > "$BASE/aircraft-maintenance.md" <<'MD'
# صيانة الطائرات Aircraft Maintenance

تشمل الفحص الدوري والصيانة الوقائية وتشخيص الأعطال.
MD

echo "تم ملء ملفات الطيران"
