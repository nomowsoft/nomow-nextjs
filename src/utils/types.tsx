export type MenuItem = {
    name: string;
    href: string;
    isActive: boolean;
};
export type Aboutus = {
    id: number;
    title: string;
    description: string;
    image: string;
};
export type OurService = {
    id: number;
    title: string;
};
export type Items = {
    id: number;
    title: string;
};
export type Project = {
    id: number;
    title: string;
    items: Items[];
};
export type StrategicPartner = {
    id: number;
    title: string;
    color: string;
    description: string;
    image: string;
};
export type CustomerPartner = {
    id: number;
    image: string;
};
