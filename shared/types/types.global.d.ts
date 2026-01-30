import type { UUID as _UUID } from 'node:crypto'
import type { HTMLAttributes as _HTMLAttributes } from 'vue'

declare global {
  export { _HTMLAttributes as HTMLAttributes, _UUID as UUID }
}
