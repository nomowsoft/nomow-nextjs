import { MenuItem, Aboutus, OurService, Project, StrategicPartner, OurClient } from "./types";

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

export const getProjects = (t: (key: string) => string): Project[] => [
    {
        id: 1,
        title: t('project1_title'),
        items: [
            {
                id: 1,
                title: t('project1_feat1')
            },
            {
                id: 2,
                title: t('project1_feat2')
            },
            {
                id: 3,
                title: t('project1_feat3')
            },
            {
                id: 4,
                title: t('project1_feat4')
            },
            {
                id: 5,
                title: t('project1_feat5')
            }
        ],
        image: "/strategic_partner/masa-strategic-partner.svg"
    },
    {
        id: 2,
        title: t('project2_title'),
        items: [
            {
                id: 1,
                title: t('project2_feat1')
            },
            {
                id: 2,
                title: t('project2_feat2')
            },
            {
                id: 3,
                title: t('project2_feat3')
            },
            {
                id: 4,
                title: t('project2_feat4')
            },
            {
                id: 5,
                title: t('project2_feat5')
            }
        ],
        image: "/header/logo.svg"
    }
]

export const getStrategicPartners = (t: (key: string) => string): StrategicPartner[] => [
    {
        id: 1,
        title: t('partner1_title'),
        color: "#5B2D74",
        description: t('partner1_desc'),
        image: "/strategic_partner/masa-strategic-partner.svg"
    },
    {
        id: 2,
        title: t('partner2_title'),
        color: "#23418F",
        description: t('partner2_desc'),
        image: "/header/logo.svg"
    }
]

export const getOurClients: OurClient[] = [
    {
        id: 1,
        image: "/strategic_partner/masa-strategic-partner.svg"
    },
    {
        id: 2,
        image: "/header/logo.svg"
    },
    {
        id: 3,
        image: "/strategic_partner/masa-strategic-partner.svg"
    },
    {
        id: 4,
        image: "/header/logo.svg"
    },
    {
        id: 5,
        image: "/strategic_partner/masa-strategic-partner.svg"
    },
    {
        id: 6,
        image: "/header/logo.svg"
    }
]
