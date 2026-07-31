# SEO and Crawlability Guide

This document explains the SEO configuration and how AI agents can crawl the TinkerHub SNGCE website.

## Overview

The website is fully optimized for:
- ✅ Search engines (Google, Bing, DuckDuckGo)
- ✅ AI agents (ChatGPT, Claude, Gemini, etc.)
- ✅ Social media sharing (Open Graph, Twitter Card)
- ✅ Structured data for rich snippets

## Files and Configuration

### 1. **robots.ts** - Crawler Control
- Located in `/app/robots.ts`
- Controls which bots can crawl the site
- Explicitly allows AI agents:
  - GPTBot (OpenAI)
  - Claude-Web (Anthropic)
  - CCBot (Common Crawl)
  - Googlebot
  - Bingbot
  - And more

### 2. **sitemap.ts** - XML Sitemap
- Located in `/app/sitemap.ts`
- Auto-generates sitemap for all pages
- Helps search engines discover and index pages
- Accessible at `/sitemap.xml`

### 3. **layout.tsx** - Root Metadata
- Enhanced metadata with:
  - Comprehensive open graph tags
  - Twitter card configuration
  - JSON-LD organization schema
  - Canonical URLs
  - Google verification support

### 4. **schema.ts** - Structured Data
- Located in `/data/schema.ts`
- Provides schema templates for:
  - Organization schema
  - Event schema
  - Breadcrumb schema
- Used by AI agents to understand page structure

### 5. **seo-utils.ts** - Helper Functions
- Located in `/data/seo-utils.ts`
- Utilities for:
  - Generating page metadata
  - Creating structured data
  - Creating AI-friendly schemas

## Environment Variables

Set these in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://tinkerhub-sngce.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_id
```

## How AI Agents Crawl

### GPTBot (OpenAI's ChatGPT)
- Crawls following `/robots.txt` rules
- Respects `User-Agent: GPTBot` directives
- Uses structured data for content understanding

### Claude-Web (Anthropic's Claude)
- Crawls following `/robots.txt` rules
- Respects `User-Agent: Claude-Web` directives
- Supports extended content extraction

### CCBot (Common Crawl)
- Crawls following general `/robots.txt` rules
- Used by multiple AI research projects
- Respects `User-Agent: CCBot` directives

## Best Practices for AI Crawlability

### 1. Content Markup
All pages include JSON-LD structured data:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TinkerHub SNGCE",
  ...
}
</script>
```

### 2. Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Descriptive link text
- Alt text for images
- List structures for lists

### 3. Meta Tags
- `meta charset="utf-8"`
- `meta viewport` for mobile
- `meta description` for summaries
- `meta robots` for indexing control

### 4. Canonical URLs
- Every page has a canonical URL
- Prevents duplicate content issues
- Helps AI agents understand page relationships

## Implementation Guide

### Using on Existing Pages

```typescript
import { generatePageMetadata } from "@/data/seo-utils";
import { createBreadcrumbSchema } from "@/data/schema";

export const metadata = generatePageMetadata({
  title: "Study Jam",
  description: "Learn and grow together at our study jams",
  path: "/study-jam",
  keywords: ["Study", "Learning", "Collaboration"],
});

export default function StudyJamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            createBreadcrumbSchema([
              { name: "Study Jam", url: "https://tinkerhub-sngce.com/study-jam" }
            ])
          ),
        }}
      />
      {/* Page content */}
    </>
  );
}
```

## Verification

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://tinkerhub-sngce.com`
3. Add verification ID to `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
   ```

### Test Structured Data
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Paste your URL to validate schema markup

### Check Crawlability
- Visit `https://tinkerhub-sngce.com/robots.txt`
- Visit `https://tinkerhub-sngce.com/sitemap.xml`
- Use tools like [Screaming Frog](https://www.screamingfrog.co.uk/) for deep crawls

## Monitoring

### Search Performance
- Monitor impressions and clicks in Google Search Console
- Track keyword rankings
- Analyze crawl statistics

### AI Agent Activity
- Check server logs for GPTBot, Claude-Web, CCBot user agents
- Monitor crawl patterns and frequency
- Verify content extraction accuracy

## Future Enhancements

- [ ] Add dynamic sitemaps for event listings
- [ ] Implement FAQ schema
- [ ] Add event schema for study jams
- [ ] Setup Google Analytics with events
- [ ] Implement hreflang for multi-language support

## Resources

- [Next.js SEO Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [JSON-LD Specifications](https://json-ld.org/)
- [Open Graph Protocol](https://ogp.me/)
