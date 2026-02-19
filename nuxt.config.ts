import tailwindcss from "@tailwindcss/vite"
import process from "node:process"
import { beasties } from "vite-plugin-beasties"

// repo root
export default defineNuxtConfig({
  imports: {
    global: true,
    dirs: [
      "#shared/schema",
      "#layers/store/app/stores",
      "#layers/patch/shared/constants",
    ],
  },

  dir: {
    assets: "#layers/ui/app/assets",
  },

  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/ui",
    "motion-v/nuxt",
    "@nuxt/devtools",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/i18n",
    "nuxt-charts",
  ],

  // app
  typescript: {
    strict: true,
    typeCheck: true,
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: ["#layers/ui/app/assets/css/tailwind.css"],
  image: {
    provider: "ipx",
    domains: ["ddragon.leagueoflegends.com", "cdn.communitydragon.org"],
    format: ["webp"],
  },

  colorMode: {
    componentName: "ColorScheme",
    dataValue: "theme",
    fallback: "light",
    globalName: "__NUXT_COLOR_MODE__",
    preference: "system",
  },
  ssr: true,
  /*   eslint: {
    config: {
      autoInit: false,
      standalone: false,
    },
  }, */
  nitro: {
    imports: {
      dirs: [
        "#shared/types",
        "#shared/schema",
        "#server/domain",
        "#server/api/riot",
        "#layers/lib/shared/utils",
        "#layers/patch/shared/constants",
      ],
    },
    routeRules: {
      "./layers/store/server/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
      "/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
    },
    typescript: {
      strict: true,
    },
  },
  pinia: { storesDirs: ["#layers/store/app/stores"] },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  routeRules: {
    "/settings/**": { ssr: false },
    "/": { ssr: false },
    "/account/**": { ssr: false },
    // Auth folder — keep SSR enabled
    "/auth/**": { ssr: true },
    "/backpack": { ssr: false },
    "/backpack/**": { ssr: false },
    "/champions": { ssr: false },
    "/champions/**": { ssr: false },
    "/faq": { ssr: false },
    "/faq/**": { ssr: false },
    "/library": { ssr: false },
    "/:region": { ssr: false },
    "/:region/**": { ssr: false },
    "/library/**": { ssr: false },
    "/nexus": { ssr: false },
    "/pocket": { ssr: false },
    "/pocket/**": { ssr: false },
    "/tools": { ssr: false },
    "/tools/**": { ssr: false },
  },
  runtimeConfig: {
    RIOT_API_KEY: process.env.NUXT_RIOT_API,
    supabasePooler: process.env.SUPABASE_POOLER,
    public: {
      authRedirect: "",
      baseUrl: "",
      newUserRedirect: "",
      supabaseKey: "",
      supabaseUrl: "",
    },
  },
  supabase: {
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    // types: "#layers/store/shared/types/database.types.ts",
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: true,
    redirectOptions: {
      callback: "/auth/redirect",
      login: "/auth/login",
      saveRedirectToCookie: true,
      exclude: ["*"],
    },
  },
  vite: {
    server: {
      strictPort: true,
      hmr: {
        protocol: "ws",
        host: "localhost",
        clientPort: 8080,
      },
    },
    plugins: [
      // @ts-expect-error until plugin updates
      tailwindcss(),
      // @ts-expect-error until plugin updates
      beasties({
        options: {
          preload: "swap",
          pruneSource: true,
          inlineThreshold: 4000,
        },
      }),
    ],
    clearScreen: false,
    build: {
      sourcemap: false,
    },
  },

  compatibilityDate: "2025-07-18",
  devServer: {
    host: "localhost",
    https: false,
    port: 8080,
  },
  devtools: { enabled: false },
  experimental: {
    extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: true,
    //viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
  },

  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    locales: [
      {
        code: "de",
        name: "Deutsch",
      },
      {
        code: "en",
        name: "English",
      },
      {
        code: "fr",
        name: "Français",
      },
    ],
  },
})
