#!/usr/bin/env node
import sharp from "sharp";
import { readdir, mkdir, stat, writeFile } from "node:fs/promises";
import { join, dirname, basename, extname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");

// Configuration
const CONFIG = {
  inputDir: "public/images",
  outputDir: "public/images-optimized",
  widths: [400, 800, 1200],
  formats: ["webp", "avif"],
  quality: {
    webp: 80,
    avif: 75,
    jpeg: 85,
  },
  // Skip files matching these patterns
  skipPatterns: [/favicon/i, /-\d+w\.(webp|avif|jpg|png)$/],
};

/**
 * Get all image files recursively from a directory
 */
async function getImageFiles(dir, baseDir = dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath, baseDir)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        // Skip if matches skip patterns
        const shouldSkip = CONFIG.skipPatterns.some((pattern) =>
          pattern.test(entry.name),
        );
        if (!shouldSkip) {
          files.push({
            path: fullPath,
            relativePath: relative(baseDir, fullPath),
            name: basename(entry.name, ext),
            ext,
          });
        }
      }
    }
  }

  return files;
}

/**
 * Optimize a single image to multiple formats and sizes
 */
async function optimizeImage(file, inputBaseDir, outputBaseDir) {
  const results = [];
  const relativeDir = dirname(file.relativePath);
  const outputDirPath = join(outputBaseDir, relativeDir);

  // Ensure output directory exists
  await mkdir(outputDirPath, { recursive: true });

  console.log(`📸 Processing: ${file.relativePath}`);

  // Get original image metadata
  const image = sharp(file.path);
  const metadata = await image.metadata();

  // Generate optimized versions
  for (const width of CONFIG.widths) {
    // Skip if width is larger than original
    if (width > metadata.width) continue;

    for (const format of CONFIG.formats) {
      const outputName = `${file.name}-${width}w.${format}`;
      const outputPath = join(outputDirPath, outputName);

      try {
        await sharp(file.path)
          .resize(width, null, { withoutEnlargement: true })
          [format]({ quality: CONFIG.quality[format] })
          .toFile(outputPath);

        results.push({
          format,
          width,
          path: outputPath,
          relativePath: relative(outputBaseDir, outputPath),
        });

        console.log(`  ✅ ${width}w ${format.toUpperCase()}`);
      } catch (error) {
        console.error(
          `  ❌ Failed ${width}w ${format.toUpperCase()}:`,
          error.message,
        );
      }
    }
  }

  // Copy original as fallback (optimized JPEG)
  const fallbackName = `${file.name}${file.ext}`;
  const fallbackPath = join(outputDirPath, fallbackName);

  try {
    await sharp(file.path)
      .jpeg({ quality: CONFIG.quality.jpeg })
      .toFile(fallbackPath);

    results.push({
      format: "original",
      width: metadata.width,
      path: fallbackPath,
      relativePath: relative(outputBaseDir, fallbackPath),
    });

    console.log(`  ✅ Original (optimized)`);
  } catch (error) {
    console.error(`  ❌ Failed original:`, error.message);
  }

  return results;
}

/**
 * Generate a manifest JSON with all optimized images
 */
async function generateManifest(optimizedImages, outputBaseDir) {
  const manifest = {};

  for (const [originalPath, variants] of Object.entries(optimizedImages)) {
    manifest[originalPath] = variants;
  }

  const manifestPath = join(outputBaseDir, "manifest.json");
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n📄 Manifest generated: ${manifestPath}`);
}

/**
 * Main function
 */
async function main() {
  // Get package filter from command line argument
  const packageFilter = process.argv[2];

  console.log("🚀 Starting image optimization...\n");
  if (packageFilter) {
    console.log(`📦 Filter: Only processing package "${packageFilter}"\n`);
  }

  // Find all packages with images
  const packagesDir = join(ROOT_DIR, "packages");
  const packages = await readdir(packagesDir);

  for (const pkg of packages) {
    // Skip if package filter is set and doesn't match
    if (packageFilter && pkg !== packageFilter) {
      continue;
    }
    const pkgDir = join(packagesDir, pkg);
    const inputDir = join(pkgDir, CONFIG.inputDir);
    const outputDir = join(pkgDir, CONFIG.outputDir);

    // Check if input directory exists
    try {
      await stat(inputDir);
    } catch {
      console.log(`⏭️  Skipping ${pkg} (no images directory)\n`);
      continue;
    }

    console.log(`📦 Processing package: ${pkg}`);
    console.log(`   Input:  ${CONFIG.inputDir}`);
    console.log(`   Output: ${CONFIG.outputDir}\n`);

    // Get all image files
    const imageFiles = await getImageFiles(inputDir);

    if (imageFiles.length === 0) {
      console.log(`   No images found\n`);
      continue;
    }

    console.log(`   Found ${imageFiles.length} image(s)\n`);

    // Optimize all images
    const optimizedImages = {};
    for (const file of imageFiles) {
      const variants = await optimizeImage(file, inputDir, outputDir);
      optimizedImages[file.relativePath] = variants;
    }

    // Generate manifest
    await generateManifest(optimizedImages, outputDir);

    console.log(`\n✅ Package ${pkg} complete!\n`);
  }

  console.log("🎉 All images optimized successfully!");
}

// Run
main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
