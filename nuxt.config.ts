import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
//  Configuration Vite

import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

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
    '@nuxt/icon',
    'nuxt-aos',
    'nuxt-svgo',
    'nuxt-tailwindcss4',
    '@nuxt/image',
  ],

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  image: {
    quality: 80,
    format: ['webp'],
    domains: ['ddragon.leagueoflegends.com', 'raw.communitydragon.org'],
  },

  vite: {
    plugins: [
      tailwindcss(),
      vueDevTools(),
    ],
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

  runtimeConfig: {
    supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,

    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8080',
      redirectUrl: 'http://localhost:8080/summoner',
    },
  },

  /*   postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  }, */

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
    enabled: false,
    componentInspector: true,
    viteInspect: true,
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
    'modules': fileURLToPath(new URL('./modules', import.meta.url)),
    '#app': fileURLToPath(new URL('./node_modules/nuxt/dist/app/index', import.meta.url)),
    '#imports': fileURLToPath(new URL('./node_modules/nuxt/dist/app/index', import.meta.url)),
  },

  compatibilityDate: '2024-11-01',
  ssr: false,
})