import fs from "node:fs"
import path, { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
//
import tailwindcss from "@tailwindcss/vite"

const _dir = dirname(fileURLToPath(import.meta.url))

const iconsRoot = fileURLToPath(new URL("./app/assets/icons", import.meta.url))

const customCollections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => ({
    dir: path.join(iconsRoot, d.name),
    normalizeIconName: false,
    prefix: d.name,
  }))

export default defineNuxtConfig({
  $meta: { name: "ui" },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "motion-v/nuxt",
  ],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  components: [
    {
      global: true,
      path: join(_dir, "./app/components"),
      pathPrefix: false,
    },
  ],
  icon: {
    provider: "server",
    customCollections,
    size: "18px",
    serverBundle: {
      collections: ["lucide"],
    },
  },

  // UI
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
      {
        name: "DM Serif Display",
        provider: "fontsource",
        styles: ["normal", "italic"],
        weights: [400],
      },
    ],
  },

  ui: {
    experimental: {
      componentDetection: true,
    },
    theme: {
      colors: [
        "p0",
        "p2",
        "p3",
        "ad",
        "neutral",
        "nc",
        "insp",
        "res",
        "dom",
        "pre",
        "sorc",
        "transparent",
      ],
    },
  },

  /* hooks: {
    "vite:extendConfig": function (config) {
      const plugin = tailwindcss()

      if (config.plugins) {
        ;(config.plugins as unknown[]).push(plugin as unknown)
      }
    },
  }, */
})
