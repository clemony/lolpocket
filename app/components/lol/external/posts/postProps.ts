import type { BadgeProps } from "@nuxt/ui"

export const postBadge = (label?: string) =>
  ({
    label: label || undefined,
    size: "xs",
    variant: "solid",
    color: "transparent",
    icon: "i-hash",
    ui: {
      base: "px-0! lowercase order-last gap-0",
      label: "text-pc/60",
      leadingIcon: "size-3.25 text-pc/70 **:stroke-[1.8]"
    }
  }) as BadgeProps

export const postAuthorUi = {
  avatar: "shadow-none! drop-shadow-2xs shrink-0 size-5.5",
  description: "truncate block",
  root: "w-full inline-flex items-center gap-1.5",
  name: "tracking-tight",
  wrapper: "max-w-90 inline-flex truncate items-center gap-1"
}
