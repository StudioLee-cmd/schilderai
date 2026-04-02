import React from 'react';
import { getAllPosts } from '@/utils/posts';
import { getAuthorBySlug } from '@/data/authors';
import Container from '@/components/Container';
import BlogGrid from '@/components/BlogGrid';

const CLUSTER_LABELS: Record<string, string> = {
    "voice-ai": "Voice AI",
    "chatbot": "Chatbot",
    "review-automatisering": "Reviews",
    "afspraak-herinneringen": "Herinneringen",
    "no-shows": "No-Shows",
    "lead-opvolging": "Leads",
    "crm-klantbeheer": "Klantbeheer",
    "email-marketing": "E-mail",
    "sms-whatsapp": "WhatsApp",
    "social-media": "Social Media",
    "vindbaarheid": "Vindbaarheid",
    "google-bedrijfsprofiel": "Google Profiel",
    "website-conversie": "Website",
    "online-reputatie": "Reputatie",
    "branding": "Branding",
    "mond-tot-mondreclame": "Mond-tot-mond",
    "samenwerkingen": "Samenwerking",
    "concurrentieanalyse": "Concurrentie",
    "prijzen-communiceren": "Prijzen",
    "offerte-proces": "Offertes",
    "administratie": "Administratie",
    "seizoenswerk": "Seizoenswerk",
    "klantcommunicatie": "Communicatie",
    "klanttevredenheid": "Tevredenheid",
    "nazorg": "Nazorg",
    "portfolio": "Portfolio",
    "specialisatie": "Specialisatie",
    "verduurzaming": "Duurzaam",
    "tools-uitleg": "Tools",
    "ai-automatisering": "AI",
    "software-vergelijking": "Software",
    "certificering": "Certificering",
    "spoedklussen": "Spoedklussen",
    "mkb-groei": "Groei",
    "kleuradvies": "Kleuradvies",
};

const BlogPage = async () => {
    const posts = await Promise.resolve(getAllPosts());

    // Build posts with author data for the client component
    const postsWithAuthors = posts.map((post) => {
        const author = getAuthorBySlug(post.authorSlug);
        return {
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            date: post.date,
            image: post.image,
            tags: post.tags,
            cluster: post.cluster,
            author: author ? { name: author.name, image: author.image } : null,
        };
    });

    // Extract unique clusters with counts (only clusters that have articles)
    const clusterCounts = new Map<string, number>();
    posts.forEach((post) => {
        if (post.cluster) {
            clusterCounts.set(post.cluster, (clusterCounts.get(post.cluster) || 0) + 1);
        }
    });

    const clusters = Array.from(clusterCounts.entries())
        .map(([id, count]) => ({
            id,
            label: CLUSTER_LABELS[id] || id,
            count,
        }))
        .sort((a, b) => b.count - a.count);

    return (
        <div className="py-24 bg-[var(--background)]">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">Waarom Kiezen Voor SchilderAI</h1>
                    <p className="text-xl text-[var(--foreground-accent)] max-w-2xl mx-auto">
                        Het laatste nieuws, tips en inzichten over AI voor schilders.
                    </p>
                </div>

                <BlogGrid posts={postsWithAuthors} clusters={clusters} />
            </Container>
        </div>
    );
};

export default BlogPage;
