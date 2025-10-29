"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navlink from "./nav_link";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"

export default function Header() {
    const t = useTranslations("Header");
    const locale = useLocale();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isArabic = locale === "ar";

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };


    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        if (isMobileMenuOpen) {
            const scrollbarWidth = window.innerWidth - html.clientWidth;
            body.style.overflow = "hidden";
            if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            body.style.overflow = "";
            body.style.paddingRight = "";
        }

        return () => {
            body.style.overflow = "";
            body.style.paddingRight = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto md:mt-8">
            <nav className="bg-white px-4 md:px-1 relative w-full md:rounded-full z-10">
                <div className="flex flex-wrap justify-between items-center py-2 md:py-0 md:mx-3 relative">
                    <div className="flex items-center my-2">
                        <Link href="/" className="flex items-center">
                            <Image className="" height={20} width={100} src="/header/logo.svg" alt="Logo" />
                        </Link>
                        <div className="hidden md:flex mx-6">
                            <Navlink />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button className="text-xl" variant="default" size="lg">
                            <span className="px-2">{t('contactus')}</span>
                        </Button>
                    </div>

                    {/* زر فتح قائمة الجوال */}
                    <button
                        type="button"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                        className="md:hidden inline-flex items-center p-1 text-sm text-primary rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 border border-primary"
                    >
                        <span className="sr-only">فتح القائمة الرئيسية</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {/* قائمة الجوال */}
                <div
                    id="mobile-menu"
                    className={`absolute z-30 top-0 py-2 w-screen h-screen bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden
                    ${isArabic ? "right-0" : "left-0"}
                    ${isMobileMenuOpen
                            ? "opacity-100 translate-x-0"
                            : isArabic
                                ? "opacity-0 translate-x-full"
                                : "opacity-0 -translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-screen py-2">

                        <div className="flex flex-wrap justify-between items-center px-4 flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <Image className="" height={20} width={100} src="/header/logo.svg" alt="Logo" />
                            </Link>
                            <button
                                type="button"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                                className="md:hidden inline-flex items-center p-1 text-sm text-primary rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 border border-primary"
                            >
                                <span className="sr-only">فتح القائمة الرئيسية</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="overflow-y-auto flex-1 px-4 pt-4 pb-28">
                            <Navlink />
                        </div>

                        <div className="flex-shrink-0 absolute inset-x-0 bottom-0 px-4 bg-white py-4">
                            <Link
                                href={`/${locale}/contact_us`}
                                className="bg-primary mx-2 border border-primary py-2.5 px-2 rounded-md flex justify-center items-center"
                            >
                                <span className="px-2 text-white font-extrabold">{t('contactus')}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
