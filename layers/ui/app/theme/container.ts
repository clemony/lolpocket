import { defineUiTheme } from "./defineUiTheme"

export const containerTheme = defineUiTheme({
  base: "mx-auto w-full px-4 sm:px-6 lg:px-8",
  variants: {
    size: {
      default: "max-w-(--ui-container)",
      lg: "max-w-(--ui-container-lg)"
    }
  },
  defaultVariants: {
    size: "default"
  }
})

export default containerTheme
