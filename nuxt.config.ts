import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// repo root
export default defineNuxtConfig({
  imports: {
    dirs: [
      './shared/types',
      '#shared/schema',
      '~/domain',
      '#layers/store/app/stores',
      '#layers/lib/app/composables',
      '#layers/lib/shared/composables',
      '#layers/patch/shared/constants',
      '#layers/ui/app/assets/variants*',
      '#layers/ui/app/config',
    ],
    global: true,
  },

  dir: {
    assets: '#layers/ui/app/assets'
  },

  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@morev/vue-transitions/nuxt',
    '@nuxt/ui',
    'motion-v/nuxt',
    '@nuxt/devtools',
  ],

  // app
  typescript: {
    sharedTsConfig: {
      compilerOptions: {
        pretty: true,
        skipLibCheck: true,
      },
    },
    strict: false,
    tsConfig: {
      compilerOptions: {
        pretty: true,
        skipLibCheck: true,
      },
    },
    typeCheck: true,
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['#layers/ui/app/assets/css/tailwind.css'],
  image: {
    provider: 'ipx',
    domains: ['ddragon.leagueoflegends.com', 'cdn.communitydragon.org'],
    format: ['webp'],
  },

  colorMode: {
    componentName: 'ColorScheme',
    dataValue: 'theme',
    fallback: 'light',
    globalName: '__NUXT_COLOR_MODE__',
    preference: 'system',
  },
  eslint: {
    config: {
      autoInit: false,
      standalone: false,
    },
  },
  nitro: {
    imports: {
      dirs: [
        './shared/types',
        './shared/schema',
        '#server/domain',
        '#server/api',
        '#layers/lib/shared/utils',
        '#layers/patch/shared/constants',
      ],
    },
    routeRules: {
      '/api/**': {
        cors: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
      '/supabase/**': {
        cors: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    },
    typescript: {
      strict: false,
      tsConfig: {
        compilerOptions: {
          pretty: true,
          skipLibCheck: true,
        },
      },
    },
  },
  pinia: { storesDirs: ['#layers/store/app/stores'] },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  routeRules: {
    '/': { ssr: false },
    '/account/**': { ssr: false },
    // Auth folder — keep SSR enabled
    '/auth/**': { ssr: true },
    '/backpack': { ssr: false },
    '/backpack/**': { ssr: false },
    '/champions': { ssr: false },
    '/champions/**': { ssr: false },
    '/faq': { ssr: false },
    '/faq/**': { ssr: false },
    '/library': { ssr: false },
    '/library/**': { ssr: false },
    '/nexus': { ssr: false },
    '/pocket': { ssr: false },
    '/pocket/**': { ssr: false },
    '/settings/**': { ssr: false },
    '/summoner/**': { ssr: false },
    '/tools': { ssr: false },
    '/tools/**': { ssr: false },
  },
  runtimeConfig: {
    public: {
      authRedirect: '',
      baseUrl: '',
      newUserRedirect: '',
      supabaseKey: '',
      supabaseUrl: '',
    },
    riotApiKey: process.env.NUXT_RIOT_API,
    supabasePooler: process.env.SUPABASE_POOLER,
  },
  ssr: true,
  supabase: {
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      callback: '/auth/redirect',
      exclude: ['*'],
      login: '/auth/login',
      saveRedirectToCookie: true,
    },
    types: '#layers/store/shared/types/database.types.ts',
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: true,
  },
  vite: {
    build: {
      sourcemap: false,
    },
    clearScreen: false,
    plugins: [tailwindcss()],
  },

  compatibilityDate: '2025-07-18',
  devServer: {
    host: 'localhost',
    https: false,
    port: 8080,
  },
  devtools: { enabled: false },
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
