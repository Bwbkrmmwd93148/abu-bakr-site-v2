import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Award, Shield, FileText, CheckCircle2, Factory, Plane, Zap, ExternalLink, BookOpen, AlertTriangle, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from "wouter";
import { Badge } from '@/components/ui/badge';

import heroImg from '@/assets/generated_images/hero.jpg';
import card1Img from '@/assets/generated_images/card1.jpg';
import card2Img from '@/assets/generated_images/card2.jpg';
import card3Img from '@/assets/generated_images/card3.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      {/* HERO SECTION */}
      <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105 transform origin-center motion-safe:animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          
          {/* Subtle noise/grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">مهندس استشاري</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-white leading-tight mb-4 tracking-tight">
              أبو بكر <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-amber-300">محمود مصطفى</span>
            </motion.h1>
            
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl">
              خبير زيوت المحولات الكهربائية والطائرات المدنية والحربية
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed border-r-2 border-primary/50 pr-4">
              الدقة والموثوقية في الأنظمة الحرجة. عقود من الخبرة الميدانية في تحليل، صيانة، وتأهيل الزيوت الصناعية الثقيلة لقطاعات الطاقة والطيران المتقدم.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Button size="lg" onClick={() => scrollTo('#specializations')} className="group text-lg">
                استكشف تخصصاتي
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('#contact')} className="text-lg bg-background/20 backdrop-blur-sm border-white/10 hover:bg-white/10">
                تواصل معي
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer"
          onClick={() => scrollTo('#about')}
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase font-medium">تمرير للأسفل</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown className="text-primary w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-primary font-medium tracking-wider mb-2 flex items-center gap-2">
                <Award className="w-5 h-5" />
                نبذة عني
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                سلطة فنية رائدة في هندسة الزيوت المعقدة
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  بفضل سنوات طويلة من الخبرة الميدانية والعمل المعملي الدقيق، أقدم حلولاً استشارية وهندسية لا تساوم على معايير الجودة والأمان في قطاعات الطاقة والطيران. 
                </p>
                <p>
                  أختص في التقييم الدقيق لزيوت المحولات الكهربائية لضمان العزل الكهربائي الأمثل، بالإضافة إلى استشارات أنظمة الوقود والزيوت الهيدروليكية للطائرات المدنية والمقاتلات الحربية المتقدمة وفقاً لأدق المعايير الدولية (ASTM, ISO, MIL-SPEC).
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="glass-panel p-5 rounded-xl border-t border-primary/30">
                  <span className="text-4xl font-black text-white block mb-2 text-glow">+20</span>
                  <span className="text-sm text-muted-foreground">عاماً من الخبرة الميدانية</span>
                </div>
                <div className="glass-panel p-5 rounded-xl border-t border-primary/30">
                  <span className="text-4xl font-black text-white block mb-2 text-glow">100%</span>
                  <span className="text-sm text-muted-foreground">امتثال للمعايير الدولية</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2">
                <div className="w-full h-full bg-secondary/50 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
                  {/* We use a specialized abstract background since we didn't generate a portrait */}
                  <img src={heroImg} className="w-full h-full object-cover opacity-60 filter grayscale contrast-125" alt="Abstract Engineering" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/90 to-transparent z-20">
                    <p className="text-xl font-bold text-white mb-2">"الأنظمة الحرجة لا تقبل هامشاً للخطأ."</p>
                    <p className="text-primary font-medium">— أبو بكر م. مصطفى</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SPECIALIZATIONS SECTION */}
      <section id="specializations" className="py-24 bg-secondary/30 relative border-y border-white/5">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h3 className="text-primary font-medium tracking-wider mb-2">مجالات التميز</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">التخصصات الهندسية</h2>
            <p className="text-lg text-muted-foreground">
              تقديم خبرات متقدمة في ثلاث قطاعات حيوية تعتمد بشكل كلي على موثوقية السوائل والزيوت الصناعية.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Spec 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative h-full bg-background border-border/50 overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={card1Img} alt="Transformer Oils" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">زيوت المحولات الكهربائية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    فحص، صيانة، وفلترة زيوت المحولات الكهربائية. تحليل قوة العزل (Dielectric Strength)، قياس نسبة الرطوبة، واختبارات PCB لضمان استقرار الشبكات.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> اختبارات العزل الدقيقة</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> معالجة وتكرير الزيوت</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Spec 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative h-full bg-background border-border/50 overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={card2Img} alt="Civil Aviation" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">الطائرات المدنية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    استشارات متخصصة في زيوت تشحيم وسوائل هيدروليكية للطيران المدني، لضمان الامتثال الصارم لمعايير الطيران العالمية والمحافظة على أداء المحركات.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> استشارات السوائل الهيدروليكية</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> مطابقة معايير ISO و ASTM</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Spec 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Card className="relative h-full bg-background border-border/50 overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={card3Img} alt="Military Aviation" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">الطائرات الحربية والعسكرية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    توفير خبرات استراتيجية للزيوت المتخصصة للمقاتلات الحربية، التي تتطلب قدرة تحمل استثنائية لدرجات الحرارة والضغط العالي في المهام الحرجة.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> زيوت المحركات النفاثة</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> مواصفات MIL-SPEC العسكرية</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST SECTION */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-32">
                <h3 className="text-primary font-medium tracking-wider mb-2">حلول متكاملة</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">الخدمات المهنية</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  مجموعة شاملة من الخدمات الهندسية والفنية مصممة لتلبية المتطلبات الدقيقة للشركات والهيئات في قطاعات الطاقة والدفاع الجوي.
                </p>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  طلب استشارة فنية
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-4"
            >
              {[
                { title: 'فحص وتحليل زيوت المحولات', icon: Zap, desc: 'تحليلات معملية دقيقة لاكتشاف التدهور الكيميائي والفيزيائي قبل حدوث أعطال.' },
                { title: 'استشارات زيوت الطيران المدني', icon: Plane, desc: 'توجيهات هندسية لاختيار السوائل المثلى لأنظمة الطائرات التجارية لضمان الكفاءة والأمان.' },
                { title: 'تأهيل زيوت الطائرات العسكرية', icon: Shield, desc: 'برامج تقييم خاصة للزيوت التكتيكية لتتحمل الظروف القاسية والمهام القتالية.' },
                { title: 'إعداد التقارير الفنية', icon: FileText, desc: 'توثيق هندسي شامل يتضمن النتائج، التوصيات، ومتطلبات الامتثال التنظيمي.' },
                { title: 'التدريب والتأهيل الفني', icon: Factory, desc: 'رفع كفاءة الكوادر الفنية عبر ورش عمل متخصصة في مناولة واختبار الزيوت الحرجة.' }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="glass-panel p-6 rounded-xl group hover:border-primary/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* US MILITARY INTELLIGENCE SECTION */}
      <section id="intel" className="py-24 relative overflow-hidden bg-secondary/10 border-y border-white/5">
        {/* Decorative glow */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-amber-400/70" />
              <span className="text-amber-400 font-medium tracking-widest uppercase text-xs">مصادر أمريكية رسمية</span>
              <div className="h-[1px] w-8 bg-amber-400/70" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              المواصفات العسكرية والمعلوماتية الأمريكية
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              مرجعية شاملة مستقاة من مصادر وزارة الدفاع الأمريكية (DLA/DoD)، وهيئة الطيران الفيدرالية (FAA)، ومعايير IEEE وNATO — للزيوت المستخدمة في المحركات النفاثة، الطائرات المدنية والحربية، والمحولات الكهربائية.
            </motion.p>
          </motion.div>

          {/* ── BLOCK 1: Turbine Engine Oils ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Plane className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">زيوت محركات الطائرات التوربينية — المواصفات الأمريكية والعسكرية</h3>
            </motion.div>

            {/* Specs cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
              {[
                {
                  code: 'MIL-PRF-23699G',
                  title: 'زيت توربين الطائرة — اصطناعي',
                  status: 'ساري',
                  nato: ['O-152', 'O-154', 'O-156', 'O-167'],
                  desc: 'يغطي أربعة أصناف من زيوت تشحيم محركات الغاز التوربيني، لزوجة اسمية 5 سنتيستوك عند 100°م، مصنوعة أساساً من استرات بولي أول نيوبنتيل. الأساس لمعظم مقاتلات الجيل الرابع والخامس.',
                  brands: ['AeroShell 500/560', 'Mobil Jet Oil II/254', 'Eastman Turbo Oil 2380'],
                  source: 'DLA / DoD — مارس 2014',
                  color: 'primary',
                },
                {
                  code: 'MIL-PRF-7808L',
                  title: 'زيت توربين — قاعدة اصطناعية (درجة 3)',
                  status: 'ساري',
                  nato: ['O-148'],
                  desc: 'يُستخدم في محركات الطائرات التي تتطلب أداءً في درجات حرارة منخفضة جداً. معتمد للطائرات العسكرية التكتيكية التي تعمل في البيئات القطبية والعالية الارتفاع.',
                  brands: ['AeroShell Turbine Oil 308', 'Royco 808', 'Mobil Avrex S 256'],
                  source: 'DLA — مايو 1997',
                  color: 'amber',
                },
                {
                  code: 'MIL-PRF-6081E',
                  title: 'زيت محرك نفاث — درجة 1010',
                  status: 'ساري',
                  nato: ['O-133'],
                  desc: 'تغطية شاملة لمتطلبات التشحيم في محركات نفاثة قديمة وحديثة. يستخدم في بعض منصات التدريب والطائرات غير المأهولة. معدل أداء OM-10.',
                  brands: ['AeroShell Turbine Oil 2', 'Royco 481', 'Turbonycoil 3516'],
                  source: 'DLA / everyspec.com — ديسمبر 2014',
                  color: 'primary',
                },
                {
                  code: 'DOD-PRF-85734',
                  title: 'زيت توربين عالي الأداء',
                  status: 'ساري',
                  nato: ['O-160'],
                  desc: 'مصمم للتطبيقات الحرجة التي تتطلب ثباتاً حرارياً استثنائياً. يُستخدم في ناقلات الطاقة الجوية والطائرات الاستراتيجية وبعض منصات الدفاع الصاروخي.',
                  brands: ['AeroShell Turbine Oil 555', 'Royco 555', 'Turbonycoil 599'],
                  source: 'DEF STAN 91-100 / DoD',
                  color: 'amber',
                },
                {
                  code: 'SAE AS5780',
                  title: 'معيار SAE للزيوت الطيرانية',
                  status: 'مرجعي',
                  nato: ['—'],
                  desc: 'المعيار الدولي الذي يوحّد درجات MIL-PRF-23699: Grade SPC (معادل O-156) وGrade HPC (معادل O-154). يُستخدم في طيران الطيران المدني والعقود التجارية الدولية.',
                  brands: ['يطابق MIL-PRF-23699'],
                  source: 'SAE International',
                  color: 'primary',
                },
                {
                  code: 'FAA AC 20-24D',
                  title: 'موافقة FAA على الوقود والزيوت',
                  status: 'إلزامي — مدني',
                  nato: ['—'],
                  desc: 'التعميم الاستشاري الصادر في فبراير 2018 يحدد قائمة الوقود والمضافات والزيوت المعتمدة للطائرات المدنية. يُلزم المشغلين بالتحقق من موافقة الشركة المصنعة للمحرك.',
                  brands: ['جميع الماركات المعتمدة FAA'],
                  source: 'هيئة الطيران الفيدرالية الأمريكية (FAA) — 2018',
                  color: 'amber',
                },
              ].map((spec, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <div className="h-full rounded-2xl border border-white/10 bg-background/50 backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors duration-300 group">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <code className={`text-xs font-mono font-bold tracking-widest px-2 py-1 rounded ${spec.color === 'amber' ? 'bg-amber-500/15 text-amber-400' : 'bg-primary/15 text-primary'}`}>
                          {spec.code}
                        </code>
                        <h4 className="text-white font-bold mt-2 text-base leading-snug">{spec.title}</h4>
                      </div>
                      <Badge variant="outline" className={`shrink-0 text-xs ${spec.color === 'amber' ? 'border-amber-500/40 text-amber-400' : 'border-primary/40 text-primary'}`}>
                        {spec.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{spec.desc}</p>
                    {spec.nato[0] !== '—' && (
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs text-muted-foreground ml-1">NATO:</span>
                        {spec.nato.map(n => (
                          <span key={n} className="text-xs bg-white/5 border border-white/10 rounded px-2 py-0.5 font-mono text-gray-300">{n}</span>
                        ))}
                      </div>
                    )}
                    <div className="border-t border-white/5 pt-3 space-y-1">
                      <p className="text-xs text-muted-foreground">ماركات معتمدة: <span className="text-gray-300">{spec.brands.join(' — ')}</span></p>
                      <p className="text-xs text-muted-foreground/60 flex items-center gap-1"><BookOpen className="w-3 h-3" />{spec.source}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cross-reference table */}
            <motion.div variants={fadeInUp} className="rounded-2xl border border-white/10 bg-background/40 backdrop-blur-sm overflow-hidden">
              <div className="p-5 border-b border-white/5 flex items-center gap-3">
                <FlaskConical className="w-5 h-5 text-primary" />
                <h4 className="text-white font-bold">جدول المقارنة المرجعية — زيوت التوربينات (DLA / NATO / DEF STAN)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" dir="ltr">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.03]">
                      {['US MIL-SPEC', 'SAE Grade', 'UK DEF STAN', 'NATO Code', 'AeroShell', 'Mobil Jet', 'Royco'].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-muted-foreground font-medium whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['MIL-PRF-23699 STD', 'AS5780 SPC', 'DEF STAN 91-101', 'O-156', 'Turbine 500', 'Jet Oil II', 'Royco 500'],
                      ['MIL-PRF-23699 HTS', 'AS5780 HPC', 'DEF STAN 91-101', 'O-154', 'Turbine 560', 'Jet Oil 254', 'Royco 560'],
                      ['MIL-PRF-7808 Gr.3', '—', '—', 'O-148', 'Turbine 308', 'Avrex S 256', 'Royco 808'],
                      ['MIL-PRF-6081 Gr.1010', '—', '—', 'O-133', 'Turbine 2', '—', 'Royco 481'],
                      ['DOD-PRF-85734', '—', 'DEF STAN 91-100', 'O-160', 'Turbine 555', '—', 'Royco 555'],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        {row.map((cell, j) => (
                          <td key={j} className={`px-4 py-3 ${j === 0 ? 'font-mono text-primary text-xs font-bold' : 'text-gray-300'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-3 text-xs text-muted-foreground/50 flex items-center gap-1 border-t border-white/5">
                <ExternalLink className="w-3 h-3" />
                المصدر: 145.aero Cross-Reference Chart — Defense Logistics Agency (DLA) — everyspec.com
              </div>
            </motion.div>
          </motion.div>

          {/* ── BLOCK 2: Hydraulic Fluids ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">السوائل الهيدروليكية العسكرية — الطائرات والصواريخ</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  code: 'MIL-PRF-5606J',
                  title: 'سائل هيدروليكي — قاعدة نفطية',
                  badge: 'موقوف / مرجعي',
                  badgeColor: 'red',
                  points: [
                    'يُستخدم في أنظمة الهيدروليك بالطائرات والصواريخ والذخائر',
                    'يعمل في نطاق -54°م إلى +135°م',
                    'خُلِف من قِبَل MIL-PRF-87257 و MIL-PRF-83282',
                    'لا يزال مرجعاً في أنظمة الطائرات القديمة (Legacy Aircraft)',
                  ],
                  source: 'DoD — DLA Energy — everyspec.com',
                },
                {
                  code: 'MIL-PRF-46170E',
                  title: 'سائل هيدروليكي مقاوم للحريق',
                  badge: 'ساري — NATO H-544',
                  badgeColor: 'green',
                  points: [
                    'قاعدة هيدروكربونية اصطناعية مقاومة للصدأ والحريق',
                    'رمز NATO: H-544',
                    'يُستخدم في منصات القتال والأنظمة الهيدروليكية الأرضية العسكرية',
                    'يوفر مقاومة عالية للأكسدة والتدهور الحراري',
                  ],
                  source: 'MIL-PRF-46170 Rev. E — 2013',
                },
                {
                  code: 'MIL-PRF-83282',
                  title: 'سائل هيدروليكي — مقاوم للاشتعال',
                  badge: 'ساري — تطبيق F-16 / F-18',
                  badgeColor: 'green',
                  points: [
                    'الخلف المعتمد لـ MIL-PRF-5606 في معظم الطائرات الحربية الحديثة',
                    'نقطة اشتعال أعلى بكثير: +199°م مقارنة بـ +82°م للمواصفة القديمة',
                    'معتمد لـ F-16 Fighting Falcon و F/A-18 Hornet وغيرها',
                    'يتوافق مع معظم أختام وخراطيم MIL-PRF-5606',
                  ],
                  source: 'US Air Force / Navy Approved Products',
                },
              ].map((fluid, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="rounded-2xl border border-white/10 bg-background/50 p-6 flex flex-col gap-3 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="flex items-start justify-between gap-2">
                    <code className="text-xs font-mono font-bold tracking-widest bg-amber-500/10 text-amber-400 px-2 py-1 rounded">{fluid.code}</code>
                    <span className={`text-xs px-2 py-1 rounded border font-medium ${fluid.badgeColor === 'green' ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' : 'border-red-500/40 text-red-400 bg-red-500/10'}`}>
                      {fluid.badge}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-base">{fluid.title}</h4>
                  <ul className="space-y-2 flex-1">
                    {fluid.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground/50 flex items-center gap-1 border-t border-white/5 pt-3"><BookOpen className="w-3 h-3" />{fluid.source}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── BLOCK 3: Transformer Oil Standards ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white">معايير زيوت المحولات الكهربائية — IEEE / ASTM / MIL-STD</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Standards list */}
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  {
                    std: 'IEEE C57.106',
                    title: 'دليل قبول وخدمة زيوت المحولات',
                    desc: 'المعيار الأمريكي الرئيسي لتقييم زيوت العزل في المحولات — يحدد قيم القبول وحدود الاستخدام لقوة العزل الكهربائي، نسبة الرطوبة، الحموضة، ونقطة الوميض. يُستخدم على نطاق واسع من قِبَل شركات الطاقة الأمريكية والحكومة الفيدرالية.',
                    tags: ['العزل الكهربائي', 'معيار IEEE'],
                  },
                  {
                    std: 'ASTM D877 / D1816',
                    title: 'اختبار قوة العزل الكهربائي للزيوت',
                    desc: 'D877: الطريقة الأساسية للقرص المسطح — يقيس الجهد الكهربائي الذي يتحمله الزيت قبل الانهيار (Dielectric Breakdown Voltage). D1816: طريقة الأقطاب الكروية — أكثر دقة للكشف المبكر عن الشوائب والرطوبة.',
                    tags: ['ASTM', 'فحص العزل'],
                  },
                  {
                    std: 'ASTM D974 / D664',
                    title: 'رقم الحموضة الكلي (TAN)',
                    desc: 'يقيس تدهور الزيت بمرور الوقت عبر تراكم الأحماض الناتجة عن الأكسدة. القيم الحرجة: D974 أقل من 0.03 mg KOH/g عند الاستقبال، وأقل من 0.50 عند الاستخدام وفق IEEE C57.106.',
                    tags: ['ASTM', 'تحليل كيميائي'],
                  },
                  {
                    std: 'MIL-STD-3004D',
                    title: 'ضمان جودة الوقود والزيوت العسكرية',
                    desc: 'معيار وزارة الدفاع الأمريكية لضمان الجودة والمراقبة لمنتجات الوقود والزيوت ذات الصلة، يشمل الوقود الجوي والزيوت الهيدروليكية وزيوت التشحيم. المرجع الإلزامي لجميع العقود العسكرية الأمريكية.',
                    tags: ['DoD', 'ضمان الجودة', 'إلزامي'],
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-xl border border-white/8 bg-background/30 hover:border-primary/30 transition-colors duration-300 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <code className="text-xs font-mono text-primary font-bold">{item.std}</code>
                        {item.tags.map(t => <span key={t} className="text-[10px] bg-primary/10 text-primary/70 px-1.5 py-0.5 rounded font-medium">{t}</span>)}
                      </div>
                      <h5 className="text-white font-semibold text-sm mb-1">{item.title}</h5>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Key test parameters panel */}
              <motion.div variants={fadeInUp} className="rounded-2xl border border-white/10 bg-background/40 overflow-hidden">
                <div className="p-5 border-b border-white/5 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <h4 className="text-white font-bold text-sm">حدود القبول الحرجة — IEEE C57.106 / ASTM</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" dir="ltr">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.03]">
                        {['Test', 'ASTM Method', 'New Oil Limit', 'In-Service Limit'].map(h => (
                          <th key={h} className="text-left px-4 py-3 text-muted-foreground text-xs font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Dielectric Breakdown (Disc)', 'D877', '≥ 30 kV', '≥ 25 kV'],
                        ['Dielectric Breakdown (VDE)', 'D1816', '≥ 40 kV', '≥ 28 kV'],
                        ['Moisture Content', 'D1533', '≤ 35 ppm', '≤ 35 ppm'],
                        ['Neutralization No. (TAN)', 'D974', '≤ 0.03 mg KOH/g', '≤ 0.50 mg KOH/g'],
                        ['Interfacial Tension', 'D971', '≥ 40 mN/m', '≥ 25 mN/m'],
                        ['Flash Point', 'D92', '≥ 145°C', '≥ 140°C'],
                        ['Visual Appearance', 'D1524', 'Clear & Bright', 'Acceptable'],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-2.5 text-gray-200 text-xs font-medium">{row[0]}</td>
                          <td className="px-4 py-2.5 text-primary text-xs font-mono">{row[1]}</td>
                          <td className="px-4 py-2.5 text-emerald-400 text-xs">{row[2]}</td>
                          <td className="px-4 py-2.5 text-amber-400 text-xs">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-primary/5 border-t border-white/5">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="text-primary font-medium">المصدر الرسمي:</span> IEEE Std C57.106-2002 — Guide for Acceptance and Maintenance of Insulating Oil in Equipment. وزارة الطاقة الأمريكية، وشركات الطاقة الكبرى كـ EPRI تعتمد هذه الحدود معياراً إلزامياً.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تواصل للحصول على استشارة هندسية</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                للاستفسارات التقنية، طلبات الفحص، أو الاستشارات المتخصصة في مجالات الطاقة والطيران.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">الاسم الكامل</label>
                  <Input id="name" placeholder="أدخل اسمك الكريم" className="bg-background border-white/10 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">البريد الإلكتروني المهني</label>
                  <Input id="email" type="email" placeholder="name@company.com" className="bg-background border-white/10 focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">الموضوع / مجال الاهتمام</label>
                <Input id="subject" placeholder="مثال: استشارة بخصوص زيوت المحولات" className="bg-background border-white/10 focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">التفاصيل الفنية</label>
                <Textarea id="message" placeholder="يرجى وصف متطلباتك بدقة..." className="h-32 bg-background border-white/10 focus:border-primary" />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                إرسال الطلب
              </Button>
            </form>
          </motion.div>
        </div>
      


      </section>
      {/* FOOTER */}
      <footer className="py-8 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4">
            <Zap className="w-5 h-5" />
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} م. أبو بكر محمود مصطفى. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
