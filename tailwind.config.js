module.exports = {
  content: [
    "./blog/**/*.{md,html,js,jsx,ts,tsx,jpg,png}",
    "./src/components/*.{js,jsx}",
    "./src/images/*.png",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/templates/*.js",
    "./src/*.{js,jsx,html,ts,tsx,css,scss}",
    "./src/styles/*.css",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'var(--color-dark)',
        'text': 'var(--color-text)',
        'beige': '#eddbc9',
        'pink': '#cc5e51',
        primary: {
          'warm-50': '#FAF9F7',
          'warm-100': '#E8E6E1',
          'warm-200': '#D3CEC4',
          'warm-300': '#B8B2A7',
          'warm-400': '#A39E93',
          'warm-500': '#857F72',
          'warm-600': '#625D52',
          'warm-700': '#504A40',
          'warm-800': '#423D33',
          'warm-900': '#27241D',
        },
      },
    },
  },
  plugins: [
    'gatsby-plugin-postcss'
  ],
}
