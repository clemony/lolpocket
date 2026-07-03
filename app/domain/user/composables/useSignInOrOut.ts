import { LazyAuthModal } from "#components"
import { useSignOut } from "~/domain/user/composables/useAuth"

export const useSignInOrOut = (close?: () => void) => {
  const sbu = useSupabaseUser()
  const online = computed(() => sbu.value?.session_id)
  const overlay = useOverlay()
  const login = overlay.create(LazyAuthModal, {
    destroyOnClose: true,
    props: { type: "logIn" },
  })
  return {
    icon: online.value ? "i-lucide-log-out" : "i-lucide-log-in",
    label: online.value ? "Log out" : "Log in",
    ui: {
      base: "px-2 gap-3 shadow-none! drop-shadow-none! fx-0! rounded-4xl",
      leadingIcon: "scale-90! **:stroke-[11%]!",
    },
    async action() {
      if (close) close()
      if (online.value) {
        await useSignOut()
        return
      }
      void login.open()
    },
    kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"],
  }
  /*     [
      {
        icon: online.value ? "i-lucide-log-out" : "i-lucide-log-in",
        label: "Log out",
        ui: {
          itemLeadingIcon: "scale-90! **:stroke-[2.4]"
        },
        onClick: () => {
          useSignOut()
        },
        kbds: online.value ? ["shift", "meta", "Q"] : ["shift", "meta", "S"]
      }
    ] */
}
