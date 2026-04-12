import { defineUiTheme } from "./defineUiTheme"

export const modalTheme = defineUiTheme({
  slots: {
    title: "text-bc font-semibold",
    body: "bg-b1 flex-1 p-4 sm:p-6",
    close: "absolute end-4 top-4",
    content: "divide-b3 flex flex-col divide-y focus:outline-none",
    description: "mt-1 text-sm text-n4",
    footer: "flex items-center gap-1.5 p-4 sm:px-6",
    header: "flex min-h-16 items-center gap-1.5 p-4 sm:px-6",
    overlay: "fixed inset-0",
    wrapper: ""
  },
  variants: {
    fullscreen: {
      false: {
        content:
          "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-p3"
      },
      true: {
        content: "inset-0"
      }
    },
    overlay: {
      true: {
        overlay: "bg-n0/80"
      }
    },
    scrollable: {
      false: {
        body: "overflow-y-auto",
        content: "fixed"
      },
      true: {
        content: "relative",
        overlay: "overflow-y-auto"
      }
    },
    transition: {
      true: {
        content:
          "data-[state=closed]:animate-[scale-out_200ms_ease-in] data-[state=open]:animate-[scale-in_200ms_ease-out]",
        overlay:
          "data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]"
      }
    }
  },
  compoundVariants: [
    {
      fullscreen: false,
      scrollable: true,
      class: {
        overlay: "grid place-items-center p-4 sm:py-8"
      }
    },
    {
      fullscreen: false,
      scrollable: false,
      class: {
        content:
          "top-1/2 left-1/2 max-h-[calc(100dvh-2rem)] -translate-1/2 overflow-hidden sm:max-h-[calc(100dvh-4rem)]"
      }
    }
  ],
  defaultVariants: {
    overlay: true,
    transition: true
  }
})

export default modalTheme
