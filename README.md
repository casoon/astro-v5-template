# Astro V5 Template

## Project Description
The Astro V5 Template is a comprehensive demonstration of the features of Astro.js version 5.x. This project showcases the integration of pages, layouts, various frontend components, dynamic routing, data fetching, image optimization, and modern styling techniques. The goal is to highlight the capabilities and flexibility of Astro.js while providing a modern, minimalist user interface.
You can view the deployed project here: [astrov5.casoon.dev](https://astrov5.casoon.dev), hosted on Cloudflare

## Features
- **Pages and Layouts**: Reusable layouts are created to ensure a consistent page structure, including headers, footers, and navigation menus.
- **Astro Component Example**: Added a reusable component (`Greeting.astro`) that takes a name as a prop and displays a personalized greeting.- **Blog Collection and Dynamic Routing**: The blog is maintained using Markdown files stored in `src/content/blog`. Dynamic routes (`src/pages/blog/[slug].astro`) allow for displaying individual blog posts.
- **Data Fetching and Collections**: Blog post content is fetched from Markdown files and dynamically integrated into the page. Collections are defined in `src/content/config.ts` to create a clear structure.
- **Data Fetching Example**: Added a page demonstrating how to fetch data from an official API (SpaceX) and display it on the website.
- **Image Optimization with @astrojs/image**: Images are optimized using the `@astrojs/image` integration to improve performance. An example can be found on the `image-example.astro` page.
- **Static and Dynamic Content**: The project includes a mix of statically generated pages and dynamic elements, such as the blog page, which automatically updates when new content is added.
- **Styling with Pico.css**: The project uses Pico.css as a modern, minimalist alternative to Bootstrap to ensure a clean, appealing design.
- **Internal API**: Added an internal API endpoint (`/api/greeting`) that returns a JSON response, demonstrating the use of server-side API routes with Astro.
- **Server Island Example**: Added a page (`server-island.astro`) that integrates a slow component rendered with server:defer.

## Design and User Interface
The project design aims to provide a clear and user-friendly interface. With the help of Pico.css, a stylish yet minimalist aesthetic is achieved that focuses on content without being overwhelming. Navigation elements and layout components are clearly structured to ensure an intuitive user experience.

## Deployment
The project is designed to be easily deployed on platforms such as Vercel, Netlify, or DigitalOcean. Thanks to the static nature of Astro, fast load times and good performance are ensured.

## Deployment with bun
To deploy this project using bun, follow these steps:
1. Make sure all dependencies are installed:
   ```bash
   bun install
   ```
2. Build the project:
   ```bash
   bun astro build
   ```
3. Start the server:
   ```bash
   bun astro start
   ```
   Alternatively, deploy the output to your chosen hosting platform.
