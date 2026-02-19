export default {
  slots: {
    root: "relative flex flex-col min-w-0 min-h-svh shrink-0 border-none",
    body: "flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto p-4 sm:p-6",
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
        root: " lg:not-last:border-e lg:not-last:border-default",
      },
    },

    defaultVariants: {
      clean: false,
    },
  },
}
