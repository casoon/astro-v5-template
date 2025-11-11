# Build Scripts

## Configuration Validator (`validate-config.mjs`)

Automated build-time checker that warns about default/placeholder values that should be customized before deployment.

### What it Checks

#### 🔴 **ERRORS** (Must Fix for Production)

| Check | Location | What it looks for |
|-------|----------|-------------------|
| **Site URL** | `src/env.ts` | Default URLs like `http://localhost:4321` or `https://astrov5.casoon.dev` |
| **Astro Site Config** | `astro.config.mjs` | Missing or default site URL |

#### ⚠️ **WARNINGS** (Should Customize)

| Check | Location | What it looks for |
|-------|----------|-------------------|
| **Site Name** | `src/env.ts` | Default names like "Astro V5 Template", "My Astro Site" |
| **Placeholder Text** | `src/env.ts` | Generic text like "Your Name", "Your Company" |
| **Package Name** | `package.json` | Names containing "template" |
| **Description** | `package.json` | Generic descriptions containing "template" or "starter" |
| **Repository URL** | `package.json` | Still pointing to template repo |
| **Robots.txt** | `public/robots.txt` | Contains default/localhost URLs |
| **Favicon** | `public/favicon.svg` | Missing custom favicon |

### When it Runs

The validator runs automatically before every production build:

```bash
pnpm build          # Runs validation → astro check → astro build
pnpm build:fast     # Skips validation (faster builds during development)
```

### Example Output

```
============================================================
🔍 Configuration Validation
============================================================

ℹ️  Checking: /path/to/package

❌ ERROR: PUBLIC_SITE_URL is using default value - must be set to production URL
⚠️  WARNING: PUBLIC_SITE_NAME is using default value - should be customized
❌ ERROR: astro.config.mjs: site URL is not configured or using default

============================================================

❌ 2 ERROR(S) found:
   These MUST be fixed before deployment!

⚠️  4 WARNING(S) found:
   These should be reviewed and customized.

📝 Action Items:
   1. Update PUBLIC_SITE_URL in src/env.ts
   2. Update site URL in astro.config.mjs
   3. Customize PUBLIC_SITE_NAME and other branding
   4. Update package.json (name, description, repository)
   5. Add custom favicon.svg to public/
============================================================
```

### How to Fix Warnings

#### 1. **Update Site URL** (Critical)

```typescript
// src/env.ts
const envSchema = z.object({
  PUBLIC_SITE_URL: z.string().default('https://yourdomain.com'), // ← Change this
  PUBLIC_SITE_NAME: z.string().min(1).default('Your Actual Site Name'), // ← And this
});
```

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://yourdomain.com', // ← Change this
});
```

#### 2. **Update Package Info**

```json
// package.json
{
  "name": "@yourdomain/your-site",
  "description": "Your actual site description",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo"
  }
}
```

#### 3. **Update Robots.txt**

```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

#### 4. **Add Custom Favicon**

Replace `public/favicon.svg` with your own logo/favicon.

### Disable Validation (Not Recommended)

If you want to disable validation for a specific build:

```bash
# Use build:fast which skips validation
pnpm build:fast
```

Or edit `package.json`:

```json
{
  "scripts": {
    "build": "astro check && astro build"  // Remove validation
  }
}
```

### Current Behavior

- ✅ **Continues build** even with errors/warnings
- ✅ **Shows clear action items** for what needs fixing
- ✅ **Color-coded output** (red for errors, yellow for warnings)
- ✅ **Runs before TypeScript checks** to catch config issues early

### Future Enhancements

To make validation **fail the build** on errors:

```javascript
// In validate-config.mjs, change the last line:
process.exit(exitCode); // Instead of process.exit(0)
```

This will prevent deployment with critical configuration errors.

---

## Image Optimization (`optimize-images.mjs`)

See main README for image optimization documentation.

**Usage:**
```bash
pnpm optimize-images          # All packages
pnpm optimize-images:blank    # Blank package only
pnpm optimize-images:base     # Base package only  
pnpm optimize-images:demo     # Demo package only
```
