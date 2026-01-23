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
    normalizeIconName: false,
    prefix: d.name, // or "" if you truly don’t care
  }))

export default defineNuxtConfig({
  alias: {
    riot: fileURLToPath(new URL("./server/api/riot", import.meta.url)),
  },
  imports: {
    dirs: [
      "~/domain",
      "~/stores",
      "#shared/types/**/*",
      "#layers/ui/app",
      "#layers/lib/app",
      "#layers/patch/constants/**/*",
      "#layers/ui/variants/**/*",
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
    "motion-v/nuxt",
  ],

  // app
  typescript: {
    includeWorkspace: true,
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
    global: true
  },,
  {
    path: '#layers/ui/app/components',
    pathPrefix: false,
    global: true
  },
   '~/components',
],

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
  css: ["#layers/ui/app/css/tailwind.css"],

  nitro: {
    imports: {
      dirs: [
        "./server/types",
        "./server/utils",
        "./server/domain",
        "#layers/lib/app",
        "#shared/types",
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
        },
        include: ["server/types/**/*"],
      },
    },
  },
  supabase: {
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    redirectOptions: {
      callback: "/auth/redirect",
      exclude: ["*"],
      login: "/auth/login",
      saveRedirectToCookie: true,
    },
    //types: "@types/database.types.ts",
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
  runtimeConfig: {
    public: {
      authRedirect: "",
      baseUrl: "",
      newUserRedirect: "",
      supabaseKey: "",
      supabaseUrl: "",
    },
    riotApiKey: process.env.NUXT_RIOT_API,
    supabasePooler: process.env.SUPABASE_POOLER,
  },

  pinia: { storesDirs: ["./app/stores"]},
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  routeRules: {
    "/": { ssr: false },
    "/backpack": { ssr: false },
    "/champions": { ssr: false },
    "/faq": { ssr: false },
    "/library": { ssr: false },
    "/nexus": { ssr: false },
    "/pocket": { ssr: false },
    "/tools": { ssr: false },
    "/account/**": { ssr: false },
    "/settings/**": { ssr: false },
    "/backpack/**": { ssr: false },
    "/champions/**": { ssr: false },
    "/faq/**": { ssr: false },
    "/library/**": { ssr: false },
    "/pocket/**": { ssr: false },
    "/summoner/**": { ssr: false },
    "/tools/**": { ssr: false },
    // Auth folder — keep SSR enabled
    "/auth/**": { ssr: true },
  },
  ssr: true,

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
    nitroAutoImports: true,
    typescriptPlugin: true,
     viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
  },
  compatibilityDate: "2025-07-18",

})
