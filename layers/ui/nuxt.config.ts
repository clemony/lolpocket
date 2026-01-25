
import tailwindcss from "@tailwindcss/vite"
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import fs from "node:fs"
import path from "node:path"
const currentDir = dirname(fileURLToPath(import.meta.url))

const iconsRoot = fileURLToPath(new URL("./app/assets/icons", import.meta.url))

const customCollections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => ({
    dir: path.join(iconsRoot, d.name),
    normalizeIconName: false,
    prefix: d.name, // or "" if you truly don’t care
  }))

export default defineNuxtConfig({
  $meta: { name: 'ui'},
  alias: { '--': join(currentDir, './app')},
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/image",
    "@morev/vue-transitions/nuxt",
    '@nuxtjs/color-mode',
    "@nuxt/icon",
    "motion-v/nuxt",
  ],
  imports: {
   // dirs: [join(currentDir, './app')]
  },
  css: [join(currentDir, './app/css/tailwind.css')],/*
appConfig: {
    ui: {
  colors: {
    b1: "var(--color-b1)",
    b2: "var(--color-b2)",
    b3: "var(--color-b3)",
    bc: "var(--color-bc)",
    domination: "var(--color-domination",
    inspiration: "var(--color-inspiration)",
    nc: "var(--color-primary)",
    neutral: "var(--color-nc)",
    precision: "var(--color-precision)",
    primary: "var(--color-primary)",
    resolve: "var(--color-resolve)",
    sorcery: "var(--color-sorcery",
  },
  popover: {
    slots: {
      content: `
        bg-default/90 shadow-lg  backdrop-blur-md rounded-lg shadow-lg
        ring ring-neutral/40 focus:outline-none pointer-events-auto
      `,
    },
  },
  tooltip: {
    slots: {
      arrow: "fill-neutral/90 scale-y-140 scale-x-180",
      content: `
        flex items-center ring-neutral h-max max-h-80 max-w-104 border-tint-neutral/30 inset-shadow-white/10 bg-neutral/86 text-nc gap-1 backdrop-blur-sm p-0 shadow-sm rounded-lg ring cursor-default select-none pointer-events-auto
        `,
    },
  }   variants: {
    variants: { ...variantVariants },
  },
}
  },*/


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
icon: {
    provider: "server",
    componentName: "icon",
    customCollections,
    serverBundle: {
      collections: ["lucide"],
    }
  },

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
  }
},
  vite: {
    plugins: [tailwindcss()],
  },

  //experimental: { nitroAutoImports: true },
  future: {
    compatibilityVersion: 5,
  },
})
