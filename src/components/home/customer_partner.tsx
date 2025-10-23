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

const OurClient = () => {
    const t = useTranslations("OurClient");

    return (
        <section className="mx-5 sm:mx-10 md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto">
            <h1 className="text-center text-secondary text-3xl xl:text-4xl 2xl:text-5xl font-bold py-8" data-aos="fade-down">
                {t("title")}
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
                            slidesPerView: 4,
                        },
                    }}
                >
                    {getOurClients?.map((par) => (
                        <SwiperSlide key={par.id}>
                            <div className="pb-16">
                                <div className="flex flex-wrap flex-col-reverse md:flex-row bg-white rounded-2xl shadow-2xl border-r-3 border-l-3 border-primary">
                                    <div className="w-full md:shadow-2xs rounded-xl flex justify-center items-center px-2">
                                        <Image src={par.image} alt="..." width={200} height={20} className="h-40" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default OurClient
