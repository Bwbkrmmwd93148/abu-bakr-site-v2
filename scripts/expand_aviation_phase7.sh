#!/data/data/com.termux/files/usr/bin/bash

BASE="public/research/aviation/13-diagrams"

mkdir -p \
"$BASE/svg" \
"$BASE/engines/svg" \
"$BASE/wings/svg" \
"$BASE/flight-controls/svg" \
"$BASE/structures/svg"


cat > "$BASE/svg/four-forces.svg" <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
<text x="250" y="50" font-size="32">Aircraft Four Forces</text>

<line x1="400" y1="250" x2="650" y2="250" stroke="black" stroke-width="5"/>
<text x="660" y="260" font-size="25">Thrust</text>

<line x1="400" y1="250" x2="150" y2="250" stroke="black" stroke-width="5"/>
<text x="20" y="260" font-size="25">Drag</text>

<line x1="400" y1="250" x2="400" y2="80" stroke="black" stroke-width="5"/>
<text x="420" y="100" font-size="25">Lift</text>

<line x1="400" y1="250" x2="400" y2="420" stroke="black" stroke-width="5"/>
<text x="420" y="420" font-size="25">Weight</text>
</svg>
SVG



cat > "$BASE/engines/svg/turbofan.svg" <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="300">

<text x="300" y="40" font-size="30">
Turbofan Engine Layout
</text>

<circle cx="120" cy="150" r="70" fill="none" stroke="black" stroke-width="3"/>
<text x="70" y="155">Fan</text>

<rect x="220" y="100" width="120" height="100"
fill="none" stroke="black"/>
<text x="235" y="155">Compressor</text>

<rect x="390" y="100" width="120" height="100"
fill="none" stroke="black"/>
<text x="410" y="155">Burner</text>

<rect x="560" y="100" width="120" height="100"
fill="none" stroke="black"/>
<text x="590" y="155">Turbine</text>

<line x1="680" y1="150" x2="820" y2="150"
stroke="black" stroke-width="5"/>

<text x="720" y="130">Nozzle</text>

</svg>
SVG



cat > "$BASE/wings/svg/airfoil.svg" <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">

<text x="250" y="40" font-size="30">
Airfoil Profile
</text>

<path d="
M100 200
C250 80 550 80 700 200
C500 260 250 260 100 200"
fill="none"
stroke="black"
stroke-width="4"/>

<text x="120" y="180">
Leading Edge
</text>

<text x="580" y="220">
Trailing Edge
</text>

</svg>
SVG



cat > "$BASE/flight-controls/svg/control-surfaces.svg" <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="300">

<text x="220" y="40" font-size="30">
Aircraft Control Surfaces
</text>

<rect x="100" y="120" width="500" height="40"
fill="none" stroke="black"/>

<text x="150" y="110">
Wing
</text>

<text x="250" y="220">
Aileron
</text>

<text x="450" y="220">
Flap
</text>

</svg>
SVG



cat > "$BASE/structures/svg/aircraft-structure.svg" <<'SVG'
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="300">

<text x="250" y="40" font-size="30">
Aircraft Structure
</text>

<ellipse cx="400" cy="160"
rx="250" ry="60"
fill="none"
stroke="black"
stroke-width="4"/>

<line x1="200" y1="160"
x2="600" y2="160"
stroke="black"
stroke-width="3"/>

<text x="350" y="170">
Fuselage
</text>

</svg>
SVG



cat > "$BASE/README.md" <<'MD'
# Aviation Engineering Diagrams

## الرسومات المتوفرة

- Four Forces Diagram
- Turbofan Engine
- Airfoil Profile
- Control Surfaces
- Aircraft Structure

صيغة الرسومات:
SVG Engineering Drawings
MD


echo "تم تنفيذ المرحلة السابعة - الرسومات الهندسية"
