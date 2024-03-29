/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs: "320px",
      // // => @media (min-width: 320px) { ... }
      sm: "640px",
      // // => @media (min-width: 640px) { ... }
      md: "768px",
      // // => @media (min-width: 320px) { ... }
      lg: "1024px",
      // // => @media (min-width: 768px) { ... }
      xl: "1280px",
      // // => @media (min-width: 1280px) { ... }
      xxl: "1536px",
      // // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};
