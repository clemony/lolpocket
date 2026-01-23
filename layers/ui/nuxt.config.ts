
import tailwindcss from "@tailwindcss/vite"
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  $meta: {
    name: 'ui',
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/image",
    "@morev/vue-transitions/nuxt",
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    "@nuxt/icon",
    "motion-v/nuxt",
  ],
  imports: {
    dirs: [join(currentDir, './app')]
  },
  // app
  typescript: {
    includeWorkspace: true,
    strict: false,
    tsConfig: {
      compilerOptions: {
        pretty: true,
        skipLibCheck: true,
      },
    },
    typeCheck: true,
  },

  //
  css: [join(currentDir, './app/css/tailwind.css')],
  ui: {
    theme: {
      colors: [
        "primary",
        "b1",
        "b2",
        "b3",
        "neutral",
        "nc",
        "inspiration",
        "resolve",
        "domination",
        "precision",
        "sorcery",
      ],
    },
  },

    // UI
  colorMode: {
    componentName: "ColorScheme",
    fallback: "light",
    globalName: "__NUXT_COLOR_MODE__",
    preference: "system",
  },
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "fontsource",
        styles: ["italic", "normal"],
        weights: [300, 400, 500, 600, 700, 800],
      },
      {
        name: "Noto Serif KR",
        provider: "fontsource",

        styles: ["italic", "normal"],
        weights: [300, 400, 600, 700],
      },
      {
        name: "Geist Mono",
        provider: "fontsource",
        styles: ["normal"],
        weights: [300, 400, 500],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: { nitroAutoImports: true },
  future: {
    compatibilityVersion: 5,
  },
})
