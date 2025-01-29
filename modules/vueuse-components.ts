// https://github.com/vueuse/motion/tree/main/src/nuxt
import { addImportsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@vueuse/components',
    configKey: 'components',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime/composables'))
  },
})
