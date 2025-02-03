/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports={
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      colors: {
        'dark': {
          '50': '#f2f8f9',
          '100': '#deeeef',
          '200': '#c1dfe0',
          '300': '#96c7ca',
          '400': '#64a6ac',
          '500': '#498b91',
          '600': '#3f727b',
          '700': '#385e66',
          '800': '#345056',
          '900': '#2f444a',
          DEFAULT: '#111b1e',
        },
        'light': '#f0f0f0',
        'hl-purple': 'rgb(152,19,236)',
        'hl-green': 'rgb(99,137,76)',
        'hl-yellow': 'rgb(230,189,20)'

      },
      maxWidth: {
        tiny: '16rem',
        '2tiny': '8rem',
        '3tiny': '4rem',
        '4tiny': '2rem',
        '8xl': '88rem',
        '9xl': '96rem'
      },
      spacing: {
        '128': '32rem',
        '192': '48rem',
        '256': '64rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
        '4xs': '0.375rem',
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
}
