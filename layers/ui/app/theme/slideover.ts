import { defineUiTheme } from "./defineUiTheme"

export const slideoverTheme = defineUiTheme({
  slots: {
    overlay: "fixed inset-0 bg-black/70",
    content:
      "fixed flex flex-col divide-y divide-default bg-default ring-default focus:outline-none sm:shadow-lg sm:ring",
    header: "flex min-h-16 items-center gap-1.5 p-4 sm:px-6",
    wrapper: "",
    body: "flex-1 overflow-y-auto p-4 sm:p-6",
    footer: "flex items-center gap-1.5 p-4 sm:px-6",
    title: "font-semibold text-highlighted",
    description: "mt-1 text-sm text-muted",
    close: "absolute end-4 top-4"
  },
  variants: {
    side: {
      top: {
        content: ""
      },
      right: {
        content: "max-w-md"
      },
      bottom: {
        content: ""
      },
      left: {
        content: "max-w-md"
      }
    },
    inset: {
      true: {
        content: "rounded-lg"
      }
    },
    transition: {
      true: {
        overlay:
          "data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]"
      }
    }
  },
  compoundVariants: [
    {
      side: "top",
      inset: true,
      class: {
        content: "inset-x-4 top-4 max-h-[calc(100%-2rem)]"
      }
    },
    {
      side: "top",
      inset: false,
      class: {
        content: "inset-x-0 top-0 max-h-full"
      }
    },
    {
      side: "right",
      inset: true,
      class: {
        content: "inset-y-4 right-4 w-[calc(100%-2rem)]"
      }
    },
    {
      side: "right",
      inset: false,
      class: {
        content: "inset-y-0 right-0 w-full"
      }
    },
    {
      side: "bottom",
      inset: true,
      class: {
        content: "inset-x-4 bottom-4 max-h-[calc(100%-2rem)]"
      }
    },
    {
      side: "bottom",
      inset: false,
      class: {
        content: "inset-x-0 bottom-0 max-h-full"
      }
    },
    {
      side: "left",
      inset: true,
      class: {
        content: "inset-y-4 left-4 w-[calc(100%-2rem)]"
      }
    },
    {
      side: "left",
      inset: false,
      class: {
        content: "inset-y-0 left-0 w-full"
      }
    },
    {
      transition: true,
      side: "top",
      class: {
        content:
          "data-[state=closed]:animate-[slide-out-to-top_200ms_ease-in-out] data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out]"
      }
    },
    {
      transition: true,
      side: "right",
      class: {
        content:
          "data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out] data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out]"
      }
    },
    {
      transition: true,
      side: "bottom",
      class: {
        content:
          "data-[state=closed]:animate-[slide-out-to-bottom_200ms_ease-in-out] data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out]"
      }
    },
    {
      transition: true,
      side: "left",
      class: {
        content:
          "data-[state=closed]:animate-[slide-out-to-left_200ms_ease-in-out] data-[state=open]:animate-[slide-in-from-left_200ms_ease-in-out]"
      }
    }
  ]
})

export default slideoverTheme
