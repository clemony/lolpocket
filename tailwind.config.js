const animate = require("tailwindcss-animate");
const scrollbarhide = require("tailwind-scrollbar-hide");
const typography = require("@tailwindcss/typography");
const colors = require("tailwindcss/colors");
const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [animate, scrollbarhide, typography, daisyui],

  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  content: ["./pages/**/*.{ts,tsx,vue,js,jsx}", "./components/**/*.{ts,tsx,vue,js,jsx}", "./app/**/*.{ts,tsx,vue,js,jsx}", "./src/**/*.{ts,tsx,vue,js,jsx}", "./src/assets/presets/"],

  theme: {
    extend: {
      fontSize: {
        xxs: "0.599rem",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        "font-sans": ["Geist\\ Sans", "sans-serif"],
        "font-serif": ["Roboto\\ Serif\\ Variable", "serif"],
        "font-mono": ["Geist\\ Mono", "monospace"],
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
  // prettier-ignore
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        pastel: {
          ...require("daisyui/src/theming/themes")["pastel"],
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(93% 0 0)",
          "base-300": "oklch(86% 0 0)",
          "base-content": "oklch(27.8078% 0.029596 256.847952)",
        },
        nord2: {
          ...require("daisyui/src/theming/themes")["nord"],
          "base-100": "oklch(95.1276% 0.007445 260.731539)",
          "base-200": "oklch(93.2996% 0.010389 261.788485)",
          "base-300": "oklch(89.9258% 0.016374 262.749256)",
          "base-content": "oklch(32.4374% 0.022945 264.182036)",
          "neutral-content": "oklch(89.9258% 0.016374 262.749256)",
          "neutral": "oklch(45.229% 0.035214 264.1312)",
        },
      },
      "light",
      "dark",
      "cupcake",
      "emerald",
      "corporate",
      "halloween",
      "garden",
      "lofi",
      "pastel",
      "fantasy",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "nord2",
      "nord",
      "sunset",
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
