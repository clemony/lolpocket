import path, { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
const _dir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  $meta: { name: "ui" },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/color-mode", "@nuxt/icon"],

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
        "p1",
        "p2",
        "p3",
        "p4",
        "n0",
        "ad",
        "neutral",
        "nc",
        "insp",
        "res",
        "dom",
        "pre",
        "sorc",
        "transparent",
        "default",
      ],
    },
  },
})
