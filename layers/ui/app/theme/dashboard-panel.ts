import { defineUiTheme } from "./defineUiTheme"

export const dashboardPanelTheme = defineUiTheme({
  slots: {
    root: "relative flex min-h-svh min-w-0 shrink-0 flex-col border-none",
    body: "flex flex-1 flex-col gap-4 overflow-y-auto p-4 sm:gap-6 sm:p-6",
    handle: "",
  },
  variants: {
    size: {
      true: {
        root: "w-full lg:w-(--width)",
      },
      false: {
        root: "flex-1",
      },
    },
    clean: {
      true: {},
      false: {
        root: "lg:not-last:border-e lg:not-last:border-default",
      },
    },

    defaultVariants: {
      clean: false,
    },
  },
})

export default dashboardPanelTheme
