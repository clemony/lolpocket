import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

export const useIconSet = (
  iconKey: string | undefined,
  open: Ref<boolean | undefined>
): {
  icon: string
  class: string
} => {
  const ico = safeObject(iconSets[iconKey ?? "folder"])
  return {
    icon: open.value ? ico.open : ico.closed,
    class: open.value ? ico.ui?.open || "" : ico.ui?.closed || ""
  }
}
