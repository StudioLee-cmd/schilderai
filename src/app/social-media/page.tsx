import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SocialMediaContent from "./SocialMediaContent";

const niche = siteDetails.siteName.replace(/AI$/i, "").toLowerCase();

export const metadata: Metadata = {
  title: `Social Media voor ${niche}s | Strategie & Uitvoering`,
  description: `Social media voor ${niche}s: content planning, AI-gegenereerde posts, automatische scheduling en maandelijkse analyse — inclusief consulting.`,
  openGraph: {
    title: `Social Media voor ${niche}s | ${siteDetails.siteName}`,
    description: `Volledige social media strategie + uitvoering voor ${niche}s. Van content planning tot automatisch posten. Consulting inbegrepen.`,
    url: `${siteDetails.siteUrl}social-media`,
    type: "website",
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}social-media`,
  },
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
