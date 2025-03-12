import type { HTMLAttributes } from 'vue'

import type { PrimitiveProps } from 'reka-ui'

export type { PrimitiveProps } from 'reka-ui'

declare global {

  interface HTMLAttr extends HTMLAttributes { }

  export type { PrimitiveProps } from 'reka-ui'

  export type { HTMLAttributes } from 'vue'

}
export { }
