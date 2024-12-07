module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mcdonaldsRed: '#FF0000',
        mcdonaldsYellow: '#FFC72C',
        mcdonaldsGreen: '#00A651',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
