#!/bin/bash

FILE="src/pages/Home.tsx"

python3 - <<'PY'
from pathlib import Path

p = Path("src/pages/Home.tsx")
s = p.read_text()

insert = r'''

            {/* Advanced Aviation Library */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >

              <Card className="relative h-full bg-background border-border/50 overflow-hidden hover:border-primary transition">

                <CardHeader>

                  <CardTitle className="text-2xl text-primary">
                    موسوعة هندسة الطيران المتقدمة
                  </CardTitle>

                </CardHeader>


                <CardContent>

                  <p className="leading-8 text-muted-foreground">
                    قاعدة بيانات هندسية متقدمة تشمل:
                    الديناميكا الهوائية، المحركات النفاثة،
                    أنظمة الطائرات، الهياكل، الصيانة،
                    معادلات الأداء والرسومات الهندسية.
                  </p>


                  <Link
                    href="/research/aviation-library"
                    className="inline-block mt-6 text-primary font-bold hover:underline"
                  >
                    دخول موسوعة الطيران →
                  </Link>


                </CardContent>

              </Card>

            </motion.div>

'''

marker = "</section>"

if "موسوعة هندسة الطيران المتقدمة" not in s:
    pos = s.rfind(marker)
    s = s[:pos] + insert + s[pos:]

p.write_text(s)
PY

echo "تم ربط موسوعة الطيران بالصفحة الرئيسية"

