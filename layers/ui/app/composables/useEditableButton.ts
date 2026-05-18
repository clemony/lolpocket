import type { ShallowRef } from "vue"
import { generateName } from "~/domain/pocket/helpers/generateStrings"

interface EditableButtonInstance {
  editing: ShallowRef<boolean>
  label: ShallowRef<string>
  toggleEdit: () => void
  randomizeHistoryName: () => void
  focusInput: () => void
  setFocusInput: (handler: (() => void) | null) => void
}

export const EditableButtonKey = Symbol("EditableButtonKey")

export const useEditableButtonProvider = () => {
  const editing = shallowRef<boolean>(false)
  const toggleEdit = useToggle(editing)

  const label = shallowRef<string>("")
  const focusInputHandler = shallowRef<(() => void) | null>(null)

  function focusInput() {
    focusInputHandler.value?.()
  }

  function setFocusInput(handler: (() => void) | null) {
    focusInputHandler.value = handler
  }

  function randomizeHistoryName() {
    if (!label.value) return
    label.value = generateName()
    focusInput()
  }

  const state: EditableButtonInstance = {
    editing,
    label,
    toggleEdit,
    randomizeHistoryName,
    focusInput,
    setFocusInput
  }

  provide(EditableButtonKey, state)

  return state
}

export function useEditableButton() {
  const state = inject<EditableButtonInstance | undefined>(EditableButtonKey)
  if (!state) throw new Error("No backpack provider found")
  return state
}
