import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Contact Us | NomowSoft",
    description: "Get in touch with NomowSoft for your next digital transformation project.",
};

const ContactPage = () => {
    const t = useTranslations("Contact");
    return (
        <div className="min-h-screen bg-white dark:bg-secondary">
            {/* Hero Section for Contact Page */}
            <section className="relative pt-20 pb-32 bg-secondary dark:bg-[#1a2e6b] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(51,211,212,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(51,211,212,0.05),transparent_50%)]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div data-aos="fade-down" className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                        NomowSoft
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight" data-aos="fade-up" data-aos-delay="100">
                        {t('hero_title_1')} <span className="text-primary">{t('hero_title_2')}</span>
                    </h1>
                </div>
            </section>

            <div className="relative -mt-20 z-20 pb-20">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;
