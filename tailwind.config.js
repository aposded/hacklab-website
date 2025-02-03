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
        'hl-purple': {
          '50': '#f5f4fe',
          '100': '#edebfc',
          '200': '#dddafa',
          '300': '#c5bbf7',
          '400': '#a795f0',
          '500': '#896ae8',
          '600': '#784add',
          '700': '#6838c9',
          DEFAULT: '#5b30b0',
          '900': '#49288a',
          '950': '#2c175e',
        },
        'hl-green': {
          '50': '#f0f9f3',
          '100': '#dcefe1',
          '200': '#bae0c6',
          '300': '#8dc8a4',
          '400': '#5daa7d',
          DEFAULT: '#368158',
          '600': '#2a714c',
          '700': '#225a3e',
          '800': '#1d4833',
          '900': '#183c2a',
          '950': '#0d2118',
        },
        'hl-blue': {
          '50': '#f1f9fe',
          '100': '#e2f2fc',
          '200': '#bee6f9',
          '300': '#85d1f4',
          '400': '#44bbec',
          DEFAULT: '#1ba1da',
          '600': '#0e82bb',
          '700': '#0d6897',
          '800': '#0f587d',
          '900': '#124968',
          '950': '#0c2f45',
        },

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
