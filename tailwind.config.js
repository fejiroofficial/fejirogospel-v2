/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'white': '#f5f5f5'
      },
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'satisfy': ['Satisfy', 'sans-serif']
      },
      screen: {
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      },
      container: {
        padding: {
          DEFAULT: '2rem'
        }
      }
    },
  },
  plugins: [],
}

