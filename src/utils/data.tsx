import { MenuItem, Aboutus, OurService } from "./types";

export const getMenuItem = (t: (key: string) => string): MenuItem[] => [
    {
        name: t('home'),
        href: "",
        isActive: true,
    }
]

export const getAboutus = (t: (key: string) => string): Aboutus[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        image: "/about_us/Icon1.svg"
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        image: "/about_us/Icon2.svg"
    },
    {
        id: 3,
        title: t('title3'),
        description: t('description3'),
        image: "/about_us/Icon3.svg"
    }
]

export const getOurServices = (t: (key: string) => string): OurService[] => [
    {
        id: 1,
        title: t('title1')
    },
    {
        id: 2,
        title: t('title2')
    },
    {
        id: 3,
        title: t('title3')
    },
    {
        id: 4,
        title: t('title4')
    },
    {
        id: 5,
        title: t('title5')
    },
    {
        id: 6,
        title: t('title6')
    }
]
