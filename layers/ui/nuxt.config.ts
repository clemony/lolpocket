import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  $meta: {
    name: "ui",
  },
  components: [
    {
      path: "./src/components",
      pathPrefix: false,
    global: true,
    },
  ],
  // app
  typescript: {
    strict: false,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        pretty: true,
        skipLibCheck: true,
      },
    },
  },
  imports: {
    dirs: [
      ".src",
    ],
  },
})
