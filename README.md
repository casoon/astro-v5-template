# Astro v5 Workspace

[![Astro](https://img.shields.io/badge/Astro-5.15.4-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Workspaces](https://img.shields.io/badge/Workspaces-enabled-brightgreen)]()

Production-ready Astro v5 monorepo with pnpm workspaces and shared design system.

## Packages

```
packages/
├── shared/  - Shared CSS variables and design system
├── base/    - Minimal production template (blank slate)
└── demo/    - Full-featured demo site (with examples)
```

### **@astro-v5/shared**
Shared design system for all packages:
- CSS variables and design tokens
- Common animations
- Utility classes
- Typography system
- Dark mode support

### **@astro-v5/base**
Minimal starter for new projects:
- Clean, no demo content
- Essential components only
- Ready for production
- Example blog post (draft)

### **@astro-v5/demo**
Full-featured showcase:
- 4 example blog posts
- All components demonstrated
- API examples
- Contact forms
- [Deployed demo site](https://astrov5.casoon.dev)

## 🚀 Quick Start

### Prerequisites

```bash
# Install Volta (automatic Node.js version management)
curl https://get.volta.sh | bash

# Install pnpm
volta install pnpm
```

Volta automatically uses Node.js 22.21.0 and pnpm 9.15.4 (defined in `package.json`).

### Install & Run

```bash
# Clone repository
git clone https://github.com/casoon/astro-v5-template.git
cd astro-v5-template

# Install all dependencies
pnpm install

# Run demo site (default)
pnpm dev

# Run base template
pnpm dev:base
```

## 📋 Workspace Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start demo site (default) |
| `pnpm dev:base` | Start base template |
| `pnpm dev:demo` | Start demo site |
| `pnpm build` | Build all packages |
| `pnpm build:base` | Build base only |
| `pnpm build:demo` | Build demo only |
| `pnpm preview` | Preview demo build |
| `pnpm preview:base` | Preview base build |
| `pnpm clean` | Clean all packages |
| `pnpm format` | Format all code |
| `pnpm check` | Run all checks |

## 🎯 Use Cases

### Scenario 1: Start New Project

Use the base template:

```bash
# Copy base package
cp -r packages/base my-project
cd my-project
pnpm install
pnpm dev
```

### Scenario 2: Multiple Sites with Shared Design System

This is the main use case - multiple landing pages sharing common styles:

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

### Scenario 3: Customize Shared Design System

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
│   ├── base/                # Minimal template
│   │   ├── package.json     # @astro-v5/base
│   │   ├── src/
│   │   ├── public/
│   │   └── ...
│   └── demo/                # Demo site
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

### Step 2: Copy Base Template

```bash
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

## 🎨 Tech Stack

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
- Cloudflare Pages
- GitHub Pages
- Any static host

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
volta install node@22.21.0
volta install pnpm
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
