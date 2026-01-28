"use client";
import Image from "next/image";
import { getStrategicPartners } from "@/utils/data";
import { useTranslations } from "next-intl";
import { Quote, ArrowRight, Handshake, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const StrategicPartner = () => {
    const t = useTranslations("StrategicPartner");

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                    <div data-aos="fade-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-black text-sm mb-6">
                            <Handshake className="w-4 h-4" />
                            <span>تحالفات عالمية طموحة</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-secondary leading-tight mb-8">
                            شراكاتنا هي <br />
                            <span className="text-primary italic">محرك نجاحنا</span>
                        </h2>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-xl mb-10">
                            نحن لا نعمل بمعزل عن العالم، بل نبني جسوراً من التعاون مع قادة الصناعة لنضمن لعملائنا الوصول إلى أحدث الحلول وأكثرها كفاءة.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "تكامل تقني شامل", icon: ShieldCheck },
                                { title: "توسع جغرافي مدروس", icon: Globe }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="p-4 bg-[#fafafa] rounded-2xl border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-black text-secondary">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6" data-aos="zoom-in">
                        {getStrategicPartners?.map((par, index) => (
                            <div
                                key={par.id}
                                className="group relative bg-white rounded-[35px] p-8 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-3"
                            >
                                <div className="absolute top-0 right-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-700 rounded-bl-full" />

                                <div className="mb-6 flex justify-center">
                                    <div className="relative w-full h-32">
                                        <Image
                                            src={par.image}
                                            alt={par.title}
                                            fill
                                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-90 group-hover:scale-100"
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-secondary mb-2 group-hover:text-primary transition-colors">
                                        {par.title}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        شريك استراتيجي معتمد
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
