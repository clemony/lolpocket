import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path, { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dir = dirname(fileURLToPath(import.meta.url))

const iconsRoot = fileURLToPath(new URL('./app/assets/icons', import.meta.url))

const customCollections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => ({
    dir: path.join(iconsRoot, d.name),
    normalizeIconName: false,
    prefix: d.name,
  }))

export default defineNuxtConfig({
  $meta: { name: 'ui' },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@morev/vue-transitions/nuxt',
    '@nuxtjs/color-mode',
    'motion-v/nuxt',
  ],

  components: [
    {
      global: true,
      path: join(_dir, './app/components'),
      pathPrefix: false,
    },
  ],
  icon: {
    provider: 'server',
    customCollections,
    serverBundle: {
      collections: ['lucide'],
    },
    size: '18px',
  },

  // UI
  colorMode: {
    componentName: 'ColorScheme',
    fallback: 'light',
    globalName: '__NUXT_COLOR_MODE__',
    preference: 'system',
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'fontsource',
        styles: ['italic', 'normal'],
        weights: [300, 400, 500, 600, 700, 800],
      },
      {
        name: 'Noto Serif KR',
        provider: 'fontsource',

        styles: ['italic', 'normal'],
        weights: [300, 400, 600, 700],
      },
      {
        name: 'Geist Mono',
        provider: 'fontsource',
        styles: ['normal'],
        weights: [300, 400, 500],
      },
    ],
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'b1',
        'b2',
        'b3',
        'neutral',
        'nc',
        'inspiration',
        'resolve',
        'domination',
        'precision',
        'sorcery',
        'transparent'
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

})
