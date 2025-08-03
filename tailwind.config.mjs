/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(253, 243, 246)',
          100: 'rgb(251, 219, 228)',
          200: 'rgb(247, 184, 201)',
          300: 'rgb(242, 137, 166)',
          400: 'rgb(236, 78, 121)',
          500: 'rgb(230, 20, 77)',
          600: 'rgb(195, 17, 65)',
          700: 'rgb(161, 14, 53)',
          800: 'rgb(126, 11, 42)',
          900: 'rgb(92, 8, 30)',
          950: 'rgb(57, 5, 19)',
        },
        secondary: {
          50: 'rgb(245, 245, 245)',
          100: 'rgb(226, 226, 226)',
          200: 'rgb(198, 198, 198)',
          300: 'rgb(160, 160, 160)',
          400: 'rgb(113, 113, 113)',
          500: 'rgb(66, 66, 66)',
          600: 'rgb(56, 56, 56)',
          700: 'rgb(46, 46, 46)',
          800: 'rgb(36, 36, 36)',
          900: 'rgb(26, 26, 26)',
          950: 'rgb(16, 16, 16)',
        },
        accent: {
          50: 'rgb(242, 250, 251)',
          100: 'rgb(216, 242, 245)',
          200: 'rgb(178, 230, 236)',
          300: 'rgb(127, 213, 224)',
          400: 'rgb(63, 192, 208)',
          500: 'rgb(0, 172, 193)',
          600: 'rgb(0, 146, 164)',
          700: 'rgb(0, 120, 135)',
          800: 'rgb(0, 94, 106)',
          900: 'rgb(0, 68, 77)',
          950: 'rgb(0, 43, 48)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(66, 66, 66)',
            a: {
              color: 'rgb(0, 172, 193)',
              '&:hover': {
                color: 'rgb(0, 146, 164)',
              },
            },
            strong: {
              color: 'rgb(16, 16, 16)',
            },
            code: {
              color: 'rgb(0, 172, 193)',
              backgroundColor: 'rgb(245, 245, 245)',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.375rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgb(16, 16, 16)',
              color: 'rgb(245, 245, 245)',
              overflowX: 'auto',
              borderRadius: '0.5rem',
              padding: '1rem',
            },
            blockquote: {
              borderLeftColor: 'rgb(0, 172, 193)',
              color: 'rgb(113, 113, 113)',
            },
            h1: {
              color: 'rgb(16, 16, 16)',
              fontWeight: '700',
            },
            h2: {
              color: 'rgb(16, 16, 16)',
              fontWeight: '600',
            },
            h3: {
              color: 'rgb(16, 16, 16)',
              fontWeight: '600',
            },
            h4: {
              color: 'rgb(16, 16, 16)',
              fontWeight: '600',
            },
          },
        },
        dark: {
          css: {
            color: 'rgb(198, 198, 198)',
            a: {
              color: 'rgb(127, 213, 224)',
              '&:hover': {
                color: 'rgb(63, 192, 208)',
              },
            },
            strong: {
              color: 'rgb(245, 245, 245)',
            },
            code: {
              color: 'rgb(127, 213, 224)',
              backgroundColor: 'rgb(46, 46, 46)',
            },
            pre: {
              backgroundColor: 'rgb(46, 46, 46)',
              color: 'rgb(226, 226, 226)',
            },
            blockquote: {
              borderLeftColor: 'rgb(127, 213, 224)',
              color: 'rgb(198, 198, 198)',
            },
            h1: {
              color: 'rgb(245, 245, 245)',
            },
            h2: {
              color: 'rgb(245, 245, 245)',
            },
            h3: {
              color: 'rgb(245, 245, 245)',
            },
            h4: {
              color: 'rgb(245, 245, 245)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 