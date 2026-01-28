"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { getOurClients } from "@/utils/data";
import { useTranslations } from "next-intl";
import { Users, Star } from "lucide-react";

const OurClient = () => {
    const t = useTranslations("CustomerPartner");

    return (
        <section className="relative py-20 overflow-hidden dark:bg-secondary/50">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="container mx-auto">
                {/* Enhanced title */}
                <div className="text-center mb-24" data-aos="fade-down">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Users className="w-10 h-10 text-primary" />
                        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-secondary dark:from-white via-primary to-secondary dark:to-white bg-clip-text text-transparent">
                            {t("title").split(' ').slice(0, 2).join(' ')}
                        </h1>
                        <Users className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        {t("title")}
                    </p>
                </div>

                <div data-aos="fade-up" className="px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        loop={true}
                        spaceBetween={30}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                            },
                            "@1.50": {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {getOurClients?.map((par) => (
                            <SwiperSlide key={par.id}>
                                <div className="py-8">
                                    {/* Premium glassmorphism card */}
                                    <div className="group relative bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 hover:border-primary/30">
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500" />

                                        {/* Star badge */}
                                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Star className="w-6 h-6 text-primary fill-primary" />
                                        </div>

                                        {/* Logo container */}
                                        <div className="relative z-10 p-8 flex justify-center items-center min-h-[200px]">
                                            <div className="relative">
                                                {/* Decorative glow behind logo */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <Image
                                                    src={par.image}
                                                    alt="Client Logo"
                                                    width={200}
                                                    height={120}
                                                    className="relative z-10 h-24 w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0 dark:brightness-200"
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <style jsx global>{`
                    .swiper-slide {
                        height: auto;
                    }
                `}</style>
            </div>
        </section>
    )
}

export default OurClient
