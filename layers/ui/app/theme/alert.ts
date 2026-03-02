import { defineUiTheme } from "./defineUiTheme"

export const alertTheme = defineUiTheme({
  slots: {
    root: "relative flex w-full gap-2.5 overflow-hidden rounded-xl p-4",
    wrapper: "flex min-w-0 flex-1 flex-col",
    title: "text-sm font-medium",
    description: "text-sm opacity-90",
    icon: "size-5 shrink-0",
    avatar: "shrink-0",
    avatarSize: "2xl",
    actions: "flex shrink-0 flex-wrap gap-1.5",
    close: "p-0",
  },
  variants: {
    variant: {
      solid: "",
      outline: "",
      soft: "",
      subtle: "",
    },
    orientation: {
      horizontal: {
        root: "items-center",
        actions: "items-center",
      },
      vertical: {
        root: "items-start",
        actions: "mt-2.5 items-start",
      },
    },
    title: {
      true: {
        description: "mt-1",
      },
    },
  },
  compoundVariants: [
    {
      color: "neutral",
      variant: "solid",
      class: {
        root: "border-r border-b! border-dom bg-n1 text-nc shadow-sm inset-shadow-sm inset-shadow-nc/5",
        icon: "text-nc **:text-nc",
        close: "text-nc **:text-nc",
        description: "text-nc",
      },
    },
  ],
  defaultVariants: {
    color: "neutral",
    variant: "solid",
  },
})

export default alertTheme
