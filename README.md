# Astro V5 Template

This project is a minimal template for new Astro projects with Tailwind CSS v4 and Svelte.

**Live Demo:** [astrov5.casoon.dev](https://astrov5.casoon.dev/)

**Included:**

- **Astro 5.x** base configuration
- **Tailwind CSS v4** with Vite integration
- **Svelte** integration with example component
- **TypeScript** support with strict configuration
- **Biome** for linting and **Prettier** for formatting
- **Dark mode** toggle with system preference detection
- **Blog system** with MDX support and content collections
- **API routes** with example endpoints
- **Mobile-first** responsive design
- **Modern UX patterns** (loading states, animations)
- **Environment variables** configuration
- **Performance optimizations**

**Quick Start:**

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

**Available Scripts:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format:svelte` - Format Svelte files with prettier-plugin-svelte
- `npm run format:astro` - Format Astro files with prettier-plugin-astro
- `npm run check:format:svelte` - Check Svelte file formatting
- `npm run check:format:astro` - Check Astro file formatting
- `npm run check:biome` - Lint code with Biome (excluding Svelte/Astro)
- `npm run check` - Combined linting with Biome & format checking with Prettier
- `npm run type-check` - Check TypeScript types

---

## Linting & Formatting (Biome + Prettier + Svelte + Astro)

### **Setup:**
- **Biome** checks and formats all files except Svelte components (`*.svelte`) and Astro files (`*.astro`).
  - Configuration can be found in `biome.json` (`!**/*.svelte` and `!**/*.astro` in the includes array).
- **Prettier** uses separate configuration files for different file types:
  - `.prettierrc` - General settings
  - `.prettierrc.svelte.json` - Svelte-specific configuration
  - `.prettierrc.astro.json` - Astro-specific configuration

### **Main Commands:**
- `npm run check:biome` – Linting with Biome (excluding Svelte/Astro)
- `npm run check:format:svelte` – Format check for Svelte files
- `npm run check:format:astro` – Format check for Astro files
- `npm run check` – All combined
- `npm run format:svelte` – Format only Svelte files
- `npm run format:astro` – Format only Astro files

### **Notes:**
- In Astro files with dynamic components (e.g., `{ Content } = await post.render();`), Biome may show an "unused variable" error even though the variable is used in the template. This is a known linter issue and can be ignored.
- Astro and Svelte files are excluded from Biome and formatted separately with their own Prettier configurations.
- Each file type uses its own configuration file for maximum flexibility and consistency.

### **Configuration Files:**
```
.prettierrc              # General settings (minimal)
.prettierrc.svelte.json  # Svelte-specific configuration
.prettierrc.astro.json   # Astro-specific configuration
```

---

## Blog System

### **Features:**
- **MDX Support** for interactive blog posts
- **Content Collections** with TypeScript schema validation
- **Automatic sorting** by date (newest first)
- **Tag system** for categorization
- **Responsive grid layout** for blog overview
- **Dark mode** with optimized contrasts
- **SEO-optimized** meta tags and structure

### **Structure:**
```
src/
├── content/
│   └── blog/
│       ├── first-post.mdx
│       ├── getting-started.mdx
│       └── tailwind-tips.mdx
├── pages/
│   └── blog/
│       ├── index.astro      # Blog overview
│       └── [...slug].astro  # Individual blog posts
└── utils/
    └── blog.ts              # Blog utilities (Best Practices)
```

### **Usage:**
- Create blog posts as `.mdx` files in `src/content/blog/`
- Frontmatter with `title`, `date`, `description`, `author`, `tags` (optional)
- Automatic generation of blog overview and individual pages

---

## API Routes

### **Features:**
- **RESTful API endpoints** in `src/pages/api/`
- **TypeScript support** for API routes
- **Interactive test page** at `/api-test`
- **JSON response handling**

### **Available Endpoints:**
- `GET /api/hello` - Simple Hello World endpoint
- `GET /api/users` - User list with query parameter support
- `POST /api/users` - User creation (demo)

---

**Purpose:**

Quick starting point for your own Astro projects with Tailwind CSS v4 and Svelte.
