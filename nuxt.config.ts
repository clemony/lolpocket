import tailwindcss from "@tailwindcss/vite"
import process from "node:process"
import { colors as uiThemeColors } from "./layers/ui/app/theme/colors"

const isCFPages = process.env.CF_PAGES === "1"

const nitroPreset = isCFPages ? "cloudflare_pages" : "cloudflare_module"

const isProduction = process.env.NODE_ENV === "production"
const matchAnalyticsGatherCron = "*/5 * * * *"
const matchAnalyticsGatherTask = "riot:match-analytics:gather-na"
const enableMatchAnalyticsCron =
  !isCFPages && process.env.MATCH_ANALYTICS_CRON === "1"

const summonerCacheD1DatabaseId = process.env.SUMMONER_CACHE_D1_DATABASE_ID

const summonerCacheD1PreviewDatabaseId =
  process.env.SUMMONER_CACHE_D1_PREVIEW_DATABASE_ID
const summonerCacheD1Databases = summonerCacheD1DatabaseId
  ? [
      {
        binding: "SUMMONER_CACHE_DB",
        database_name:
          process.env.SUMMONER_CACHE_D1_DATABASE_NAME ??
          "lolpocket-summoner-cache",
        database_id: summonerCacheD1DatabaseId,
        ...(summonerCacheD1PreviewDatabaseId
          ? { preview_database_id: summonerCacheD1PreviewDatabaseId }
          : {}),
      },
    ]
  : []
const matchAnalyticsD1DatabaseId = process.env.MATCH_ANALYTICS_D1_DATABASE_ID
const matchAnalyticsD1PreviewDatabaseId =
  process.env.MATCH_ANALYTICS_D1_PREVIEW_DATABASE_ID
const matchAnalyticsD1Databases = matchAnalyticsD1DatabaseId
  ? [
      {
        binding: "MATCH_ANALYTICS_DB",
        database_name:
          process.env.MATCH_ANALYTICS_D1_DATABASE_NAME ??
          "lolpocket-match-analytics",
        database_id: matchAnalyticsD1DatabaseId,
        ...(matchAnalyticsD1PreviewDatabaseId
          ? { preview_database_id: matchAnalyticsD1PreviewDatabaseId }
          : {}),
      },
    ]
  : []
const d1Databases = [...summonerCacheD1Databases, ...matchAnalyticsD1Databases]
const cloudflareWranglerConfig = {
  ...(d1Databases.length
    ? {
        d1_databases: d1Databases,
      }
    : {}),
  ...(enableMatchAnalyticsCron
    ? {
        triggers: {
          crons: [matchAnalyticsGatherCron],
        },
      }
    : {}),
}

const components = [
  "about",
  "app",
  "backpack",
  "editor",
  "pocket",
  "home",
  "calculator",
  "library",
  "nexus",
  "pocket",
  "summoner",
  "user",
].map((c) => ({
  path: `~/domain/${c}/components`,
  pathPrefix: false,
}))

export default defineNuxtConfig({
  imports: {
    global: true,
    dirs: ["#shared/schema", "~/stores"],
  },

  /*   dir: {
    assets: "#layers/ui/app/assets"
  }, */

  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "motion-v/nuxt",
    "@formkit/auto-animate/nuxt",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/seo",
    "@nuxt/scripts",

    //"@nuxtjs/i18n",
    ...(process.env.NODE_ENV === "development"
      ? [
          "@nuxt/devtools",
          [
            "@nuxt/hints",
            {
              features: {
                hydration: true,
                lazyLoad: false,
                webVitals: true,
                thirdPartyScripts: true,
                htmlValidate: true,
              },
            },
          ] as [string, Record<string, any>],
          "@nuxt/test-utils/module",
        ]
      : []),
  ],

  // app
  typescript: {
    strict: true,
    typeCheck: process.env.NODE_ENV === "development",
    tsConfig: {
      compilerOptions: {
        types: ["youtube"],
      },
    },
  },

  // UI
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    ...components,
  ],
  css: ["./layers/ui/app/css/tailwind.css"],
  image: {
    provider: isCFPages ? "cloudflare" : "ipx",
    domains: [
      "ddragon.leagueoflegends.com",
      "cmsassets.rgpub.io",
      "preview.redd.it",
      "cdn.communitydragon.org",
      "lh3.googleusercontent.com",
      "external-preview.redd.it",
      "leagueoflegends.com",
      "wiki.leagueoflegends.com",
    ],
    presets: {
      card: {
        modifiers: {
          format: "webp",
          width: 400,
          height: 300,
          quality: 50,
        },
      },
    },
  },
  icon: {
    provider: "iconify",
    //serverBundle: false, // <- important
    fallbackToApi: "client-only",
    size: "18px",
    customCollections: [
      {
        dir: "./app/assets/icons/lp",
        prefix: "lp",
        normalizeIconName: false,
      },
      {
        dir: "./app/assets/icons/stat",
        prefix: "stat",
        normalizeIconName: false,
      },
      {
        dir: "./assets/icons/rune",
        prefix: "rune",
        normalizeIconName: false,
      },
      {
        dir: "./layers/ui/app/assets/icons/ui",
        prefix: "ui",
        normalizeIconName: false,
      },
      /*       {
        dir: "./layers/ui/app/assets/icons/i18n",
        prefix: "i18n",
        normalizeIconName: false
      } */
    ],
    clientBundle: {
      includeCustomCollections: true,
    },
  },
  ui: {
    colorMode: false,
    experimental: {
      componentDetection: true,
    },
    theme: {
      colors: [...uiThemeColors],
    },
  },

  fonts: {
    provider: "fontsource",
    defaults: {
      subsets: ["latin-ext", "latin"],
      styles: ["normal", "italic"],
    },
    families: [
      {
        name: "Inter",
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Gelasio",
      },
      {
        name: "Playfair Display",
      },
    ],
  },

  ssr: true,

  nitro: {
    sourceMap: false,
    compatibilityDate: "2025-07-18",
    preset: nitroPreset,
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      ...(Object.keys(cloudflareWranglerConfig).length
        ? {
            wrangler: cloudflareWranglerConfig,
          }
        : {}),
    },
    ...(enableMatchAnalyticsCron
      ? {
          experimental: {
            tasks: true,
          },
          scheduledTasks: {
            [matchAnalyticsGatherCron]: matchAnalyticsGatherTask,
          },
        }
      : {}),
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
  // Disable sourcemaps for both client and server builds to reduce CI memory pressure.
  sourcemap: {
    client: false,
    server: false,
  },
  pinia: { storesDirs: ["~~/app/stores"] },
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
    "/auth/**": { ssr: false },
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
    FEED_REFRESH_SECRET: process.env.FEED_REFRESH_SECRET,
    REDDIT_CLIENT_ID: process.env.REDDIT_CLIENT_ID,
    REDDIT_CLIENT_SECRET: process.env.REDDIT_CLIENT_SECRET,
    REDDIT_USER_AGENT:
      process.env.REDDIT_USER_AGENT ??
      "web:lolpocket:v1.0.0 (by /u/lolpocket-dev)",
    SUPABASE_SECRET_KEY: process.env.SUPABASE_SECRET_KEY,
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
      postalBaseUrl: process.env.NUXT_PUBLIC_POSTAL_BASE_URL ?? "",
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
  /*   sitemap: {
    enabled: isProduction,
    zeroRuntime: true,
  },  */
  ogImage: {
    zeroRuntime: true,
  },
  supabase: {
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    types: "~~/shared/types/database.types.ts",
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: true,
    cookieOptions: {
      maxAge: 60 * 60 * 8,
      sameSite: "lax",
      secure: isProduction,
    },
    clientOptions: {
      auth: {
        detectSessionInUrl: false,
      },
    },
    redirectOptions: {
      callback: "/auth/redirect",
      login: "/auth/login",
      saveRedirectToCookie: true,
      exclude: ["*"],
    },
  },
  vite: {
    resolve: {
      dedupe: ["reka-ui"],
    },
    optimizeDeps: {
      include: [
        "@dnd-kit/dom",
        "@dnd-kit/dom/sortable",
        "@dnd-kit/vue",
        "@dnd-kit/vue/sortable",
        "valibot",
        "dexie",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
        "@internationalized/date",
        "fuse.js",
        "fast-deep-equal/es6",
      ],
    },
    plugins: [tailwindcss()],
    clearScreen: false,
    build: {
      sourcemap: false,
    },
  },

  motionV: {
    directives: true,
  },

  compatibilityDate: "2025-07-18",
  devServer: {
    host: "localhost",
    https: false,
    port: 8080,
  },
  devtools: {
    enabled: true,
    componentInspector: true,
    vueDevTools: false,
    viteInspect: true,
    viteDevTools: false,
  },
  experimental: {
    // extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: !isCFPages,
    //viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
  },
})
