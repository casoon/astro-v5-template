# @astro-v5/blank

**Blank Astro v5 Template** - Absolute minimum starter for new projects.

## What's Included

### Minimal Structure
- ✅ Single homepage (`/`)
- ✅ 404 page
- ✅ Sitemap generator
- ✅ Shared design system (`@astro-v5/shared`)
- ✅ Basic SEO meta tags
- ✅ Environment variable validation (Zod)

### No Extras
- ❌ No blog functionality
- ❌ No components
- ❌ No forms
- ❌ No MDX support
- ❌ No Svelte components
- ❌ No example content

## Perfect For

- Starting completely from scratch
- Learning Astro basics
- Minimal landing pages
- Custom projects that don't need any boilerplate

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Variables

Copy `.env.example` to `.env` and customize:

```bash
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_SITE_NAME=My Astro Site
PUBLIC_ENABLE_DARK_MODE=true
PUBLIC_ENABLE_ANALYTICS=false
```

## Project Structure

```
blank/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/          # Your images (use with optimization)
│   ├── layouts/
│   │   └── BaseLayout.astro # Minimal layout
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── 404.astro        # Not found page
│   │   └── sitemap.xml.ts   # Sitemap generator
│   ├── styles/
│   │   └── global.css       # Imports shared styles
│   ├── env.d.ts             # TypeScript definitions
│   └── env.ts               # Environment validation
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Next Steps

1. **Customize homepage**: Edit `src/pages/index.astro`
2. **Add pages**: Create new `.astro` files in `src/pages/`
3. **Add components**: Create `src/components/` directory
4. **Update env**: Edit `src/env.ts` for your environment variables
5. **Add images**: Place in `src/assets/images/` and run `pnpm optimize-images:blank`

## Upgrading to More Features

If you need more functionality:

- **@astro-v5/base** - Includes components, blog, forms
- **@astro-v5/demo** - Full showcase with examples

## Dependencies

| Package | Purpose |
|---------|---------|
| `astro` | Core framework |
| `@astro-v5/shared` | Shared design system |
| `tailwindcss` | Utility CSS |
| `sharp` | Image optimization |
| `zod` | Environment validation |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview build |
| `pnpm clean` | Clean cache |
| `pnpm format` | Format code |
| `pnpm check` | Run linting |
| `pnpm type-check` | TypeScript check |

## License

MIT © casoon
