# Astro v5 Workspace

[![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Version](https://img.shields.io/badge/Version-1.4.2-blue)]()

Production-ready Astro v5 monorepo with pnpm workspaces and shared design system.

## ✨ Version 1.4.2

### Code Quality & Developer Experience
- **Hybrid Linting** - Biome (JS/TS/JSON) + ESLint (Astro) + Prettier (Astro/Svelte/CSS)
- **Husky + lint-staged** - Pre-commit hooks for automatic formatting
- **Improved Sitemap** - Uses `Astro.site` as single source of truth

## Packages

```
packages/
├── shared/  - Shared CSS variables and design system
├── blank/   - Absolute minimum (blank canvas)
├── base/    - Moderate starter with components
└── demo/    - Full-featured demo site
```

| Package | Description | Use When |
|---------|-------------|----------|
| **blank** | Single homepage + 404, no components | Starting from scratch |
| **base** | All components, blog, forms | Need solid foundation |
| **demo** | Full showcase, 4 blog posts | Exploring features |

## Quick Start

```bash
# Prerequisites: Volta (recommended) or Node.js 24+
curl https://get.volta.sh | bash
volta install pnpm

# Install & run
git clone https://github.com/casoon/astro-v5-template.git
cd astro-v5-template
pnpm install
pnpm dev
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start demo site |
| `pnpm dev:blank` | Start blank template |
| `pnpm dev:base` | Start base template |
| `pnpm build` | Build all packages |
| `pnpm check` | Run Biome + ESLint |
| `pnpm format` | Format all files |
| `pnpm optimize-images` | Generate responsive images |

## Code Quality

Hybrid setup for best performance:

| File Type | Linting | Formatting |
|-----------|---------|------------|
| JS/TS/JSON | Biome | Biome |
| Astro | ESLint | Prettier |
| Svelte/CSS/MD | - | Prettier |

```bash
pnpm check        # Run all checks
pnpm biome:fix    # Auto-fix JS/TS/JSON
pnpm lint:astro   # Lint Astro files
```

## Configuration

### Environment Variables

Each package uses Zod for type-safe env configuration in `src/env.ts`:

```typescript
const envSchema = createEnvSchema({
  PUBLIC_SITE_URL: 'https://example.com',
  PUBLIC_SITE_NAME: 'My Site',
});
export const env = validateEnv(envSchema, import.meta.env);
```

### Sitemap

Uses `Astro.site` from `astro.config.mjs` automatically:

```typescript
// src/pages/sitemap.xml.ts
import { createSitemapRoute } from '@astro-v5/shared/utils';

const pageModules = import.meta.glob('./**/*.astro', { eager: true });

export const GET = createSitemapRoute({
  pageModules,
  getBlogPosts: () => getCollection('blog'), // optional
});
```

## Adding New Sites

```bash
# 1. Copy template
cp -r packages/base packages/my-site

# 2. Update package.json name
"name": "@astro-v5/my-site"

# 3. Install & run
pnpm install
pnpm --filter @astro-v5/my-site dev
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Astro 5.15 | Static site generator |
| Tailwind CSS 4 | Utility-first CSS |
| Svelte 5 | Reactive components |
| Biome | Linter & formatter (JS/TS) |
| ESLint | Linter (Astro) |
| Prettier | Formatter (Astro/Svelte) |
| Husky | Git hooks |
| Sharp | Image optimization |
| Zod | Runtime validation |

## Features

- **Shared Design System** - CSS variables, animations, utilities
- **Image Optimization** - WebP/AVIF generation with Sharp
- **SEO Components** - PageSEO, BlogSEO with JSON-LD
- **Interactive Maps** - Leaflet.js with GDPR consent
- **Web Vitals** - Performance monitoring
- **Blog System** - MDX support with Content Collections

## Deployment

Build and deploy from `packages/*/dist/`:

```bash
pnpm build:demo   # Build demo
pnpm build:base   # Build base
```

Supports: Vercel, Netlify, Cloudflare Pages, GitHub Pages

## Links

- [Demo Site](https://astrov5.casoon.dev)
- [GitHub Repository](https://github.com/casoon/astro-v5-template)

## License

MIT © casoon
