// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This should cover Dashboard.tsx
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-1': '#F9FCFE',
      },
    },
  },
  plugins: [],
};