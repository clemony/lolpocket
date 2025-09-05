/* import { cloudflare } from '@cloudflare/vite-plugin' */
import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
/*     "nuxt-og-image", */
// CONFIG nuxt
/*   ogImage: { enabled: false }, */

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
    'nuxt-svgo',
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss',
    // 'shadcn-nuxt',
    // '@nuxthub/core',
    '@nuxtjs/supabase',
  ],

  imports: {
    dirs: [
      '@vueuse/components',
      'appdata',
      './types',
      'routes',
      'assets/ts/**',
      'composables/alias/*/**',
      './shared/types',
      './shared/utils',
    ],
  },

  alias: {
    'stores': fileURLToPath(new URL('./stores', import.meta.url)),
    'composables': fileURLToPath(new URL('./app/composables', import.meta.url)),
    'server': fileURLToPath(new URL('./server', import.meta.url)),
    'utils': fileURLToPath(new URL('./app/utils', import.meta.url)),
    'api': fileURLToPath(new URL('./public/api', import.meta.url)),
    '/components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '/base': fileURLToPath(new URL('./app/base', import.meta.url)),
    'assets': fileURLToPath(new URL('./app/assets', import.meta.url)),
    'plugins': fileURLToPath(new URL('./app/plugins', import.meta.url)),
    'modules': fileURLToPath(new URL('./modules', import.meta.url)),
    'appdata': fileURLToPath(new URL('./shared/appdata', import.meta.url)),
    'db': fileURLToPath(new URL('./server/db', import.meta.url)),
    'db-schema': fileURLToPath(new URL('./server/db/schema', import.meta.url)),
    'routes': fileURLToPath(new URL('./app/routes/index', import.meta.url)),
    'd1': fileURLToPath(new URL('./d1', import.meta.url)),
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
    imports: {
      dirs: [
        '#shared/schema',
      ],
    },
  },

  /* ------------------------------ data ------------------------------ */

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
  /*
  hub: {
    database: false,
  }, */

  /* ------------------------------ utils ------------------------------ */

  router: {
    options: {
      scrollBehaviorType: 'smooth',

    },
  },

  /* ------------------------------ components ------------------------------ */

  components: [
    {
      path: '/components',
      pathPrefix: false,
    },
    {
      path: '/base',
      pathPrefix: false,
    },
  ],
  svgo: {
    componentPrefix: 'i',
  },
  icon: {
    provider: 'iconify',
    serverBundle: {
      collections: ['lucide'],
    },
  },
  image: {
    domains: ['ddragon.leagueoflegends.com', 'cdn.communitydragon.org'],
    provider: 'ipx',
    format: ['webp'],
  },

  /* ------------------------------ framework ------------------------------ */

  typescript: {
    typeCheck: true,
  },

  vite: {
    clearScreen: false,
    plugins: [tailwindcss()],
    vue: {
    },
    build: {
      sourcemap: false,
      cssCodeSplit: false,
    },
  },

  devServer: {
    port: 8080,
    host: 'localhost',
    https: false,
  },

  /* ------------------------------ styling ------------------------------ */

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {},
  },

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

  /* --------------------------- dev & bundler ----------------------------- */

  devtools: {
    enabled: true,
    componentInspector: true,
    vueDevTools: true,
    viteInspect: true,
  },

  future: {
    typescriptBundlerResolution: true,
  },

  experimental: {
    payloadExtraction: true,
  },

  compatibilityDate: '2025-07-18',
  ssr: false,
})