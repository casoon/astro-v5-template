# Astro v5 Workspace

[![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Version](https://img.shields.io/badge/Version-1.4.0-blue)]()
[![Workspaces](https://img.shields.io/badge/Workspaces-enabled-brightgreen)]()

Production-ready Astro v5 monorepo with pnpm workspaces and shared design system.

## ✨ Version 1.4.0 - What's New

### Typography & Font System
- 🎨 **Professional Font Pairing Guide** - 15 curated Google Fonts with optimal weight variants
  - Elegant serif combinations (Playfair Display + Source Serif 4)
  - Modern sans-serif pairings (Montserrat + Merriweather)
  - Tech-forward duos (Space Grotesk + Work Sans)
  - Book-style serif pairs (Crimson Text + Lora)
  - All fonts self-hosted via @fontsource
- ✅ **Optimized Font Loading** - Only necessary weights loaded, proper fallback fonts
- 📊 **Live Typography Examples** - Interactive showcase with installation instructions

### Animations System
- 🎬 **Custom Animation Library** - All animations now working with custom @keyframes:
  - Fade animations (fadeIn with delays)
  - Slide animations (Up, Down, Left, Right)
  - Scale & Zoom effects (scaleIn, zoomIn)
  - Continuous animations (wiggle, pulse, bounce, float, rotate, heartbeat)
  - 3D effects (reveal3dUp, flip3dX with proper perspective)
- ⚡ **Performance Optimized** - Smooth 60fps animations with proper timing functions
- 🔄 **Reload Notice** - User-friendly hints for re-triggering animations

### Demo Package Enhancements
- 📄 **/typography** - Comprehensive font pairing showcase with live previews
- 🎭 **/animations** - Complete animation library demonstration
- 🔍 **Improved Navigation** - Better menu structure with typography and animations pages

## Packages

```
packages/
├── shared/  - Shared CSS variables and design system
├── blank/   - Absolute minimum (blank canvas)
├── base/    - Moderate starter with components
└── demo/    - Full-featured demo site
```

### **@astro-v5/shared**
Shared design system for all packages:
- CSS variables and design tokens
- Common animations
- Utility classes
- Typography system
- Dark mode support

### **@astro-v5/blank** 🆕
**Absolute minimum** - Perfect blank canvas:
- ✅ Single homepage + 404
- ✅ Basic layout & SEO
- ✅ Shared design system
- ❌ No components
- ❌ No blog
- ❌ No forms
- **Use when**: Starting completely from scratch

### **@astro-v5/base**
**Moderate starter** with essential features:
- ✅ All components (Hero, Card, Modal, etc.)
- ✅ Blog functionality (MDX)
- ✅ Contact form
- ✅ Newsletter signup
- ✅ Example blog post
- **Use when**: Need a solid foundation with reusable components

### **@astro-v5/demo**
**Full showcase** with all features:
- ✅ 4 example blog posts
- ✅ All components demonstrated
- ✅ API examples
- ✅ Contact forms
- ✅ [Deployed demo site](https://astrov5.casoon.dev)
- **Use when**: Exploring features or need complete examples

## 🚀 Quick Start

### Prerequisites

```bash
# Install Volta (automatic Node.js version management)
curl https://get.volta.sh | bash

# Install pnpm
volta install pnpm
```

Volta automatically uses Node.js 24.11.0 and pnpm 9.15.4 (defined in `package.json` and `.nvmrc`).

### Install & Run

```bash
# Clone repository
git clone https://github.com/casoon/astro-v5-template.git
cd astro-v5-template

# Install all dependencies
pnpm install

# Run demo site (default)
pnpm dev

# Or run specific package
pnpm dev:blank   # Blank template
pnpm dev:base    # Base template
pnpm dev:demo    # Demo site
```

## 📋 Workspace Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start demo site (default) |
| `pnpm dev:blank` | Start blank template |
| `pnpm dev:base` | Start base template |
| `pnpm dev:demo` | Start demo site |
| `pnpm build` | Build all packages |
| `pnpm build:blank` | Build blank only |
| `pnpm build:base` | Build base only |
| `pnpm build:demo` | Build demo only |
| `pnpm preview` | Preview demo build |
| `pnpm preview:blank` | Preview blank build |
| `pnpm preview:base` | Preview base build |
| `pnpm preview:demo` | Preview demo build |
| `pnpm optimize-images` | Optimize images for all packages |
| `pnpm optimize-images:blank` | Optimize images for blank only |
| `pnpm optimize-images:base` | Optimize images for base only |
| `pnpm optimize-images:demo` | Optimize images for demo only |
| `pnpm clean` | Clean all packages |
| `pnpm clean:images` | Remove all optimized images |
| `pnpm format` | Format all code |
| `pnpm check` | Run all checks |

## 🎯 Use Cases

### Choose Your Starting Point

**Decision Tree:**
- 🆕 **Complete blank slate?** → Use `@astro-v5/blank`
- 🏗️ **Need components & blog?** → Use `@astro-v5/base`
- 📚 **Want to see examples?** → Use `@astro-v5/demo`

### Scenario 1: Start Fresh (Blank Template)

Perfect for custom projects where you want complete control:

```bash
# Copy blank package
cp -r packages/blank my-project
cd my-project
pnpm install
pnpm dev
```

**What you get:**
- ✅ Single homepage + 404 page
- ✅ Basic layout structure
- ✅ SEO components from shared
- ✅ Shared design system
- ✅ Environment configuration
- ❌ No pre-built components
- ❌ No blog functionality

### Scenario 2: Start with Components (Base Template)

Get essential components and blog functionality out of the box:

```bash
# Copy base package
cp -r packages/base my-project
cd my-project
pnpm install
pnpm dev
```

**What you get:**
- ✅ All UI components (Hero, Card, Modal, Forms, etc.)
- ✅ Blog with MDX support
- ✅ Contact form
- ✅ Newsletter signup
- ✅ Example blog post
- ✅ Comprehensive component library

### Scenario 3: Multiple Sites with Shared Design System

Main use case - multiple landing pages sharing common styles:

```bash
# 1. Add new site to workspace
mkdir packages/landing-page

# 2. Copy base template
cp -r packages/base/* packages/landing-page/

# 3. Edit package.json
# Change "name": "@astro-v5/landing-page"
```

```json
{
  "name": "@astro-v5/landing-page",
  "version": "1.0.0",
  "dependencies": {
    "@astro-v5/shared": "workspace:*"
  }
}
```

```bash
# 4. Install and run
pnpm install
pnpm --filter @astro-v5/landing-page dev

# 5. Add convenience script to root package.json
{
  "scripts": {
    "dev:landing": "pnpm --filter @astro-v5/landing-page dev"
  }
}
```

### Scenario 4: Customize Shared Design System

Edit shared styles once, applies to all packages:

```bash
# Edit shared CSS variables
packages/shared/src/styles/variables.css

# Changes automatically apply to:
# - packages/base
# - packages/demo
# - packages/landing-page
# - Any other packages using @astro-v5/shared
```

## 🏗️ Workspace Structure

```
astro-v5-template/
├── package.json              # Root workspace config
├── pnpm-workspace.yaml       # Workspace definition
├── pnpm-lock.yaml           # Shared lockfile
├── packages/
│   ├── shared/              # Shared design system
│   │   ├── package.json     # @astro-v5/shared
│   │   ├── README.md
│   │   └── src/
│   │       └── styles/
│   │           ├── index.css       # Main entry
│   │           ├── variables.css   # CSS variables
│   │           ├── animations.css  # Animations
│   │           └── utilities.css   # Utility classes
│   ├── blank/               # Blank template (minimal)
│   │   ├── package.json     # @astro-v5/blank
│   │   ├── src/
│   │   ├── public/
│   │   └── ...
│   ├── base/                # Base template (with components)
│   │   ├── package.json     # @astro-v5/base
│   │   ├── src/
│   │   ├── public/
│   │   └── ...
│   └── demo/                # Demo site (full showcase)
│       ├── package.json     # @astro-v5/demo
│       ├── src/
│       ├── public/
│       └── ...
└── README.md               # This file
```

## 🔄 Workflow Benefits

### **Shared Design System**
- Update CSS variables in `packages/shared` → all packages get updates
- Consistent design tokens across all sites
- Single source of truth for styles

### **Independent Deployment**
- Each package can be deployed separately
- Different content, same tech stack
- Build and preview independently

### **Efficient Development**
- Shared `node_modules` saves disk space
- Fast installs with pnpm
- Parallel builds with `-r` flag
- Automatic dependency linking with `workspace:*`

## 📝 Adding New Sites (Step-by-Step)

### Step 1: Create Package Directory

```bash
mkdir packages/my-new-site
```

### Step 2: Copy Template

Choose your starting point:

```bash
# Option A: Start with blank (minimal)
cp -r packages/blank/* packages/my-new-site/

# Option B: Start with base (includes components & blog)
cp -r packages/base/* packages/my-new-site/
```

### Step 3: Update package.json

Edit `packages/my-new-site/package.json`:

```json
{
  "name": "@astro-v5/my-new-site",
  "version": "1.0.0",
  "description": "My new site description",
  "dependencies": {
    "@astro-v5/shared": "workspace:*",
    // ... other dependencies are already included
  }
}
```

**Key points:**
- Change `name` to unique package name with `@astro-v5/` prefix
- Keep `"@astro-v5/shared": "workspace:*"` to use shared styles
- Don't remove other dependencies

### Step 4: Customize Site Content

```bash
# Edit homepage
packages/my-new-site/src/pages/index.astro

# Add blog posts
packages/my-new-site/src/content/blog/

# Customize components
packages/my-new-site/src/components/
```

### Step 5: Install Dependencies

```bash
# From root directory
pnpm install
```

This links the shared package automatically.

### Step 6: Run Development Server

```bash
pnpm --filter @astro-v5/my-new-site dev
```

### Step 7: Add Convenience Script (Optional)

Edit root `package.json` to add shortcut:

```json
{
  "scripts": {
    "dev:my-site": "pnpm --filter @astro-v5/my-new-site dev",
    "build:my-site": "pnpm --filter @astro-v5/my-new-site build"
  }
}
```

Now you can run:

```bash
pnpm dev:my-site
pnpm build:my-site
```

## 🎨 Using Shared Design System

### Import in Layouts

All packages import shared styles via `global.css`:

```css
/* packages/*/src/styles/global.css */
@import '@astro-v5/shared/styles/index.css';
```

### Available CSS Variables

```css
/* Colors */
var(--color-background)
var(--color-text-primary)
var(--color-accent-primary)
var(--color-border)

/* Spacing */
var(--spacing-xs) through var(--spacing-3xl)

/* Typography */
var(--font-size-base)
var(--font-weight-medium)
var(--line-height-normal)

/* Effects */
var(--shadow-lg)
var(--blur-md)
var(--radius-xl)
```

See full list in `packages/shared/README.md`.

### Utility Classes

```html
<!-- Navigation -->
<a class="nav-link">Link</a>

<!-- Cards -->
<div class="card-container">Content</div>
<div class="glass-effect">Glass morphism</div>

<!-- Effects -->
<span class="text-gradient">Gradient Text</span>
<div class="hover-lift">Hover effect</div>

<!-- Animations -->
<div class="animate-fade-in-up">Fade in</div>
<div class="animate-float">Float</div>
```

## 🗺️ Sitemap & SEO

### Custom Sitemap Implementation

Each package includes a **custom sitemap generator** (not using @astrojs/sitemap) for full control over SEO parameters.

**Location:**
- `packages/demo/src/pages/sitemap.xml.ts`
- `packages/base/src/pages/sitemap.xml.ts`
- Shared utilities: `@shared/utils/sitemap`

**Advantages:**
- ✅ Full control over `priority`, `changefreq`, and `lastmod`
- ✅ Automatically scans all `.astro` pages
- ✅ Supports blog posts via Content Collections (demo package)
- ✅ Uses `env.PUBLIC_SITE_URL` from environment config
- ✅ Generates `sitemap.xml` at build time

**Example Usage:**

```typescript
// packages/demo/src/pages/sitemap.xml.ts
import { generateSitemapPages, generateSitemapXML } from '@shared/utils/sitemap';
import { getCollection } from 'astro:content';

const pageModules = import.meta.glob('./**/*.astro', { eager: true });
const blogPosts = await getCollection('blog');

const pages = generateSitemapPages({
  siteUrl: env.PUBLIC_SITE_URL,
  pageModules,
  blogPosts, // Optional: only for packages with blog
});

const sitemap = generateSitemapXML(pages, env.PUBLIC_SITE_URL);
```

**Customization:**

Edit `packages/shared/src/utils/sitemap.ts` to adjust:
- Default priority values
- Changefreq settings
- URL filtering logic
- lastmod date handling

**Output:** `/sitemap.xml` (available at `https://yourdomain.com/sitemap.xml`)

## ⚙️ Configuration & Validation

### Environment Variables

Each package uses Zod for type-safe environment configuration:

**File:** `packages/*/src/env.ts`

```typescript
import { z } from 'zod';

const envSchema = z.object({
  PUBLIC_SITE_URL: z.string().url().default('http://localhost:4321'),
  PUBLIC_SITE_NAME: z.string().default('Astro V5 Template'),
});

export const env = envSchema.parse(import.meta.env);
```

**Single Source of Truth:**
- Site URL is defined ONLY in `env.ts`
- `astro.config.mjs` imports from `env.ts`:

```javascript
import { env } from './src/env.ts';

export default defineConfig({
  site: env.PUBLIC_SITE_URL, // Import from env
});
```

This ensures consistency across your configuration.

### Build-Time Validation

The template includes automatic configuration validation during builds:

**Run manually:**
```bash
node scripts/validate-config.mjs packages/demo
```

**Automatically runs during:**
```bash
pnpm build        # Validates all packages
pnpm build:demo   # Validates demo only
```

**What it checks:**
- ❌ **ERROR** if `PUBLIC_SITE_URL` uses default/localhost (blocks build)
- ⚠️  **WARNING** if `PUBLIC_SITE_NAME` uses default template name
- ⚠️  **WARNING** if package.json still has template metadata
- ⚠️  **WARNING** if robots.txt references template URLs
- ⚠️  **WARNING** if favicon is missing

**Example output:**
```
🔍 Validating configuration for: demo

✓ Checking env.ts configuration...
  ❌ ERROR: PUBLIC_SITE_URL is still using default value
  → Action: Update PUBLIC_SITE_URL in packages/demo/src/env.ts

✓ Checking package.json metadata...
  ⚠️  WARNING: repository URL still points to template
  → Action: Update repository URL in packages/demo/package.json

Configuration validation complete!
Found 1 error(s) and 1 warning(s)
```

**Key behavior:**
- **Errors block the build** (exit code 1)
- **Warnings show but continue** (exit code 0)
- Helps catch template placeholders before deployment

### SEO Components

Each package includes comprehensive SEO components from the shared package:

**Import from shared:**
```astro
---
import PageSEO from '@astro-v5/shared/components/seo/PageSEO.astro';
import BlogSEO from '@astro-v5/shared/components/seo/BlogSEO.astro';
---
```

**PageSEO Component:**
```astro
---
// Only title is required - everything else is optional
import PageSEO from '@astro-v5/shared/components/seo/PageSEO.astro';
---

<head>
  <PageSEO 
    title="About Us"
    description="Learn more about our company"
    keywords={['company', 'about', 'team']}
    image="/responsive/team-photo-800w.webp"
    author="John Doe"
  />
</head>
```

**BlogSEO Component:**
```astro
---
// Required: title, publishDate, slug
// Optional: Everything else
import BlogSEO from '@astro-v5/shared/components/seo/BlogSEO.astro';
---

<head>
  <BlogSEO
    title={post.data.title}
    publishDate={post.data.publishDate}
    slug={post.slug}
    description={post.data.description}
    author={post.data.author}
    category={post.data.category}
    readingTime={readingTime}
    image={post.data.heroImage}
    keywords={post.data.tags}
  />
</head>
```

**Features:**
- ✅ JSON-LD structured data (WebPage, Article schemas)
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Graceful handling of missing values (no errors, no placeholders)
- ✅ Automatic fallbacks (description defaults to title)
- ✅ Reading time calculation for blog posts

**Graceful Degradation:**
- Missing optional props are simply omitted from output
- No error messages or placeholder text
- Only required fields are enforced

See `packages/shared/src/components/seo/README.md` for full documentation.

## 🖼️ Image Optimization

### Automatic WebP/AVIF Generation

The template includes a powerful image optimization system that generates optimized images at **build-time**.

**Folder Structure:**
```
packages/your-package/
├── src/
│   └── assets/
│       └── images/          # Source images (JPG, PNG, WebP, SVG)
│           ├── hero.jpg
│           ├── logo.svg     # SVGs are copied as-is
│           ├── photo.webp   # WebP sources also supported
│           └── blog/
│               └── post.jpg
│
└── public/
    └── responsive/          # Generated optimized images
        ├── hero-378w.webp
        ├── hero-400w.webp
        ├── hero-756w.webp
        ├── hero-800w.webp
        ├── hero-1200w.webp
        ├── hero-378w.avif
        ├── hero-400w.avif
        ├── hero-756w.avif
        ├── hero-800w.avif
        ├── hero-1200w.avif
        ├── hero.jpg         # Original (optimized)
        ├── logo.svg         # SVG (copied)
        └── manifest.json
```

**Generate Optimized Images:**
```bash
# Run when adding NEW images to src/assets/images/
pnpm optimize-images              # All packages
pnpm optimize-images:demo         # Demo package only
pnpm optimize-images:base         # Base package only
```

**Supported Formats:**
- **JPG/PNG** → Converted to WebP + AVIF (multiple sizes)
- **WebP** → Copied + generated in multiple sizes + AVIF variants
- **SVG** → Copied as-is (no conversion)

**Excluded Files:**
- Favicon files (automatically skipped)
- Already optimized files (pattern: `-\d+w\.(webp|avif|jpg|png)$`)

**Important:** Optimized images should be **committed to git** (not regenerated at build time). This ensures:
- Faster CI/CD builds
- Consistent output across environments
- Works on Cloudflare Pages and other static hosts

**Configuration:**

Default settings in `scripts/optimize-images.mjs`:
```javascript
{
  inputDir: "src/assets/images",      // Source directory
  outputDir: "public/responsive",      // Output directory
  widths: [378, 400, 756, 800, 1200], // Responsive breakpoints
  formats: ["webp", "avif"],          // Output formats
  quality: {
    webp: 80,
    avif: 75,
    jpeg: 85
  }
}
```

**Workflow:**
1. Add images to `src/assets/images/` (JPG, PNG, WebP, or SVG)
2. Run `pnpm optimize-images` (or package-specific command)
3. Generated files appear in `public/responsive/`
4. Reference optimized images in your code: `/responsive/hero-800w.webp`

**Output Files:**
- Multiple widths: 378w, 400w, 756w, 800w, 1200w
- Multiple formats: WebP, AVIF
- Original format (optimized JPEG or copied WebP)
- Manifest JSON for programmatic access

**Customization:** Edit `scripts/optimize-images.mjs` to change widths, formats, quality settings, or skip patterns.

## 🎨 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.15.4 | Static site generator |
| **Tailwind CSS** | 4.1.17 | Utility-first CSS |
| **Svelte** | 5.43.5 | Reactive components |
| **TypeScript** | 5.9.3 | Type safety |
| **Sharp** | 0.34.5 | Image optimization |
| **pnpm** | 9.15.4 | Package manager |
| **Volta** | - | Node.js version manager |
| **Biome** | 2.3.4 | Linter & formatter |
| **Zod** | 4.1.12 | Runtime validation |
| **MDX** | 4.3.10 | Markdown with components |

## 🚢 Deployment

Each package can be deployed independently:

### Deploy Demo:
```bash
# Build demo
pnpm build:demo

# Deploy from packages/demo/dist/
```

### Deploy Base:
```bash
# Build base
pnpm build:base

# Deploy from packages/base/dist/
```

### Supported Platforms
- Vercel
- Netlify
- Cloudflare Pages (Node.js version pinned via `.nvmrc`)
- GitHub Pages
- Any static host

### Node.js Version Control

The project uses Node.js 24.11.0 (LTS). Version is controlled via:
- `.nvmrc` - For nvm, Volta, and Cloudflare Pages
- `.node-version` - For asdf and other version managers
- `package.json` engines field - For npm/pnpm version checks

Cloudflare Pages will automatically use the version specified in `.nvmrc`.

## 🔧 Troubleshooting

### "Module not found" errors
```bash
# Reinstall workspace
pnpm install
```

### "git can't be found" (Husky warning)
```bash
# Husky looks for .git in package root
# This is normal in workspaces, can be ignored
# Or configure husky in root if needed
```

### Different Node.js versions
```bash
# Volta manages versions automatically
# Just ensure Volta is installed
volta install node@24.11.0
volta install pnpm

# Or use nvm
nvm use

# Or use asdf
asdf install
```

### Shared styles not updating
```bash
# Clear cache and rebuild
pnpm clean
pnpm install
pnpm build
```

## 📚 Learn More

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Astro Documentation](https://docs.astro.build)
- [Volta Documentation](https://volta.sh)
- [Shared Package README](packages/shared/README.md)

## License

MIT © casoon

## 🔗 Links

- [GitHub Repository](https://github.com/casoon/astro-v5-template)
- [Demo Site](https://astrov5.casoon.dev) (from packages/demo)
