module.exports = {
  theme: {
    screens: {
      'sm': '36rem',
      'md': '48rem',
      'lg': '62rem',
      'xl': '80rem',
      '2xl': '100rem',
    },
    colors: {
      'primary': 'hsl(260 100% 50%)',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '6rem',
      '8xl': '8rem',
    },
    ratios: {
      'xs': 1.125,
      'sm': 1.333,
      'md': 1.5,
      'lg': 1.618,
      'xl': 2,
      '2xl': 3,
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-fl')({
      defaultRatio: 1.618,
      screenMin: 'screens.sm',
      screenMax: 'screens.xl',
      theme: {
        /* config */
      }
    }),
  ],
}
