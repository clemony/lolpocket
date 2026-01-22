import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  $meta: {
    name: "types",
  },
  imports: {
    dirs: [
      "./src",
    ],
  },
})
