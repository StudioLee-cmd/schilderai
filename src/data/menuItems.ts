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
        ]
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
