export interface TooltipPayload {
  img?: string
  icon?: string
  title?: string
  data?: any
  text?: string
}

export const tooltipPayloadRegistry = new WeakMap<HTMLElement, unknown>()

export function attachTooltipPayload<T>(el: HTMLElement, payload: T) {
  tooltipPayloadRegistry.set(el, payload)
}
