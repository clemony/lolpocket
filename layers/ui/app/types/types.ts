import type { UseRefHistoryReturn } from "@vueuse/core"
import type { ShallowRef } from "vue"

export interface EditInputExpose {
  editing: ShallowRef<boolean>
  localLabel: UseRefHistoryReturn<string, string>
  focusInput: () => void
  toggleEdit: () => void
}

export interface DialogProps {
  title?: string
  description?: string
  defaultValue?: string
}
