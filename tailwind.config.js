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
      screens: {},
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
    },
  },
  // prettier-ignore
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(93% 0 0)",
          "base-300": "oklch(86% 0 0)",
          "base-content": "oklch(22.3899% 0.031305 278.07229)",
          "neutral": "oklch(22.3899% 0.031305 278.07229)",
          "neutral-content": "oklch(95.8796% 0.008588 247.915135)",
          "primary": "oklch(88.03% 0.046 187.85)",
          "secondary": "oklch(82.91% 0.09 37.7)",
          "accent": "oklch(91.18% 0.089 87.56)",
  "info": "oklch(91.19% 0.07 104.16)",
  "success": "oklch(87.28% 0.051 133.44)",
  "warning": "oklch(86.95% 0.081 62.79)",
  "error": "oklch(79.62% 0.109 21.85)",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "base-100": "oklch( 24.3535% 0 0)",
          "base-200": "oklch( 22.6487% 0 0)",
          "base-300": "oklch( 20.944% 0 0)",
          "base-content": "oklch( 84.8707% 0 0)",
          "neutral": "oklch( 27.441% 0.01325 253.041249)",
          "neutral-content": "oklch( 85.4882% 0.00265 253.041249)",
          "primary": "oklch(88.03% 0.046 187.85)",
          "secondary": "oklch(82.91% 0.09 37.7)",
          "accent": "oklch(91.18% 0.089 87.56)",
  "info": "oklch(91.19% 0.07 104.16)",
  "success": "oklch(87.28% 0.051 133.44)",
  "warning": "oklch(86.95% 0.081 62.79)",
  "error": "oklch(79.62% 0.109 21.85)",
        },
        'nord light': {
          ...require("daisyui/src/theming/themes")["nord"],
          "base-100": "oklch(100% 0 0)",
          "base-200": "oklch(93% 0 0)",
          "base-300": "oklch(86% 0 0)",
          "base-content": "oklch(22.3899% 0.031305 278.07229)",
          "neutral": "oklch(22.3899% 0.031305 278.07229)",
          "neutral-content": "oklch(95.8796% 0.008588 247.915135)",
        },
        nord: {
          ...require("daisyui/src/theming/themes")["nord"],
          "base-100": "oklch( 30.8577% 0.023243 264.149498)",
          "base-200": "oklch( 28.0368% 0.01983 264.182074)",
          "base-300": "oklch( 26.3469% 0.018403 262.177739)",
          "base-content": "oklch( 82.9011% 0.031335 222.959324)",
          "neutral": "oklch( 24.7311% 0.020483 264.094728)",
          "neutral-content": "oklch( 82.9011% 0.031335 222.959324)",
        },
        'nord dark': {
          ...require("daisyui/src/theming/themes")["nord"],
          "base-100": "oklch( 24.3535% 0 0)",
          "base-200": "oklch( 22.6487% 0 0)",
          "base-300": "oklch( 20.944% 0 0)",
          "base-content": "oklch( 84.8707% 0 0)",
          "neutral": "oklch( 27.441% 0.01325 253.041249)",
          "neutral-content": "oklch( 85.4882% 0.00265 253.041249)",
        },
        wifi: {
          ...require("daisyui/src/theming/themes")["business"],
          "base-100": "oklch( 24.3535% 0 0)",
          "base-200": "oklch( 22.6487% 0 0)",
          "base-300": "oklch( 20.944% 0 0)",
          "base-content": "oklch( 84.8707% 0 0)",
          "neutral": "oklch( 27.441% 0.01325 253.041249)",
          "neutral-content": "oklch( 85.4882% 0.00265 253.041249)",
          "primary-content": "oklch(86.736% 0 0)",
          "primary": "oklch(33.6799% 0 0)",
          "secondary-content": "oklch(86.736% 0 0)",
          "secondary": "oklch(33.6799% 0 0)",
          "accent-content": "oklch(86.736% 0 0)",
          "accent": "oklch(33.6799% 0 0)",
        },

      },
      "dark",
      "lofi",
      "wifi",
      "nordark",
      "nord",
      "corporate",
      "autumn",
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
