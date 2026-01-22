// /app/directives/tooltip.ts
import type { Directive } from "vue"
import { attachTooltipPayload } from "~/utils/tooltipPayload"

type TooltipBinding =
  | false
  | string
  | {
      type?: string
      id?: string | number
      theme?: string
      class?: string
      name?: string
      tag?: string
      icon?: string
      img?: string
      text?: string
      size?: "default" | "md" | "lg"
      map?: string | number
      interactive?: boolean
      payload?: unknown
      delay?: number
    }

export const vTooltip: Directive<HTMLElement, TooltipBinding> = {
  mounted(el, binding) {
    if (binding.value === false) return
    if (!binding.value) return

    const value =
      typeof binding.value === "string" ?
        {
          type: "default", // 👈 default tooltip type
          text: binding.value,
        }
      : binding.value
    if (!value) return

    // required

    // optional props → dataset
    el.dataset.type = value.type ?? "default"
    if (value.id != null) el.dataset.id = String(value.id)
    if (value.theme) el.dataset.theme = value.theme
    if (value.class) el.dataset.class = value.class
    if (value.name) el.dataset.name = value.name
    if (value.tag) el.dataset.tag = value.tag
    if (value.icon) el.dataset.icon = value.icon
    if (value.img) el.dataset.img = value.img
    if (value.text) el.dataset.text = value.text
    if (value.size) el.dataset.size = value.size
    if (value.map != null) el.dataset.map = String(value.map)
    if (value.delay != null) el.dataset.delay = String(value.delay)
    if (value.interactive) el.dataset.interactive = "true"

    // payload (NOT dataset)
    if (value.payload !== undefined) {
      attachTooltipPayload(el, value.payload)
    }
  },

  updated(el, binding) {
    if (binding.value === false) return
    // allow reactive updates
    if (
      typeof binding.value !== "string" &&
      binding.value?.payload !== undefined
    ) {
      attachTooltipPayload(el, binding.value.payload)
    }
  },
}
