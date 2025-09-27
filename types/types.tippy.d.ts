// ~/types/tippy.d.ts
import type { TippyInstance } from 'vue-tippy'

declare global {
  interface TippyElement extends HTMLElement {
    tippy?: TippyInstance
  }

}