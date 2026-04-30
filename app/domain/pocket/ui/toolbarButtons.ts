import type { ButtonProps } from "@nuxt/ui"
import { newPocket } from "~/domain/pocket/newPocket"
import { newRandomPocket } from "~/domain/pocket/newRandomPocket"

const toolbarProps: ButtonProps = {
  // variant: "outline",
  square: true,
  ui: {
    label: "hidden",
    base: "gap-0 min-w-10 anchor  ",
    leadingIcon: "**:stroke-[2.2]"
  }
}

function handleNewFolder() {
  const folder = user().newPocketFolder()
}

export const toolbarButtons: ButtonProps[] = [
  {
    ...toolbarProps,
    icon: "i-folder",
    trailingIcon: "i-add",
    ui: {
      ...toolbarProps.ui,
      leadingIcon: "**:stroke-[2.4] size-5 translate-y-px",
      trailingIcon:
        "absolute right-1.5 bottom-2 size-3.25 rounded-full bg-p1 opacity-100 **:stroke-[2.8] group-hover/btn:bg-p3"
    },
    label: "New folder",
    onClick: () => handleNewFolder()
  },
  {
    ...toolbarProps,
    icon: "i-sparkle",
    label: "Randomized New Pocket",
    onClick: () => newRandomPocket()
  },
  {
    icon: "i-add",
    label: "New Pocket",
    onClick: () => newPocket(),
    color: "neutral",
    ui: {
      label: "group-[aria-expanded=false]:hidden grow-0",
      leadingIcon: "**:stroke-[2.4]",
      base: "@container *:-translate-x-2 justify-center grow min-w-10"
    }
  }
]
