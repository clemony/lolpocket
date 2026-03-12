import { defineUiTheme } from "~~/layers/ui/app/theme/defineUiTheme"

export const pageFeatureTheme = defineUiTheme({
  slots: {
    root: "relative rounded-sm",
    wrapper: "",
    leading: "inline-flex items-center justify-center",
    leadingIcon: "size-5 shrink-0 text-primary",
    title: "text-lg font-semibold text-pretty text-highlighted",
    description: "text-sm leading-5 text-pretty text-n5",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "flex items-start gap-2.5",
        leading: "p-0.5",
      },
      vertical: {
        leading: "mb-2.5",
      },
    },
    to: {
      true: {
        root: ["has-focus-visible:ring-2 has-focus-visible:ring-primary"],
      },
    },
    title: {
      true: {
        description: "mt-1",
      },
    },
  },
})

export default pageFeatureTheme
