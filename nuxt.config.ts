import tailwindcss from "@tailwindcss/vite"
import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const iconsRoot = fileURLToPath(new URL("./app/assets/icons", import.meta.url))

const customCollections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => ({
    dir: path.join(iconsRoot, d.name),
    prefix: d.name, // or "" if you truly don’t care
    normalizeIconName: false,
  }))

export default defineNuxtConfig({
  alias: {
    "@composables": fileURLToPath(
      new URL("./app/composables", import.meta.url)
    ),
    "@domain": fileURLToPath(new URL("./app/domain", import.meta.url)),
    riot: fileURLToPath(new URL("./server/api/riot", import.meta.url)),
    "@css": fileURLToPath(new URL("./app/assets/css", import.meta.url)),
    "@layout": fileURLToPath(new URL("./app/layout", import.meta.url)),
    "@index": fileURLToPath(new URL("./shared/indexes", import.meta.url)),
    "@types": fileURLToPath(new URL("./shared/types", import.meta.url)),
    "@constants": fileURLToPath(new URL("./shared/constants", import.meta.url)),
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
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devServer: {
    host: "localhost",
    https: false,
    port: 8080,
  },
  devtools: {
    enabled: false,
  },
  experimental: {
    extractAsyncDataHandlers: true,
    typescriptPlugin: true,
    viteEnvironmentApi: true,
  },
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
        name: "Geist Mono",
        provider: "fontsource",
        styles: ["normal"],
        weights: [300, 400, 500],
      },
      {
        name: "Tabular",
        provider: "fontshare",
        styles: ["italic", "normal"],
        weights: [400, 500, 600],
      },
    ],
  },
  future: {
    compatibilityVersion: 5,
  },

  icon: {
    provider: "server",
    componentName: "icon",
    customCollections,
    serverBundle: {
      collections: ["lucide"],
    },
  },
  image: {
    provider: "ipx",
    domains: ["ddragon.leagueoflegends.com", "cdn.communitydragon.org"],
    format: ["webp"],
  },
  imports: {
    dirs: [
      "@variants",
      "@constants",
      "@domain",
      "./shared/constants",
      "@schema",
      "#shared/utils",
      "@stores",
      "./app/assets/config",
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
    "motion-v/nuxt",
  ],
  nitro: {
    imports: {
      dirs: [
        "server/types",
        "shared/types",
        "shared/constants",
        "server/utils",
        "server/domain",
      ],
    },
    routeRules: {
      "/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
      "/supabase/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
    },
    typescript: {
      strict: false,
      tsConfig: {
        compilerOptions: {
          baseUrl: "../",
          types: ["shared/types/**", "server/types/**"],
        },
        include: ["shared/**, server/utils/**"],
      },
    },
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        kv_namespaces: [
          {
            binding: "MATCHES_KV",
            id: "3eef843a4bd44eec9075ef0c5fb7ea70",
          },
        ],
      },
    },
    storage: {
      matchesKV: {
        driver: "cloudflare-kv-binding",
      },
    },
  },
  pinia: {
    storesDirs: ["app/stores/**"],
  },

  runtimeConfig: {
    supabasePooler: process.env.SUPABASE_POOLER,
    riotApiKey: process.env.NUXT_RIOT_API,
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:8080",
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    },
  },

  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      callback: "/redirect",
      exclude: ["*"],
      login: "/login",
      saveRedirectToCookie: true,
    },
    types: "./shared/types/database.types.ts",
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
    optimizeDeps: {
      include: ["@supabase/supabase-js"],
      exclude: ["@modelcontextprotocol/sdk", "jose"],
    },
    ssr: {
      external: ["@modelcontextprotocol/sdk", "jose"],
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
