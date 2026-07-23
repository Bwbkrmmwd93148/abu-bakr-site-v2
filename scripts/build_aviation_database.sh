#!/data/data/com.termux/files/usr/bin/bash

BASE="public/research/aviation"

mkdir -p "$BASE"/{01-basics,02-aerodynamics,03-propulsion,04-engines,05-systems,06-structures,07-maintenance,08-military,09-civil,10-space,11-equations,12-images}

# =========================
# أساسيات الطيران
# =========================

cat > "$BASE/01-basics/aircraft-overview.md" <<'MD'
# Aircraft Engineering Overview

## مقدمة
الطائرة منظومة هندسية متكاملة تجمع بين:
- الهندسة الميكانيكية
- الديناميكا الهوائية
- هندسة المواد
- الإلكترونيات
- التحكم الآلي

## التصنيف

### حسب الاستخدام
- Civil Aircraft
- Military Aircraft
- Cargo Aircraft
- UAV

### حسب الدفع
- Propeller Aircraft
- Jet Aircraft
- Electric Aircraft

## المكونات الرئيسية

- Fuselage جسم الطائرة
- Wing الجناح
- Empennage الذيل
- Landing Gear معدات الهبوط
- Powerplant منظومة الدفع
- Avionics إلكترونيات الطيران

MD


# =========================
# المعادلات الهندسية
# =========================

cat > "$BASE/11-equations/aerodynamics-equations.md" <<'MD'
# معادلات الديناميكا الهوائية

## معادلة الرفع

L = 1/2 ρ V² S CL


حيث:

L قوة الرفع

ρ كثافة الهواء

V سرعة الطائرة

S مساحة الجناح

CL معامل الرفع


## معادلة المقاومة

D = 1/2 ρ V² S CD


## الدفع النفاث

F = ṁ(Ve - V0)


## نسبة الدفع للوزن

T/W = Thrust / Weight


## رقم ماخ

M = V/a


حيث:

a سرعة الصوت

MD


# =========================
# المحركات
# =========================

cat > "$BASE/03-propulsion/jet-propulsion.md" <<'MD'
# Jet Propulsion Engineering

## مبدأ الدفع

يعتمد المحرك النفاث على تسريع كتلة من الهواء والغازات للخلف لإنتاج قوة أمامية.

## الأنواع

- Turbojet
- Turbofan
- Turboprop
- Turboshaft
- Ramjet
- Scramjet

## دورة برايتون

المراحل:

1- Compression

2- Combustion

3- Expansion

4- Exhaust


## المكونات

Fan

Compressor

Combustion Chamber

Turbine

Nozzle

MD


# =========================
# أنظمة الطائرات
# =========================

cat > "$BASE/05-systems/aircraft-systems.md" <<'MD'
# Aircraft Systems

## Electrical System

يشمل:

- Generators
- Batteries
- Distribution


## Hydraulic System

يستخدم للتحكم في:

- Flight Controls
- Landing Gear
- Brakes


## Avionics

تشمل:

- Navigation
- Communication
- Radar
- Flight Management System

MD


# =========================
# الصور
# =========================

cat > "$BASE/12-images/README.md" <<'MD'
# Aviation Images

ضع هنا:

- Aircraft diagrams
- Engine cutaway images
- Airfoil drawings
- System schematics
- Maintenance images

MD


echo "تم إنشاء قاعدة بيانات الطيران الأساسية"
