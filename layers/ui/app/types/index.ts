import type { RowData } from "@tanstack/vue-table"
import type { UseRefHistoryReturn } from "@vueuse/core"
import type { ShallowRef } from "vue"

export interface EditInputExpose {
  editing: ShallowRef<boolean>
  localLabel: UseRefHistoryReturn<string, string>
  focusInput: () => void
  toggleEdit: () => void
}

export interface DefineInputButton {
  buttonRef: ShallowRef<HTMLElement>
}

export interface DialogProps {
  title?: string
  description?: string
  defaultValue?: string
}

export interface EditableButtonInstance {
  editing?: ShallowRef<boolean>
  label?: ShallowRef<string>
  randomizeLabel?: () => void
  toggleEdit: () => void
  //focusInput: () => void
  // setFocusInput: (handler: (() => void) | null) => void
}
