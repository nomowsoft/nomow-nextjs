import Navitem from "./nav_item";
import { useLocale, useTranslations } from "next-intl";
import { getMenuItem } from '@/utils/data';

const Navlink = () => {
    const t = useTranslations('MenuItem');
    const values = getMenuItem(t);
    const locale = useLocale();
    return (
        <ul className="flex flex-col text-lg md:flex-row md:mt-0">
            {values.map((item) => (
                <Navitem
                    name={item.name}
                    key={item.name}
                    href={item.href ? `/${locale}/${item.href}` : `/${locale}`}
                />
            ))}
        </ul>
    )
}

export default Navlink
