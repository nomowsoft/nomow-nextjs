import { getOurServices } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";

const OurService = () => {
    const t = useTranslations('OurService');
    const locale = useLocale();
    const values = getOurServices(t);
    return (
        <section className="bg-[url('/our_service/bg-section.svg')] bg-cover bg-no-repeat pt-[40px] pb-[60px] w-[100%]">
            <h1 className="text-center text-primary text-3xl xl:text-4xl 2xl:text-5xl font-bold py-8" data-aos="fade-down">
                {t('title')}
            </h1>
            <div className="flex flex-wrap justify-center mx-5 sm:mx-10 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto">
                {values?.map((item) => (
                    <div className="w-full md:w-1/2 py-5 md:px-5" key={item.id} data-aos="fade-up">
                        <div className="rounded-sm ps-8 h-20 w-full flex items-center text-center bg-white border border-gray-200">
                            <h2 className={`text-secondary sm:text-xl flex items-center py-2 relative ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block absolute w-7 h-7 bg-linear-to-b from-primary from-0% via-2B8AB1 via-8% to-secondary to-39% 
                                    rounded-sm text-[16px] text-center text-white pt-1 ${locale === 'ar' ? '-right-12' : '-left-12'}`} >
                                    {item.id}
                                </span>
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurService