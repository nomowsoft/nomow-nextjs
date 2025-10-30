'use client';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import GoogleMap from '@/components/google/GoogleMap';

const Contactus = () => {
    const t = useTranslations('ContactUs');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const website = 'marahel_ai';

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone: string) =>
        /^\d{10}$/.test(phone);

    const handleContactUs = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone || !title || !message) {
            toast.error(t('filerequired'));
            return;
        }
        if (!isValidEmail(email)) {
            toast.error(t('invalidEmail'));
            return;
        }

        if (!isValidPhone(phone)) {
            toast.error(t('invalidPhone'));
            return;
        }

        const res = await fetch('/api/contact_us', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message, phone, title, website }),
        });

        if (res.ok) {
            setShowModal(true);
            setName('');
            setEmail('');
            setPhone('');
            setTitle('');
            setMessage('');
        } else {
            toast.error(t('error'));
        }
    };

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => setShowModal(false), 6000);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    return (
        <section className="my-16">
            <div className="absolute -top-20 w-[100%] h-40 sm:h-50 md:h-100 bg-primary/10 blur-3xl" />
            <div className="absolute top-80 md:top-130 w-[100%] h-40 sm:h-20 md:h-50 bg-primary/10 blur-3xl" />
            <div className="max-w-screen-lg mx-auto">
                <div className="relative bg-white shadow-2xl rounded-4xl py-6 flex flex-wrap px-20">
                    <div className="hidden md:flex absolute top-0 left-0 w-[33%] h-[100%] bg-primary rounded-e-4xl" />
                    <div className="w-full md:w-1/2 px-5">
                        <h1 className="text-secondary text-start text-3xl font-extrabold">{t('title')}</h1>
                        <form onSubmit={handleContactUs}>
                            <div className="py-10">
                                <Input className="my-2 rounded-full border-gray-300 focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[0px]
                  focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-secondary hover:border-primary"
                                    type="email" placeholder={t('name')} />
                                <Input className="my-2 rounded-full border-gray-300 focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[0px]
                  focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-secondary hover:border-primary"
                                    type="email" placeholder={t('email')} />
                                <Input className="my-2 rounded-full border-gray-300 focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[0px]
                  focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-secondary hover:border-primary"
                                    type="email" placeholder={t('phone')} />
                                <Input className="my-2 rounded-full border-gray-300 focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[0px]
                  focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-secondary hover:border-primary"
                                    type="email" placeholder={t('service')} />
                                <Textarea className="my-2 rounded-2xl border-gray-300 focus-visible:border-primary focus-visible:ring-ring/50 focus-visible:ring-[0px]
                  focus:outline-solid focus:outline-2 focus:outline-offset-2 focus:outline-secondary hover:border-primary min-h-30"
                                    placeholder={t('description')} />                                
                                <div className="flex justify-center my-4">
                                    <Button className="text-md w-[100%]" variant="secondary" size="lg">
                                        <span className="px-2">{t('send')}</span>
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-wrap text-secondary">
                            <div className="flex px-2">
                                <Image className="inline-block me-2" src="/footer/mail.svg" alt="..." width={20} height={20} />
                                <div>
                                    <p className="font-bold text-[11px]">
                                        {t('email')}
                                    </p>
                                    <p className="underline text-[11px]">
                                        Info@nomowsoft.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-2">
                                <Image className="inline-block me-2" src="/footer/phone.svg" alt="..." width={20} height={20} />
                                <div>
                                    <p className="font-bold text-[11px]">
                                        {t('phone')}
                                    </p>
                                    <p className="text-[11px]">
                                        00966507140918
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-2">
                                <Image className="inline-block me-2" src="/footer/phone.svg" alt="..." width={20} height={20} />
                                <div>
                                    <p className="font-bold text-[11px]">
                                        {t('phone')}
                                    </p>
                                    <p className="text-[11px]">
                                        00967774612600
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/2 px-5 h-100">
                        <GoogleMap lat={15.94362856860166} lng={48.79463890381742} zoom={14} height="100%" />
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl px-6 py-8 w-full max-w-sm text-center shadow-xl">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 left-4 text-primary text-2xl font-bold"
                        >
                            <Image src="/contactus/X.svg" alt="..." width={30} height={20} />
                        </button>
                        <h2 className="text-xl font-bold text-primary mb-2 mt-7">{t('successTitle')}</h2>
                        <p className="text-gray-700 mb-6">
                            {t('success')}
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-primary text-white px-6 py-2 rounded-xl transition"
                        >
                            {t('ok')}
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default Contactus;
