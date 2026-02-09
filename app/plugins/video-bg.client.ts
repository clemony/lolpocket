//
import { Plugin } from "vue-responsive-video-background-player"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VideoBackground", Plugin)
})
