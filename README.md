# 🚀 Astro V5 Template - Modern Web Starter

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Atlas Design System](https://img.shields.io/badge/Atlas-Design%20System-9333EA)](https://github.com/casoon/atlas)
[![Svelte](https://img.shields.io/badge/Svelte-5.0-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)

A **production-ready** Astro starter template with everything you need to build modern websites. Beautiful UI components, forms, dark mode, and best practices included.

**[🌐 Live Demo](https://astrov5.casoon.dev/)** | **[📦 Use Template](https://github.com/casoon/astro-v5-template/generate)**

---

## ⚡ Quick Start

Get your project running in under 60 seconds:

```bash
# Option 1: Use GitHub template (recommended)
# Click "Use this template" button on GitHub

# Option 2: Clone with degit
npx degit casoon/astro-v5-template my-awesome-project
cd my-awesome-project

# Install and start
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) - You're ready to build! 🎉

---

## 🎯 Why This Template?

### ✅ **Production-Ready Components**
No more building from scratch. This template includes:
- **Hero Section** with animated backgrounds
- **Responsive Navbar** with mobile menu & glass effect on scroll  
- **Contact Form** with validation & API integration
- **Card Components** (4 variants: default, glass, gradient, outline)
- **Newsletter Signup** with success states
- **Modal System** with backdrop blur
- **Toast Notifications** for user feedback
- **404 Page** with animations

### ✅ **Modern Tech Stack**
- **Astro 5** - Ship 0KB JavaScript by default
- **Tailwind CSS v4** - Latest utility-first CSS
- **Atlas Design System** - Beautiful glass effects & gradients
- **Svelte 5** - Interactive islands with runes API
- **TypeScript** - Full type safety

### ✅ **Developer Experience**
- **Hot Module Reload** - Instant feedback
- **Pre-configured Linting** - Biome + Prettier
- **Git Hooks** - Auto-format on commit
- **VS Code Ready** - Optimal settings included
- **Type-Safe Environment** - Validated with Zod

---

## 📦 What's Included

```
my-project/
├── src/
│   ├── components/        # Ready-to-use UI components
│   │   ├── Hero.astro       # Hero section with CTAs
│   │   ├── Navbar.astro     # Responsive navigation
│   │   ├── Card.astro       # Flexible card component
│   │   ├── ContactForm.astro # Full contact form
│   │   ├── Newsletter.astro  # Email signup
│   │   ├── Modal.astro      # Dialog/popup system
│   │   └── Toast.astro      # Notification system
│   ├── pages/
│   │   ├── api/            # Backend endpoints
│   │   │   ├── contact.ts    # Form submission handler
│   │   │   └── newsletter.ts # Newsletter signup
│   │   ├── blog/           # Blog with MDX
│   │   ├── index.astro     # Homepage
│   │   └── contact.astro   # Contact page example
│   ├── layouts/           # Page templates
│   └── content/          # Blog posts (MDX)
```

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run all checks before commit |
| `npm run update-deps` | Update all dependencies safely |

---

## 🎨 Customization Guide

### 1️⃣ **Update Site Info**
Edit environment variables in `.env`:
```env
PUBLIC_SITE_NAME="My Awesome Site"
PUBLIC_SITE_URL="https://mysite.com"
```

### 2️⃣ **Customize Colors**
The template uses a purple/blue theme. To change:
1. Update Tailwind colors in components
2. Atlas gradients use CSS variables (customizable)

### 3️⃣ **Add Your Content**
1. Replace homepage content in `src/pages/index.astro`
2. Add blog posts to `src/content/blog/`
3. Update navigation in `src/layouts/BaseLayout.astro`

### 4️⃣ **Deploy**
Works out-of-the-box with:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- Any static host

---

## 📚 Component Examples

### Hero Section
```astro
<Hero 
  title="Welcome to My Site"
  subtitle="Build something amazing"
  ctaText="Get Started"
  ctaLink="/contact"
/>
```

### Cards
```astro
<!-- Default Card -->
<Card 
  title="Feature"
  description="This is a feature"
  href="/learn-more"
/>

<!-- Glass Effect Card -->
<Card 
  variant="glass"
  title="Premium Feature"
/>
```

### Toast Notifications
```javascript
// Show success message
window.showToast('Form submitted!', 'success');

// Show error
window.showToast('Something went wrong', 'error');
```

---

## 🔧 Tech Stack Details

### Frontend
- **Astro 5.0** - Static site generator with islands
- **Tailwind CSS v4** - Utility-first CSS (beta)
- **Svelte 5** - For interactive components
- **TypeScript** - Type safety everywhere

### Styling
- **Atlas Design System** - Glass morphism & animations
- **Dark Mode** - System preference + manual toggle
- **Responsive** - Mobile-first approach

### Developer Tools
- **Biome** - Fast linter/formatter
- **Prettier** - For Astro/Svelte files
- **Husky** - Git hooks
- **GitHub Actions** - CI/CD ready

---

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/casoon/astro-v5-template)

### Manual Deploy
```bash
npm run build
# Upload 'dist' folder to your host
```

---

## 💡 Tips & Best Practices

1. **Keep it Fast** - Astro ships 0 JS by default. Add interactivity only where needed.
2. **Use Atlas Wisely** - Glass effects look best on colorful backgrounds
3. **Type Everything** - Full TypeScript support is configured
4. **Mobile First** - All components are responsive by default

---

## 📖 Documentation

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Atlas Design System](https://github.com/casoon/atlas)
- [Svelte 5 Runes](https://svelte.dev/docs/svelte/reactivity)

---

## 🤝 Contributing

Found a bug? Have a feature request? PRs welcome!

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this template for any project!

---

<div align="center">
  <p>Built with ❤️ by the Astro community</p>
  <p>⭐ Star this repo if it helped you!</p>
</div>