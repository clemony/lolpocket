import type { HTMLAttributes } from 'vue'

declare global {

  export type { HTMLAttributes } from 'vue'

  interface HTMLAttr extends HTMLAttributes { }

}