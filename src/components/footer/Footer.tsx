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
        <section className={`${new_path === `/${locale}/morshed` ? 'hidden' : ''}`}>
            <footer className="w-full relative overflow-hidden px-18 sm:px-8 md:px-[50px] py-5 border-b border-gray-100">
                <div className="flex flex-wrap gap-y-8">
                    <div className="sm:w-full md:w-2/5 text-center">
                        <Image className="" src="/header/logo.svg" alt="..." width={220} height={20} />
                        <p className="py-5 text-secondary text-justify">
                            {t('description1')}
                        </p>
                        <p className="text-secondary text-justify">
                            {t('description2')}
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/5 sm:text-center pt-4">
                        <h3 className="text-[#42B8BD] mb-5">{t('titleLink')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-secondary hover:text-secondary/50">
                                    {t('linkItem1')}
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/5 pt-4">
                        <h3 className="text-[#42B8BD] mb-5">{t('titleContactus')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/mail.svg" alt="..." width={20} height={20} />
                                <span className="underline">
                                    Info@nomowsoft.com
                                </span>
                            </li>
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/phone.svg" alt="..." width={20} height={20} />
                                <span dir="ltr">
                                    00966507140918
                                </span>
                            </li>
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/phone.svg" alt="..." width={20} height={20} />
                                <span dir="ltr">
                                    00967774612600
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/5 sm:text-center pt-4">
                        <h3 className="text-[#42B8BD] mb-5">{t('titleContactus')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/facebook.svg" alt="..." width={12} height={20} />
                            </li>
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/twitter.svg" alt="..." width={15} height={20} />
                            </li>
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/linkedln.svg" alt="..." width={17} height={20} />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="text-gray-200 my-3" />
            </footer>
            <p dir="ltr" className="text-center md:text-lg text-gray-900 mt-0 mb-3 sm:mb-6 font-doto2">
                © 2025
            </p>
        </section>
    )
}
