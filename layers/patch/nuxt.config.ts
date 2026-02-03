export default defineNuxtConfig({
  $meta: { name: 'patch' },

  experimental: {
    extractAsyncDataHandlers: true,
    nitroAutoImports: true,
    typescriptPlugin: true,
    viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
  },
})
