import tailwindcss from "@tailwindcss/vite"
import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const isCF = process.env.CF_PAGES === "1"
const isProduction = process.env.NODE_ENV === "production"

/* const iconsRoot = fileURLToPath(
  new URL("./layers/ui/app/assets/icons", import.meta.url)
)

const customCollections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => ({
    dir: path.join(iconsRoot, d.name),
    normalizeIconName: false,
    prefix: d.name,
  })) */

export default defineNuxtConfig({
  imports: {
    global: true,
    dirs: ["#shared/schema", "~/stores"],
  },

  dir: {
    assets: "#layers/ui/app/assets",
  },

  alias: {
    "@theme": fileURLToPath(new URL("./layers/ui/app/theme", import.meta.url)),
  },

  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "motion-v/nuxt",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
    ...(process.env.NODE_ENV === "development"
      ? ["@nuxt/devtools", "@nuxt/hints"]
      : []),
  ],

  // app
  typescript: {
    strict: true,
    typeCheck: !isCF,
  },

  // UI
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
  /*   icon: {
    provider: "server",
    customCollections,
    size: "18px",
    serverBundle: {
      externalizeIconsJson: true,
      collections: ["lucide"],
    },
  }, */
  ui: {
    fonts: false,
  },
  /*   fonts: {
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
        name: "DM Serif Display",
        provider: "fontsource",
        styles: ["normal", "italic"],
        weights: [400],
      },
    ],
  }, */

  ssr: true,
  nitro: {
    imports: {
      dirs: ["#server/domain", "#server/api/riot"],
    },
    externals: {
      external: ["sharp"],
    },
    routeRules: {
      "/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" },
      },
    },
    typescript: {
      strict: true,
    },
  },
  pinia: { storesDirs: ["~/stores"] },
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
    "/library": { ssr: true },
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
    i18n: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      domainLocales: {
        us: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_EN_DOMAIN,
        zh_tw: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_ZH_TW_DOMAIN,
        es: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_ES_DOMAIN,
        de: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_DE_DOMAIN,
        fr: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_FR_DOMAIN,
      },
    },
    public: {
      authRedirect: "",
      baseUrl: "",
      newUserRedirect: "",
      supabaseKey: "",
      supabaseUrl: "",
    },
  },

  site: {
    url: process.env.NUXT_SITE_URL,
    name: "lolpocket",
    description: "Is that lp in your pocket?",
    defaultLocale: "en",
  },
  seo: {
    fallbackTitle: true,
    meta: {
      applicationName: "lolpocket",
      author: "lolpocket",
      ogType: "website",
    },
  },
  robots: {
    credits: false,
    metaTag: true,
    disallow: isProduction
      ? ["/api/", "/auth/", "/account/", "/settings/"]
      : ["/"],
  },
  sitemap: {
    enabled: isProduction,
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
  devtools: {
    enabled: false,
    componentInspector: true,
    vueDevTools: true,
    viteInspect: true,
    viteDevTools: false,
  },
  experimental: {
    // extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: !isCF,
    //viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
  },

  i18n: {
    strategy: "prefix_except_default",
    differentDomains: true,
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lolpocket_i18n",
    },
    locales: [
      {
        code: "en",
        name: "English",
        domain: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_EN_DOMAIN,
      },
      {
        code: "zh_tw",
        name: "語言",
        domain: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_ZH_TW_DOMAIN,
      },
      {
        code: "es",
        name: "Español",
        domain: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_ES_DOMAIN,
      },
      {
        code: "de",
        name: "Deutsch",
        domain: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_DE_DOMAIN,
      },
      {
        code: "fr",
        name: "Français",
        domain: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_FR_DOMAIN,
      },
    ],
  },
})
