import { useTranslations } from "next-intl";
import { Target, Eye, Flag, Rocket, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const About = () => {
    const t = useTranslations('Aboutus');
    const items = [
        {
            id: 1,
            icon: Eye,
            title: t('title1'),
            description: t('description1'),
            image: "/about_us/Icon1.svg",
            color: "from-blue-500 to-primary"
        },
        {
            id: 2,
            icon: Target,
            title: t('title2'),
            description: t('description2'),
            image: "/about_us/Icon2.svg",
            color: "from-secondary to-blue-800"
        },
        {
            id: 3,
            icon: Flag,
            title: t('title3'),
            description: t('description3'),
            image: "/about_us/Icon3.svg",
            color: "from-primary to-secondary"
        },
    ];

    return (
        <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-white dark:bg-secondary transition-colors duration-300">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Upper Section: Narrative */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="order-2 lg:order-1" data-aos="fade-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-black text-sm mb-6">
                            <Rocket className="w-4 h-4" />
                            <span>{t('badge')}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white leading-[1.2] mb-8">
                            {t('h2_title1')} <br />
                            <span className="text-primary italic">{t('h2_title2')}</span>
                        </h2>
                        <div className="space-y-6 text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
                            <p>
                                {t('p1')}
                            </p>
                            <p>
                                {t('p2')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                            {[t('feat1'), t('feat2'), t('feat3'), t('feat4')].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-secondary dark:text-white font-black">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2" data-aos="zoom-in">
                        <div className="relative z-10 rounded-[50px] overflow-hidden shadow-2xl border-8 border-white dark:border-white/10 group">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-700" />
                            <Image
                                src="/about_us/aboutus.avif"
                                alt="Team Sync"
                                width={1000}
                                height={500}
                                className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        {/* Decorative floating box */}
                        <div className="absolute -bottom-10 -left-10 bg-secondary dark:bg-primary text-white p-10 rounded-[40px] shadow-2xl z-20 hidden md:block">
                            <div className="text-4xl font-black mb-2">{t('badge_val')}</div>
                            <div className="text-sm font-bold opacity-80 uppercase tracking-widest leading-relaxed">
                                {t('badge_desc')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section: Pillars */}
                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((pillar, index) => {
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="group relative bg-[#fafafa] dark:bg-white/5 rounded-[40px] p-12 border border-gray-100 dark:border-white/10 overflow-hidden transition-all duration-500 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-4"
                            >
                                {/* Pillar accent background */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-bl-[100px]`} />

                                <div className="mb-10 text-center lg:text-right">
                                    <div className={`w-24 h-24 mx-auto lg:mx-0 bg-white dark:bg-secondary shadow-xl rounded-[30px] flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}>
                                        <Image src={pillar.image} alt={pillar.title} width={60} height={60} />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black text-secondary dark:text-white mb-6 group-hover:text-primary transition-colors duration-300">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 font-bold leading-relaxed text-lg">
                                    {pillar.description}
                                </p>

                                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-primary font-black">{t('pillar_link')}</span>
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
