"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MessageCircle, Facebook, Twitter, Linkedin, Github, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <section className="bg-secondary relative overflow-hidden pt-24 pb-12">
            {/* Background pattern/accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

            <footer className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-2xl">
                                <span className="text-xl font-black text-primary">نس</span>
                            </div>
                            <span className="text-2xl font-black text-white">نمو سوفت</span>
                        </div>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            {t('description1')} {t('description2')}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Github, href: "#" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-black text-xl mb-8 flex items-center gap-2">
                            روابط سريعة
                            <div className="w-8 h-1 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-4">
                            {['الرئيسية', 'من نحن', 'خدماتنا', 'منتجاتنا', 'المدونة'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 font-bold hover:text-white hover:translate-x-[-8px] inline-block transition-all duration-300 flex items-center gap-2">
                                        <ExternalLink className="w-3 h-3 text-primary" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-black text-xl mb-8 flex items-center gap-2">
                            خدماتنا
                            <div className="w-8 h-1 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-4 text-gray-400 font-bold">
                            <li>تطوير تطبيقات الجوال</li>
                            <li>تصميم واجهات UI/UX</li>
                            <li>أنظمة ERP</li>
                            <li>المتاجر الإلكترونية</li>
                            <li>أتمتة العمليات</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-black text-xl mb-8 flex items-center gap-2">
                            تواصل معنا
                            <div className="w-8 h-1 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs font-black uppercase mb-1">البريد الإلكتروني</div>
                                    <div className="text-white font-bold">Info@nomowsoft.com</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs font-black uppercase mb-1">اتصل بنا</div>
                                    <div className="text-white font-bold" dir="ltr">+966 5071 40918</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs font-black uppercase mb-1">واتساب</div>
                                    <div className="text-white font-bold" dir="ltr">+967 7746 12600</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 font-bold flex items-center gap-2">
                        صنع بكل
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        بواسطة فريق نمو سوفت © 2025
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-gray-500 font-bold hover:text-white transition-colors">سياسة الخصوصية</Link>
                        <Link href="#" className="text-gray-500 font-bold hover:text-white transition-colors">الشروط والأحكام</Link>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        آمن وموثوق 100%
                    </div>
                </div>
            </footer>
        </section>
    )
}

