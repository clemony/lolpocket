const animate = require("tailwindcss-animate");
const primeui = require("tailwindcss-primeui");
const scrollbarhide = require("tailwind-scrollbar-hide");
const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");
const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [animate, primeui, scrollbarhide, typography, daisyui],

  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: ["./pages/**/*.{ts,tsx,vue,js,jsx}", "./components/**/*.{ts,tsx,vue,js,jsx}", "./app/**/*.{ts,tsx,vue,js,jsx}", "./src/**/*.{ts,tsx,vue,js,jsx}", "./src/assets/presets/"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      colors: {
        colors: colors.primary,
      },

      extend: {
        colors: {
          colors: colors.primary,
        },
        borderWidth: {
          1: "1px",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        serif: ["DM Serif Text", "serif"],
      },
      fontSize: {
        xs: "0.6rem",
        sm: "0.7rem",
        base: "0.8rem",
      },
      fontWeight: {
        light: "250",
        normal: "350",
        medium: "450",
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },

      borderRadius: {
        xl: "1rem",
        lg: "0.7rem",
        md: "0.5rem",
        DEFAULT: "0.3rem",
        sm: "0.2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
