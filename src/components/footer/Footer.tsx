"use client";
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const isArabic = locale === 'ar';
    const pathname = usePathname();
    const new_path = `${pathname}`
    console.log(new_path);

    return (
        <section className={`${new_path === `/${locale}/morshed` ? 'hidden' : ''} lg:mx-20`}>
            <footer className="w-full relative overflow-hidden  px-5 sm:px-8 md:px-16 xl:px-24 xl:py-5 2xl:py-16">
                <div className="grid md:grid-cols-5 gap-4">
                    <div className="col-span-2">
                        <Image src="/header/logo.svg" alt="..." width={220} height={20} />
                        <p>
                            {t('description1')}
                        </p>
                        <p>
                            {t('description2')}
                        </p>
                    </div>

                </div>
                {/* 
                <Image
                    src="/footer/New Project(1).svg"
                    alt="..."
                    width={120}
                    height={20}
                    className="absolute bottom-0 right-0 w-full h-auto object-cover pointer-events-none select-none z-0"
                /> */}
                {/* <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 py-10">
                    <div className="text-start">
                        <div className="flex">
                            <Image src="/footer/Calque_1 (1).svg" alt="..." width={250} height={10} className="md:mx-0 mb-4" />
                        </div>
                        <div className="flex justify-between items-center mt-3 w-64">
                            <div>
                                <hr className="border h-1.5 bg-secondary rounded-2xl border-secondary w-48 mt-2" />
                            </div>
                            <div>
                                <hr className="border h-1.5 bg-secondary rounded-2xl border-secondary w-14 mt-2" />
                            </div>
                        </div>
                        <p className={`text-gray-600 mt-5 text-justify 2xl:text-2xl font-extrabold font-doto2 ${isArabic ? "lg:ml-16" : "lg:mr-16"}`}>
                            {t('description')}
                        </p>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl 2xl:text-4xl text-primary font-extrabold">{t('links')}</h1>
                        <div className="flex justify-between items-center mt-3 w-16 2xl:w-20">
                            <div>
                                <hr className="border h-1.5 bg-secondary rounded-2xl border-secondary w-10 2xl:w-12 mt-2" />
                            </div>
                            <div>
                                <hr className="border h-1.5 bg-secondary rounded-2xl border-secondary w-4 2xl:w-7 mt-2" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link href="/" className="text-primary text-xl 2xl:text-3xl font-doto2 font-semibold">{t('home')}</Link>
                        </div>
                    </div>
                    <div className="text-start">
                        <h1 className="text-2xl 2xl:text-4xl text-primary font-extrabold">{t('contactus')}</h1>
                        <div className="flex justify-between items-center mt-3 w-28 2xl:w-44">
                            <div>
                                <hr className="border h-1.5 bg-secondary rounded-2xl border-secondary w-20 2xl:w-32 mt-2" />
                            </div>
                            <div>
                                <hr className="border h-1.5 bg-secondary rounded-2xl border-secondary w-6 2xl:w-10 mt-2" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center pb-2 xl:px-5">
                                <div className="flex justify-center items-start min-w-[32px]">
                                    <Image
                                        src="/footer/Button (2).svg"
                                        alt="..."
                                        width={32}
                                        height={20}
                                        className="w-8 h-auto"
                                    />
                                </div>
                                <div className="mx-2 text-gray-700">
                                    <h1 className="lg:text-lg 2xl:text-xl font-extrabold font-doto2">{t('location')}</h1>
                                    <p className="text-sm font-doto2">
                                        8479 Al Mashaf, 3713  Ar Rabie Dist., Riyadh 13316 - KSA
                                    </p>
                                </div>
                            </div>
                            <a href="mailto:info@marahel.com.sa" className="flex items-center py-2 xl:px-5">
                                <div className="flex justify-center items-start min-w-[32px]">
                                    <Image src="/footer/Button.svg" alt="..." className="w-8 h-auto" width={32} height={20} />
                                </div>
                                <div className="mx-2 text-gray-700">
                                    <h1 className="font-extrabold font-doto2">{t('email')}</h1>
                                    <p className="font-doto2">
                                        info@marahel.com.sa
                                    </p>
                                </div>
                            </a>
                            <a href="tel:+966534551191" className="flex items-center py-2 xl:px-5">
                                <div className="flex justify-center items-start min-w-[32px]">
                                    <Image src="/footer/Button (1).svg" alt="..." className="h-auto" width={32} height={20} />
                                </div>
                                <div className="mx-2 text-gray-700">
                                    <h1 className="font-extrabold font-doto2">{t('phone')}</h1>
                                    <p className="font-doto2" dir="rtl">
                                        1191 455 53 966+
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}
            </footer>
            <p className="text-center md:text-xl text-gray-500 mt-0 mb-6 font-doto2">
                © 2025
            </p>
        </section>
    )
}
