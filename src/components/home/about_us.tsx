import Image from "next/image";
import { getAboutus } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";

const Aboutus = () => {
    const t = useTranslations('Aboutus');
    const locale = useLocale();
    const values = getAboutus(t);
    return (
        <section className="md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto md:mb-32 md:shadow-xl py-8 bg-white relative rounded-2xl">
            <div className="flex flex-wrap justify-center gap-8 mx-5 lg:mx-10">
                {values?.map((item) => (
                    <div
                    className="shadow-xl rounded-2xl py-4 px-4 w-full sm:w-4/9 md:w-4/9 lg:w-2/7 flex flex-col text-center bg-white overflow-hidden"
                    key={item.id}
                    data-aos="fade-up"
                    >
                        <div className="relative">
                            <div className={`absolute -top-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl ${locale === 'ar' ? 'left-10' : 'right-10'}`} />
                        </div>
                        <Image src={item.image} alt={item.title} width={30} height={20} className="shadow-xl shadow-primary/15 rounded-full mb-1" />
                        <h2 className={`text-secondary text-2xl md:text-3xl ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                            <span className="inline-block w-1 bg-primary rounded-full me-2 h-4 md:h-5" />
                            {item.title}
                        </h2>
                        <p className="text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Aboutus