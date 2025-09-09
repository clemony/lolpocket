import process from 'node:process'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@morev/vue-transitions/nuxt',
    '@nuxt/eslint',
    'vue-sonner/nuxt',
    '@nuxt/icon',
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],
  imports: {
    dirs: [
      'appdata',
    ],
  },

  alias: {
    base: fileURLToPath(new URL('./app/base', import.meta.url)),
    appdata: fileURLToPath(new URL('./shared/appdata', import.meta.url)),
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: 'base',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_KEY,
    supabasePooler: process.env.SUPABASE_POOLER,
    riotApiKey: process.env.NUXT_RIOT_API,

    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8080',
    },
  },

  nitro: {
    routeRules: {
      '/api/**': {
        cors: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
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
    /*     clientOptions: {
      global: { fetch: fetch.bind(globalThis) },
    }, */
    useSsrCookies: false,
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',

    },
  },

  /* ------------------------------ components ------------------------------ */

  icon: {
    provider: 'iconify',
    serverBundle: {
      collections: ['lucide'],
    },
    customCollections: [
      {
        prefix: 'lp:',
        dir: './app/assets/icons/lol',
      },
      {
        prefix: 'lp:',
        dir: './app/assets/icons/ui',
      },
    ],
    componentName: 'icon',
  },
  image: {
    domains: ['ddragon.leagueoflegends.com', 'cdn.communitydragon.org'],
    provider: 'ipx',
    format: ['webp'],
  },

  /* ------------------------------ framework ------------------------------ */

  typescript: {
    typeCheck: true,
    strict: false,
    tsConfig: {
      compilerOptions: {
        resolveJsonModule: true,
      },
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

  css: ['~/assets/css/tailwind.css'],

  /*   tailwindcss: {
    exposeConfig: true,
    includeWorkspace: true,
  }, */

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

  devtools: { enabled: true },

  future: {
    typescriptBundlerResolution: true,
  },

  compatibilityDate: '2025-07-18',
  ssr: false,
})