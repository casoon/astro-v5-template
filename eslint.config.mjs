import prettier from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';

// ESLint is only used for Astro files
// JS/TS files are handled by Biome
export default [
  // Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.astro/**',
      // Files with TypeScript syntax that cause parser issues
      '**/layouts/**',
      '**/pages/**',
      'packages/ui/src/**',
    ],
  },

  // Astro rules
  ...eslintPluginAstro.configs.recommended,

  // Prettier (disables conflicting rules)
  prettier,

  // Astro component files
  {
    files: ['**/*.astro'],
    rules: {
      // Relax rules for Astro files since Biome handles TS
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];
