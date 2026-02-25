import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
const _dir = dirname(fileURLToPath(import.meta.url))
export default defineNuxtConfig({
  $meta: { name: "ui" },
  modules: ["@nuxt/ui"],

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
