import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Schilders", url: "/chatbot-voor-schilders" },
            { text: "Voice AI voor Schilders", url: "/voice-ai-voor-schilders" },
            { text: "SEO voor Schilders", url: "/seo-voor-schilders" },
            { text: "Social Media voor Schilders", url: "/social-media-voor-schilders" },
            { text: "Reviews voor Schilders", url: "/reviews-voor-schilders" },
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
