import { colors } from "./colors"
import { defineUiTheme } from "./defineUiTheme"

export const progressTheme = defineUiTheme({
  slots: {
    root: "gap-2",
    base: "relative overflow-hidden rounded-full bg-p2",
    indicator:
      "size-full rounded-full transition-transform duration-200 ease-out",
    status: "flex text-dimmed transition-[width] duration-200",
    steps: "grid items-end",
    step: "col-start-1 row-start-1 truncate text-end transition-opacity",
  },
  variants: {
    animation: {
      carousel: "",
      "carousel-inverse": "",
      swing: "",
      elastic: "",
    },
    color: {
      default: {
        indicator: "bg-n0",
        steps: "text-pc",
      },
      insp: {
        indicator:
          "bg-[color-mix(in_oklab,var(--ui-insp)_50%,var(--color-challenger)_50%)]",
        steps: "text-pc",
      },
      dom: {
        indicator: "bg-dom",
        steps: "text-pc",
      },
      neutral: {
        indicator: "bg-n0",
        steps: "text-nc",
      },
    },
    size: {
      "2xs": {
        status: "text-xs",
        steps: "text-xs",
      },
      xs: {
        status: "text-xs",
        steps: "text-xs",
      },
      sm: {
        status: "text-sm",
        steps: "text-sm",
      },
      md: {
        status: "text-sm",
        steps: "text-sm",
      },
      lg: {
        status: "text-sm",
        steps: "text-sm",
      },
      xl: {
        status: "text-pc",
        steps: "text-pc",
      },
      "2xl": {
        status: "text-pc",
        steps: "text-pc",
      },
    },
    step: {
      active: {
        step: "opacity-100",
      },
      first: {
        step: "text-n5 opacity-100",
      },
      other: {
        step: "opacity-0",
      },
      last: {
        step: "",
      },
    },
  },

  defaultVariants: {
    animation: "carousel",
    color: "default",
    size: "md",
  },
})

export default progressTheme
