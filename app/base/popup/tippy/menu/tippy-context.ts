export interface TippyContext {
  setContent: (el: HTMLElement) => void
  setTrigger: (el: HTMLElement) => void
}

export const tippyContextKey = Symbol('tippy')
