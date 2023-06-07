/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
