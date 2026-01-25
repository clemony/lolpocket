import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  $meta: {
    name: 'lib',
  },

/*   imports: {
    dirs: [join(currentDir, './app')]
  }, */
})
