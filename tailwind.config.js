module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          'blue-900': '#0F2042',
          blue: '#3399FF',
          darkblue: '#237FDB',
          'darkblue-hover': '#0E6DCC',
        },
        point: {
          red: '#933224',
          yellow: '#EAB737',
          green: '#11B0A8',
          'green-hover': '#FF6651',
          'red-text': '#07AAA2',
        },
        bg: {
          0: '#1A1C1F',
          1: '#1E2023',
          2: '#23262D',
          3: '#363B43',
          4: '#151719',
        },
        neutral: {
          'white-50': '#FFF',
          'white-100': '#FCFCFC',
          'navy-100': '#C7D1DB',
          'navy-200': '#A4AFBA',
          'navy-300': '#737C85',
          'navy-800': '#5A5F64',
          'navy-850': '#394149',
          'navy-900': '#21252C',
          'navy-950': '#171A1D',
          'navy-1000': '#101010',
        },
        transparent: {
          gray: '#EBECF0',
          navy: '#FAFBFC',
          darkblue: '#237FDB',
          'very-week-navy': '#FAFBFC',
        },
      },
    },
  },
  plugins: [],
}
