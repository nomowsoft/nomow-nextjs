"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navlink from "./nav_link";
import Link from "next/link";
// import LocaleSwitcher from "./swich_locale";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"

export default function Header() {
    const t = useTranslations("Header");
    const locale = useLocale();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isArabic = locale === "ar";

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    // إغلاق القائمة عند الانتقال لصفحة أخرى
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // إغلاق القائمة عند تكبير الشاشة
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
// max-w-screen-xl mx-auto
    return (
        <header className={`${pathname === `/${locale}/morshed` ? "hidden" : ""} md:px-[50px] md:mt-8`}>
            <nav className="bg-white px-4 md:px-1 relative w-full md:rounded-full z-10">
                <div className="flex flex-wrap justify-between items-center md:mx-3 relative">
                    <div className="flex items-center my-2">
                        <Link href="/" className="flex items-center">
                            <Image className="" height={20} width={100} src="/header/logo.svg" alt="Logo" />
                        </Link>
                        <div className="hidden md:flex">
                            <Navlink />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {/* <LocaleSwitcher /> */}
                        <Button className="text-xl" variant="default" size="lg">
                            <span className="px-2">{t('contactus')}</span>
                        </Button>
                    </div>

                    {/* زر فتح القائمة الجوالية */}
                    <button
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                        className="md:hidden inline-flex items-center p-1 text-sm text-primary rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 border border-primary"
                    >
                        <span className="sr-only">فتح القائمة الرئيسية</span>
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>

                    {/* القائمة الجوالية */}
                    <div
                        id="mobile-menu"
                        className={`absolute z-30 top-28 py-4 w-full bg-white shadow-lg text-center transition-all duration-300 ease-in-out md:hidden
                        ${isArabic ? "right-0" : "left-0"}
                        ${isMobileMenuOpen
                                ? "opacity-100 translate-x-0"
                                : isArabic
                                    ? "opacity-0 translate-x-full"
                                    : "opacity-0 -translate-x-full"
                            }`}
                    >
                        <Navlink />

                        <div className="mt-4">
                            <Link
                                href={`/${locale}/contact_us`}
                                className="bg-primary mx-2 border border-primary py-2.5 px-2 rounded-md flex justify-center items-center"
                            >
                                <span className="px-2 text-white font-extrabold">{t('contactus')}</span>
                            </Link>
                        </div>

                        {/* <div className="mt-4">
                            <LocaleSwitcher />
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}
