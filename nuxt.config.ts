import tailwindcss from '@tailwindcss/vite'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/image', '@vueuse/nuxt', '@nuxtjs/supabase', '@morev/vue-transitions/nuxt', '@nuxt/eslint', 'vue-sonner/nuxt', '@nuxt/icon', 'nuxt-svgo'],

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },

  vite: {
    plugins: [
      VueDevTools({
        appendTo: /\/entry\.m?js$/,
      }),
      tailwindcss(),
    ],
    vue: {
      customElement: true,
    },
    optimizeDeps: {
      force: true,
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
    riotApiKey: process.env.RIOT_API_KEY,

    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:8080',
      redirectUrl: 'http://localhost:8080/summoner',
    },
  },
  nitro: {
    routeRules: {
      '/api/**': { cors: true, headers: { 'Access-Control-Allow-Origin': '*' } },
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
    dirs: ['@vueuse/components', 'utils/items', 'utils/champions', 'utils/runes', 'utils/summoner', 'utils/links', 'utils/lib', 'utils/pocket', 'utils/ui', 'stores', 'utils/data', 'utils/data/items', 'utils/data/champions', 'utils/data/shared'],
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
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
    '#': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./app', import.meta.url)),
    'css': fileURLToPath(new URL('./app/assets/css', import.meta.url)),
    'types': fileURLToPath(new URL('./types', import.meta.url)),
    'stores': fileURLToPath(new URL('./stores', import.meta.url)),
    'composables': fileURLToPath(new URL('./app/composables', import.meta.url)),
    'shared': fileURLToPath(new URL('./shared', import.meta.url)),
    'utils': fileURLToPath(new URL('./app/utils', import.meta.url)),

    'components': fileURLToPath(new URL('./app/components', import.meta.url)),
    'plugins': fileURLToPath(new URL('./app/plugins', import.meta.url)),
    'modules': fileURLToPath(new URL('./modules', import.meta.url)),
    'data': fileURLToPath(new URL('./data', import.meta.url)),
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  ssr: false,
})
