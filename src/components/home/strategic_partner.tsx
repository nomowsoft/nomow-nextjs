import { useTranslations, useLocale } from "next-intl";
import { useMemo } from "react";
import Image from "next/image";
import { getStrategicPartners } from "@/utils/data";
import { Handshake, ShieldCheck, Globe } from "lucide-react";

const StrategicPartner = () => {
    const t = useTranslations("StrategicPartner");
    const locale = useLocale();
    const partners = useMemo(() => getStrategicPartners(t), [t]);

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-secondary transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                    <div data-aos="fade-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 dark:bg-white/10 text-secondary dark:text-white font-black text-sm mb-6">
                            <Handshake className="w-4 h-4" />
                            <span>{t('badge')}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white leading-tight mb-8">
                            {t('title').split(' ')[0]} <br />
                            <span className="text-primary italic">{t('title').split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl mb-10">
                            {t('desc')}
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: t('feat1'), icon: ShieldCheck },
                                { title: t('feat2'), icon: Globe }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="p-4 bg-[#fafafa] dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6 dark:text-white group-hover:text-white" />
                                    </div>
                                    <span className="text-xl font-black text-secondary dark:text-white">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6" data-aos="zoom-in">
                        {partners?.map((par) => (
                            <div
                                key={par.id}
                                className="group relative bg-white dark:bg-white/5 rounded-[35px] p-8 border border-gray-100 dark:border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
                            >
                                <div className={`absolute top-0 ${locale === 'ar'? 'right-0': 'left-0'} w-2 h-0 bg-primary group-hover:h-full transition-all duration-700`} />

                                <div className="mb-6 flex justify-center">
                                    <div className="relative w-full h-32">
                                        <Image
                                            src={par.image}
                                            alt={par.title}
                                            fill
                                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-90 group-hover:scale-100 dark:brightness-200 dark:invert-[0.1]"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors">
                                        {par.title}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {t('par_label')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StrategicPartner;
