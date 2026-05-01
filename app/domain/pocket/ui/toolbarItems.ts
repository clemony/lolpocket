import type { ButtonProps } from "@nuxt/ui"
import type { SeparatorProps } from "reka-ui"
import { newPocket } from "~/domain/pocket/newPocket"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"

function handleNewFolder() {
  const folder = user().newPocketFolder()
}

export const toolbarItems: Record<string, ButtonProps> = {
  new: {
    icon: "i-add",
    label: "New Pocket",
    onClick: () => newPocket(),
    color: "neutral",
    ui: {
      label: " group-data-[collapsed=true]/sidebar:hidden grow-0",
      leadingIcon: "**:stroke-[2.4]",
      base: "group-expanded/sidebar:anchor group-expanded/sidebar:border-r group-collapsed/sidebar:border-b border-p4  group-expanded/sidebar:pr-4  group-expanded/sidebar::*:-translate-x-2 justify-center grow min-w-10"
    }
  },
  random: {
    color: "neutral",
    icon: "i-sparkle",
    label: "New Random Pocket",
    ui: {
      label: "hidden absolute opacity-0",
      leadingIcon:
        "**:stroke-[2.2]   group-hover/btn:scale-110 group-hover/btn:opacity-0 transition-opacity duration-600 size-4 absolute!",
      base: "group-expanded/sidebar:border-l justify-center group-collapsed/sidebar:border-t transition-colors duration-300 border-p4 gap-0 group-expanded/sidebar:w-12 anchor grid hover:bg-neutral! hover:fx-0! "
    },
    onClick: () => newRandomPocket()
  },
  folder: {
    square: true,
    icon: "i-folder",
    variant: "outline",
    trailingIcon: "i-add",
    ui: {
      label: "hidden",
      base: "gap-0 min-w-10 anchor bg-p0 ",
      leadingIcon: "**:stroke-[2.4] size-4 translate-y-px",
      trailingIcon:
        "absolute right-1.75 bottom-2 size-3 rounded-full bg-p1 opacity-100 **:stroke-[3.4] group-hover/btn:bg-p3"
    },
    label: "New folder",
    onClick: () => handleNewFolder()
  }
}
