import { AnimatePresence, LayoutGroup, Motion } from 'motion-v'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LayoutGroup', LayoutGroup)
  nuxtApp.vueApp.component('AnimatePresence', AnimatePresence)
  nuxtApp.vueApp.component('Motion', Motion)
})
