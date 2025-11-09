# @astro-v5/shared

Shared design system, CSS variables, and common styles for Astro v5 templates.

## Features

- **CSS Variables**: Centralized design tokens for colors, spacing, typography, and more
- **Animations**: Reusable keyframe animations and utility classes
- **Utilities**: Common utility classes for navigation, cards, effects, and layouts
- **Dark Mode**: Full dark mode support with CSS variables
- **Type-safe**: Designed for TypeScript projects

## Usage

### In package.json

Add the shared package as a dependency:

```json
{
  "dependencies": {
    "@astro-v5/shared": "workspace:*"
  }
}
```

### Import Styles

Import the full design system in your Astro layout:

```astro
---
import '@astro-v5/shared/styles/index.css';
---
```

Or import specific modules:

```astro
---
import '@astro-v5/shared/styles/variables.css';
import '@astro-v5/shared/styles/animations.css';
import '@astro-v5/shared/styles/utilities.css';
---
```

### Using CSS Variables

```css
.my-component {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}
```

### Using Utility Classes

```html
<nav class="nav-link">Home</nav>
<div class="card-container">Content</div>
<span class="text-gradient">Gradient Text</span>
<div class="glass-effect">Glass morphism</div>
```

### Using Animations

```html
<div class="animate-fade-in-up">Fades in from bottom</div>
<div class="animate-float">Floating element</div>
<div class="animate-shine">Shining effect</div>
```

## Design Tokens

### Colors

- `--color-background`, `--color-background-secondary`, `--color-background-tertiary`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- `--color-border`, `--color-border-secondary`, `--color-border-light`
- `--color-accent-primary`, `--color-accent-secondary`, `--color-accent-hover`

### Spacing

- `--spacing-xs` through `--spacing-3xl`
- Standard scale: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem

### Border Radius

- `--radius-sm` through `--radius-2xl`, `--radius-full`

### Shadows

- `--shadow-sm` through `--shadow-2xl`

### Typography

- Font family, sizes, weights, and line heights
- `--font-size-xs` through `--font-size-5xl`
- `--font-weight-normal`, `medium`, `semibold`, `bold`

## Dark Mode

All variables automatically adapt to dark mode when `.dark` class is applied to the root element.

## Package Structure

```
packages/shared/
├── package.json
├── README.md
└── src/
    └── styles/
        ├── index.css          # Main entry point
        ├── variables.css      # CSS variables and design tokens
        ├── animations.css     # Keyframe animations
        └── utilities.css      # Utility classes
```
