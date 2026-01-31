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
            { id: 1, title: t('project1_feat1') },
            { id: 2, title: t('project1_feat2') },
            { id: 3, title: t('project1_feat3') },
            { id: 4, title: t('project1_feat4') },
            { id: 5, title: t('project1_feat5') }
        ],
        image: "/products/financial_system.webp"
    },
    {
        id: 2,
        title: t('project2_title'),
        items: [
            { id: 1, title: t('project2_feat1') },
            { id: 2, title: t('project2_feat2') },
            { id: 3, title: t('project2_feat3') },
            { id: 4, title: t('project2_feat4') },
            { id: 5, title: t('project2_feat5') }
        ],
        image: "/products/hr_system.webp"
    },
    {
        id: 3,
        title: t('project3_title'),
        items: [
            { id: 1, title: t('project3_feat1') },
            { id: 2, title: t('project3_feat2') },
            { id: 3, title: t('project3_feat3') },
            { id: 4, title: t('project3_feat4') },
            { id: 5, title: t('project3_feat5') }
        ],
        image: "/products/real_estate_system.webp"
    },
    {
        id: 4,
        title: t('project4_title'),
        items: [
            { id: 1, title: t('project4_feat1') },
            { id: 2, title: t('project4_feat2') },
            { id: 3, title: t('project4_feat3') },
            { id: 4, title: t('project4_feat4') },
            { id: 5, title: t('project4_feat5') },
            { id: 6, title: t('project4_feat6') },
            { id: 7, title: t('project4_feat7') },
            { id: 8, title: t('project4_feat8') }
        ],
        image: "/products/laweyr.webp"
    },
    {
        id: 5,
        title: t('project5_title'),
        items: [
            { id: 1, title: t('project5_feat1') },
            { id: 2, title: t('project5_feat2') },
            { id: 3, title: t('project5_feat3') },
            { id: 4, title: t('project5_feat4') },
            { id: 5, title: t('project5_feat5') }
        ],
        image: "/products/teckite.webp"
    },
    {
        id: 6,
        title: t('project6_title'),
        items: [
            { id: 1, title: t('project6_feat1') },
            { id: 2, title: t('project6_feat2') },
            { id: 3, title: t('project6_feat3') },
            { id: 4, title: t('project6_feat4') },
            { id: 5, title: t('project6_feat5') }
        ],
        image: "/products/tasneia.webp"
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
        image: "/strategic_partner/Calque_1.svg"
    }
]

export const getOurClients: OurClient[] = [
    {
        id: 1,
        image: "/clients/1.png"
    },
    {
        id: 2,
        image: "/clients/2.png"
    },
    {
        id: 3,
        image: "/clients/3.png"
    },
    {
        id: 4,
        image: "/clients/4.png"
    },
    {
        id: 5,
        image: "/clients/5.webp"
    },
    {
        id: 6,
        image: "/clients/6.png"
    },
    {
        id: 7,
        image: "/clients/7.png"
    },
    {
        id: 8,
        image: "/clients/8.jpg"
    },
    {
        id: 9,
        image: "/clients/9.png"
    },
    {
        id: 10,
        image: "/clients/10.png"
    },
    {
        id: 11,
        image: "/clients/11.jpg"
    },
    {
        id: 12,
        image: "/clients/12.jpg"
    },
    {
        id: 13,
        image: "/clients/13.png"
    },
    {
        id: 14,
        image: "/clients/14.png"
    },
    {
        id: 15,
        image: "/clients/15.png"
    },
    {
        id: 16,
        image: "/clients/16.png"
    },
    {
        id: 17,
        image: "/clients/17.png"
    },
    {
        id: 18,
        image: "/clients/18.jpg"
    },
    {
        id: 19,
        image: "/clients/19.jpg"
    },
]
