const files = [
"01-basics/aircraft-overview.md",
"02-aerodynamics/complete-aerodynamics.md",
"02-aerodynamics/advanced/advanced-aerodynamics.md",
"02-aerodynamics/theory/airfoil-theory.md",
"03-propulsion/jet-propulsion.md",
"04-engines/advanced-jet-engines.md",
"04-engines/design/turbofan-engine.md",
"04-engines/performance/engine-efficiency.md",
"05-systems/aircraft-systems.md",
"06-structures/aircraft-structures.md",
"07-maintenance/aircraft-maintenance-engineering.md",
"08-military/military-aircraft-engineering.md",
"09-civil/civil-aviation-engineering.md",
"10-space/space-engineering.md",
"11-equations/aerodynamics-equations.md",
"11-equations/flight-mechanics/performance-equations.md",
"11-equations/propulsion/propulsion-equations.md",
"16-engine-database/engine-comparison.md"
];


export default function AviationLibrary(){

return (

<div className="min-h-screen bg-background text-foreground pt-28">

<div className="container mx-auto px-6 max-w-6xl">

<h1 className="text-4xl font-bold text-primary mb-10">
موسوعة هندسة الطيران المتقدمة
</h1>


<div className="grid md:grid-cols-2 gap-6">

{files.map(file=>(

<a
key={file}
href={`/research/aviation-article/${file}`}
className="border border-border rounded-2xl p-6 hover:border-primary"
>

<h2 className="font-bold text-xl">
{file.replace(".md","")}
</h2>

</a>

))}

</div>

</div>

</div>

)

}
