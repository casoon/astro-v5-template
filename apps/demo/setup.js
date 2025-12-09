#!/usr/bin/env node

import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

async function setupTemplate() {
  console.log('🚀 Welcome to Astro v5 Template Setup!');
  console.log("Let's configure your template with the features you need.\n");

  // Project Configuration
  const projectName =
    (await question('📦 Project name (astro-v5-template): ')) || 'astro-v5-template';
  const projectDescription =
    (await question('📝 Project description: ')) || 'Modern Astro v5 website';
  const authorName = (await question('👤 Author name: ')) || 'Your Name';
  const siteUrl = (await question('🌐 Site URL (https://example.com): ')) || 'https://example.com';

  // Feature Selection
  const includeBlog =
    (await question('📝 Include Blog functionality? (y/N): ')).toLowerCase() === 'y';
  const includeApi = (await question('🔌 Include API routes? (y/N): ')).toLowerCase() === 'y';
  const includeNewsletter =
    (await question('📧 Include Newsletter signup? (y/N): ')).toLowerCase() === 'y';
  const includeContact = (await question('📞 Include Contact form? (y/N): ')).toLowerCase() === 'y';

  console.log('\n🔧 Configuring your template...');

  // Update package.json
  updatePackageJson(projectName, projectDescription, authorName);

  // Update astro.config.mjs
  updateAstroConfig(siteUrl);

  // Configure features
  if (!includeBlog) {
    removeBlogFeatures();
  }

  if (!includeApi) {
    removeApiFeatures();
  }

  if (!includeNewsletter) {
    removeNewsletterFeatures();
  }

  if (!includeContact) {
    removeContactFeatures();
  }

  // Update dependencies based on selected features
  updateDependencies(includeBlog, includeApi, includeNewsletter, includeContact);

  console.log('\n✅ Template setup completed!');
  console.log(`\nNext steps:
1. Run: npm install
2. Run: npm run dev
3. Start building your ${projectName}!
  `);

  rl.close();
}

function updatePackageJson(name, description, author) {
  const packagePath = join(__dirname, 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));

  packageJson.name = name;
  packageJson.description = description;
  packageJson.author = author;

  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

function updateAstroConfig(siteUrl) {
  const configPath = join(__dirname, 'astro.config.mjs');
  let config = readFileSync(configPath, 'utf-8');

  config = config.replace(/site: ['"].+['"]/, `site: '${siteUrl}'`);

  writeFileSync(configPath, config);
}

function removeBlogFeatures() {
  try {
    // Remove blog pages
    rmSync(join(__dirname, 'src/pages/blog'), { recursive: true, force: true });

    // Remove blog utilities
    rmSync(join(__dirname, 'src/utils/blog.ts'), { force: true });

    // Remove content config if exists
    rmSync(join(__dirname, 'src/content'), { recursive: true, force: true });

    // Remove RSS feed
    rmSync(join(__dirname, 'src/pages/rss.xml.js'), { force: true });

    console.log('📝 Blog features removed');
  } catch (error) {
    console.warn('⚠️ Some blog files could not be removed:', error.message);
  }
}

function removeApiFeatures() {
  try {
    // Remove API directory
    rmSync(join(__dirname, 'src/pages/api'), { recursive: true, force: true });

    // Remove api test page
    rmSync(join(__dirname, 'src/pages/api-test.astro'), { force: true });

    console.log('🔌 API features removed');
  } catch (error) {
    console.warn('⚠️ Some API files could not be removed:', error.message);
  }
}

function removeNewsletterFeatures() {
  try {
    // Remove Newsletter component
    rmSync(join(__dirname, 'src/components/Newsletter.astro'), { force: true });

    console.log('📧 Newsletter features removed');
  } catch (error) {
    console.warn('⚠️ Newsletter component could not be removed:', error.message);
  }
}

function removeContactFeatures() {
  try {
    // Remove Contact form component
    rmSync(join(__dirname, 'src/components/ContactForm.astro'), {
      force: true,
    });

    // Remove contact page
    rmSync(join(__dirname, 'src/pages/contact.astro'), { force: true });

    console.log('📞 Contact features removed');
  } catch (error) {
    console.warn('⚠️ Contact features could not be removed:', error.message);
  }
}

function updateDependencies(includeBlog, _includeApi, includeNewsletter, includeContact) {
  const packagePath = join(__dirname, 'package.json');
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));

  // Remove MDX if no blog
  if (!includeBlog) {
    delete packageJson.dependencies['@astrojs/mdx'];
    delete packageJson.dependencies['@astrojs/rss'];
  }

  // Remove form-related dependencies if no contact/newsletter
  if (!includeContact && !includeNewsletter) {
    delete packageJson.dependencies['@tailwindcss/forms'];
  }

  // Update scripts based on features
  if (!includeBlog) {
    // Could remove blog-specific scripts here
  }

  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
  console.log('📦 Dependencies updated based on selected features');
}

// Run setup
setupTemplate().catch(console.error);
