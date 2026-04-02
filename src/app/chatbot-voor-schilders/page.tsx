import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ChatbotContent from "@/app/chatbot/ChatbotContent";

export const metadata: Metadata = {
    title: `Chatbot voor Schilders | ${siteDetails.siteName}`,
    description: `Ontdek onze chatbot oplossing speciaal voor schilders. ${siteDetails.siteName} helpt je groeien.`,
};

export default function Page() {
    return <ChatbotContent />;
}
