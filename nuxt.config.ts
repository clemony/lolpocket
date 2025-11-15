import tailwindcss from "@tailwindcss/vite"
import process from "node:process"
import { fileURLToPath } from "node:url"

export default defineNuxtConfig({
  alias: {
    "@app-types": fileURLToPath(new URL("./app/types", import.meta.url)),
    "@composables": fileURLToPath(
      new URL("./app/composables", import.meta.url)
    ),
    "@css": fileURLToPath(new URL("./app/assets/css", import.meta.url)),
    "@data": fileURLToPath(new URL("./shared", import.meta.url)),
    "@layout": fileURLToPath(new URL("./app/layout", import.meta.url)),
    "@plugins": fileURLToPath(new URL("./app/plugins", import.meta.url)),
    "@records": fileURLToPath(new URL("./shared/records", import.meta.url)),
    "@schema": fileURLToPath(new URL("./shared/schema", import.meta.url)),
    "@stores": fileURLToPath(new URL("./app/stores", import.meta.url)),
    "@variants": fileURLToPath(
      new URL("./app/assets/variants", import.meta.url)
    ),
    tiptap: fileURLToPath(new URL("./app/composables/tiptap", import.meta.url)),
  },
  components: [
    {
      path: "./base",
      pathPrefix: false,
    },
    {
      path: "./layout",
      pathPrefix: false,
    },
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devServer: {
    host: "localhost",
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
    compatibilityVersion: 5,
  },
  icon: {
    provider: "server",
    componentName: "icon",
    customCollections: [
      {
        dir: fileURLToPath(new URL("./app/assets/icons/lol", import.meta.url)),
        normalizeIconName: false,
        prefix: "lp",
      },
      {
        dir: fileURLToPath(new URL("./app/assets/icons/ui", import.meta.url)),
        normalizeIconName: false,
        prefix: "lp-ui",
      },
    ],
    serverBundle: {
      collections: ["lucide", "lp", "lp-ui"],
    },
  },
  image: {
    provider: "ipx",
    domains: ["ddragon.leagueoflegends.com", "cdn.communitydragon.org"],
    format: ["webp"],
  },
  imports: {
    dirs: ["@variants", "@schema", "@data", "@stores", "@app-types"],
    presets: [
      {
        from: "motion-v",
        imports: [
          "useSpring",
          "useMotionValue",
          "useMotionValueEvent",
          "Motion",
          "useTransform",
          "motion",
        ],
      },
    ],
  },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@morev/vue-transitions/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
  fonts: {
    families: [
      {
        name: "Inter",
        provider: "fontsource",
        styles: ["italic", "normal"],
        weights: [300, 400, 500, 600, 700, 800],
      },
      {
        name: "Noto Serif KR",
        provider: "fontsource",
        styles: ["italic", "normal"],
        weights: [300, 400, 600, 700],
      },
      {
        name: "Tabular",
        provider: "fontshare",
        styles: ["italic", "normal"],
        weights: [400, 500, 600],
      },
    ],
  },
  nitro: {
    routeRules: {
      "/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
    },
  },
  pinia: {
    storesDirs: ["app/stores/**"],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:8080",
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
      callback: "/redirect",
      exclude: ["*"],
      login: "/login",
      saveRedirectToCookie: true,
    },
    types: "./shared/types/database.types.ts",
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: true,
  },
  typescript: {
    strict: false,
    tsConfig: {
      compilerOptions: {
        pretty: true,
        skipLibCheck: true,
      },
      include: ["app/types/**/*.ts"],
    },
    typeCheck: true,
  },

  //
  css: ["./app/assets/css/tailwind.css"],
  vite: {
    build: {
      sourcemap: false,
    },
    clearScreen: false,
    plugins: [tailwindcss()],
  },

  // routes

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  routeRules: {
    // Root pages
    "/": { ssr: false },
    "/backpack": { ssr: false },
    "/champions": { ssr: false },
    "/faq": { ssr: false },
    "/library": { ssr: false },
    "/nexus": { ssr: false },
    "/pocket": { ssr: false },
    "/tools": { ssr: false },

    // Account pages
    "/account/**": { ssr: false },

    // Settings pages
    "/settings/**": { ssr: false },

    // Backpack folder
    "/backpack/**": { ssr: false },

    // Champions folder
    "/champions/**": { ssr: false },

    // FAQ folder
    "/faq/**": { ssr: false },

    // Library folder
    "/library/**": { ssr: false },

    // Pocket folder
    "/pocket/**": { ssr: false },

    // Summoner folder
    "/summoner/**": { ssr: false },

    // Tools folder
    "/tools/**": { ssr: false },

    // Auth folder — keep SSR enabled
    "/auth/**": { ssr: true },
  },
  ssr: true,

  //
  compatibilityDate: "2025-07-18",
})
