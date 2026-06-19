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

      heal: {
        indicator:
          "bg-[color-mix(in_oklab,var(--ui-insp)_80%,var(--color-res)_20%)]",
        steps: "text-pc",
      },
      dom: {
        indicator: "bg-dom",
        steps: "text-pc",
      },
      pre: {
        indicator: "bg-pre",
        steps: "text-pc",
      },
      neutral: {
        indicator: "bg-n0",
        steps: "text-nc",
      },

      iron: {
        indicator: "bg-iron",
        steps: "text-iron",
      },
      bronze: {
        indicator: "bg-bronze",
        steps: "text-bronze",
      },
      silver: {
        indicator: "bg-silver",
        steps: "text-silver",
      },
      gold: {
        indicator: "bg-gold",
        steps: "text-gold",
      },
      platinum: {
        indicator: "bg-platinum",
        steps: "text-platinum",
      },
      diamond: {
        indicator: "bg-diamond",
        steps: "text-diamond",
      },
      master: {
        indicator: "bg-master",
        steps: "text-master",
      },
      grandmaster: {
        indicator: "bg-grandmaster",
        steps: "text-grandmaster",
      },
      challenger: {
        indicator: "bg-challenger",
        steps: "text-challenger",
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
