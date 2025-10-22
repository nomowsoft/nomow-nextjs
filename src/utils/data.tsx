import { MenuItem, Aboutus, OurService, Project, StrategicPartner, CustomerPartner } from "./types";

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

export const getProjects: Project[] =  [
    {
        id: 1,
        title: "نظام نمو المالي",
        items: [
            {
                id: 1,
                title : "إدارةاﻟﺤﺴـﺎﺑــــﺎت ﺷـــﺮﻛــــﺔ واﺣﺪة أو شرﻛﺎت ﻣﺘﻌﺪدة"
            }, 
            {
                id: 2,
                title : "اﻟــﻔـــﻮاﺗـــﻴـــــــﺮ"
            }, 
            {
                id: 3,
                title : "إدارةاﻻﺻﻮل"
            }, 
            {
                id: 4,
                title : "اﻟﻤﻮازﻧـﺎت وارﺗﺒﺎﻃﻬﺎ ﺑــﺒــﻨـــــﻮد اﻟـــﺼـــــﺮف"
            },
            {
                id: 5,
                title : "ﺗﻌﺪداﻟﻌﻤﻼت ووﺣﺪات ﻋﻤﻞ وﻣﺮاﻛﺰ ﺗﻜﻠﻔﺔ و ﺗﻘﺎرﻳﺮ ﻻﻣﺤﺪودة"
            }
        ]
    },
    {
        id: 2,
        title: "نظام الخياطة",
        items: [
            {
                id: 1,
                title : "إدارةاﻟﺤﺴـﺎﺑــــﺎت ﺷـــﺮﻛــــﺔ واﺣﺪة أو شرﻛﺎت ﻣﺘﻌﺪدة"
            }, 
            {
                id: 2,
                title : "اﻟــﻔـــﻮاﺗـــﻴـــــــﺮ"
            }, 
            {
                id: 3,
                title : "إدارةاﻻﺻﻮل"
            }, 
            {
                id: 4,
                title : "اﻟﻤﻮازﻧـﺎت وارﺗﺒﺎﻃﻬﺎ ﺑــﺒــﻨـــــﻮد اﻟـــﺼـــــﺮف"
            },
            {
                id: 5,
                title : "ﺗﻌﺪداﻟﻌﻤﻼت ووﺣﺪات ﻋﻤﻞ وﻣﺮاﻛﺰ ﺗﻜﻠﻔﺔ و ﺗﻘﺎرﻳﺮ ﻻﻣﺤﺪودة"
            }
        ]
    }
]

export const getStrategicPartners: StrategicPartner[] =  [
    {
        id: 1,
        title: "ماسا",
        color: "#5B2D74",
        description: "شركة سعودية مقرها الرياض، متخصصة في الاستشارات وتقنية المعلومات، تعمل في مجال التحول الرقمي وتطوير الأنظمة، وهي الشريك الذهبي لشرك Odoo ",
        image: "/strategic_partner/masa-strategic-partner.svg"
    },
    {
        id: 2,
        title: "نموسوفت",
        color: "#23418F",
        description: "شركة سعودية مقرها الرياض، متخصصة في الاستشارات وتقنية المعلومات، تعمل في مجال التحول الرقمي وتطوير الأنظمة، وهي الشريك الذهبي لشرك Odoo",
        image: "/header/logo.svg"
    }
]

export const getCustomerPartners: CustomerPartner[] =  [
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
