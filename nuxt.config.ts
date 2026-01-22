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
    //
    "@types": fileURLToPath(new URL("./layers/types/types", import.meta.url)),
    "@schema": fileURLToPath(new URL("./layers/types/schema", import.meta.url)),
    "@lib": fileURLToPath(new URL("./layers/lib/src", import.meta.url)),
    //
    "@css": fileURLToPath(new URL("./layers/ui/src/css", import.meta.url)),
    "@ui": fileURLToPath(new URL("./layers/ui/src", import.meta.url)),
    "@variants": fileURLToPath(new URL("./layers/ui/src/variants", import.meta.url)),
    //
    "@domain": fileURLToPath(new URL("./app/domain", import.meta.url)),
    riot: fileURLToPath(new URL("./server/api/riot", import.meta.url)),
    "@constants": fileURLToPath(new URL("./layers/domain/constants", import.meta.url)),
    "@records": fileURLToPath(new URL("./shared/records", import.meta.url)),
    "@stores": fileURLToPath(new URL("./app/stores", import.meta.url)),
    "~tiptap": fileURLToPath(new URL("./layers/tiptap/src", import.meta.url)),
  },

  imports: {
    dirs: [
      "@variants",
      "@constants",
      "@domain",
      "./layers/types/schema",
      "@lib",
      "@ui",
      "./layers/types/types",
      "~tiptap"
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
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxt/fonts",
    "motion-v/nuxt",
  ],
  // app
  typescript: {
    includeWorkspace: true,
    strict: false,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        pretty: true,
        skipLibCheck: true,
      },
    },
  },
  //
  nitro: {
    imports: {
      dirs: [
        "./server/types",
        "@types",
        "@constants",
        "@schema",
        "./server/utils",
        "@lib",
        "./server/domain",
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
    //server
 typescript: {
      strict: false,
      tsConfig: {
        compilerOptions: {
           baseUrl: "../",
         types: ["layers/types/types/**/*", "server/types/**/*", "layers/types/schema/**/*"],
        },
        include: ["layers/types/schema/**/*", "layers/types/types/**/*"],
      }
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
    storesDirs: ["./app/stores/*"],
  },
  //
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      global: true
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
    //extractAsyncDataHandlers: true,
 typescriptPlugin: true,
   // viteEnvironmentApi: true,
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
    ],
  },
  future: {
    compatibilityVersion: 5,
  },
  ui: {
    theme: {
      colors: [
        "primary",
        "b1",
        "b2",
        "b3",
        "neutral",
        "nc",
        "inspiration",
        "resolve",
        "domination",
        "precision",
        "sorcery",
      ],
    },
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

  runtimeConfig: {
    supabasePooler: process.env.SUPABASE_POOLER,
    riotApiKey: process.env.NUXT_RIOT_API,
    public: {
      baseUrl: "",
      supabaseUrl: "",
      supabaseKey: "",
      authRedirect: "",
      newUserRedirect: "",
    },
  },

  supabase: {
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      callback: "/auth/redirect",
      exclude: ["*"],
      login: "/auth/login",
      saveRedirectToCookie: true,
    },
    types: "@types/database.types.ts",
    useSsrCookies: true,
  },

  //
  css: ["./app/ui/css/tailwind.css"],
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
