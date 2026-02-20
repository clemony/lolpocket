import { defineUiTheme } from "./defineUiTheme"

export const modalTheme = defineUiTheme({
  slots: {
    title: "text-bc font-semibold",
    body: "flex-1 p-4 sm:p-6",
    close: "absolute end-4 top-4",
    content: "flex flex-col divide-y backdrop-blur-md focus:outline-none",
    description: "mt-1 text-sm",
    footer: "flex items-center gap-1.5 p-4 sm:px-6",
    header: "flex min-h-16 items-center gap-1.5 p-4 sm:px-6",
    overlay: "fixed inset-0",
    wrapper: "",
  },
  variants: {
    color: {
      p0: {
        content: "bg-b1/90 divide-b3",
        description: "text-n4",
      },
    },
    fullscreen: {
      false: {
        content:
          "w-[calc(100vw-2rem)] max-w-lg rounded-lg shadow-lg ring ring-p3",
      },
      true: {
        content: "inset-0",
      },
    },
    overlay: {
      true: {
        overlay: "bg-black/70",
      },
    },
    scrollable: {
      false: {
        body: "overflow-y-auto",
        content: "fixed",
      },
      true: {
        content: "relative",
        overlay: "overflow-y-auto",
      },
    },
    transition: {
      true: {
        content:
          "data-[state=closed]:animate-[scale-out_200ms_ease-in] data-[state=open]:animate-[scale-in_200ms_ease-out]",
        overlay:
          "data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]",
      },
    },
    form: {
      true: {
        content: "h-max justify-start px-8",
      },
    },
  },
  compoundVariants: [
    {
      fullscreen: false,
      scrollable: true,
      class: {
        overlay: "grid place-items-center p-4 sm:py-8",
      },
    },
    {
      fullscreen: false,
      scrollable: false,
      class: {
        content:
          "top-1/2 left-1/2 max-h-[calc(100dvh-2rem)] -translate-1/2 overflow-hidden sm:max-h-[calc(100dvh-4rem)]",
      },
    },
  ],
  defaultVariants: {
    overlay: true,
    transition: true,
  },
})

export default modalTheme
