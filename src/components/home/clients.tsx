"use client";
import { Star, Quote, MessageSquareQuote } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      position: "مدير تنفيذي",
      company: "شركة التقنية الحديثة",
      review: "تعاملنا مع نمو سوفت كان استثنائيًا. فريق محترف ومتعاون قدم لنا حلولًا برمجية متقدمة ساهمت في تطوير أعمالنا بشكل كبير.",
      rating: 5,
    },
    {
      name: "فاطمة علي",
      position: "مديرة مشاريع",
      company: "مجموعة الابتكار",
      review: "الاحترافية والجودة العالية هي ما يميز نمو سوفت. تم تسليم المشروع في الوقت المحدد وبجودة فاقت توقعاتنا.",
      rating: 5,
    },
    {
      name: "خالد السعيد",
      position: "صاحب متجر إلكتروني",
      company: "متجر الإلكترونيات",
      review: "بفضل الحلول التي قدمتها نمو سوفت، تمكنا من زيادة مبيعاتنا بنسبة 200٪. نظام متكامل وسهل الاستخدام.",
      rating: 5,
    },
    {
      name: "سارة أحمد",
      position: "مديرة تسويق",
      company: "شركة الخدمات الرقمية",
      review: "تجربة رائعة مع فريق نمو سوفت. التواصل كان ممتازًا والنتائج فاقت التوقعات. أنصح بهم بشدة.",
      rating: 5,
    },
    {
      name: "محمود حسن",
      position: "مؤسس شركة ناشئة",
      company: "شركة الابتكار التقني",
      review: "ساعدونا في تحويل فكرتنا إلى واقع ملموس. الدعم الفني المستمر والاهتمام بالتفاصيل كان مميزًا جدًا.",
      rating: 5,
    },
    {
      name: "ليلى عبدالله",
      position: "مديرة عمليات",
      company: "مؤسسة التطوير الرقمي",
      review: "أفضل شريك تقني يمكن أن تتعامل معه. الخبرة والكفاءة واضحة في كل مرحلة من مراحل المشروع.",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black text-sm mb-6">
            <MessageSquareQuote className="w-4 h-4" />
            <span>قصص نجاح عملائنا</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 leading-tight">
            ماذا يقولون عن <br /> <span className="text-primary italic">تجربتهم معنا</span>
          </h2>
          <p className="text-xl font-bold text-gray-500 max-w-2xl mx-auto">
            نفتخر بثقة كبرى الشركات والمؤسسات التي اخترنا لنكون شريكهم التقني المفضل.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white rounded-[40px] p-10 pt-16 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-4"
            >
              {/* Quote Icon Badge */}
              <div className="absolute -top-8 right-10 w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 font-bold text-lg leading-relaxed mb-10 italic">
                &quot;{testimonial.review}&quot;
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-5 border-t border-gray-50 pt-8 mt-auto">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white border-2 border-primary/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:border-primary transition-colors duration-300">
                    <span className="text-primary font-black text-2xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="text-secondary font-black text-xl">
                    {testimonial.name}
                  </div>
                  <div className="text-sm font-bold text-gray-400">
                    {testimonial.position} <span className="text-primary mx-1">@</span> {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-[100px] -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

