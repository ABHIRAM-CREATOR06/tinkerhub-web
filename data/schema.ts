export interface SchemaOrganization {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  address?: {
    "@type": string;
    addressCountry: string;
    addressRegion: string;
    addressLocality: string;
  };
  contactPoint?: {
    "@type": string;
    contactType: string;
    url?: string;
  };
}

export interface SchemaBreadcrumb {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tinkerhub-sngce.com";

export const organizationSchema: SchemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TinkerHub SNGCE",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: "Student Maker Community at SNGCE, Kerala. Empowering students with hands-on maker culture, study jams, open source, and technology learning.",
  sameAs: [
    "https://twitter.com/TinkerHubSNGCE",
    "https://discord.gg/tinkerhub",
    "https://www.instagram.com/tinkerhubsngce",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Kerala",
    addressLocality: "Kottayam",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General",
    url: siteUrl,
  },
};

export const createBreadcrumbSchema = (items: { name: string; url: string }[]): SchemaBreadcrumb => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.name,
      item: item.url,
    })),
  ],
});

export const eventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  location: {
    "@type": "Place",
    name: event.location,
  },
  url: event.url,
  organizer: {
    "@type": "Organization",
    name: "TinkerHub SNGCE",
    url: siteUrl,
  },
});
