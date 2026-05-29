import type { UUID as _UUID } from "node:crypto"
import type {
  HTMLAttributes as _HTMLAttributes,
  ShallowRef as _ShallowRef
} from "vue"

declare global {
  export {
    _HTMLAttributes as HTMLAttributes,
    _ShallowRef as ShallowRef,
    _UUID as UUID
  }
}
