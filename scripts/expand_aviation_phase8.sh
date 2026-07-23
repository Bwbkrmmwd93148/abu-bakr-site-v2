#!/data/data/com.termux/files/usr/bin/bash

BASE="public/research/aviation"


cat >> "$BASE/02-aerodynamics/complete-aerodynamics.md" <<'MD'


# المخططات الهندسية

## القوى الأربع للطيران

![Four Forces](../13-diagrams/svg/four-forces.svg)

## شكل الجناح Airfoil

![Airfoil](../13-diagrams/wings/svg/airfoil.svg)

MD



cat >> "$BASE/02-aerodynamics/theory/airfoil-theory.md" <<'MD'


# الرسم الهندسي للجناح

![Airfoil Diagram](../../13-diagrams/wings/svg/airfoil.svg)

MD



cat >> "$BASE/04-engines/advanced-jet-engines.md" <<'MD'


# مخطط المحرك النفاث

![Turbofan Engine](../13-diagrams/engines/svg/turbofan.svg)

MD



cat >> "$BASE/04-engines/design/turbofan-engine.md" <<'MD'


# الرسم القطاعي للمحرك

![Turbofan Cutaway](../../13-diagrams/engines/svg/turbofan.svg)

MD



cat >> "$BASE/05-systems/aircraft-systems.md" <<'MD'


# أنظمة التحكم

![Flight Controls](../13-diagrams/flight-controls/svg/control-surfaces.svg)

MD



cat >> "$BASE/06-structures/aircraft-structures.md" <<'MD'


# هيكل الطائرة

![Aircraft Structure](../13-diagrams/structures/svg/aircraft-structure.svg)

MD



mkdir -p "$BASE/13-diagrams/index"


cat > "$BASE/13-diagrams/index/diagram-library.md" <<'MD'
# مكتبة الرسومات الهندسية للطيران

## Aerodynamics

- Four Forces
- Airfoil Profile


## Engines

- Turbofan Layout
- Compressor
- Turbine


## Flight Controls

- Aileron
- Flap
- Rudder


## Structures

- Fuselage
- Wing Structure

MD


echo "تم تنفيذ المرحلة الثامنة - ربط الرسومات بالمقالات"
