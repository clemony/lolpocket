import { LazyPostModal } from "#components"

export const usePostModal = () => {
  const overlay = useOverlay()

  const modal = overlay.create(LazyPostModal, {
    destroyOnClose: true
  })

  return {
    openPostModal: (
      index: number,
      postList: Post[],
      onSelect?: (index: number) => void
    ) => modal.open({ index, postList, onSelect }),
    closePostModal: () => modal.close()
  }
}
