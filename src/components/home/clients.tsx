import { useTranslations, useLocale } from "next-intl";
import { Star, Quote, MessageSquareQuote } from "lucide-react";

const Clients = () => {
    const t = useTranslations('OurClient');
    const locale = useLocale();
    const testimonials = [
        {
            name: t('test1_name'),
            position: t('test1_pos'),
            company: t('test1_comp'),
            review: t('test1_review'),
            rating: 5,
        },
        {
            name: t('test2_name'),
            position: t('test2_pos'),
            company: t('test2_comp'),
            review: t('test2_review'),
            rating: 5,
        },
        {
            name: t('test3_name'),
            position: t('test3_pos'),
            company: t('test3_comp'),
            review: t('test3_review'),
            rating: 5,
        },
        {
            name: t('test4_name'),
            position: t('test4_pos'),
            company: t('test4_comp'),
            review: t('test4_review'),
            rating: 5,
        },
        {
            name: t('test5_name'),
            position: t('test5_pos'),
            company: t('test5_comp'),
            review: t('test5_review'),
            rating: 5,
        },
        {
            name: t('test6_name'),
            position: t('test6_pos'),
            company: t('test6_comp'),
            review: t('test6_review'),
            rating: 5,
        },
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-white dark:bg-secondary transition-colors duration-300">
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24" data-aos="fade-down">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary font-black text-sm mb-6">
                        <MessageSquareQuote className="w-4 h-4" />
                        <span>{t('badge')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white mb-6 leading-tight">
                        {t('h2_title1')} <br /> <span className="text-primary italic">{t('h2_title2')}</span>
                    </h2>
                    <p className="text-xl font-bold text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-white dark:bg-white/5 rounded-[40px] p-10 pt-16 border border-gray-100 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-4"
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

                            <p className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-relaxed mb-10 italic">
                                &quot;{testimonial.review}&quot;
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-5 border-t border-gray-50 dark:border-white/10 pt-8 mt-auto">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white dark:from-white/10 dark:to-white/5 border-2 border-primary/20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:border-primary transition-colors duration-300">
                                        <span className="text-primary font-black text-2xl">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white dark:border-secondary rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-secondary dark:text-white font-black text-xl">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm font-bold text-gray-400">
                                        {testimonial.position} <span className="text-primary mx-1">@</span> {testimonial.company}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className={`absolute bottom-0 ${locale === 'ar' ? 'left-0 rounded-tr-[100px] rounded-bl-[32px]' : 'right-0 rounded-tl-[100px] rounded-br-[32px]'} w-32 h-32 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors duration-500`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
