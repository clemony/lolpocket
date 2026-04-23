import { defineUiTheme } from "./defineUiTheme"

export const formFieldTheme = defineUiTheme({
  slots: {
    root: "",
    wrapper: "",
    labelWrapper: "flex content-center items-center justify-between gap-1",
    label: "block font-medium text-default",
    container: "relative",
    description: "text-muted",
    error: "absolute translate-x-px text-dom-offset",
    hint: "text-muted",
    help: "mt-2 text-muted"
  },
  variants: {
    size: {
      xs: { root: "text-xs" },
      sm: { root: "text-sm" },
      md: { root: "text-sm" },
      lg: {
        root: "space-y-4 text-sm",
        label: "text-lg font-bold",
        wrapper: "mb-5 space-y-2",
        help: "leading-5.75"
      },
      xl: { root: "text-base" }
    },
    required: {
      true: {
        label: `after:ms-0.5 after:hidden after:text-pc/60`
      }
    },
    orientation: {
      vertical: {
        container: "mt-1"
      },
      horizontal: {
        root: "flex place-items-baseline justify-between gap-2"
      }
    }
  },
  defaultVariants: {
    size: "md",
    orientation: "vertical"
  }
})

export default formFieldTheme
