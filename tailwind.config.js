/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens : {
        sm: "100%",
        md: "100%",
        lg: "991px",
        xl: "1170px"
      }
    },
    colors:{
      'custom-orange': '#FF7D44',
      'main-color': '#104B59',
      'color-selection': '#1C3F39',
      'color-custom-green': '#07847F',
      'color-button': '#01323F',
      'color-custom-gray': '#505D7B',
      white: '#fff'
    },
    extend: {},
  },
  plugins: [],
}

