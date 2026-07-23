import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AviationLibrary() {
  const sections = [
    {
      title: "محركات الطائرات",
      items: [
        "Turbojet",
        "Turbofan",
        "Turboprop",
        "Turboshaft",
        "Afterburner",
        "Compressor Stall",
        "FADEC",
        "Hot Section Inspection",
        "Combustion Chamber",
        "Bypass Ratio"
      ]
    },
    {
      title: "أنظمة الطائرات",
      items: [
        "Hydraulic System",
        "Fuel System",
        "Electrical Power",
        "Bleed Air",
        "Environmental Control",
        "Landing Gear",
        "Flight Controls",
        "Avionics",
        "Navigation",
        "Autopilot"
      ]
    },
    {
      title: "زيوت ووقود الطيران",
      items: [
        "MIL-PRF-23699",
        "MIL-PRF-7808",
        "MIL-PRF-6081",
        "MIL-PRF-83282",
        "MIL-PRF-5606",
        "JP-4",
        "JP-5",
        "JP-8",
        "Jet A",
        "Jet A-1"
      ]
    },
    {
      title: "المعايير العسكرية",
      items: [
        "MIL Specifications",
        "DEF STAN",
        "SAE AS5780",
        "ASTM",
        "IEEE",
        "NATO Codes",
        "FAA",
        "ICAO",
        "EASA",
        "DoD"
      ]
    },
    {
      title: "الفحوصات المخبرية",
      items: [
        "Viscosity",
        "Flash Point",
        "Pour Point",
        "Acid Number",
        "Water Content",
        "ICP Analysis",
        "FTIR",
        "Particle Count",
        "Dielectric Strength",
        "Oxidation Stability"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">
        الموسوعة الهندسية للطيران والطاقة
      </h1>

      {sections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="rounded border p-3 hover:bg-muted transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
