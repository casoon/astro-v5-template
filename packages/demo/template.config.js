// Template configuration for optional features
export const templateConfig = {
  features: {
    blog: {
      name: 'Blog System',
      description: 'Full-featured blog with MDX support, RSS feed, and content collections',
      dependencies: ['@astrojs/mdx', '@astrojs/rss'],
      files: [
        'src/pages/blog/',
        'src/pages/rss.xml.js',
        'src/utils/blog.ts',
        'src/content/'
      ],
      astroIntegrations: ['mdx()']
    },
    
    api: {
      name: 'API Routes',
      description: 'Server-side API endpoints for form handling and data processing',
      dependencies: [],
      files: [
        'src/pages/api/',
        'src/pages/api-test.astro'
      ],
      astroIntegrations: []
    },
    
    newsletter: {
      name: 'Newsletter Signup',
      description: 'Newsletter subscription component with form handling',
      dependencies: ['@tailwindcss/forms'],
      files: [
        'src/components/Newsletter.astro',
        'src/pages/api/newsletter.ts'
      ],
      astroIntegrations: []
    },
    
    contact: {
      name: 'Contact Form',
      description: 'Contact form component with server-side processing',
      dependencies: ['@tailwindcss/forms'],
      files: [
        'src/components/ContactForm.astro',
        'src/pages/contact.astro',
        'src/pages/api/contact.ts'
      ],
      astroIntegrations: []
    },
    
    seo: {
      name: 'SEO Optimization',
      description: 'Automatic sitemap generation and SEO meta tags',
      dependencies: ['@astrojs/sitemap'],
      files: [],
      astroIntegrations: ['sitemap()'],
      required: true // Always included
    },
    
  },
  
  presets: {
    minimal: {
      name: 'Minimal Website',
      description: 'Basic Astro site with Tailwind and Svelte',
      features: ['seo']
    },
    
    business: {
      name: 'Business Website',
      description: 'Professional website with contact form and newsletter',
      features: ['seo', 'contact', 'newsletter']
    },
    
    blog: {
      name: 'Blog Website',
      description: 'Content-focused site with blog and newsletter',
      features: ['seo', 'blog', 'newsletter']
    },
    
    fullstack: {
      name: 'Full-Stack Application',
      description: 'Complete setup with all features enabled',
      features: ['seo', 'blog', 'api', 'contact', 'newsletter']
    }
  }
};