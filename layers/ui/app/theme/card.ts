import { defineUiTheme } from "./defineUiTheme"

export const cardTheme = defineUiTheme({
  slots: {
    body: "p-0 sm:p-0",
    footer: "p-0 sm:p-0",
    header: "p-0 sm:p-0",
    root: "relative overflow-hidden rounded-xl text-pc"
  },
  variants: {
    variant: {
      link: "",
      ghost: {
        root: "text-pc"
      },
      highlight: "",
      ring: "",
      outline: {
        root: "bg-transparent text-pc ring-p3"
      },
      solid: {
        footer: "text-pc",
        body: "text-pc",
        header: "text-pc",
        root: "divide divide-p3/80 border border-p3/80 bg-p0 text-pc shadow-sm shadow-black/6 ring-p3/80"
      },
      muted: {
        footer: "text-pc",
        body: "text-pc",
        header: "text-pc",
        root: "divide ring-none field-box noise relative divide-p3 border border-p3/80 bg-p1! text-pc shadow-sm shadow-black/6 drop-shadow-sm drop-shadow-black/5"
      }
    }
  },
  defaultVariants: {
    variant: "solid"
  }
})

export default cardTheme
