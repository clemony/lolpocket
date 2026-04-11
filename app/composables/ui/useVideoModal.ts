import { LazyVideoModal } from "#components"

export const useVideoModal = (post: Post) => {
  const overlay = useOverlay()

  const modal = overlay.create(LazyVideoModal, {
    destroyOnClose: false,
    props: { post }
  })

  return {
    openVideoModal: (post: Post) => modal.open({ post }),
    closeVideoModal: () => modal.close()
  }
}
