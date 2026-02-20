import { defineUiTheme } from "./defineUiTheme"

export const fileUploadTheme = defineUiTheme({
  slots: {
    root: "relative flex flex-col",
    base: [
      "flex w-full flex-1 flex-col items-stretch justify-center gap-2 rounded-lg border border-default bg-default focus-visible:outline-2",
    ],
    wrapper: "flex flex-col items-center justify-center text-center",
    icon: "shrink-0",
    avatar: "shrink-0",
    label: "mt-2 font-medium text-default",
    description: "mt-1 text-muted",
    actions: "mt-4 flex shrink-0 flex-wrap gap-1.5",
    files: "",
    file: "relative",
    fileLeadingAvatar: "shrink-0",
    fileWrapper: "flex min-w-0 flex-col",
    fileName: "truncate text-default",
    fileSize: "truncate text-muted",
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
        file: "gap-1 px-2 py-1 text-xs",
        fileWrapper: "flex-row gap-1",
      },
      sm: {
        base: "text-xs",
        icon: "size-4",
        file: "gap-1.5 px-2.5 py-1.5 text-xs",
        fileWrapper: "flex-row gap-1",
      },
      md: {
        base: "text-sm",
        icon: "size-5",
        file: "gap-1.5 px-2.5 py-1.5 text-xs",
      },
      lg: {
        base: "text-sm",
        icon: "size-5",
        file: "gap-2 px-3 py-2 text-sm",
        fileSize: "text-xs",
      },
      xl: {
        base: "text-base",
        icon: "size-6",
        file: "gap-2 px-3 py-2 text-sm",
      },
    },
    layout: {
      list: {
        root: "items-start gap-2",
        files: "flex w-full flex-col gap-2",
        file: "flex w-full min-w-0 items-center rounded-md border border-default",
        fileTrailingButton: "ms-auto",
      },
      grid: {
        fileWrapper: "hidden",
        fileLeadingAvatar: "size-full rounded-lg",
        fileTrailingButton:
          "absolute -end-1.5 -top-1.5 rounded-full border-2 border-bg p-0",
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
})

export default fileUploadTheme
