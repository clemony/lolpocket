import { defineUiTheme } from "./defineUiTheme"

export const avatarTheme = defineUiTheme({
  slots: {
    root: "inline-flex shrink-0 items-center justify-center rounded-full bg-p5/30 align-middle select-none",
    image: "z-1 size-full shrink-0 object-cover",
    fallback: "shrink-0 truncate leading-none font-medium text-muted",
    icon: "shrink-0 text-muted"
  },
  variants: {
    size: {
      custom: {},
      "3xs": {
        root: "size-4 text-[8px]"
      },
      "2xs": {
        root: "size-5 text-[10px]"
      },
      xs: {
        root: "size-6 text-xs"
      },
      sm: {
        root: "size-7 text-sm"
      },
      md: {
        root: "size-8 text-base"
      },
      lg: {
        root: "size-9 text-lg"
      },
      xl: {
        root: "size-10 text-xl"
      },
      "2xl": {
        root: "size-11 text-[22px]"
      },
      "3xl": {
        root: "size-12 text-2xl"
      },
      "4xl": {
        root: "size-13 text-2xl"
      },
      "5xl": {
        root: "size-14 text-2xl"
      },
      "6xl": {
        root: "size-15 text-2xl"
      },
      "7xl": {
        root: "size-16 text-2xl"
      }
    }
  },
  defaultVariants: {
    size: "default"
  }
})

export default avatarTheme
