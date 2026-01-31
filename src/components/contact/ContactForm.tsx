"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, User, Mail, Phone, Building2, Layers, MessageSquare } from "lucide-react";

const ContactForm = () => {
    const t = useTranslations("Contact");
    const ts = useTranslations("OurService");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            (e.target as HTMLFormElement).reset();

            setTimeout(() => {
                setStatus("idle");
            }, 5000);
        }, 1500);
    };

    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Info */}
                <div data-aos="fade-up">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                        {t("subtitle")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary dark:text-white leading-tight">
                        {t("title")}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {t("description")}
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="rtl:text-right">
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('email_us')}</p>
                                <p className="text-lg font-semibold text-secondary dark:text-white">info@nomowsoft.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary dark:bg-primary/10 dark:text-primary group-hover:bg-secondary dark:group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="rtl:text-right">
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('call_us')}</p>
                                <p className="text-lg font-semibold text-secondary dark:text-white" dir="ltr">+966 500 000 000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div data-aos="fade-left" className="bg-white dark:bg-secondary/40 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-primary/10 border border-gray-100 dark:border-gray-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <User className="w-4 h-4 text-primary" /> {t("name")}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder={t("placeholder_name")}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-primary" /> {t("email")}
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder={t("placeholder_email")}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary" /> {t("phone")}
                                </label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    placeholder={t("placeholder_phone")}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                />
                            </div>

                            {/* Company */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-primary" /> {t("company")}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="company"
                                    placeholder={t("placeholder_company")}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Services */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" /> {t("services")}
                            </label>
                            <select
                                required
                                name="services"
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2333D3D4%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1.25rem_center] bg-no-repeat rtl:bg-[left_1.25rem_center]"
                            >
                                <option value="" disabled selected>{t("placeholder_services")}</option>
                                <option value="brd">{ts("service1_title")}</option>
                                <option value="mobile">{ts("service2_title")}</option>
                                <option value="uiux">{ts("service3_title")}</option>
                                <option value="erp">{ts("service4_title")}</option>
                                <option value="ecommerce">{ts("service5_title")}</option>
                                <option value="automation">{ts("service6_title")}</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-primary" /> {t("description_field")}
                            </label>
                            <textarea
                                required
                                name="description"
                                rows={4}
                                placeholder={t("placeholder_description")}
                                className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-secondary/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                            ></textarea>
                        </div>

                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-8 text-lg font-bold rounded-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {status === "loading" ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    {t('sending')}
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Send className="w-5 h-5" />
                                    {t("submit")}
                                </div>
                            )}
                        </Button>

                        {status === "success" && (
                            <p className="text-center text-green-500 font-medium animate-pulse">
                                {t("success")}
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-center text-red-500 font-medium">
                                {t("error")}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
