/* eslint-disable perfectionist/sort-imports */
import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@morev/vue-transitions/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/devtools',
    '@nuxt/eslint',
    'vue-sonner/nuxt',
    'nuxt-tailwindcss4',
    '@nuxt/icon',
    'nuxt-aos',
    'nuxt-svgo',
  ],

  /*   image: {
    format: ['webp'],
    quality: 80,
  }, */
  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  vite: {
    plugins: [tailwindcss()],
    vue: {
      customElement: true,
    },
  },

  typescript: {
    typeCheck: true,
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'iconify-icon',
    },
  },

  runtimeConfig: {
    supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,

    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },

  vueTransitions: {
    defaultProps: {
      duration: 400,
      easing: 'cubic-bezier(.25, .8, .5, 1)',
      mode: 'out-in',
    },
    componentDefaultProps: {
      TransitionSlide: {
        duration: 200,
        easing: 'cubic-bezier(.25, .8, .5, 1)',
        offset: [0, 8],
        mode: 'out-in',
      },
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  svgo: {
    componentPrefix: 'i',
  },

  css: ['~/assets/css/tailwind.css'],

  imports: {
    dirs: ['./shared/supabase/*', './shared/supabase', '@vueuse/components'],
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },

  /*   routeRules: {
    '/': { prerender: true },
    '/pocket': { ssr: false },
    '/Runes': { ssr: false },
    '/Docs': { ssr: true },
    '/About': { ssr: true },
    '/Calculator': { ssr: false },
    '/Champions': { ssr: false },
    '/Items': { ssr: false },
    '/pocket/**': { ssr: false },
    '/summoner/**': { ssr: false },
    '/Favorites': { ssr: false },
    '/Settings': { ssr: true },
    '/Spells': { ssr: false },
    '/admin/**': { ssr: false },
  }, */

  nitro: {
    prerender: {
      // ignore: ['/dynamic'],
    },
  },

  devServer: {
    port: 8080,
  },

  devtools: {
    enabled: true,
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  alias: {
    '@': fileURLToPath(new URL('/*', import.meta.url)),
    'css': fileURLToPath(new URL('./assets/css', import.meta.url)),
    'types': fileURLToPath(new URL('./types', import.meta.url)),
    'stores': fileURLToPath(new URL('./stores', import.meta.url)),
    'composables': fileURLToPath(new URL('./composables', import.meta.url)),
    'shared': fileURLToPath(new URL('./shared', import.meta.url)),
    'supabase': fileURLToPath(new URL('./shared/supabase', import.meta.url)),
    'img': fileURLToPath(new URL('./public/img', import.meta.url)),
    'components': fileURLToPath(new URL('./components', import.meta.url)),
    'plugins': fileURLToPath(new URL('./plugins', import.meta.url)),
  },

  compatibilityDate: '2024-11-01',
  ssr: false,
})
