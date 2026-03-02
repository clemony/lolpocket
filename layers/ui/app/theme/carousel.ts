import { defineUiTheme } from "./defineUiTheme"

export const carouselTheme = defineUiTheme({
  slots: {
    root: "relative focus:outline-none",
    viewport: "overflow-hidden",
    container: "flex items-start",
    item: "min-w-0 shrink-0 basis-full",
    controls: "",
    arrows: "",
    prev: "absolute rounded-full border-0 ring-p3/80 fx-0",
    next: "absolute rounded-full border-0 ring-p3/80 fx-0",
    dots: "absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3",
    dot: [
      "size-3 cursor-pointer rounded-full bg-accented focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      //options.theme.transitions && "transition",
    ],
  },
  variants: {
    orientation: {
      vertical: {
        container: "-mt-4 flex-col",
        item: "pt-4",
        prev: "top-4 left-1/2 -translate-x-1/2 rotate-90 sm:-top-12 rtl:-rotate-90",
        next: "bottom-4 left-1/2 -translate-x-1/2 rotate-90 sm:-bottom-12 rtl:-rotate-90",
      },
      horizontal: {
        container: "-ms-4 flex-row",
        item: "ps-4",
        prev: "start-4 top-1/2 -translate-y-1/2 sm:-start-12",
        next: "end-4 top-1/2 -translate-y-1/2 sm:-end-12",
      },
    },
    active: {
      true: {
        dot: "data-[state=active]:bg-inverted",
      },
    },
  },
})

export default carouselTheme
