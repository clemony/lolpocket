import type { HTMLAttributes } from "vue"

export const twPositionMask: Record<PositionKey, HTMLAttributes["class"]> = {
  top: "mask-image-[url('~/assets/icons/lp/top.svg')]",
  mid: "mask-image-[url('~/assets/icons/lp/mid.svg')]",
  support: "mask-image-('./app/assets/icons/lp/support.svg']",
  jungle: "mask-image-[./app/assets/icons/lp/jungle.svg]",
  bot: "mask-image-[url('~/assets/icons/lp/bot.svg')]",
  all: "mask-image-[url('~/assets/icons/lp/all.svg')]"
}

export const twRoleMask: Record<RoleKey, HTMLAttributes["class"]> = {
  assassin: "mask-image-[url('~/assets/icons/lp/assassin.svg')]",
  mage: "mask-image-[url('~/assets/icons/lp/mage.svg')]",
  enchanter: "mask-image-[url('~/assets/icons/lp/enchanter.svg')]",
  fighter: "mask-image-[url('~/assets/icons/lp/fighter.svg')]",
  marksman: "mask-image-['~/assets/icons/lp/marksman.svg']",
  tank: "mask-image-[url('~/assets/icons/lp/tank.svg')]",
  specialist: "mask-image-[url('~/assets/icons/lp/specialist.svg')]",
  all: "mask-image-[url('~/assets/icons/lp/all.svg')]"
}
