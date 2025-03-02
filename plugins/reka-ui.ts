import { PopoverArrow, PopoverClose, SplitterPanel } from 'reka-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ResizablePanel', SplitterPanel).component('PopoverClose', PopoverClose).component('PopoverArrow', PopoverArrow)
})
