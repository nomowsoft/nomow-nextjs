"use client";
import { FileText, Smartphone, Layout, Server, ShoppingCart, Workflow, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "تحليل وإعداد مستندات BRD",
      description: "نحول أفكاركم إلى مستندات تقنية دقيقة تضمن وضوح الرؤية وسلاسة التنفيذ للمشاريع المعقدة.",
      features: ["تحليل الفجوات", "هندسة المتطلبات", "دراسة الجدوى التقنية"],
      color: "blue-500"
    },
    {
      icon: Smartphone,
      title: "تطوير تطبيقات الجوال",
      description: "نصنع تطبيقات ذكية بنظامي iOS و Android توفر تجربة مستخدم استثنائية وأداءً فائق السرعة.",
      features: ["React Native / Flutter", "تطبيقات Native", "واجهات عصرية"],
      color: "primary"
    },
    {
      icon: Layout,
      title: "تصميم واجهات UI/UX",
      description: "نصمم تجارب رقمية تتمحور حول المستخدم، تجمع بين الجمالية والوظيفية لزيادة التفاعل والولاء.",
      features: ["نماذج تفاعلية", "تجربة مستخدم سلسة", "هوية بصرية رقمية"],
      color: "secondary"
    },
    {
      icon: Server,
      title: "أنظمة ERP المتكاملة",
      description: "حلول برمجية شاملة لإدارة موارد المؤسسات تضمن كفاءة العمليات وتكامل البيانات في مكان واحد.",
      features: ["إدارة المخازن", "المحاسبة والمالية", "الموارد البشرية"],
      color: "blue-700"
    },
    {
      icon: ShoppingCart,
      title: "المتاجر الإلكترونية",
      description: "منصات تجارة إلكترونية متطورة مجهزة بأحدث أدوات البيع والدفع لزيادة مبيعاتكم عالمياً.",
      features: ["بوابات دفع آمنة", "إدارة المنتجات", "تحليلات الأداء"],
      color: "purple-600"
    },
    {
      icon: Workflow,
      title: "أتمتة العمليات الرقمية",
      description: "نقلل الجهد البشري ونزيد الإنتاجية من خلال أتمتة المهام المتكررة وتطوير أنظمة ذكية.",
      features: ["سير عمل آلي", "تكامل API", "ذكاء الأعمال BI"],
      color: "emerald-600"
    },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-[#fafafa]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-right space-y-4 max-w-2xl" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm">
              <Zap className="w-4 h-4" />
              <span>خدماتنا المتميزة</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight">
              نقدم <span className="text-primary italic">حلولاً تقنية</span> <br /> تفوق التوقعات
            </h2>
            <p className="text-xl text-gray-500 font-bold">
              مجموعتنا الواسعة من الخدمات مصممة خصيصاً لتسريع نمو أعمالك وتحويل رؤيتك الرقمية إلى واقع ملموس.
            </p>
          </div>
          <div data-aos="fade-right">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 px-8 py-7 rounded-2xl text-lg font-bold">
              عرض جميع الخدمات
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-white border border-gray-100 rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-10 right-10 h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-full" />

                <div className="mb-8">
                  <div className={`w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center group-hover:bg-primary/10 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-500 font-bold mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-secondary font-black">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 font-black text-primary group/link">
                  <span>اكتشف المزيد</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:-translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

