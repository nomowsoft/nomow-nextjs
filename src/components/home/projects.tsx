"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { getProjects } from "@/utils/data";
import { useLocale } from "next-intl";

const Project = () => {
    const locale = useLocale();
    const isArabic = locale === 'ar';

    return (
        <section className="lg:py-[50px] mx-5 sm:mx-10 md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto">
            <h1 className="text-center text-secondary text-3xl xl:text-4xl 2xl:text-5xl font-bold py-8" data-aos="fade-down">
                منتجاتنا​
            </h1>
            <div data-aos="fade-up">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-prev",
                        prevEl: ".swiper-button-next",
                    }}
                    pagination= {{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                >
                    {getProjects?.map((pro) => (
                        <SwiperSlide key={pro.id}>
                            <div className="pb-12 md:px-16">
                                <div className="shadow-xl flex flex-wrap rounded-2xl">
                                    <div className="w-full md:w-1/2 rounded-xl flex justify-center items-center px-2">
                                        <Image src={pro.image} alt={pro.title} width={500} height={20} className="h-25 md:h-40" />
                                    </div>
                                    <div className="w-full md:w-1/2 py-6 2xl:py-12 px-4 md:px-1">
                                        <h1 className="text-secondary text-[23px] font-bold py-4" data-aos="fade-down">
                                            {pro.title}
                                        </h1>
                                        <ul className="space-y-2 text-sm">
                                            {pro.items?.map((item) => (
                                                <li key={item.id} className="text-secondary flex items-center">
                                                    <span className="w-1 bg-primary rounded-full me-2 h-4 md:h-5" />
                                                    {item.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="hidden md:block">
                        <div className={`swiper-button-prev p-2 shadow-xl rounded-full text-5xl bg-primary`}>
                            {isArabic ? <ArrowRight /> : <ArrowLeft />}
                        </div>
                        <div className={`swiper-button-next p-2 shadow-xl rounded-full text-5xl bg-primary`}>
                            {isArabic ? <ArrowLeft /> : <ArrowRight />}
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    )
}

export default Project
