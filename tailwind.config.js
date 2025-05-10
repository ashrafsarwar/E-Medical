// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "background-light": "#f1faf7",
        "background-light-3": "#f3f1eb",
        white: "#ffffff",
        "background-dark": "#333a45",
        "background-dark-grey": "#6b7280",

        // Text Colors
        "font-dark": "#26282d",
        "font-dark-2": "#6b7280",
        "font-light": "#8393a5",

        // Accent Colors
        primary: "#3bd7b3",
        secondary: "#3182ce",
        border: "#e2e8f0",
        "extra-small-font": "#38a169",

        primaryColor: {
          100: "#d8f7f0",
          200: "#b1efe1",
          300: "#89e7d1",
          400: "#62dfc2",
          500: "#3bd7b3",
          600: "#2fac8f",
          700: "#23816b",
          800: "#185648",
          900: "#0c2b24",
        },

        secondaryColor: {
          100: "#e9fcfdf5",
          200: "#d0f8fbeb",
          300: "#b3f4f9e0",
          400: "#90eef6d6",
          500: "#66e8f2cc",
          600: "#4aa9b0d6",
          700: "#337479e0",
          800: "#1f474aeb",
          900: "#0f2123f5",
        },

        // light orangish color

        orangeColorLight: {
          100: "#fdfcfb",
          200: "#faf9f7",
          300: "#f8f7f3",
          400: "#f5f4ef",
          500: "#f3f1eb",
          600: "#e7dfcb",
          700: "#eae5d8",
          800: "#61605e",
          900: "#31302f",
        },

        // blueShades

        blueShades: {
          100: "#ced7e3",
          200: "#9eb0c7",
          300: "#6d88ab",
          400: "#3d618f",
          500: "#0c3973",
          600: "#0a2e5c",
          700: "#072245",
          800: "#05172e",
          900: "#020b17",
        },

        blueShadesSecondary: {
          100: "#d1d7dc",
          200: "#a3afb9",
          300: "#758697",
          400: "#475e74",
          500: "#193651",
          600: "#142b41",
          700: "#0f2031",
          800: "#0a1620",
          900: "#050b10",
        },

        // Button Colors
        "background-light-2": "#0bc5ea",
        "sidebar-dark": "#cbd5e0",

        // Chart and Graph Colors
        "scrollbar-bg": "#63b3ed",
        "scrollbar-thumb": "#2b6cb0",

        // Additional Colors for Specific Elements
        "calendar-highlight": "#edf2f7",
      },
    },
  },
  plugins: [],
};
