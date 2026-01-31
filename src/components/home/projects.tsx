"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, LayoutDashboard, Smartphone, ChevronLeft, Users, Building2, Scale, Factory, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { getProjects } from "@/utils/data";

const Project = () => {
    const t = useTranslations('Projects');
    const tCommon = useTranslations('OurService');
    const [activeIndex, setActiveIndex] = useState(0);

    const projects = useMemo(() => getProjects(t), [t]);

    // Auto-rotate effect
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [projects.length]);

    const activeProject = projects[activeIndex];

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <Wallet className="w-7 h-7" />;
            case 1: return <Users className="w-7 h-7" />;
            case 2: return <Building2 className="w-7 h-7" />;
            case 3: return <Scale className="w-7 h-7" />;
            case 4: return <Smartphone className="w-7 h-7" />;
            case 5: return <Factory className="w-7 h-7" />;
            default: return <LayoutDashboard className="w-7 h-7" />;
        }
    };

    return (
        <section id="products" className="py-24 lg:py-32 relative overflow-hidden bg-[#fafafa] dark:bg-secondary/50 transition-colors duration-300">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top h-screen -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-20 text-start" data-aos="fade-down">
                    <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white leading-tight mb-6">
                        {t('title')} <span className="text-primary italic">{t('subtitle')}</span>
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 font-bold max-w-2xl">
                        {t('desc')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Product Selection (Navigator) */}
                    <div className="lg:col-span-4 space-y-4 order-2 lg:order-1" data-aos="fade-left">
                        {projects?.map((pro, index) => (
                            <button
                                key={pro.id}
                                onClick={() => setActiveIndex(index)}
                                className={`w-full text-start p-6 rounded-[25px] border-2 transition-all duration-500 flex items-center justify-between group ${activeIndex === index
                                    ? "bg-white dark:bg-white/10 border-primary shadow-2xl shadow-primary/10 scale-102"
                                    : "bg-transparent border-transparent hover:border-gray-200 dark:hover:border-white/10 opacity-60 hover:opacity-100"
                                    }`}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${activeIndex === index ? "bg-primary text-white" : "bg-gray-100 dark:bg-white/5 text-secondary dark:text-white"
                                        }`}>
                                        {getIcon(index)}
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-black transition-colors duration-500 ${activeIndex === index ? "text-secondary dark:text-white" : "text-gray-400 dark:text-white/40"
                                            }`}>
                                            {pro.title}
                                        </h3>
                                        {activeIndex === index && (
                                            <div className="h-1 w-12 bg-primary rounded-full mt-2" />
                                        )}
                                    </div>
                                </div>
                                <ChevronLeft className={`w-6 h-6 transition-all duration-500 rtl:rotate-180 ${activeIndex === index ? "text-primary translate-x-0" : "text-gray-300 translate-x-4 opacity-0 rtl:-translate-x-4"
                                    }`} />
                            </button>
                        ))}

                        <div className="mt-12 p-8 bg-secondary dark:bg-white/5 rounded-[35px] text-white">
                            <h4 className="text-xl font-black mb-4">{t('custom_title')}</h4>
                            <p className="text-sm font-bold opacity-70 mb-6">{t('custom_desc')}</p>
                            <button className="flex items-center gap-2 text-primary font-black group">
                                <span>{t('custom_btn')}</span>
                                <ArrowLeft className="w-5 h-5 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform duration-300 rtl:rotate-180" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Active Product Detail Area */}
                    <div className="lg:col-span-8 order-1 lg:order-2" data-aos="fade-up">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white dark:bg-white/5 rounded-[50px] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10"
                            >
                                <div className="grid md:grid-cols-2">
                                    <div className="p-10 md:p-16 flex flex-col justify-center">
                                        <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-black mb-6 uppercase tracking-widest">
                                            {t('featured_badge')}
                                        </div>
                                        <h3 className="text-4xl lg:text-5xl font-black text-secondary dark:text-white mb-8">
                                            {activeProject.title}
                                        </h3>

                                        <ul className="space-y-5">
                                            {activeProject.items?.map((item) => (
                                                <li key={item.id} className="flex items-start gap-4 group/item">
                                                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-1">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-gray-600 dark:text-gray-400 font-bold text-lg leading-relaxed group-hover/item:text-secondary dark:group-hover/item:text-white transition-colors">
                                                        {item.title}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-12">
                                            <button className="bg-secondary dark:bg-primary hover:bg-secondary/90 dark:hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-secondary/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
                                                {t('price_btn')}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 p-12 flex items-center justify-center relative">
                                        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                                        <div className="relative z-10 w-full aspect-square">
                                            <Image
                                                src={activeProject.image}
                                                alt={activeProject.title}
                                                fill
                                                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] transform group-hover:scale-110 transition-transform duration-700 dark:brightness-110 rounded-4xl"
                                            />
                                        </div>

                                        {/* Progress Bar for Auto-rotate */}
                                        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 dark:bg-white/10">
                                            <motion.div
                                                key={`progress-${activeIndex}`}
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 8, ease: "linear" }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;
