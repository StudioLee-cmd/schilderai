import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Schilders", url: "/chatbot" },
            { text: "Voice AI voor Schilders", url: "/voice-ai" },
            { text: "SEO voor Schilders", url: "/seo" },
            { text: "Social Media voor Schilders", url: "/social-media" },
            { text: "Reviews voor Schilders", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
