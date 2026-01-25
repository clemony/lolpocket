import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  $meta: {
    name: 'patch',
  },
  imports: {
   // dirs: [join(currentDir, './constants')]
  },

  experimental: {
   extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: true,
     viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
  },
})
