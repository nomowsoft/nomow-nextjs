import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"

const Hero = () => {
    const t = useTranslations("Hero");
    return (
        <section className="">
            <div className="absolute -top-20 w-[100%] h-40 sm:h-50 md:h-100 bg-primary/10 blur-3xl" />
            <div className="absolute top-80 md:top-130 w-[100%] h-40 sm:h-20 md:h-50 bg-primary/10 blur-3xl" />
            <div className="flex flex-col md:flex-row py-8 mx-5 sm:mx-10 md:mx-16 lg:max-w-screen-lg 2xl:max-w-screen-xl lg:mx-auto items-center">
                <div className="w-full md:w-3/5 py-8 md:py-2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        <span className="text-primary">{t('title1')}</span>
                        <span className="text-secondary">{t('title2')}</span>
                    </h1>
                    <p className="">
                        <span className="inline-block w-1 bg-primary rounded-full me-1 h-5 md:h-7" />
                        <span className="text-2xl md:text-4xl font-medium text-secondary">
                            {t('description')}
                        </span>
                    </p>
                    <Button className="mt-8 text-xl" variant="default" size="lg">
                        {t('textButton')} 
                        <Image src="/hero/arrow-right-icon.svg" alt="hero" width={30} height={20} />
                    </Button>
                </div>
                <div className="hidden md:flex md:w-2/5 py-8 md:py-2 justify-center">
                    <Image src="/hero/Property.svg" alt="hero" width={600} height={20} />
                </div>

            </div>
        </section>
    )
}

export default Hero