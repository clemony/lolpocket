import tailwindcss from "@tailwindcss/vite"
import process from "node:process"
import { fileURLToPath } from "node:url"

export default defineNuxtConfig({
  alias: {
    records: fileURLToPath(new URL("./layers/patch/records", import.meta.url)),
  },
  imports: {
    dirs: [
      "~/domain",
      "~/stores",
      "#layers/ui/app/variants",
      "#layers/ui/app/types",
      "#layers/ui/app/config",
      "#layers/lib/shared",
      "#layers/ui/app/utils",
     "#layers/patch/constants",
   "#layers/supabase/shared/schema",
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
    "motion-v/nuxt",
  ],

  // app
  typescript: {
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
  },
  {
    path: '#layers/ui/app/components',
    pathPrefix: false,
    global: true
  },
  {
    path: '#layers/supabase/app/components',
    pathPrefix: false,
    global: true
  },
   '~/components',
],


  image: {
    provider: "ipx",
    domains: ["ddragon.leagueoflegends.com", "cdn.communitydragon.org"],
    format: ["webp"],
  },
  css: ["#layers/ui/app/css/tailwind.css"],

  nitro: {
    imports: {
      dirs: [
        "#server/utils",
        "#server/domain",
        "#layers/lib/shared",
        "#server/api"
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
    types: "#layers/supabase/shared/types/database.types.ts",
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
eslint: {
config: {
      standalone: false
    }
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
    enabled: true,
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
