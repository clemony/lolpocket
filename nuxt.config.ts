import process from 'node:process'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  alias: {
    '#server': fileURLToPath(new URL('./server', import.meta.url)),
    '@app': fileURLToPath(new URL('./app', import.meta.url)),
    '@appdata': fileURLToPath(new URL('./shared/appdata', import.meta.url)),
    '@base': fileURLToPath(new URL('./app/base', import.meta.url)),
    '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '@composables': fileURLToPath(new URL('./app/composables', import.meta.url)),
    '@css': fileURLToPath(new URL('./app/assets/css', import.meta.url)),
    '@plugins': fileURLToPath(new URL('./app/plugins', import.meta.url)),
    '@schema': fileURLToPath(new URL('./schema', import.meta.url)),
    '@scripts': fileURLToPath(new URL('./scripts', import.meta.url)),
    '@types': fileURLToPath(new URL('./types', import.meta.url)),
    '@utils': fileURLToPath(new URL('./app/utils', import.meta.url)),
    '@variants': fileURLToPath(new URL('./app/assets/variants', import.meta.url)),
    '~tiptap': fileURLToPath(new URL('./app/components/tiptap', import.meta.url)),
  },
  components: [
    {
      path: './base',
      pathPrefix: false,
    },
    {
      path: './layout',
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
  experimental: {
    extractAsyncDataHandlers: true,
    typescriptPlugin: true,
    viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5
  },
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
    dirs: ['#shared/utils', '#shared/types', '@variants', '@types', '@schema'],
    presets: [
      {

        from: 'motion-v',
        imports: ['useSpring', 'useMotionValue', 'useMotionValueEvent', 'Motion', 'useTransform', 'motion']
      },
    ],
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
    '@nuxt/icon',
    'nuxt-svgo',
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
    types: '@types/database.types.ts',
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: false,
  },
  svgo: {
    componentPrefix: 'i',
  },
  typescript: {
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
        appear: false,
        duration: 300,
        easing: 'cubic-bezier(.25, .8, .5, 1)',
        mode: 'out-in',
        offset: [0, 8],
      },
      TransitionExpand: {
        appear: false,
      },
      TransitionFade: {
        appear: false,
      },
      TransitionScale: {
        appear: false,
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

    // Settings pages
    '/settings/**': { ssr: false },

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
