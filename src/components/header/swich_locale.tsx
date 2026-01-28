import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Languages } from "lucide-react";

const SwitchLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('SwitchLocale');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === 'ar' ? 'en' : 'ar';
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.replace(newPath);
  };

  if (!mounted) {
    return <div className="p-3 bg-gray-50 dark:bg-white/10 rounded-2xl w-20 h-12" />;
  }

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/10 rounded-2xl text-secondary dark:text-white hover:bg-primary hover:text-secondary transition-all duration-300 font-black group h-12"
      aria-label="Toggle language"
    >
      <Languages className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm uppercase tracking-wider">{locale === 'ar' ? 'EN' : 'AR'}</span>
    </button>
  );
};

export default SwitchLocale;