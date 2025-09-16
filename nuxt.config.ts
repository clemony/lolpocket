import process from 'node:process'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@morev/vue-transitions/nuxt',
    'vue-sonner/nuxt',
    '@nuxt/icon',
    'nuxt-svgo',
    'motion-v/nuxt',
  ],

  imports: {
    dirs: ['#shared/appdata', './shared/types'],
  },

  components: [
    {
      path: './base',
      pathPrefix: false,
    },
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  typescript: {
    typeCheck: true,
    strict: false,
    sharedTsConfig: {
      include: ['./appdata', './utils', './types'],
    },
  },

  vite: {
    clearScreen: false,
    build: {
      sourcemap: false,
    },
  },

  devServer: {
    port: 8080,
    host: 'localhost',
    https: false,
  },

  nitro: {
    routeRules: {
      '/api/**': {
        cors: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  css: ['~/assets/css/tailwind.css'],

  svgo: {
    componentPrefix: 'i',
  },

  icon: {
    provider: 'server',
    serverBundle: {
      collections: ['lucide'],
    },
    componentName: 'icon',
  },

  image: {
    domains: ['ddragon.leagueoflegends.com', 'cdn.communitydragon.org'],
    provider: 'ipx',
    format: ['webp'],
  },

  vueTransitions: {
    defaultProps: {
      duration: 400,
      easing: 'cubic-bezier(.25, .8, .5, 1)',
      mode: 'out-in',
      appear: false,
      tag: 'div',
    },
    componentDefaultProps: {
      TransitionSlide: {
        duration: 300,
        easing: 'cubic-bezier(.25, .8, .5, 1)',
        offset: [0, 8],
        mode: 'out-in',
      },
    },
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_KEY,
    supabasePooler: process.env.SUPABASE_POOLER,
    riotApiKey: process.env.NUXT_RIOT_API,

    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8080',
    },
  },

  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      callback: '/redirect',
      exclude: ['*'],
      login: '/login',
      saveRedirectToCookie: true,
    },
    useSsrCookies: false,
  },

  devtools: { enabled: true },

  /*   future: {
    typescriptBundlerResolution: true,
  }, */

  compatibilityDate: '2025-07-18',
  ssr: false,
})
