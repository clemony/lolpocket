import tailwindcss from "@tailwindcss/vite"
import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const isCF = process.env.CF_PAGES === "1"
const isProduction = process.env.NODE_ENV === "production"
// Cloudflare build-only memory pressure toggle.
// Set `NUXT_CF_LEAN_BUILD=1` in Cloudflare to temporarily skip heavier modules while diagnosing Nitro bundle OOMs.
const isCFLeanBuild = isCF && process.env.NUXT_CF_LEAN_BUILD === "1"

const iconsRoot = fileURLToPath(
  new URL("./layers/ui/app/assets/icons", import.meta.url)
)

const customCollections = fs
  .readdirSync(iconsRoot, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => ({
    dir: path.join(iconsRoot, d.name),
    normalizeIconName: false,
    prefix: d.name,
  }))

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
    ...(isCFLeanBuild
      ? [
          // "@nuxt/icon", // OOM test toggle: comment-in to skip @nuxt/icon on Cloudflare lean builds
        ]
      : [
          "@nuxt/icon",
          "@nuxtjs/supabase",
          "@nuxt/image",
          "motion-v/nuxt",
          "@formkit/auto-animate/nuxt",
        ]),
    "@vueuse/nuxt",
    "@nuxt/ui",
    // "@nuxtjs/seo",
    //"@nuxtjs/i18n",
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
    provider: "none",
    domains: ["ddragon.leagueoflegends.com", "cdn.communitydragon.org"],
  },
  colorMode: {
    componentName: "ColorScheme",
    dataValue: "theme",
    fallback: "light",
    globalName: "__NUXT_COLOR_MODE__",
    preference: "system",
  },
  icon: {
    provider: "server",
    customCollections,
    size: "18px",
    serverBundle: {
      collections: ["lucide"],
    },
  },
  ui: {
    fonts: false,
  },

  ssr: true,
  nitro: {
    // Reduce Cloudflare Nitro bundle build memory usage while debugging OOMs.
    minify: !isCFLeanBuild,
    sourceMap: false,
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
  /*   sitemap: {
    enabled: isProduction,
    zeroRuntime: true,
  },
  ogImage: {
    zeroRuntime: true,
    enabled: false,
  }, */
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

  /*   i18n: {
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
  }, */

  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://cdn.jsdelivr.net",
          crossorigin: "",
        },

        // Inter (latin + latin-ext, 300-800, normal + italic)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-300.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-300-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-400.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-400-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-500.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-500-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-600.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-600-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-700.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-700-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-800.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-800-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-300.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-300-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-400.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-400-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-500.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-500-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-600.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-600-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-700.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-700-italic.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-800.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.2.8/latin-ext-800-italic.css",
        },

        // Noto Serif KR (normal only; italic not provided in this source)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-300.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-400.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-600.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-700.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-ext-300.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-ext-400.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-ext-600.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/latin-ext-700.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/korean-300.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/korean-400.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/korean-600.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-kr@5.2.5/korean-700.css",
        },

        // Geist Mono (normal)
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.2.6/latin-300.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.2.6/latin-400.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.2.6/latin-500.css",
        },
      ],
    },
  },
})
