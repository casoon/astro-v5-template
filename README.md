# Astro V5 Template

A modern and minimal template for new Astro projects with Tailwind CSS v4 and Svelte integration.

**Live Demo:** [astrov5.casoon.dev](https://astrov5.casoon.dev/)

## 🚀 Features

- **Astro 5.x** - Latest version with modern configuration
- **Tailwind CSS v4** - With Vite integration for optimal performance
- **Svelte Integration** - With example components and theme toggle
- **TypeScript** - Full type support with strict configuration
- **Biome** - Modern linting and formatting tools
- **Dark Mode** - Automatic system preference detection
- **Blog System** - MDX support with Content Collections
- **API Routes** - Example endpoints for backend functionality
- **Mobile-First** - Responsive design for all devices
- **Performance Optimizations** - Modern UX patterns and loading states
- **@casoon/tailwindcss-effects** - Advanced Tailwind CSS effects and animations

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

## ✨ Tailwind CSS Effects

This template includes **@casoon/tailwindcss-effects** (v0.4.0) - a powerful collection of advanced Tailwind CSS effects and animations that enhance your UI components with:

- **Advanced hover effects** and micro-interactions
- **Smooth transitions** and animations
- **Modern glassmorphism** and backdrop effects
- **Enhanced form elements** with interactive states
- **Professional loading animations** and spinners
- **Custom utility classes** for complex animations

Learn more: [@casoon/tailwindcss-effects](https://github.com/casoon/tailwindcss-effects)

## 🔧 Configuration

### Linting & Formatting
The project uses a combined configuration of:
- **Biome** for general linting tasks
- **Prettier** for Svelte and Astro-specific formatting
- Separate configuration files for maximum flexibility

### Environment Variables
- Copy `env.example` to `.env`
- Configure your specific environment variables

## 📱 Browser Support

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## 🤝 Contributing

Improvement suggestions and pull requests are welcome!

## 📄 License

This template is available under the MIT license.

---

**Purpose:** Quick starting point for your own Astro projects with Tailwind CSS v4 and Svelte integration.
