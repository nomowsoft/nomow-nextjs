"use client";
import { Target, Eye, Flag, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const About = () => {
    const items = [
        {
            id: 1,
            icon: Eye,
            title: "رؤيتنا",
            description: "أن نكون القوة الدافعة للتحول الرقمي في المنطقة، ملهمين الشركات للوصول إلى أقصى إمكانياتها عبر التكنولوجيا.",
            image: "/about_us/Icon1.svg",
            color: "from-blue-500 to-primary"
        },
        {
            id: 2,
            icon: Target,
            title: "رسالتنا",
            description: "تقديم حلول برمجية ذكية تجمع بين التصميم المبتكر والأداء القوي لتحقيق نتائج ملموسة لعملائنا.",
            image: "/about_us/Icon2.svg",
            color: "from-secondary to-blue-800"
        },
        {
            id: 3,
            icon: Flag,
            title: "قيمنا",
            description: "الابتكار، الشفافية، والالتزام المطلق بجودة التنفيذ هي المحاور التي لا نتنازل عنها في كل مشروع.",
            image: "/about_us/Icon3.svg",
            color: "from-primary to-secondary"
        },
    ];

    return (
        <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-white">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Upper Section: Narrative */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1" data-aos="fade-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-black text-sm mb-6">
                            <Rocket className="w-4 h-4" />
                            <span>قصتنا في سطور</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary leading-[1.2] mb-8">
                            نحن لا نطور برمجيات فحسب، <br />
                            <span className="text-primary italic">بل نصنع مستقبلاً رقمياً</span>
                        </h2>
                        <div className="space-y-6 text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                            <p>
                                في "نمو سوفت"، نؤمن بأن كل شركة تستحق أن تكون في القمة. منذ انطلاقتنا، كرسنا جهودنا لفهم احتياجات السوق وتقديم حلول تتجاوز التوقعات التقليدية.
                            </p>
                            <p>
                                نعتمد على منهجيات حديثة في التحليل والتطوير، مما يمنح عملاءنا ميزة تنافسية حقيقية في عالم رقمي سريع التغير.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                            {["فريق تقني خبير", "دعم فني على مدار الساعة", "أحدث تقنيات التطوير", "حلول مخصصة وشاملة"].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-secondary font-black">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2" data-aos="zoom-in">
                        <div className="relative z-10 rounded-[50px] overflow-hidden shadow-2xl border-8 border-white group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-700" />
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                                alt="Team Sync"
                                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        {/* Decorative floating box */}
                        <div className="absolute -bottom-10 -left-10 bg-secondary text-white p-10 rounded-[40px] shadow-2xl z-20 hidden md:block">
                            <div className="text-4xl font-black mb-2">100%</div>
                            <div className="text-sm font-bold opacity-80 uppercase tracking-widest leading-relaxed">
                                التزام بالجودة <br /> ورضا العملاء
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section: Pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="group relative bg-[#fafafa] rounded-[40px] p-12 border border-gray-100 overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-4"
                            >
                                {/* Pillar accent background */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-[100px]`} />

                                <div className="mb-10 text-center lg:text-right">
                                    <div className={`w-24 h-24 mx-auto lg:mx-0 bg-white shadow-xl rounded-[30px] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                                        <Image src={pillar.image} alt={pillar.title} width={60} height={60} />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black text-secondary mb-6 group-hover:text-primary transition-colors duration-300">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-500 font-bold leading-relaxed text-lg">
                                    {pillar.description}
                                </p>

                                <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-primary font-black">اكتشف الفرق</span>
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Target className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;

