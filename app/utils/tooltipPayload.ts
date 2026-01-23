export interface TooltipPayload {
  title?: string
  data?: any
  icon?: string
  img?: string
  text?: string
}

export const tooltipPayloadRegistry = new WeakMap<HTMLElement, unknown>()

export function attachTooltipPayload<T>(el: HTMLElement, payload: T) {
  tooltipPayloadRegistry.set(el, payload)
}
