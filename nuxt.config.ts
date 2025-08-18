import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// CONFIG

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@morev/vue-transitions/nuxt',
    '@nuxt/eslint',
    'vue-sonner/nuxt',
    '@nuxt/icon',
    'nuxt-svgo',
    'motion-v/nuxt' /*     "nuxt-og-image", */,
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxthub/core',
  ],

  hub: {
    database: true,
  },

  future: {
    typescriptBundlerResolution: true,
  },

  experimental: {
    payloadExtraction: true,
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',

    },
  },
  /*   ogImage: { enabled: false }, */

  image: {
    domains: ['ddragon.leagueoflegends.com', 'cdn.communitydragon.org'],
    provider: 'ipx',
    format: ['webp'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => ['widgetbot', 'discord-widget'].includes(tag),
    },
  },

  vite: {
    clearScreen: false,
    logLevel: 'info',
    plugins: [tailwindcss()],
    vue: {
      customElement: true,
    },
    optimizeDeps: {
      force: true,
      exclude: [
        // large deps you don't need to prebundle
        'fuse.js',
        'lodash-es',
      ],
    },
    build: {
      sourcemap: false,
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
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.SUPABASE_KEY,
    riotApiKey: process.env.NUXT_RIOT_API,

    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8080',
      redirectUrl: 'http://localhost:8080/summoner',
    },
  },

  nitro: {
    routeRules: {
      '/api/**': {
        cors: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      },
    },
    experimental: {
      openAPI: true,
    },
  },

  components: [
    {
      path: 'components',
      pathPrefix: false,
    },
    {
      path: 'base',
      pathPrefix: false,
    },
    '~/components',
  ],
  svgo: {
    componentPrefix: 'i',
  },
  icon: {
    provider: 'iconify',
    serverBundle: 'local',
  },
  imports: {
    dirs: [
      '@vueuse/components',
      'data',
      'types',
      './types',
      '~~/shared/types/**',
      'keys/**',
      'routes',
      'assets/ts/**',
      'composables/alias/*/**',
    ],
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  alias: {
    css: fileURLToPath(new URL('./app/assets/css', import.meta.url)),
    types: fileURLToPath(new URL('./types', import.meta.url)),
    stores: fileURLToPath(new URL('./stores', import.meta.url)),
    composables: fileURLToPath(new URL('./app/composables', import.meta.url)),
    shared: fileURLToPath(new URL('./shared', import.meta.url)),
    server: fileURLToPath(new URL('./server', import.meta.url)),
    utils: fileURLToPath(new URL('./app/utils', import.meta.url)),
    api: fileURLToPath(new URL('./public/api', import.meta.url)),
    components: fileURLToPath(new URL('./app/components', import.meta.url)),
    base: fileURLToPath(new URL('./app/base', import.meta.url)),
    assets: fileURLToPath(new URL('./app/assets', import.meta.url)),
    plugins: fileURLToPath(new URL('./app/plugins', import.meta.url)),
    modules: fileURLToPath(new URL('./modules', import.meta.url)),
    data: fileURLToPath(new URL('./app/data', import.meta.url)),
    keys: fileURLToPath(new URL('./app/keys', import.meta.url)),
    db: fileURLToPath(new URL('./types/db', import.meta.url)),
    routes: fileURLToPath(new URL('./app/routes/index', import.meta.url)),
    d1: fileURLToPath(new URL('./d1', import.meta.url)),
  },

  /* *** css and styling  */

  css: ['./app/assets/css/tailwind.css'],
  postcss: {
    plugins: {},
  },
  tailwindcss: {
    exposeConfig: true,
    includeWorkspace: true,
  },

  shadcn: {
    prefix: '',
    componentDir: './app/base/ui',
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

  devServer: {
    port: 8080,
  },
  devtools: {
    enabled: true,
    componentInspector: true,
    vueDevTools: true,
    viteInspect: true,
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
  compatibilityDate: '2025-07-18',
  ssr: false,
})