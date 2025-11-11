# SEO Components

Comprehensive SEO components with structured data, Open Graph, Twitter Cards, and canonical URLs.

## Components

### PageSEO

General-purpose SEO component for regular pages.

**Features:**
- JSON-LD structured data (WebPage, BreadcrumbList)
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Meta tags for description, keywords, author

**Usage:**

```astro
---
import { PageSEO } from '@astro-v5/shared/components/seo';
---

<head>
  <PageSEO 
    title="About Us"
    description="Learn more about our company"
    keywords={["company", "about", "team"]}
    author="Your Name"
    siteName="Your Site"
    twitterHandle="yourhandle"
    image="/images/about-og.jpg"
  />
</head>
```

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Page title |
| `description` | `string` | ❌ | - | Page description |
| `keywords` | `string[]` | ❌ | `[]` | SEO keywords |
| `author` | `string` | ❌ | `'Your Name'` | Content author |
| `siteName` | `string` | ❌ | `'Your Site'` | Site name for OG |
| `twitterHandle` | `string` | ❌ | - | Twitter handle |
| `image` | `string` | ❌ | `/favicon.svg` | OG image URL |
| `lastmod` | `string\|Date` | ❌ | - | Last modified date |
| `locale` | `string` | ❌ | `'en-US'` | Page locale |

---

### BlogSEO

Specialized SEO component for blog articles.

**Features:**
- JSON-LD structured data (Article, BreadcrumbList)
- Article-specific Open Graph tags
- Twitter Cards with reading time
- Author and publisher metadata
- Category/section tagging

**Usage:**

```astro
---
import { BlogSEO } from '@astro-v5/shared/components/seo';
import { getEntry } from 'astro:content';

const post = await getEntry('blog', slug);
---

<head>
  <BlogSEO 
    title={post.data.title}
    description={post.data.description}
    publishDate={post.data.publishDate}
    slug={slug}
    author="John Doe"
    category="Tutorial"
    readingTime="5 min"
    keywords={["astro", "tutorial", "web"]}
  />
</head>
```

**Props:**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | ✅ | - | Article title |
| `publishDate` | `Date\|string` | ✅ | - | Publication date |
| `slug` | `string` | ✅ | - | Article slug |
| `description` | `string` | ❌ | - | Article description |
| `author` | `string` | ❌ | `'Your Name'` | Article author |
| `category` | `string` | ❌ | `'Uncategorized'` | Article category |
| `readingTime` | `string` | ❌ | - | Reading time (e.g., "5 min") |
| `keywords` | `string[]` | ❌ | `[]` | Article keywords |
| `image` | `string` | ❌ | `/favicon.svg` | Article cover image |
| `lastmod` | `Date\|string` | ❌ | `publishDate` | Last modified date |
| `siteName` | `string` | ❌ | `'Your Site'` | Site name |
| `twitterHandle` | `string` | ❌ | - | Twitter handle |
| `locale` | `string` | ❌ | `'en-US'` | Article locale |

---

## Configuration

Both components automatically detect the site URL from Astro's configuration:

```js
// astro.config.mjs
export default defineConfig({
  site: 'https://yourdomain.com',
});
```

---

## JSON-LD Structured Data

Both components generate valid JSON-LD structured data for search engines:

### PageSEO generates:
- `WebPage` schema with author and publisher
- `BreadcrumbList` schema with navigation path

### BlogSEO generates:
- `Article` schema with publication dates, author, reading time
- `BreadcrumbList` schema with blog navigation

---

## Best Practices

1. **Always provide a description** - Improves click-through rates in search results
2. **Use relevant keywords** - But don't overdo it (3-5 keywords is good)
3. **Provide high-quality images** - OG images should be 1200x630px
4. **Keep titles under 60 characters** - To avoid truncation in search results
5. **Keep descriptions under 160 characters** - For optimal display in SERPs

---

## Examples

### Landing Page

```astro
<PageSEO 
  title="Professional Web Development Services"
  description="Expert web development with modern technologies"
  keywords={["web development", "react", "astro"]}
  image="/images/hero.jpg"
/>
```

### Blog Post

```astro
<BlogSEO 
  title="10 Tips for Better SEO"
  description="Improve your website's search rankings"
  publishDate={new Date('2024-01-15')}
  slug="10-tips-better-seo"
  category="SEO"
  readingTime="8 min"
  keywords={["SEO", "search optimization", "rankings"]}
/>
```

### About Page

```astro
<PageSEO 
  title="About Our Team"
  description="Meet the people behind the product"
  keywords={["team", "company", "about"]}
/>
```
