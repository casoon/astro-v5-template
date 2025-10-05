# 🚀 Astro V5 Template - Modern Web Starter

[![Astro](https://img.shields.io/badge/Astro-5.14.1-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Svelte](https://img.shields.io/badge/Svelte-5.39.8-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A **production-ready** Astro starter template featuring the latest web technologies. Build lightning-fast websites with beautiful UI components, comprehensive tooling, and modern development practices.

**[🌐 Live Demo](https://astrov5.casoon.dev/)** | **[📦 Use Template](https://github.com/casoon/astro-v5-template/generate)** | **[🔍 Web Vitals Analysis](https://github.com/casoon/auditmysite_studio)**

---

## ⚡ Quick Start

Get your project running in under 60 seconds:

```bash
# Option 1: Use GitHub template (recommended)
# Click "Use this template" button on GitHub

# Option 2: Clone with degit
npx degit casoon/astro-v5-template my-project
cd my-project

# Install and configure
npm install
npm run setup  # 🆕 Interactive template configuration
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) - You're ready to build! 🎉

### 🎁 What's New in This Version

- **🚀 Astro 5.14.1** - Latest features and performance improvements
- **🎨 Atlas Design System** - Beautiful glass effects, gradients, and animations
- **📝 Enhanced Blog System** - Atlas-styled blog cards with featured variants
- **🎯 Improved UX** - German localization and better accessibility
- **⚡ Svelte 5.39.8** - Reactive components with runes API
- **📊 Web Vitals Monitoring** - Built-in performance tracking
- **🔍 SEO Optimized** - Comprehensive meta tags and sitemaps

---

## 🎯 Features & Highlights

### ✨ **Interactive Template Configuration**

Customize your template with the interactive setup:

```bash
npm run setup
```

**Choose your features:**
- 📝 **Blog System** - Full MDX blog with RSS feed
- 🔌 **API Routes** - Server-side endpoints for forms  
- 📧 **Newsletter** - Email signup with validation
- 📞 **Contact Form** - Ready-to-use contact forms
- 🎯 **SEO Optimization** - Meta tags and analytics

### 🏠 **Production-Ready Components**

| Component | Description | Features |
|-----------|-------------|----------|
| **Hero Section** | Eye-catching landing area | Gradient backgrounds, CTA buttons, floating orbs |
| **Navigation** | Responsive navbar | Mobile menu, theme toggle, glass effects |
| **Blog System** | 🆕 Atlas-styled blog | Featured cards, glass effects, German localization |
| **BlogCard Component** | 🆕 Flexible blog cards | 3 variants: default, featured, minimal with animations |
| **Cards** | Flexible card system | 4 variants: default, glass, gradient, outline |
| **Forms** | Contact & newsletter | Validation, API integration, success states |
| **Modal System** | Dialog components | Backdrop blur, animations |
| **Toast Notifications** | User feedback | Success, error, warning, info states |
| **SEO Component** | Meta tag management | Open Graph, Twitter Cards, JSON-LD |
| **Web Vitals** | Performance monitoring | Real-time metrics with debug overlay |

### 🚀 **Modern Tech Stack**

| Technology | Version | Purpose |
|------------|---------|----------|
| **Astro** | 5.14.1 | Static site generator with islands architecture |
| **Atlas Design System** | 0.0.4 | 🆕 Glass effects, gradients, and modern UI components |
| **Tailwind CSS** | 4.1.14 | Utility-first CSS framework |
| **Svelte** | 5.39.8 | Reactive components with runes API |
| **TypeScript** | 5.9.3 | Type safety and better DX |
| **Zod** | 4.1.11 | Runtime type validation |
| **Biome** | 2.2.5 | Fast linter and formatter |

### ⚙️ **Developer Experience**

- ⚡ **Instant Hot Reload** - See changes immediately
- 🐛 **Pre-configured Linting** - Biome + Prettier setup
- 🪝 **Git Hooks** - Auto-format on commit with Husky
- 🎨 **VS Code Ready** - Extensions and settings included
- 🔒 **Type-Safe Environment** - Validated with Zod schema
- 📋 **Performance Reports** - Built-in Lighthouse integration

---

## 📦 Project Structure

```
astro-v5-template/
├── 📁 src/
│   ├── 🧩 components/        # Reusable UI components
│   │   ├── 🏠 Hero.astro         # Landing hero section
│   │   ├── 🧭 Navbar.astro       # Navigation with theme toggle
│   │   ├── 🃋 Card.astro         # Flexible card system
│   │   ├── 📝 BlogCard.astro     # 🆕 Atlas-styled blog cards
│   │   ├── 🎨 GlassCard.astro    # Glass effect cards
│   │   ├── 📞 ContactForm.astro  # Contact form with validation
│   │   ├── 📧 Newsletter.astro   # Newsletter signup
│   │   ├── 🧠 Modal.astro        # Modal dialog system
│   │   ├── 🔔 Toast.astro        # Notification toasts
│   │   ├── 🔍 SEO.astro          # SEO meta tags
│   │   └── 📊 WebVitals.astro   # Performance monitoring
│   ├── 📄 pages/
│   │   ├── 🔌 api/              # Server-side API routes
│   │   │   ├── contact.ts        # Contact form handler
│   │   │   ├── newsletter.ts     # Newsletter signup
│   │   │   ├── hello.ts          # API example
│   │   │   └── users.ts          # Users API example
│   │   ├── 📝 blog/             # 🆕 Atlas-enhanced MDX blog system
│   │   │   ├── index.astro       # Blog overview with Atlas cards
│   │   │   └── [...slug].astro   # Blog posts with glass effects
│   │   ├── 🏠 index.astro       # Homepage
│   │   ├── 📞 contact.astro     # Contact page
│   │   ├── 🚫 404.astro         # Custom 404 page
│   │   └── 🗺️ rss.xml.js       # RSS feed
│   ├── 🌍 layouts/           # Page layouts
│   │   └── BaseLayout.astro  # Main layout template
│   ├── 📁 content/           # Content collections
│   │   ├── config.ts         # Content config
│   │   └── blog/             # Blog posts (MDX)
│   └── 🎨 styles/            # Global styles
│       ├── global.css        # Global CSS
│       └── tailwind.css      # Tailwind imports
├── 🎁 setup.js              # Interactive template setup
├── ⚙️ template.config.js      # Template configuration
└── 📦 package.json          # Dependencies and scripts

---

## 🛠️ Available Commands

### 🚀 **Development**
| Command | Description |
|---------|-------------|
| `npm run dev` / `npm start` | Start development server on port 4321 |
| `npm run setup` | 🆕 Interactive template configuration |
| `npm run clean` | Clean build artifacts and cache |

### 🏠 **Build & Deploy**
| Command | Description |
|---------|-------------|
| `npm run build` | Type-check and build for production |
| `npm run build:fast` | Build without type checking (faster) |
| `npm run preview` | Preview production build locally |

### 🎨 **Code Quality**
| Command | Description |
|---------|-------------|
| `npm run format` | Format all code with Biome & Prettier |
| `npm run check` | Run all linting and format checks |
| `npm run type-check` | Run Astro TypeScript checks |

### 📊 **Analysis & Maintenance**
| Command | Description |
|---------|-------------|
| `npm run lighthouse` | Generate Lighthouse performance report |
| `npm run update-deps` | Update all dependencies safely |

> **💡 Pro Tip:** Use `npm run lighthouse` after building to analyze your site's performance, accessibility, and SEO metrics.

---

## 🎨 Customization Guide

### 🔧 **Environment Setup**

1. Copy the environment template:
   ```bash
   cp env.example .env
   ```

2. Update your site configuration:
   ```env
   PUBLIC_SITE_NAME="Your Site Name"
   PUBLIC_SITE_URL="https://yoursite.com"
   PUBLIC_ENABLE_ANALYTICS="true"
   PUBLIC_ENABLE_DARK_MODE="true"
   ```

### 🎨 **Theming & Styling**

**Tailwind Configuration:**
- Edit `src/styles/tailwind.css` for custom theme variables
- Modify color scheme in Tailwind's theme configuration
- Use CSS custom properties for consistent theming

**Component Styling:**
```astro
<!-- Example: Custom hero with your brand colors -->
<Hero 
  title="Your Brand Message"
  subtitle="Your compelling description"
  ctaText="Get Started"
  ctaLink="/contact"
/>
```

### 📝 **Content Management**

**Blog Posts:**
- Add `.mdx` files to `src/content/blog/`
- Use frontmatter for metadata:
  ```yaml
  ---
  title: "Your Post Title"
  description: "Post description"
  date: 2024-01-01
  author: "Your Name"
  tags: ["tag1", "tag2"]
  ---
  ```

**Pages:**
- Create `.astro` files in `src/pages/`
- Use layouts from `src/layouts/`
- Leverage components from `src/components/`

### 🔌 **API Integration**

**Form Handlers:**
```typescript
// src/pages/api/custom-form.ts
export async function POST({ request }) {
  const data = await request.formData();
  // Process your form data
  return new Response(JSON.stringify({ success: true }));
}
```

---

## 🚀 Deployment

### **Recommended Platforms**

| Platform | Deploy Button | Features |
|----------|---------------|----------|
| **Vercel** | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/casoon/astro-v5-template) | Zero-config, edge functions, analytics |
| **Netlify** | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/casoon/astro-v5-template) | Form handling, split testing |
| **Cloudflare Pages** | Manual setup | Global CDN, Workers integration |

### **Manual Deployment**

```bash
# Build for production
npm run build

# The 'dist' folder contains your built site
# Upload this folder to any static hosting provider
```

### **Environment Variables for Production**

Set these in your deployment platform:
```env
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_SITE_NAME=Your Site Name
PUBLIC_ENABLE_ANALYTICS=true
```

---

## 📊 Performance & Analytics

### **Built-in Web Vitals Monitoring**

The template includes real-time performance monitoring:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay) 
- **CLS** (Cumulative Layout Shift)
- **FCP** (First Contentful Paint)
- **TTFB** (Time to First Byte)

**Enable debug mode during development:**
```astro
<WebVitals debug={true} />
```

**For advanced analysis:** [**🔍 AuditMySite Studio**](https://github.com/casoon/auditmysite_studio)

### **Lighthouse Integration**

```bash
# Generate performance report
npm run lighthouse

# Report saved as lighthouse-report.html
```

---

## 📁 Component Examples

### **Hero Section**
```astro
<Hero 
  title="Welcome to My Site"
  subtitle="Build something amazing"
  ctaText="Get Started"
  ctaLink="/contact"
  secondaryCtaText="Learn More"
  secondaryCtaLink="/about"
/>
```

### **Card Variants**
```astro
<!-- Default Card -->
<Card 
  title="Feature Name"
  description="Feature description"
  href="/learn-more"
  tag="New"
/>

<!-- Glass Effect Card -->
<Card 
  variant="glass"
  title="Premium Feature"
  description="Enhanced with glass effects"
/>

<!-- Gradient Card -->
<Card 
  variant="gradient" 
  title="Featured Content"
  description="Eye-catching gradient background"
/>
```

### **🆕 BlogCard Component**
```astro
<!-- Featured Blog Post -->
<BlogCard 
  title="Getting Started with Atlas"
  description="Learn the Atlas Design System"
  date="2024-01-01"
  author="Your Name"
  image="/blog/image.jpg"
  slug="getting-started"
  tags={["Astro", "Atlas", "Tutorial"]}
  variant="featured"
/>

<!-- Default Blog Post -->
<BlogCard 
  title="Another Great Post"
  description="More awesome content"
  date="2024-01-02"
  slug="another-post"
  variant="default"
/>

<!-- Minimal Blog Post -->
<BlogCard 
  title="Quick Tip"
  date="2024-01-03"
  slug="quick-tip"
  variant="minimal"
/>
```

### **Toast Notifications**
```javascript
// Success notification
window.showToast('Form submitted successfully!', 'success');

// Error notification
window.showToast('Something went wrong', 'error');

// Info notification
window.showToast('Please check your email', 'info', 5000);
```

### **SEO Component**
```astro
<SEO 
  title="Page Title"
  description="Page description for search engines"
  image="/og-image.jpg"
  type="article"
  publishedTime="2024-01-01"
  author="Author Name"
/>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Reporting Issues**
- 🐛 [Report bugs](https://github.com/casoon/astro-v5-template/issues/new?template=bug_report.md)
- 💡 [Request features](https://github.com/casoon/astro-v5-template/issues/new?template=feature_request.md)
- 💬 [Join discussions](https://github.com/casoon/astro-v5-template/discussions)

### **Development Setup**
```bash
# Fork and clone the repo
git clone https://github.com/your-username/astro-v5-template.git
cd astro-v5-template

# Install dependencies
npm install

# Start development server
npm run dev

# Make your changes and run tests
npm run build
npm run check
```

### **Pull Request Guidelines**
- Follow existing code style and conventions
- Include tests for new features
- Update documentation as needed
- Keep commits atomic and well-described

---

## 📜 Documentation

- **[📚 Setup Guide](SETUP.md)** - Detailed setup instructions
- **[📄 Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[🗓️ Changelog](CHANGELOG.md)** - Version history
- **[♿ Accessibility](a11y-seo-check.md)** - A11y and SEO guidelines

---

## ⚖️ License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **What this means:**
- ✅ **Commercial use** - Use it for your business projects
- ✅ **Modification** - Adapt it to your needs
- ✅ **Distribution** - Share it with others
- ✅ **Private use** - Use it in private projects

---

## 🙏 Credits & Acknowledgments

### **Built With**
- **[Astro](https://astro.build)** - The web framework for content-driven websites
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Svelte](https://svelte.dev)** - Reactive UI components
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript

### **Performance Analysis**
- **[AuditMySite Studio](https://github.com/casoon/auditmysite_studio)** - Advanced web performance auditing

### **Community**
Built with ♥️ by the [Casoon](https://github.com/casoon) team and [contributors](https://github.com/casoon/astro-v5-template/graphs/contributors).

---

**[⬆️ Back to Top](#-astro-v5-template---modern-web-starter)**

<div align="center">

**If this template helped you, please consider ⭐ starring the repo!**

[![GitHub stars](https://img.shields.io/github/stars/casoon/astro-v5-template?style=social)](https://github.com/casoon/astro-v5-template/stargazers)

</div>

---

## 💡 Tips & Best Practices

1. **Keep it Fast** - Astro ships 0 JS by default. Add interactivity only where needed.
2. **Atlas Glass Effects** - Use `cs-glass` classes for modern glassmorphism
3. **Blog Variants** - Featured posts automatically use enhanced styling
4. **German Localization** - Blog components include German text by default
5. **Type Everything** - Full TypeScript support is configured
6. **Mobile First** - All components are responsive by default
7. **Performance** - Atlas effects are optimized for smooth animations

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