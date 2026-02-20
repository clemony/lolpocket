import { defineUiTheme } from "./defineUiTheme"

export const avatarTheme = defineUiTheme({
  slots: {
    root: "inline-flex shrink-0 items-center justify-center rounded-full bg-elevated align-middle select-none",
    image: "size-full rounded-[inherit] object-cover",
    fallback: "truncate leading-none font-medium text-muted",
    icon: "shrink-0 text-muted",
  },
  variants: {
    size: {
      "3xs": {
        root: "size-4 text-[8px]",
        image: "size-4",
      },
      "2xs": {
        root: "size-5 text-[10px]",
        image: "size-5",
      },
      xs: {
        root: "size-6 text-xs",
        image: "size-6",
      },
      sm: {
        root: "size-7 text-sm",
        image: "size-7",
      },
      md: {
        root: "size-8 text-base",
        image: "size-8",
      },
      lg: {
        root: "size-9 text-lg",
        image: "size-9",
      },
      xl: {
        root: "size-10 text-xl",
        image: "size-10",
      },
      "2xl": {
        root: "size-11 text-[22px]",
        image: "size-11",
      },
      "3xl": {
        root: "size-12 text-2xl",
        image: "size-12",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export default avatarTheme
