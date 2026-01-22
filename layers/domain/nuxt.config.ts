import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  $meta: {
    name: "domain",
  },
  imports: {
    dirs: [
      "./constants",
    ],
  },
})
