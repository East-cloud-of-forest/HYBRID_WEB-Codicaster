import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        outline: ['var(--outfit)'],
      },
      animation: {
        'cloth-text': 'movetext 10s linear infinite',
      },
      keyframes: {
        movetext: {
          '0%': {
            'text-indent': '0',
          },
          '50%': {
            'text-indent': '-150%',
            transform: 'translate(0, 0)',
          },
          '51%': {
            transform: 'translate(0, 200%)',
          },
          '52%': {
            'text-indent': '0',
          },
          '75%': {
            transform: 'translate(0)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
