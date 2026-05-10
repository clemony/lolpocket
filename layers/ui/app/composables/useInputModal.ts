import { InputDialog } from "#components"
import type { ButtonProps, InputProps } from "@nuxt/ui"

export interface InputDialogOptions {
  title: string
  description?: string
  defaultValue?: string
  input?: InputProps
  onClose?: (value: string) => void
  inputAction?: ButtonProps
  actions?: ButtonProps[]
}

export const useInputModal = () => {
  const overlay = useOverlay()

  return (options: InputDialogOptions): Promise<string> => {
    const modal = overlay.create(InputDialog, {
      destroyOnClose: true,
      props: options
    })

    return modal.open()
  }
}
