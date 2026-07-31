import { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "page";
  keywords?: string[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tinkerhub-sngce.com";
const siteName = "TinkerHub SNGCE";

export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path = "",
    image = "/og-image.jpg",
    type = "website",
    keywords = [],
  } = options;

  const fullTitle = `${title} | ${siteName}`;
  const url = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_IN",
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@TinkerHubSNGCE",
      images: [image.startsWith("http") ? image : `${siteUrl}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function generateStructuredData(schema: Record<string, any>) {
  return {
    __html: JSON.stringify(schema),
  };
}

/**
 * Helper to create JSON-LD script tags for AI agent crawling
 * Supports GPTBot, Claude, and other AI systems
 */
export function createAIFriendlySchema(data: {
  title: string;
  description: string;
  content?: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: data.title,
    description: data.description,
    content: data.content || data.description,
    author: {
      "@type": "Organization",
      name: data.author || "TinkerHub SNGCE",
    },
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    keywords: data.keywords?.join(", "),
  };
}
