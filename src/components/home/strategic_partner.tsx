"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { getStrategicPartners } from "@/utils/data";
import { useTranslations } from "next-intl";

const StrategicPartner = () => {
    const t = useTranslations("StrategicPartner");

    return (
        <section className="mx-5 sm:mx-10 md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto">
            <h1 className="text-center text-secondary text-3xl xl:text-4xl 2xl:text-5xl font-bold py-8 mb-6" data-aos="fade-down">
                {t('title')}
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
                    pagination= {{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                >
                    {getStrategicPartners?.map((par) => (
                        <SwiperSlide key={par.id}>
                            <div className="pb-16">
                                <div className="flex flex-wrap flex-col-reverse md:flex-row bg-white rounded-2xl shadow-2xl border-r-3 border-l-3 border-primary py-8">
                                    <div className="w-full md:w-1/2 rounded-xl py-8 px-4 md:px-8">
                                        <div className="flex justify-between items-center mb-4">
                                            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: par.color }} data-aos="fade-down">
                                                {par.title}
                                            </h1>
                                            <Image src="/strategic_partner/quotes.svg" alt="..." width={30} height={20} />
                                        </div>
                                        <p className="text-[#6B6B6B] px-4 md:px-8">
                                            {par.description}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 rounded-xl flex justify-center items-center px-2">
                                        <Image src={par.image} alt={par.title} width={500} height={20} className="h-40" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </section>
    )
}

export default StrategicPartner
