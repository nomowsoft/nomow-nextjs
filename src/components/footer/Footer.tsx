import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <section className="relative">
            <div className="md:hidden absolute -top-0 w-[30%] h-50 sm:h-50 md:h-50 bg-secondary/10 blur-3xl rounded-full" />
            <div className="md:hidden absolute -top-0 right-[33%] w-[34%] h-50 sm:h-50 md:h-50 bg-primary/10 blur-3xl" />
            <div className="md:hidden absolute -top-0 left-0 w-[30%] h-50 sm:h-50 md:h-50 bg-secondary/10 blur-3xl" />
            <div className="absolute -bottom-0 w-[30%] h-50 sm:h-50 md:h-50 bg-secondary/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-0 right-[33%] w-[34%] h-50 sm:h-50 md:h-50 bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-0 left-0 w-[30%] h-50 sm:h-50 md:h-50 bg-secondary/10 blur-3xl" />
            <footer className="relative overflow-hidden mx-5 sm:mx-10 md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto  py-5">
                <div className="flex flex-wrap gap-y-8">
                    <div className="w-full md:w-2/5 text-center">
                        <Image className="" src="/header/logo.svg" alt="..." width={220} height={20} />
                        <p className="py-5 text-secondary text-justify">
                            {t('description1')}
                        </p>
                        <p className="text-secondary text-justify">
                            {t('description2')}
                        </p>
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/5 sm:text-center pt-4">
                        <h3 className="text-primary mb-5">{t('titleLink')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-secondary hover:text-secondary/50">
                                    {t('linkItem1')}
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/5 pt-4">
                        <h3 className="text-primary mb-5">{t('titleContactus')}</h3>
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
                            <li className="text-secondary">
                                <Image className="inline-block me-2" src="/footer/whats.svg" alt="..." width={20} height={20} />
                                <span dir="ltr">
                                    00967774612600
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/5 sm:text-center pt-4">
                        <h3 className="text-primary mb-5">{t('titleContactus')}</h3>
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
