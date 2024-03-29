/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      'md': '480px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
  },
  plugins: [],
}

