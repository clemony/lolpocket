import { LazyAuthModal } from "#components"

export const useAuthModal = () => {
  const overlay = useOverlay()

  const login = overlay.create(LazyAuthModal, {
    destroyOnClose: true,
    props: { type: "logIn" }
  })

  const signUp = overlay.create(LazyAuthModal, {
    destroyOnClose: true,
    props: { type: "signUp" }
  })

  return {
    openLogin: () => login.open(),
    closeLogin: () => login.close(),
    openSignUp: () => signUp.open(),
    closeSignUp: () => signUp.close()
  }
}
