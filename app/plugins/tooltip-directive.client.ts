// /app/plugins/tooltip-directive.client.ts
import { defineNuxtPlugin } from "#app"
import { vTooltip } from "~/directives/tooltip"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("tooltip", vTooltip)
})
