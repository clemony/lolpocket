import {  SplitterPanel } from 'reka-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ResizablePanel', SplitterPanel).component
})
