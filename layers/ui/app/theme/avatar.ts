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
      "4": {
        root: "size-4 rounded-full text-[8px]"
      },
      "5": {
        root: "size-5 rounded-full text-[10px]"
      },
      "6": {
        root: "size-6 rounded-full text-xs"
      },
      "7": {
        root: "size-7 rounded-full text-sm"
      },
      "8": {
        root: "size-8 rounded-full text-base"
      },
      "9": {
        root: "size-9 rounded-full text-lg"
      },
      "10": {
        root: "size-10 rounded-full text-xl"
      },
      "11": {
        root: "size-11 rounded-full text-[22px]",
        image: "shadow-sm drop-shadow-xs drop-shadow-black/5"
      },
      "12": {
        root: "size-12 rounded-full text-2xl",
        image: "shadow-sm drop-shadow-sm drop-shadow-black/5"
      },
      "13": {
        root: "size-13 rounded-full text-2xl",
        image: "shadow-sm drop-shadow-sm drop-shadow-black/5"
      },
      "14": {
        root: "size-14 rounded-full text-2xl",
        image: "shadow-sm drop-shadow-sm drop-shadow-black/5"
      },
      "15": {
        root: "size-15 rounded-full text-2xl",
        image: "shadow-sm drop-shadow-sm drop-shadow-black/5"
      },
      "16": {
        root: "size-16 rounded-full text-2xl",
        image: "shadow-sm drop-shadow-sm drop-shadow-black/5"
      },
      default: {}
    }
  },
  defaultVariants: {
    size: "default"
  }
})

export default avatarTheme
