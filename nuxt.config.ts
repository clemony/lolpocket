import process from 'node:process'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  alias: {
    '#server': fileURLToPath(new URL('./server', import.meta.url)),
    '@scripts': fileURLToPath(new URL('./scripts', import.meta.url)),
    '@types': fileURLToPath(new URL('./shared/types', import.meta.url)),
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
  css: ['~/assets/css/tailwind.css'],
  devServer: {
    host: 'localhost',
    https: false,
    port: 8080,
  },
  devtools: { enabled: true },
  icon: {
    provider: 'server',
    componentName: 'icon',
    serverBundle: {
      collections: ['lucide'],
    },
  },
  image: {
    provider: 'ipx',
    domains: ['ddragon.leagueoflegends.com', 'cdn.communitydragon.org'],
    format: ['webp'],
  },
  imports: {
    dirs: ['#shared/appdata', './shared/types'],
  },
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
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8080',
    },
    riotApiKey: process.env.NUXT_RIOT_API,
    supabaseAnonKey: process.env.SUPABASE_KEY,
    supabasePooler: process.env.SUPABASE_POOLER,
    supabaseUrl: process.env.SUPABASE_URL,
  },
  supabase: {
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      callback: '/redirect',
      exclude: ['*'],
      login: '/login',
      saveRedirectToCookie: true,
    },
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: false,
  },
  svgo: {
    componentPrefix: 'i',
  },
  typescript: {
    nodeTsConfig: { include: ['shared', 'server', 'scripts'] },
    sharedTsConfig: { include: ['shared', 'server', 'scripts'] },
    strict: false,
    typeCheck: true,
  },
  vite: {
    build: {
      sourcemap: false,
    },
    clearScreen: false,
  },
  vueTransitions: {
    componentDefaultProps: {
      TransitionSlide: {
        duration: 300,
        easing: 'cubic-bezier(.25, .8, .5, 1)',
        mode: 'out-in',
        offset: [0, 8],
      },
    },
    defaultProps: {
      appear: false,
      duration: 400,
      easing: 'cubic-bezier(.25, .8, .5, 1)',
      mode: 'out-in',
      tag: 'div',
    },
  },

  /*   future: {
    typescriptBundlerResolution: true,
  }, */

  compatibilityDate: '2025-07-18',
  routeRules: {
    // Root pages
    '/': { ssr: false },
    '/backpack': { ssr: false },
    '/champions': { ssr: false },
    '/faq': { ssr: false },
    '/library': { ssr: false },
    '/nexus': { ssr: false },
    '/pocket': { ssr: false },
    '/tools': { ssr: false },

    // Account pages
    '/account/**': { ssr: false },

    // Backpack folder
    '/backpack/**': { ssr: false },

    // Champions folder
    '/champions/**': { ssr: false },

    // FAQ folder
    '/faq/**': { ssr: false },

    // Library folder
    '/library/**': { ssr: false },

    // Pocket folder
    '/pocket/**': { ssr: false },

    // Summoner folder
    '/summoner/**': { ssr: false },

    // Tools folder
    '/tools/**': { ssr: false },

    // Auth folder — keep SSR enabled
    '/auth/**': { ssr: true },
  },
  ssr: true,
})
