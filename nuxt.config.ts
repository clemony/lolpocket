import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"
import { colors as uiThemeColors } from "./layers/ui/app/theme/colors"

const isCFPages = process.env.CF_PAGES === "1"
const nitroPreset = isCFPages ? "cloudflare_pages" : "cloudflare_module"
const isProduction = process.env.NODE_ENV === "production"

export default defineNuxtConfig({
  imports: {
    global: true,
    dirs: ["#shared/schema", "~/stores"]
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
      ? ["@nuxt/devtools", "@nuxt/hints", "@nuxt/test-utils/module"]
      : [])
  ],

  // app
  typescript: {
    strict: true,
    typeCheck: process.env.NODE_ENV === "development"
  },

  // UI
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
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
      "wiki.leagueoflegends.com"
    ],
    presets: {
      card: {
        modifiers: {
          format: "webp",
          width: 400,
          height: 300,
          quality: 50
        }
      }
    }
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
        normalizeIconName: false
      },
      {
        dir: "./app/assets/icons/stat",
        prefix: "stat",
        normalizeIconName: false
      },
      {
        dir: "./assets/icons/rune",
        prefix: "rune",
        normalizeIconName: false
      },
      {
        dir: "./layers/ui/app/assets/icons/ui",
        prefix: "ui",
        normalizeIconName: false
      }
      /*       {
        dir: "./layers/ui/app/assets/icons/i18n",
        prefix: "i18n",
        normalizeIconName: false
      } */
    ],
    clientBundle: {
      includeCustomCollections: true
    }
  },
  ui: {
    colorMode: false,
    experimental: {
      componentDetection: true
    },
    theme: {
      colors: [...uiThemeColors]
    }
  },

  fonts: {
    provider: "fontsource",
    defaults: {
      subsets: ["latin-ext", "latin"],
      styles: ["normal", "italic"]
    },
    families: [
      {
        name: "Inter",
        weights: [300, 400, 500, 600, 700, 800, 900]
      },
      {
        name: "Source Code Pro"
      },
      {
        name: "Playfair Display"
      }
    ]
  },

  ssr: true,

  nitro: {
    sourceMap: false,
    compatibilityDate: "2025-07-18",
    preset: nitroPreset,
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    },
    externals: {
      external: ["sharp"]
    },
    routeRules: {
      "/api/**": {
        cors: true,
        headers: { "Access-Control-Allow-Origin": "*" }
      }
    },
    typescript: {
      strict: true
    }
  },
  // Disable sourcemaps for both client and server builds to reduce CI memory pressure.
  sourcemap: {
    client: false,
    server: false
  },
  pinia: { storesDirs: ["~~/app/stores"] },
  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
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
    "/tools/**": { ssr: false }
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
        fr: process.env.NUXT_PUBLIC_I18N_DOMAIN_LOCALES_FR_DOMAIN
      }
    },
    public: {
      authRedirect: "",
      baseUrl: "",
      newUserRedirect: "",
      supabaseKey: "",
      supabaseUrl: "",
      postalBaseUrl: process.env.NUXT_PUBLIC_POSTAL_BASE_URL ?? ""
    }
  },

  site: {
    url: process.env.NUXT_SITE_URL,
    name: "lolpocket",
    description: "Is that lp in your pocket?",
    defaultLocale: "en"
  },
  seo: {
    fallbackTitle: true,
    meta: {
      applicationName: "lolpocket",
      author: "lolpocket",
      ogType: "website"
    }
  },
  robots: {
    credits: false,
    metaTag: true,
    disallow: isProduction
      ? ["/api/", "/auth/", "/account/", "/settings/"]
      : ["/"]
  },
  /*   sitemap: {
    enabled: isProduction,
    zeroRuntime: true,
  },  */
  ogImage: {
    zeroRuntime: true
  },
  supabase: {
    key: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    redirect: true,
    types: "~~/shared/types/database.types.ts",
    url: process.env.NUXT_PUBLIC_SUPABASE_URL,
    useSsrCookies: true,
    redirectOptions: {
      callback: "/auth/redirect",
      login: "/auth/login",
      saveRedirectToCookie: true,
      exclude: ["*"]
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        "valibot",
        "dexie",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
        "random-words",
        "@internationalized/date",
        "fuse.js",
        "fast-deep-equal/es6"
      ]
    },
    plugins: [tailwindcss()],
    clearScreen: false,
    build: {
      sourcemap: false
    }
  },

  motionV: {
    directives: true
  },

  compatibilityDate: "2025-07-18",
  devServer: {
    host: "localhost",
    https: false,
    port: 8080
  },
  devtools: {
    enabled: true,
    componentInspector: true,
    vueDevTools: false,
    viteInspect: true,
    viteDevTools: false
  },
  experimental: {
    // extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: !isCFPages
    //viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5
  }
})
