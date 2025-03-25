import { addImports, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    const names = [
      'colord',
      'extend',
    ]
    const plugins = [
      'lchPlugin',
    ]
    names.forEach(name =>
      addImports({ name, as: name, from: 'colord' }),
    )
    plugins.forEach(name =>
      addImports({ name, as: name, from: 'colord/plugins/lch' }),
    )
  },
})
