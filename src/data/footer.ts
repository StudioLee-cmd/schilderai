import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "Focus op het schilderwerk, wij op de rest. Wij regelen je telefoontjes, planning en marketing, zodat jij kunt doen waar je goed in bent.",
    quickLinks: [
        { text: "Functies", url: "/#features" },
        { text: "Blog", url: "/blog" },
        { text: "Chatbot voor Schilders", url: "/chatbot" },
        { text: "Voice AI voor Schilders", url: "/voice-ai" },
        { text: "SEO voor Schilders", url: "/seo" },
        { text: "Social Media", url: "/social-media" },
        { text: "Reviews", url: "/reviews" }
    ],
    email: 'tim@schilderai.nl',
    telephone: '+31612345678',
    socials: {
        youtube: 'https://www.youtube.com/@DIGITAL.STUDIOLEE',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}