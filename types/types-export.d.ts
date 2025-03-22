import type { HTMLAttributes } from 'vue'
import type { AcceptableValue } from 'reka-ui'
import type { PrimitiveProps } from 'reka-ui'

declare global {

  interface HTMLAttr extends HTMLAttributes { }

  export type { AcceptableValue, PrimitiveProps } from 'reka-ui'

  export type { HTMLAttributes } from 'vue'

}
export { }
