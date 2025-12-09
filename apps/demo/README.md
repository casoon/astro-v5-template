# Astro v5 Template

[![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Svelte](https://img.shields.io/badge/Svelte-5.43.5-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready Astro starter template with modern tooling and best practices.

## Features

- **Astro 5.15.4** - Static site generation with islands architecture
- **Tailwind CSS 4.1.17** - Utility-first CSS with custom components
- **Svelte 5.43.5** - Reactive components with runes API
- **Atlas Design System** - Glass effects and modern UI components
- **TypeScript** - Full type safety
- **pnpm + Volta** - Fast package management with automatic Node.js versioning
- **MDX Blog** - Content collections with RSS feed
- **SEO Optimized** - Meta tags, sitemap, and Open Graph
- **CI/CD Ready** - GitHub Actions workflow included

## Prerequisites

Install Volta and pnpm:

```bash
# Install Volta (automatic Node.js version management)
curl https://get.volta.sh | bash

# Install pnpm
volta install pnpm
```

Volta will automatically use Node.js 22.21.0 and pnpm 9.15.4 as defined in `package.json`.

## Quick Start

```bash
# Clone or use as template
git clone https://github.com/casoon/astro-v5-template.git
cd astro-v5-template

# Install dependencies
pnpm install

# Start development server
pnpmpnpm dev
```

Open http://localhost:4321

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production (with type-check) |
| `pnpm build:fast` | Build without type-checking |
| `pnpm preview` | Preview production build |
| `pnpm check` | Run linting and format checks |
| `pnpm format` | Format all code |
| `pnpm type-check` | Run TypeScript checks |
| `pnpm update-deps` | Update dependencies |

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── *.astro     # Astro components
│   │   └── *.svelte    # Svelte components
│   ├── content/         # Content collections
│   │   ├── blog/       # Blog posts (MDX)
│   │   └── config.ts   # Content schema
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   │   ├── api/        # API endpoints
│   │   └── blog/       # Blog pages
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
│   ├── utils/           # Utility functions
│   └── env.ts           # Environment validation
├── .github/             # GitHub Actions
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Key Components

### SEO & Meta Tags
- `SEO.astro` - Comprehensive meta tags (Open Graph, Twitter Cards)
- Automatic sitemap generation
- RSS feed for blog posts

### UI Components
- `Card.astro` - Flexible card component (4 variants)
- `GlassCard.astro` - Glass morphism effects
- `Hero.astro` - Landing page hero section
- `BlogCard.astro` - Blog post cards
- `Modal.astro` - Accessible modal dialogs
- `Toast.astro` - Toast notifications
- `ThemeToggle.svelte` - Dark/light mode toggle
- `MobileMenu.astro` - Responsive mobile navigation

### Blog System
- Content collections with Zod schema validation
- MDX support with components
- Draft and featured post flags
- Tag-based filtering
- RSS feed generation

## Configuration

### Environment Variables

Copy `env.example` to `.env`:

```bash
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_SITE_NAME=Your Site Name
PUBLIC_ENABLE_ANALYTICS=false
PUBLIC_ENABLE_DARK_MODE=true
```

Environment variables are validated with Zod in `src/env.ts`.

### Tailwind CSS

Custom utility classes in `src/styles/global.css`:
- `.nav-link` - Navigation links with hover effects
- `.nav-link-mobile` - Mobile navigation styles
- `.card-container` - Content container with glass effect
- `.glass-effect` - Glass morphism background
- `.text-gradient` - Gradient text effect

### Atlas Design System

Imported via `@casoon/atlas-styles` - provides glass effects, gradients, and modern UI components.

## Deployment

### Build for Production

```bash
pnpm build
```

Output is in `dist/` directory.

### Deployment Platforms

The static site can be deployed to:
- **Vercel**: Zero config deployment
- **Netlify**: Drag & drop or Git integration  
- **Cloudflare Pages**: Fast edge deployment
- **GitHub Pages**: Free static hosting
- **Any static host**: Upload `dist/` folder

### GitHub Actions

Included CI workflow (`.github/workflows/ci.yml`):
- Type-checking
- Linting
- Build verification
- Artifact upload

## Development

### Adding Blog Posts

Create MDX files in `src/content/blog/`:

```mdx
---
title: Your Post Title
description: Post description
date: 2025-01-09
author: Your Name
tags: ["astro", "tailwind"]
draft: false
featured: false
---

Your content here...
```

### Creating Pages

Add `.astro` files to `src/pages/`:

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <h1>Content</h1>
</BaseLayout>
```

### API Routes

Create endpoints in `src/pages/api/`:

```typescript
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ data: 'value' }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.15.4 | Static site generator |
| **Tailwind CSS** | 4.1.17 | Utility-first CSS |
| **Svelte** | 5.43.5 | Reactive components |
| **TypeScript** | 5.9.3 | Type safety |
| **pnpm** | 9.15.4 | Package manager |
| **Volta** | - | Node.js version manager |
| **Biome** | 2.3.4 | Linter & formatter |
| **Zod** | 4.1.12 | Runtime validation |
| **MDX** | 4.3.10 | Markdown with components |

## License

MIT © casoon

## Links

- [GitHub Repository](https://github.com/casoon/astro-v5-template)
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Svelte Documentation](https://svelte.dev/docs)
- [pnpm Documentation](https://pnpm.io)
- [Volta Documentation](https://volta.sh)
