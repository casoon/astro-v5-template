# Color Contrast Analysis (WCAG 2.1 AA)

**Datum:** 2025-11-16
**Standard:** WCAG 2.1 Level AA
**Anforderung:** Mindestens 4.5:1 für normalen Text, 3:1 für große Texte (18pt+ oder 14pt bold+)

---

## ✅ Geprüfte Kombinationen - OK

### Haupttexte
- **text-slate-900 / bg-slate-50** (Light Mode): ~16:1 ✅ Ausgezeichnet
- **text-white / bg-slate-900** (Dark Mode): ~16:1 ✅ Ausgezeichnet
- **text-gray-600 / bg-white** (Light Mode): ~7:1 ✅ Gut
- **text-gray-200 / bg-slate-800** (Dark Mode): ~9:1 ✅ Gut
- **text-gray-700 / bg-white** (Light Mode): ~9:1 ✅ Gut

### Primäre CTAs
- **text-white / bg-purple-600**: ~4.5:1 ✅ WCAG AA konform
- **text-white / bg-blue-600**: ~5.0:1 ✅ WCAG AA konform

### Navigation
- **text-slate-900 / bg-transparent** (over bg-slate-50): ~16:1 ✅
- **text-slate-300 / bg-slate-900** (Dark): ~11:1 ✅

---

## ⚠️ Zu prüfende Kombinationen

### 1. Hero - Sekundärer CTA (niedrige Priorität)
**Datei:** `packages/base/src/components/Hero.astro:55`

```astro
<a class="... bg-white/20 ... text-base font-medium ...">
```

**Problem:**
- Textfarbe wird vermutlich vom Parent geerbt (text-slate-900 oder ähnlich)
- `bg-white/20` ist sehr transparent (20% Opazität)
- Kontrast hängt vom Hintergrund ab

**Status:** ⚠️ Abhängig vom Kontext
**Empfehlung:** Explizite Textfarbe setzen

```astro
<!-- Vorher -->
<a class="... bg-white/20 ...">

<!-- Besser -->
<a class="... bg-white/20 text-slate-900 dark:text-white ...">
```

### 2. BlogCard - Tags (Minimal Variant)
**Datei:** `packages/base/src/components/BlogCard.astro:37`

```typescript
minimal: 'bg-white/10 text-gray-600 dark:text-gray-300'
```

**Problem:**
- `bg-white/10` sehr transparent (10% Opazität)
- `text-gray-600` auf transparentem Hintergrund
- Kontrast abhängig vom darunterliegenden Hintergrund

**Status:** ⚠️ Möglicherweise zu geringer Kontrast
**Empfehlung:** Höhere Opazität oder festerer Hintergrund

```typescript
// Option 1: Höhere Opazität
minimal: 'bg-white/30 dark:bg-slate-800/50 text-gray-700 dark:text-gray-200'

// Option 2: Fester Hintergrund
minimal: 'bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-200'
```

### 3. Toast - Close Button
**Datei:** `packages/base/src/components/Toast.astro:98`

```html
<button class="... text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 ...">
```

**Problem:**
- `text-slate-400` könnte grenzwertig sein
- Hängt vom Toast-Hintergrund ab (cs-glass-lg)

**Status:** ⚠️ Zu prüfen im Live-Kontext
**Hinweis:** Close-Buttons haben oft etwas weniger Kontrast, aber sollten noch erkennbar sein

---

## 🔧 Automatisierte Tests

### Mit pa11y-ci (empfohlen)
```bash
npm install -g pa11y-ci
pa11y-ci --sitemap http://localhost:4321/sitemap.xml
```

### Mit axe DevTools (Browser-Extension)
- Chrome/Firefox Extension installieren
- Seite öffnen
- DevTools → axe Tab → Analyze

### Online Tools
- **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Coolors Contrast Checker**: https://coolors.co/contrast-checker

---

## 📋 Empfohlene Maßnahmen

### Sofort (für Template-Robustheit):

1. **Hero - Sekundärer CTA:** Explizite Textfarbe hinzufügen
```diff
<a
  href={secondaryCtaLink}
  aria-label={secondaryCtaText}
- class="... bg-white/20 backdrop-blur-sm border border-white/30 ..."
+ class="... bg-white/20 text-slate-900 dark:text-white backdrop-blur-sm border border-white/30 ..."
>
```

2. **BlogCard - Minimal Tags:** Festeren Hintergrund verwenden
```diff
const tagVariants = {
  default: 'cs-glass-sm',
  featured: 'cs-gradient-sunset text-white shadow-lg',
- minimal: 'bg-white/10 text-gray-600 dark:text-gray-300'
+ minimal: 'bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200'
};
```

### Optional (Live-Testing):

3. **Toast Close Button:** Im Browser testen mit echtem Glass-Hintergrund
   - Wenn zu schwach: `text-slate-500` statt `text-slate-400` verwenden

---

## 🎯 Fazit

**Gesamtstatus:** Gut mit kleinen Verbesserungen empfohlen

Die meisten Farbkombinationen im Template sind WCAG AA konform. Die identifizierten Probleme betreffen hauptsächlich **transparente Hintergründe** wo der Kontrast kontextabhängig ist.

**Priorität der Fixes:**
1. 🟡 BlogCard Minimal Tags (mittel - betrifft Lesbarkeit)
2. 🟢 Hero Sekundärer CTA (niedrig - meist auf weißem Hintergrund)
3. 🟢 Toast Close Button (niedrig - dekorative Funktion)

**Empfehlung:** Die beiden wichtigsten Fixes (#1 und #2) durchführen für Template-Robustheit.
