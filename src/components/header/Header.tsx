"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SwitchLocale from "./swich_locale";
import { ThemeToggle } from "../theme-toggle";

const Header = () => {
  const t = useTranslations('Header');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: t('menu_home'), href: "#hero" },
    { title: t('menu_about'), href: "#about" },
    { title: t('menu_services'), href: "#services" },
    { title: t('menu_products'), href: "#products" },
    { title: t('menu_partners'), href: "#partners" },
  ];

  return (
    <header className={`top-0 sticky right-0 left-0 z-50 transition-all duration-300 ${scrolled
      ? "bg-white/90 dark:bg-secondary/90 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 shadow-xl py-2"
      : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="relative w-[150px] h-[150px]">
            <Image src="/header/logo.svg" alt="Logo" fill className="object-contain dark:brightness-200" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-base font-black text-secondary/70 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors py-2 group"
              >
                {item.title}
                <span className="absolute bottom-0 right-0 w-0 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Toolbar */}
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="flex items-center gap-2 md:gap-4">
              <ThemeToggle />
              <SwitchLocale />
            </div>

            <Button
              className="hidden xl:flex bg-secondary dark:bg-primary hover:bg-secondary/90 text-white shadow-2xl px-8 py-6 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {t('download_profile')}
            </Button>

            <Button
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white shadow-[0_10px_20px_-5px_rgba(59,130,246,0.5)] px-8 py-6 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {t('contactus')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 bg-gray-50 dark:bg-white/10 rounded-2xl text-secondary dark:text-white hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 dark:bg-secondary/95 backdrop-blur-2xl rounded-[30px] border border-gray-100 dark:border-white/10 shadow-2xl p-8 z-50 overflow-hidden"
            >
              <nav className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.href}
                    href={item.href}
                    className="text-xl font-black text-secondary dark:text-white hover:text-primary transition-colors py-2 flex items-center justify-between group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 translate-x-4 rtl:rotate-180 rtl:group-hover:translate-x-0 rtl:-translate-x-4" />
                  </motion.a>
                ))}
                <div className="pt-6 border-t border-gray-50 dark:border-white/10 flex flex-col gap-4">
                  <Button className="bg-secondary dark:bg-primary text-white w-full py-7 rounded-2xl font-black text-lg">
                    {t('download_profile')}
                  </Button>
                  <Button className="bg-primary text-white w-full py-7 rounded-2xl font-black text-lg shadow-xl">
                    {t('contactus')}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Internal Arrow icon for mobile menu
const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
)

export default Header;

