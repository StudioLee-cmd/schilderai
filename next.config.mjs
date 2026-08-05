/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            // ⚖️ VERKOCHT MERK (Tim 23-07): vanaf deze site wordt niets meer direct
            // verkocht. De zes transactie-routes staan dicht; de pagina's zelf blijven
            // in de repo staan. `permanent: false` = 307, bewust GEEN 301: de
            // eigendoms-overdracht ligt nog open, dus we claimen niets permanents.
            { source: '/tarieven', destination: '/', permanent: false },
            { source: '/gratis-scan', destination: '/', permanent: false },
            { source: '/gratis-website', destination: '/', permanent: false },
            { source: '/free-trial', destination: '/', permanent: false },
            { source: '/review-pakket', destination: '/', permanent: false },
            { source: '/aanmelding-gelukt', destination: '/', permanent: false },
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
            { source: '/blog/meer-klussen-met-ai', destination: '/blog/meer-google-reviews-als-schilder', permanent: true },
            { source: '/blog/google-reviews-schilder-meer-klussen', destination: '/blog/meer-google-reviews-als-schilder', permanent: true },
            { source: '/blog/vindbaarheid-schilder-meer-klanten-via-google', destination: '/blog/hoe-schilders-meer-klanten-vinden-via-google', permanent: true },
            { source: '/blog/google-bedrijfsprofiel-schilder-optimaliseren', destination: '/blog/google-bedrijfsprofiel-schilder-lokaal', permanent: true },
        ];
    },
};

export default nextConfig;
