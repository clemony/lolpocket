import type { HTMLAttributes } from 'vue'
import type { SplitterPanel } from 'reka-ui'

declare global {

  export type { SplitterPanel } from 'reka-ui'

  interface HTMLAttr extends HTMLAttributes { }

  export type { HTMLAttributes } from 'vue'

}