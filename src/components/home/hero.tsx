"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, Sparkles, Rocket, Laptop, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative px-5 flex items-center justify-center py-10 lg:py-20 overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[#ffffff]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-right space-y-10 order-2 lg:order-1" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>شريكك التقني في رحلة التحول الرقمي</span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
              <span className="block text-secondary">نصمم</span>
              <span className="block bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent inline-block leading-tight py-1">الحلول الذكية</span>
              <span className="block text-secondary text-4xl md:text-6xl mt-2">لتمكين أعمالك</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
              نحن في نمو سوفت نبتكر حلولاً برمجية متطورة تدمج بين الإبداع والتقنية لتحقيق أهدافك التجارية وضمان نمو مستدام في سوق متقلب.
            </p>

            <div className="flex flex-wrap gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)] text-xl px-10 py-8 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                ابدأ رحلتك الآن
                <ArrowLeft className="mr-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary/20 text-secondary hover:bg-secondary hover:text-white text-xl px-10 py-8 rounded-2xl transition-all duration-300"
              >
                استكشف أعمالنا
              </Button>
            </div>

            {/* Premium Stats Section */}
            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-gray-100">
              <div className="space-y-1">
                <div className="text-4xl font-black text-primary">+500</div>
                <div className="text-base text-gray-500 font-bold">مشروع منجز</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-secondary">+200</div>
                <div className="text-base text-gray-500 font-bold">عميل سعيد</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-blue-600">10+</div>
                <div className="text-base text-gray-500 font-bold">سنوات خبرة</div>
              </div>
            </div>
          </div>

          {/* Advanced Visual Element */}
          <div className="relative order-1 lg:order-2" data-aos="zoom-in">
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-secondary/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Main Card Element */}
              <div className="absolute inset-10 bg-gradient-to-br from-white to-gray-50 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white flex flex-col items-center justify-center p-12 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 space-y-8 text-center">
                  <div className="w-32 h-32 mx-auto relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="relative w-full h-full bg-gradient-to-br from-primary to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                      <Code2 className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-secondary mb-2">نمو سوفت</h3>
                    <p className="text-lg text-gray-500 font-bold">بوابتك إلى المستقبل الرقمي</p>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute top-12 left-12 animate-bounce delay-75">
                  <div className="p-4 bg-white shadow-xl rounded-2xl border border-gray-100">
                    <Laptop className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-12 right-12 animate-bounce delay-300">
                  <div className="p-4 bg-white shadow-xl rounded-2xl border border-gray-100">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                  </div>
                </div>
              </div>

              {/* Floating Performance Tag */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/90 backdrop-blur-md border border-white p-6 rounded-3xl shadow-2xl z-20 hover:scale-110 transition-transform duration-300 max-w-[200px]">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-2xl">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-secondary">99%</div>
                    <div className="text-xs text-gray-500 font-bold">أداء فائق الاستجابة</div>
                  </div>
                </div>
              </div>

              {/* Animated Code Snippet Card */}
              <div dir="ltr" className="absolute -bottom-4 left-0 bg-secondary text-white p-6 rounded-3xl shadow-2xl z-20 w-64 font-mono text-sm transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-pink-400">const</span> solution = () =&gt; &#123;</p>
                  <p className="pl-4">growth: <span className="text-green-400">true</span>,</p>
                  <p className="pl-4">innovation: <span className="text-green-400">"unlimited"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

