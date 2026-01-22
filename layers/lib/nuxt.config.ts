import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  $meta: {
    name: "lib",
  },
  imports: {
    dirs: [
      "./src",
    ],
  },
})
