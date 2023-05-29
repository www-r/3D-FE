module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '3xs': '0.125rem',
      '2xs': '0.25rem',
      xs: '0.5rem',
      sm: [
        '0.75rem',
        {
          fontWeight: '400',
          lineHeight: '1.25rem',
        },
      ],
      base: [
        '1rem',
        {
          fontWeight: '500',
          lineHeight: '1.5rem',
        },
      ],
      lg: '1.5rem',
      xl: '2rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          'blue-900': '#0F2042',
          main: '#3399FF',
          darkblue: '#237FDB',
          'darkblue-hover': '#0E6DCC',
          'newlloyd-button': '#248FEF',
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
          'white-0': '#FFF',
          'white-50': '#FCFCFC',
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
          'navy-15': '#FAFBFC',
          'navy-30': 'rgba(159, 173, 188, 0.3)',
          blue: '#60AFFF',
          darkblue: '#237FDB',
        },
      },
    },
  },
  plugins: [],
}
