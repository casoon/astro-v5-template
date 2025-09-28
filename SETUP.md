# 🚀 Setup Guide

Welcome to the Astro V5 Template! This guide will help you get started.

## 📋 Prerequisites

- Node.js 18+ and npm
- Git (for version control)
- A code editor (VS Code recommended)

## 🛠️ Initial Setup

### 1. Create Your Project

```bash
# Using GitHub template (recommended)
# 1. Go to https://github.com/casoon/astro-v5-template
# 2. Click "Use this template"
# 3. Clone your new repository

# OR using degit
npx degit casoon/astro-v5-template my-project
cd my-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

```bash
# Copy example environment file
cp env.example .env

# Edit .env with your values
PUBLIC_SITE_NAME="My Awesome Site"
PUBLIC_SITE_URL="https://mysite.com"
```

### 4. Start Development

```bash
npm run dev
# Open http://localhost:4321
```

## 🎨 Customization Checklist

### Essential Changes

- [ ] Update `PUBLIC_SITE_NAME` and `PUBLIC_SITE_URL` in `.env`
- [ ] Change `site` in `astro.config.mjs` to your domain
- [ ] Update `package.json` with your project details
- [ ] Replace favicon in `public/favicon.svg`
- [ ] Update Open Graph image in `public/og-image.jpg`

### Content Updates

- [ ] Edit homepage content in `src/pages/index.astro`
- [ ] Update navigation links in `src/layouts/BaseLayout.astro`
- [ ] Customize footer in `src/layouts/BaseLayout.astro`
- [ ] Add your first blog post in `src/content/blog/`

### Styling

- [ ] Adjust color scheme (search for `purple` and `blue`)
- [ ] Update fonts if needed (currently using Inter)
- [ ] Customize component styles in `src/components/`

## 📁 Key Files to Know

```
src/
├── pages/index.astro      # Homepage - Start here!
├── layouts/BaseLayout.astro # Main layout with nav & footer
├── components/            # All reusable components
├── content/blog/         # Add MDX blog posts here
└── pages/api/           # Backend endpoints
```

## 🚀 Deployment

### Vercel (Easiest)

1. Push to GitHub
2. Import project on Vercel
3. Deploy (zero config needed!)

### Netlify

1. Push to GitHub
2. Import on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual

```bash
npm run build
# Upload contents of 'dist' folder to your host
```

## 💡 Pro Tips

1. **Components** - All components in `src/components/` are ready to use
2. **Dark Mode** - Already configured, just works!
3. **Forms** - Contact form is connected to `/api/contact`
4. **SEO** - Update meta tags in `BaseLayout.astro`
5. **Blog** - Just add `.mdx` files to `src/content/blog/`

## 🆘 Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind classes not working
- Make sure you're using Tailwind v4 syntax
- Check that file is included in Tailwind config

### Dark mode issues
- Clear localStorage: `localStorage.removeItem('theme')`
- Check system preferences

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Atlas Design System](https://github.com/casoon/atlas)
- [Template Issues](https://github.com/casoon/astro-v5-template/issues)

---

Need help? Open an issue on GitHub!