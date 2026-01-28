import { useTranslations } from "next-intl";
import { FileText, Smartphone, Layout, Server, ShoppingCart, Workflow, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
    const t = useTranslations('OurService');
    const services = [
        {
            icon: FileText,
            title: t('service1_title'),
            description: t('service1_desc'),
            features: [t('service1_feat1'), t('service1_feat2'), t('service1_feat3')],
            color: "blue-500"
        },
        {
            icon: Smartphone,
            title: t('service2_title'),
            description: t('service2_desc'),
            features: [t('service2_feat1'), t('service2_feat2'), t('service2_feat3')],
            color: "primary"
        },
        {
            icon: Layout,
            title: t('service3_title'),
            description: t('service3_desc'),
            features: [t('service3_feat1'), t('service3_feat2'), t('service3_feat3')],
            color: "secondary"
        },
        {
            icon: Server,
            title: t('service4_title'),
            description: t('service4_desc'),
            features: [t('service4_feat1'), t('service4_feat2'), t('service4_feat3')],
            color: "blue-700"
        },
        {
            icon: ShoppingCart,
            title: t('service5_title'),
            description: t('service5_desc'),
            features: [t('service5_feat1'), t('service5_feat2'), t('service5_feat3')],
            color: "purple-600"
        },
        {
            icon: Workflow,
            title: t('service6_title'),
            description: t('service6_desc'),
            features: [t('service6_feat1'), t('service6_feat2'), t('service6_feat3')],
            color: "emerald-600"
        },
    ];

    return (
        <section id="services" className="py-32 relative overflow-hidden bg-[#fafafa] dark:bg-secondary/50 transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-secondary to-transparent" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="text-start space-y-4 max-w-2xl" data-aos="fade-left">
                        <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm">
                            <Zap className="w-4 h-4" />
                            <span>{t('badge')}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white leading-tight">
                            {t('h2_title1')} <span className="text-primary italic">{t('h2_title2')}</span> <br /> {t('h2_title3')}
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-bold">
                            {t('description')}
                        </p>
                    </div>
                    <div data-aos="fade-right">
                        <Button size="lg" className="bg-secondary dark:bg-primary text-white hover:bg-secondary/90 dark:hover:bg-primary/90 px-8 py-7 rounded-2xl text-lg font-bold">
                            {t('btn_all')}
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
                                className="group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[35px] p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3"
                            >
                                {/* Accent line on hover */}
                                <div className="absolute top-0 left-10 right-10 h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-full" />

                                <div className="mb-8">
                                    <div className={`w-20 h-20 bg-gray-50 dark:bg-white/10 rounded-3xl flex items-center justify-center group-hover:bg-primary/10 group-hover:rotate-12 transition-all duration-500`}>
                                        <Icon className="w-10 h-10 text-primary" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-secondary dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 dark:text-gray-400 font-bold mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-10">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-sm text-secondary dark:text-white font-black">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="flex items-center gap-2 font-black text-primary group/link">
                                    <span>{t('explore_more')}</span>
                                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 rtl:group-hover/link:-translate-x-2 transition-transform duration-300 rtl:rotate-180" />
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
