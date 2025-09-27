# Astro V5 Template

A modern, production-ready template for Astro projects with Tailwind CSS v4, Svelte 5, and comprehensive developer experience.

**Live Demo:** [astrov5.casoon.dev](https://astrov5.casoon.dev/)

## 🚀 Features

### Core Stack
- **Astro 5.x** - Latest version with View Transitions
- **Tailwind CSS v4** - Next-gen CSS with Vite integration
- **Svelte 5** - For interactive components
- **TypeScript** - Full type safety with strict mode
- **MDX** - Enhanced markdown for blog posts

### Developer Experience
- **Biome + Prettier** - Dual formatter setup for all file types
- **Husky + Lint-staged** - Pre-commit hooks for code quality
- **GitHub Actions** - CI/CD pipeline ready
- **VSCode Settings** - Optimized workspace configuration
- **Environment Validation** - Type-safe env vars with Zod

### Features
- **Dark/Light Mode** - System preference detection with persistence
- **Blog System** - Content Collections with RSS feed
- **SEO Optimized** - Sitemap, meta tags, Open Graph
- **API Routes** - Type-safe endpoints with examples
- **Performance** - Optimized images, fonts, and loading
- **404 Page** - Custom error page
- **@casoon/atlas-styles** - Modern design system with glass effects and animations

## 🛠️ Quick Start

```bash
# Clone this template
git clone https://github.com/casoon/astro-v5-template.git my-new-project

# Navigate to your new project
cd my-new-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run all linting and formatting checks |
| `npm run type-check` | Check TypeScript types |

### Formatting & Linting

| Command | Description |
|---------|-------------|
| `npm run format:svelte` | Format Svelte files |
| `npm run format:astro` | Format Astro files |
| `npm run check:biome` | Lint code with Biome |
| `npm run check:format:svelte` | Check Svelte formatting |
| `npm run check:format:astro` | Check Astro formatting |

## 🏗️ Project Structure

```
astro-v5-template/
├── src/
│   ├── components/          # Reusable components
│   │   ├── SvelteDemo.svelte
│   │   └── ThemeToggle.svelte
│   ├── content/             # Content Collections
│   │   └── blog/           # Blog posts (MDX)
│   ├── layouts/            # Astro layouts
│   │   └── BaseLayout.astro
│   ├── pages/              # Pages and API routes
│   │   ├── api/           # API endpoints
│   │   ├── blog/          # Blog pages
│   │   └── index.astro    # Homepage
│   ├── styles/            # CSS and Tailwind
│   └── utils/             # Utility functions
├── public/                 # Static assets
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
└── biome.json             # Biome linting configuration
```

## 📝 Blog System

### Features
- **MDX Support** for interactive blog posts
- **Content Collections** with TypeScript schema validation
- **Automatic sorting** by date (newest first)
- **Tag system** for categorization
- **Responsive grid layout** for blog overview
- **SEO optimized** with meta tags and structured data

### Usage
- Create blog posts as `.mdx` files in `src/content/blog/`
- Frontmatter with `title`, `date`, `description`, `author`, `tags` (optional)
- Automatic generation of blog overview and individual pages

## 🔌 API Routes

### Available Endpoints
- `GET /api/hello` - Simple Hello World endpoint
- `GET /api/users` - User list with query parameter support
- `POST /api/users` - User creation (demo)

### Test Page
Visit `/api-test` for an interactive API testing interface.

## 🎨 Theme & Styling

- **Dark/Light Mode** with automatic system preference detection
- **Tailwind CSS v4** with modern utility classes
- **Responsive Design** for all screen sizes
- **Consistent color palette** with optimized contrasts

## ✨ Atlas Design System

This template includes **@casoon/atlas-styles** - a complete Tailwind v4-compatible design system featuring:

- **Glass Morphism Effects** - Modern glass variants with backdrop filters
- **Gradient System** - 30+ gradient utilities with animations
- **Component Library** - Cards, forms, buttons with consistent design
- **Animation Utilities** - Smooth transitions and micro-interactions
- **Modular Imports** - Import only what you need
- **Design Tokens** - Customizable CSS variables for theming

Learn more: [@casoon/atlas-styles](https://github.com/casoon/atlas)

## 🔧 Configuration

### Environment Variables
1. Copy `env.example` to `.env`
2. Environment variables are validated with Zod in `src/env.ts`
3. Type-safe access throughout the app

```env
PUBLIC_SITE_URL=https://your-domain.com
PUBLIC_SITE_NAME="Your Site Name"
PUBLIC_ENABLE_ANALYTICS=true
```

### Linting & Formatting
- **Biome** - JavaScript/TypeScript linting and formatting
- **Prettier** - Astro and Svelte file formatting
- **Pre-commit hooks** - Automatic formatting on commit

### SEO Configuration
- Update `site` in `astro.config.mjs`
- Customize meta tags in `BaseLayout.astro`
- Add your Open Graph image as `public/og-image.jpg`

## 📦 What's Included

```
astro-v5-template/
├── .github/              # GitHub Actions workflows
├── .husky/               # Git hooks
├── .vscode/              # VSCode settings
├── src/
│   ├── components/       # Astro & Svelte components
│   ├── content/          # Blog posts (MDX)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes & API endpoints
│   ├── styles/           # Global styles
│   ├── utils/            # Helper functions
│   └── env.ts           # Environment validation
├── public/               # Static assets
└── WARP.md               # AI assistant guide
```

## 🌟 Getting Started with This Template

### Using GitHub Template
1. Click "Use this template" on GitHub
2. Clone your new repository
3. Install dependencies: `npm install`
4. Start developing: `npm run dev`

### Using degit
```bash
px degit casoon/astro-v5-template my-project
cd my-project
npm install
npm run dev
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - feel free to use this template for any project.

---

**Created by:** [casoon](https://github.com/casoon)  
**Version:** 0.1.0  
**Last Updated:** January 2024
