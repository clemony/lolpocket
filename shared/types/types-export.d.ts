import { MotionValue } from 'motion-v'
import type { AcceptableValue, PrimitiveProps } from 'reka-ui'
import type { CSSProperties, HTMLAttributes } from 'vue'

declare global {
  interface HTMLAttr extends HTMLAttributes {}

  export type { MotionValue } from 'motion-v'
  export type { AcceptableValue, PrimitiveProps } from 'reka-ui'
  export type { CSSProperties, HTMLAttributes } from 'vue'
}
export {}
