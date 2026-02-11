export default {
  slots: {
    root: "relative flex flex-col",
    base: [
      "w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-2",
    ],
    wrapper: "flex flex-col items-center justify-center text-center",
    icon: "shrink-0",
    avatar: "shrink-0",
    label: "font-medium text-default mt-2",
    description: "text-muted mt-1",
    actions: "flex flex-wrap gap-1.5 shrink-0 mt-4",
    files: "",
    file: "relative",
    fileLeadingAvatar: "shrink-0",
    fileWrapper: "flex flex-col min-w-0",
    fileName: "text-default truncate",
    fileSize: "text-muted truncate",
    fileTrailingButton: "",
  },
  variants: {
    color: {
      p0: "",
      neutral: "",
    },
    variant: {
      area: {
        wrapper: "px-4 py-3",
        base: "p-4",
      },
      button: {},
    },
    size: {
      xs: {
        base: "text-xs",
        icon: "size-4",
        file: "text-xs px-2 py-1 gap-1",
        fileWrapper: "flex-row gap-1",
      },
      sm: {
        base: "text-xs",
        icon: "size-4",
        file: "text-xs px-2.5 py-1.5 gap-1.5",
        fileWrapper: "flex-row gap-1",
      },
      md: {
        base: "text-sm",
        icon: "size-5",
        file: "text-xs px-2.5 py-1.5 gap-1.5",
      },
      lg: {
        base: "text-sm",
        icon: "size-5",
        file: "text-sm px-3 py-2 gap-2",
        fileSize: "text-xs",
      },
      xl: {
        base: "text-base",
        icon: "size-6",
        file: "text-sm px-3 py-2 gap-2",
      },
    },
    layout: {
      list: {
        root: "gap-2 items-start",
        files: "flex flex-col w-full gap-2",
        file: "min-w-0 flex items-center border border-default rounded-md w-full",
        fileTrailingButton: "ms-auto",
      },
      grid: {
        fileWrapper: "hidden",
        fileLeadingAvatar: "size-full rounded-lg",
        fileTrailingButton:
          "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg",
      },
    },
    position: {
      inside: "",
      outside: "",
    },
    dropzone: {
      true: "border-dashed data-[dragging=true]:bg-elevated/25",
    },
    interactive: {
      true: "",
    },
    highlight: {
      true: "",
    },
    multiple: {
      true: "",
    },
    disabled: {
      true: "cursor-not-allowed opacity-75",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    variant: "area",
    size: "md",
  },
}
