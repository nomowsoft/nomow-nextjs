import Image from "next/image";
import { getOurServices } from "@/utils/data";
import { useTranslations } from "next-intl";

const OurService = () => {
    const t = useTranslations('OurService');
    const values = getOurServices(t);
    return (
        <section className="bg-[url('/our_service/bg-section.svg')] bg-cover bg-no-repeat pt-[40px] pb-[60px] w-[100%]">
            <h1 className="text-center text-primary text-3xl xl:text-4xl 2xl:text-5xl font-bold py-8" data-aos="fade-down">
                {t('title')}
            </h1>
            <div className="flex flex-wrap justify-center gap-10 mx-5 lg:mx-10">
                {values?.map((item) => (
                    <div
                    className="rounded-sm ps-8 h-20 w-full md:w-1/3 flex items-center text-center bg-white border border-gray-200"
                    key={item.id}
                    data-aos="fade-up"
                    >
                        <h2 className="text-secondary sm:text-xl text-right flex items-center py-2 relative">
                            <span className="inline-block absolute -right-12 w-7 h-7 bg-linear-to-b from-primary from-0% via-2B8AB1 via-8% to-secondary to-39% rounded-sm text-[16px] text-center text-white pt-1" >
                                {item.id}
                            </span>
                            {item.title}
                        </h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurService