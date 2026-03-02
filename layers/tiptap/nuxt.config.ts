import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const _dir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  $meta: { name: "tiptap" },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  components: [
    {
      path: join(_dir, "./app/components"),
      pathPrefix: false,
      extensions: ["vue"],
    },
  ],
})
