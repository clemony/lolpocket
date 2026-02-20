import { defineUiTheme } from "./defineUiTheme"

export const alertTheme = defineUiTheme({
  slots: {
    root: "relative flex w-full gap-2.5 overflow-hidden rounded-lg p-4",
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
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    variant: "solid",
  },
})

export default alertTheme
