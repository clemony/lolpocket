import type { ButtonProps } from "@nuxt/ui"

export const backpackNav: ButtonProps[] = [
  {
    label: "Pockets",
    to: "/backpack",
    ui: {
      label: "font-semibold"
    },
    trailingIcon: "link",
    icon: "i-folders",
    variant: "soft"
  },
  {
    label: "Archive",
    to: "/backpack/archive",
    ui: {
      base: " "
    },
    icon: "i-archive",
    variant: "soft"
  },
  {
    label: "Trash",
    to: "/backpack/trash",
    ui: {
      base: ""
    },
    icon: "i-trash",
    variant: "soft"
  }
]
