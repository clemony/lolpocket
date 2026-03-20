import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const isCF = process.env.CF_PAGES === "1"
const isProduction = process.env.NODE_ENV === "production"
const nuxtChartsDeps = ["vue-chrts", "@unovis/ts", "@unovis/vue"] as const
const redditFeedRefreshCron = "*/30 * * * *"
// Cloudflare build-only memory pressure toggle.
// Set `NUXT_CF_LEAN_BUILD=1` in Cloudflare to temporarily skip heavier modules while diagnosing Nitro bundle OOMs.
const isCFLeanBuild = isCF && process.env.NUXT_CF_LEAN_BUILD === "1"

export default defineNuxtConfig({
  imports: {
    global: true,
    dirs: ["#shared/schema", "~/stores"]
  },

  dir: {
    assets: "#layers/ui/app/assets"
  },

  alias: {
    "@theme": fileURLToPath(new URL("./layers/ui/app/theme", import.meta.url))
  },

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
    typeCheck: !isCF
  },

  // UI
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  css: ["#layers/ui/app/assets/css/tailwind.css"],
  image: {
    provider: isCF ? "cloudflare" : "ipx",
    domains: ["ddragon.leagueoflegends.com", "cdn.communitydragon.org"]
  },
  colorMode: {
    componentName: "ColorScheme",
    dataValue: "theme",
    fallback: "light",
    globalName: "__NUXT_COLOR_MODE__",
    preference: "system"
  },
  icon: {
    provider: "iconify",
    serverBundle: false, // <- important
    fallbackToApi: "client-only",
    size: "18px",
    customCollections: [
      {
        dir: "./layers/ui/app/assets/icons/lp",
        prefix: "lp",
        normalizeIconName: false
      },
      {
        dir: "./layers/ui/app/assets/icons/stat",
        prefix: "stat",
        normalizeIconName: false
      },
      {
        dir: "./layers/ui/app/assets/icons/rune",
        prefix: "rune",
        normalizeIconName: false
      },
      {
        dir: "./layers/ui/app/assets/icons/ui",
        prefix: "ui",
        normalizeIconName: false
      },
      {
        dir: "./layers/ui/app/assets/icons/i18n",
        prefix: "i18n",
        normalizeIconName: false
      }
    ],
    clientBundle: {
      includeCustomCollections: true
    }
  },
  ui: {
    fonts: false,
    experimental: {
      componentDetection: true
    }
  },

  ssr: true,

  nitro: {
    // Reduce Cloudflare Nitro bundle build memory usage while debugging OOMs.
    minify: !isCFLeanBuild,
    sourceMap: false,
    experimental: {
      tasks: true
    },
    scheduledTasks: {
      [redditFeedRefreshCron]: ["reddit-refresh"]
    },
    compatibilityDate: "2025-07-18",
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        triggers: {
          crons: [redditFeedRefreshCron]
        }
      }
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
      supabaseUrl: ""
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
    server: {
      watch: {
        // Coalesce noisy editor/extension write bursts to reduce duplicate HMR triggers.
        awaitWriteFinish: {
          stabilityThreshold: 180,
          pollInterval: 30
        },
        ignored: ["**/.vscode/.iconify/**", "**/.DS_Store"]
      }
    },
    optimizeDeps: {
      include: [
        "valibot",
        "dexie",
        "clsx",
        "tailwind-merge",
        "tailwind-variants",
        "random-words",
        "reka-ui",
        "valibot",
        "dexie",
        "tailwind-merge",
        "tailwind-variants",
        "random-words",
        "reka-ui",
        "fast-deep-equal/es6", // CJS
        "@internationalized/date",
        "fuse.js"
      ]
    },
    plugins: [tailwindcss()],
    clearScreen: false,
    build: {
      sourcemap: false
    }
  },

  compatibilityDate: "2025-07-18",
  devServer: {
    host: "localhost",
    https: false,
    port: 8080
  },
  devtools: {
    enabled: true,
    componentInspector: false,
    vueDevTools: false,
    viteInspect: true,
    viteDevTools: false
  },
  experimental: {
    // extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: !isCF
    //viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5
  },
  /*
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
 */
  app: {
    head: {
      /*    script: [
        {
          key: "reset-nuxt-devtools-state",
          innerHTML: `
            try {
              const devtoolsKeys = [
                "nuxt-devtools-color-mode",
                "nuxt-devtools-first-visit",
                "nuxt-devtools-frame-state",
                "nuxt-devtools-panels-state",
                "nuxt-devtools-split-screen",
                "nuxt-devtools-split-screen-view",
                "nuxt-link-checker:show-inspections",
              ]

              for (const key of devtoolsKeys) {
                window.localStorage.removeItem(key)
              }

              window.localStorage.setItem(
                "nuxt-devtools-frame-state",
                JSON.stringify({
                  width: 80,
                  height: 60,
                  top: 0,
                  left: 50,
                  open: false,
                  route: "/",
                  position: "bottom",
                  closeOnOutsideClick: false,
                  minimizePanelInactive: 5000,
                }),
              )
            }
            catch {}
          `,
        },
      ], */
      link: [
        {
          rel: "preconnect",
          href: "https://cdn.jsdelivr.net",
          crossorigin: ""
        },

        // Inter Variable (all weights via axis, normal + italic)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/inter@5.2.6/wght.css"
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/inter@5.2.6/wght-italic.css"
        },

        // Gelasio
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/fontsource/fonts/merriweather:vf@latest/latin-wght-italic.woff2"
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/fontsource/fonts/merriweather:vf@latest/latin-wght-normal.woff2"
        },

        // Roboto Mono (variable)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/fontsource/fonts/roboto-mono:vf@latest/latin-wght-normal.woff2"
        }
      ]
    }
  }
})
