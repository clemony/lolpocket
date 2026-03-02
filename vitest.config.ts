import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    include: ['test/nuxt/**/*.spec.ts'],
    setupFiles: ['test/setup.ts'],
    env: {
      NUXT_PUBLIC_SUPABASE_URL: 'http://127.0.0.1:54321',
      NUXT_PUBLIC_SUPABASE_KEY: 'test-anon-key',
    },
    environmentOptions: {
      nuxt: {
        mock: {
          indexedDb: true,
          intersectionObserver: true,
        },
      },
    },
  },
})
