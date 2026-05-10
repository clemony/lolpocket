import { ConfirmDialog } from "#components"

export interface ConfirmDialogOptions {
  title: string
  description?: string
  onClose?: (value: ConfirmDialogResult) => void
}

export interface ConfirmDialogResult {
  confirmed: boolean
  neverAgain: boolean
}

export const useConfirmModal = () => {
  const overlay = useOverlay()

  return (options: ConfirmDialogOptions): Promise<ConfirmDialogResult> => {
    const modal = overlay.create(ConfirmDialog, {
      destroyOnClose: true,
      props: options
    })

    return modal.open()
  }
}
