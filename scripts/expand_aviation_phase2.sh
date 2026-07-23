#!/data/data/com.termux/files/usr/bin/bash

BASE="public/research/aviation"

mkdir -p \
"$BASE/02-aerodynamics" \
"$BASE/04-engines" \
"$BASE/06-structures" \
"$BASE/07-maintenance" \
"$BASE/08-military" \
"$BASE/09-civil" \
"$BASE/10-space" \
"$BASE/12-images/aircraft" \
"$BASE/12-images/engines" \
"$BASE/12-images/systems" \
"$BASE/12-images/maintenance"


cat > "$BASE/02-aerodynamics/complete-aerodynamics.md" <<'MD'
# الديناميكا الهوائية المتقدمة Advanced Aerodynamics

## مقدمة
الديناميكا الهوائية هي العلم الذي يدرس حركة الهواء حول الأجسام المتحركة.

## القوى الأربع للطيران

### Lift الرفع
القوة العمودية التي تعاكس الوزن.

المعادلة:

L = 1/2 ρV²SCL

### Drag المقاومة

D = 1/2 ρV²SCD


## الجناح Airfoil

مصطلحات:

- Leading Edge
- Trailing Edge
- Chord Line
- Camber
- Thickness Ratio


## زاوية الهجوم Angle of Attack

تحدد العلاقة بين الجناح واتجاه الهواء.

زيادة الزاوية تؤدي إلى:
- زيادة الرفع
- زيادة المقاومة
- احتمال حدوث Stall


## Boundary Layer

طبقة الهواء القريبة من سطح الجناح.

أنواعها:

- Laminar Flow
- Turbulent Flow


## رقم رينولدز Reynolds Number

Re = ρVL/μ


## رقم ماخ Mach Number

M = V/a


## الطيران الأسرع من الصوت

يشمل:

- Shock Waves
- Supersonic Flow
- Wave Drag


MD


cat > "$BASE/04-engines/advanced-jet-engines.md" <<'MD'
# هندسة المحركات النفاثة المتقدمة

## مبدأ الدفع

يعتمد المحرك النفاث على قانون نيوتن الثالث.

لكل فعل رد فعل مساو له في المقدار ومعاكس في الاتجاه.


## الأنواع

Turbojet

Turbofan

Turboprop

Turboshaft

Ramjet

Scramjet


## المكونات الرئيسية

### Fan

يزيد كمية الهواء الداخلة.

### Compressor

يرفع ضغط الهواء.

### Combustion Chamber

يتم فيها احتراق الوقود.

### Turbine

تستخرج الطاقة لتشغيل الضاغط.

### Nozzle

تحول الطاقة الحرارية إلى سرعة.


## دورة برايتون

1- Compression

2- Heat Addition

3- Expansion

4- Exhaust


## أداء المحرك

Thrust

Specific Fuel Consumption

Efficiency

Pressure Ratio


## أنظمة التحكم

FADEC

Full Authority Digital Engine Control


MD


cat > "$BASE/06-structures/aircraft-structures.md" <<'MD'
# هياكل الطائرات Aircraft Structures

## المواد

- Aluminum Alloys
- Titanium
- Composite Materials
- Carbon Fiber


## أجزاء الهيكل

Fuselage

Wing Spar

Wing Rib

Frames


## التحليل الهندسي

- Stress Analysis
- Fatigue
- Crack Propagation
- Damage Tolerance


## المواد المركبة

تتميز بـ:

- وزن منخفض
- قوة عالية
- مقاومة للتآكل

MD


cat > "$BASE/07-maintenance/aircraft-maintenance-engineering.md" <<'MD'
# هندسة صيانة الطائرات

## أنواع الصيانة

Line Maintenance

Base Maintenance


## الفحوصات

A Check

B Check

C Check

D Check


## الاختبارات

NDT

Borescope Inspection

Vibration Analysis


## هندسة الاعتمادية

Reliability Engineering

Failure Analysis

Predictive Maintenance

MD


cat > "$BASE/08-military/military-aircraft-engineering.md" <<'MD'
# هندسة الطيران العسكري

## المقاتلات

Fighter Aircraft

Bomber Aircraft

Reconnaissance Aircraft


## التقنيات

Stealth Technology

AESA Radar

Electronic Warfare

Thrust Vectoring


## الطائرات بدون طيار

UAV

UCAV

Autonomous Systems

MD


cat > "$BASE/09-civil/civil-aviation-engineering.md" <<'MD'
# هندسة الطيران المدني

## الطائرات التجارية

Airliners

Cargo Aircraft


## التشغيل

Air Traffic Management

Airport Systems

Flight Safety


## السلامة

Risk Management

Accident Investigation

Safety Management System

MD


cat > "$BASE/10-space/space-engineering.md" <<'MD'
# هندسة الفضاء

## الصواريخ

Rocket Propulsion

Stages

Fuel Systems


## الأقمار الصناعية

Communication Satellites

Navigation Satellites

Earth Observation


## المدار

Orbital Mechanics

Velocity

Gravity

MD


echo "تم توسيع موسوعة الطيران - المرحلة الثانية"
