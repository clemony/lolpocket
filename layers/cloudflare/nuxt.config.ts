import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  $meta: {
    name: 'client',
  },
    nitro: {
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        kv_namespaces: [
          {
            id: "3eef843a4bd44eec9075ef0c5fb7ea70",
            binding: "MATCHES_KV",
          },
        ],
      },
    },
    preset: "cloudflare_module",
    storage: {
      matchesKV: {
        driver: "cloudflare-kv-binding",
      },
    },
  }
})
