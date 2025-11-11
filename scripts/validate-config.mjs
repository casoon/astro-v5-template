#!/usr/bin/env node

/**
 * Build-time Configuration Validator
 *
 * Checks for critical configuration values that should be customized
 * before deployment. Warns about default/placeholder values that need attention.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};

// Critical values that must be customized
const CRITICAL_CHECKS = {
  // Site Configuration
  PUBLIC_SITE_URL: {
    default: ["http://localhost:4321", "https://astrov5.casoon.dev"],
    message: "Production site URL must be configured",
    severity: "error",
  },
  PUBLIC_SITE_NAME: {
    default: ["Astro V5 Template", "My Astro Site", "Your Site"],
    message: "Site name should be customized",
    severity: "warning",
  },

  // SEO - These should be provided in components
  // But we can warn if env.ts has generic defaults
};

// Files to check
const FILES_TO_CHECK = ["src/env.ts", "astro.config.mjs", "package.json"];

class ConfigValidator {
  constructor(packagePath) {
    this.packagePath = packagePath;
    this.warnings = [];
    this.errors = [];
  }

  log(message, color = "reset") {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  warn(message) {
    this.warnings.push(message);
    this.log(`⚠️  WARNING: ${message}`, "yellow");
  }

  error(message) {
    this.errors.push(message);
    this.log(`❌ ERROR: ${message}`, "red");
  }

  success(message) {
    this.log(`✅ ${message}`, "green");
  }

  info(message) {
    this.log(`ℹ️  ${message}`, "cyan");
  }

  checkEnvFile() {
    const envPath = join(this.packagePath, "src/env.ts");

    if (!existsSync(envPath)) {
      this.warn("src/env.ts not found - environment validation skipped");
      return;
    }

    try {
      const content = readFileSync(envPath, "utf-8");

      // Check PUBLIC_SITE_URL
      if (
        content.includes("default('http://localhost:4321')") ||
        content.includes("default('https://astrov5.casoon.dev')")
      ) {
        this.error(
          "PUBLIC_SITE_URL is using default value - must be set to production URL",
        );
      }

      // Check PUBLIC_SITE_NAME
      if (
        content.includes("default('Astro V5 Template')") ||
        content.includes("default('My Astro Site')") ||
        content.includes("default('Your Site')")
      ) {
        this.warn(
          "PUBLIC_SITE_NAME is using default value - should be customized",
        );
      }

      // Check for "Your Name" or similar placeholders
      if (content.includes("Your Name") || content.includes("Your Company")) {
        this.warn(
          'Found placeholder text ("Your Name") in env.ts - should be customized',
        );
      }
    } catch (err) {
      this.error(`Failed to read env.ts: ${err.message}`);
    }
  }

  checkAstroConfig() {
    const configPath = join(this.packagePath, "astro.config.mjs");

    if (!existsSync(configPath)) {
      this.warn("astro.config.mjs not found");
      return;
    }

    try {
      const content = readFileSync(configPath, "utf-8");

      // Check if env is imported (good practice)
      if (
        !content.includes("from './src/env") &&
        !content.includes('from "./src/env')
      ) {
        this.info(
          "astro.config.mjs: Consider importing site URL from env.ts for consistency",
        );
      }

      // Still warn about hardcoded defaults
      if (
        content.includes("site: 'http://localhost:4321'") ||
        content.includes('site: "http://localhost:4321"') ||
        content.includes("site: 'https://astrov5.casoon.dev'") ||
        content.includes('site: "https://astrov5.casoon.dev"')
      ) {
        this.warn(
          "astro.config.mjs: Contains hardcoded default URL - should import from env.ts",
        );
      }
    } catch (err) {
      this.error(`Failed to read astro.config.mjs: ${err.message}`);
    }
  }

  checkPackageJson() {
    const pkgPath = join(this.packagePath, "package.json");

    if (!existsSync(pkgPath)) {
      this.error("package.json not found");
      return;
    }

    try {
      const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));

      // Check package name
      if (pkg.name && pkg.name.includes("template")) {
        this.warn(
          `package.json: name "${pkg.name}" contains "template" - consider customizing`,
        );
      }

      // Check description
      if (
        pkg.description &&
        (pkg.description.includes("template") ||
          pkg.description.includes("starter") ||
          pkg.description.toLowerCase() === "description")
      ) {
        this.warn(
          `package.json: description is generic - should be customized`,
        );
      }

      // Check repository URL
      if (
        pkg.repository &&
        pkg.repository.url &&
        pkg.repository.url.includes("casoon/astro-v5-template")
      ) {
        this.warn(
          "package.json: repository URL is still pointing to template - should be updated",
        );
      }
    } catch (err) {
      this.error(`Failed to read package.json: ${err.message}`);
    }
  }

  checkPublicFiles() {
    const publicPath = join(this.packagePath, "public");

    if (!existsSync(publicPath)) {
      this.warn("public/ directory not found");
      return;
    }

    // Check for favicon
    const faviconPath = join(publicPath, "favicon.svg");
    if (!existsSync(faviconPath)) {
      this.warn("public/favicon.svg not found - add a custom favicon");
    }

    // Check for robots.txt
    const robotsPath = join(publicPath, "robots.txt");
    if (existsSync(robotsPath)) {
      const content = readFileSync(robotsPath, "utf-8");
      if (
        content.includes("https://astrov5.casoon.dev") ||
        content.includes("http://localhost")
      ) {
        this.warn(
          "robots.txt contains default/localhost URLs - should be updated",
        );
      }
    }
  }

  run() {
    this.log("\n" + "=".repeat(60), "cyan");
    this.log("🔍 Configuration Validation", "bold");
    this.log("=".repeat(60) + "\n", "cyan");

    this.info(`Checking: ${this.packagePath}\n`);

    this.checkEnvFile();
    this.checkAstroConfig();
    this.checkPackageJson();
    this.checkPublicFiles();

    // Summary
    this.log("\n" + "=".repeat(60), "cyan");

    if (this.errors.length === 0 && this.warnings.length === 0) {
      this.success("All configuration checks passed! ✨");
    } else {
      if (this.errors.length > 0) {
        this.log(`\n❌ ${this.errors.length} ERROR(S) found:`, "red");
        this.log("   These MUST be fixed before deployment!\n", "red");
      }

      if (this.warnings.length > 0) {
        this.log(`\n⚠️  ${this.warnings.length} WARNING(S) found:`, "yellow");
        this.log("   These should be reviewed and customized.\n", "yellow");
      }

      this.log("\n📝 Action Items:", "cyan");
      this.log(
        "   1. Update PUBLIC_SITE_URL in src/env.ts (single source of truth)",
        "cyan",
      );
      this.log("   2. Customize PUBLIC_SITE_NAME and other branding", "cyan");
      this.log(
        "   3. Update package.json (name, description, repository)",
        "cyan",
      );
      this.log("   4. Add custom favicon.svg to public/", "cyan");
      this.log("   5. Update robots.txt with production URL", "cyan");
    }

    this.log("=".repeat(60) + "\n", "cyan");

    // Return exit code (0 = success, 1 = warnings/errors found)
    return this.errors.length > 0 || this.warnings.length > 0 ? 1 : 0;
  }
}

// Main execution
const packagePath = process.argv[2] || process.cwd();
const validator = new ConfigValidator(packagePath);
const exitCode = validator.run();

// For now, don't fail the build - just warn
// Change to process.exit(exitCode) to fail on errors
if (exitCode !== 0) {
  console.log("⚠️  Configuration warnings found but continuing build...\n");
}
process.exit(0);
