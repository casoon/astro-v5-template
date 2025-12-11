# Astro v5 Workspace

[![CI](https://github.com/casoon/astro-v5-template/actions/workflows/ci.yml/badge.svg)](https://github.com/casoon/astro-v5-template/actions/workflows/ci.yml)
[![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Version](https://img.shields.io/badge/Version-1.4.2-blue)]()

Production-ready Astro v5 monorepo with pnpm workspaces, shared design system, and centralized dependency management.

## Project Structure

```
astro-v5-template/
├── apps/
│   ├── blank/   - Absolute minimum (blank canvas)
│   ├── base/    - Moderate starter with components
│   └── demo/    - Full-featured demo site
├── packages/
│   ├── config/  - Shared TypeScript configuration
│   ├── styles/  - CSS variables and design tokens
│   ├── ui/      - Shared UI components
│   └── utils/   - Shared utilities
└── pnpm-workspace.yaml  - Workspace & catalog config
```

| App | Description | Use When |
|-----|-------------|----------|
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
| `pnpm build` | Build all apps |
| `pnpm build:demo` | Build demo site |
| `pnpm check` | Run Biome + ESLint |
| `pnpm format` | Format all files |
| `pnpm optimize-images` | Generate responsive images |

## Dependency Management

This workspace uses **pnpm catalog** for centralized version management. All shared dependencies are defined once in `pnpm-workspace.yaml`:

```yaml
catalog:
  astro: ^5.15.4
  tailwindcss: ^4.1.17
  svelte: ^5.43.5
  typescript: ^5.9.3
  '@casoon/atlas-styles': ^0.0.7
  # ... more dependencies
```

Apps reference catalog versions with `catalog:`:

```json
{
  "dependencies": {
    "astro": "catalog:",
    "tailwindcss": "catalog:",
    "@casoon/atlas-styles": "catalog:"
  }
}
```

**Benefits:**
- Update versions in one place
- Consistent versions across all apps
- No version drift between packages

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

Each app uses Zod for type-safe env configuration in `src/env.ts`:

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
import { createSitemapRoute } from '@astro-v5/utils';

const pageModules = import.meta.glob('./**/*.astro', { eager: true });

export const GET = createSitemapRoute({
  pageModules,
  getBlogPosts: () => getCollection('blog'),
});
```

## Adding New Sites

```bash
# 1. Copy template
cp -r apps/base apps/my-site

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
| @casoon/atlas-styles | Design system |
| @casoon/astro-speed-measure | Build performance metrics |
| @casoon/astro-webvitals | Web Vitals monitoring |
| Biome | Linter & formatter (JS/TS) |
| ESLint | Linter (Astro) |
| Prettier | Formatter (Astro/Svelte) |
| Husky | Git hooks |
| Sharp | Image optimization |
| Zod | Runtime validation |

## Features

- **Shared Design System** - CSS variables, animations, utilities via `@astro-v5/styles`
- **UI Component Library** - Reusable components via `@astro-v5/ui`
- **Image Optimization** - WebP/AVIF generation with Sharp
- **SEO Components** - PageSEO, BlogSEO with JSON-LD
- **Interactive Maps** - Leaflet.js with GDPR consent
- **Web Vitals** - Performance monitoring with `@casoon/astro-webvitals`
- **Build Metrics** - Performance reports with `@casoon/astro-speed-measure`
- **Blog System** - MDX support with Content Collections

## Deployment

Build and deploy from `apps/*/dist/`:

```bash
pnpm build:demo   # Build demo -> apps/demo/dist/
pnpm build:base   # Build base -> apps/base/dist/
pnpm build:blank  # Build blank -> apps/blank/dist/
```

Supports: Vercel, Netlify, Cloudflare Pages, GitHub Pages

## Links

- [Demo Site](https://astrov5.casoon.dev)
- [GitHub Repository](https://github.com/casoon/astro-v5-template)

## License

MIT © casoon
