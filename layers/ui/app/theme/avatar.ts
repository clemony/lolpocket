import { defineUiTheme } from "./defineUiTheme"

export const avatarTheme = defineUiTheme({
  slots: {
    root: "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-elevated align-middle select-none",
    image: "size-full object-cover",
    fallback: "truncate leading-none font-medium text-muted",
    icon: "shrink-0 text-muted",
  },
  variants: {
    size: {
      "3xs": {
        root: "size-4 rounded-full text-[8px]",
      },
      "2xs": {
        root: "size-5 rounded-full text-[10px]",
      },
      xs: {
        root: "size-6 rounded-full text-xs",
      },
      sm: {
        root: "size-7 rounded-full text-sm",
      },
      md: {
        root: "size-8 rounded-full text-base",
      },
      lg: {
        root: "size-9 rounded-full text-lg",
      },
      xl: {
        root: "size-10 rounded-full text-xl",
      },
      "2xl": {
        root: "size-11 rounded-full text-[22px]",
      },
      "3xl": {
        root: "size-12 rounded-full text-2xl",
      },
      default: {},
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export default avatarTheme
