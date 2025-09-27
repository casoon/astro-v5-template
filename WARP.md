# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Astro 5 template with Tailwind CSS v4, Svelte 5, MDX blog support, and API routes.

## Key Commands
```bash
npm run dev          # Start dev server (port 4321)
npm run build        # Build for production
npm run check        # Run all linting/formatting (use before commits)
npm run update-deps  # Update all dependencies
```

## Architecture
- **Formatter/Linter**: Biome for JS/TS, Prettier for .astro/.svelte
- **Styling**: Tailwind v4 via Vite, Atlas Design System for UI components
- **Content**: MDX blog posts in `src/content/blog/` with Content Collections
- **API**: File-based routing in `src/pages/api/`
- **Components**: Svelte 5 for interactivity, Astro for layouts
- **SEO**: Sitemap generation, RSS feed, Open Graph tags
- **Environment**: Zod-validated env vars in `src/env.ts`

## Important Notes
- View Transitions enabled for smooth page navigation
- Blog posts require `title` and `date` in frontmatter
- Use `getSortedPosts()` utility for blog listing
- Test API endpoints at `/api-test`
- Copy `env.example` to `.env` for environment setup
- Pre-commit hooks run linting via husky/lint-staged
- GitHub Actions CI runs on push/PR to main
