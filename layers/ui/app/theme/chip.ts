import { defineUiTheme } from "./defineUiTheme"

export const chipTheme = defineUiTheme({
  slots: {
    base: "z-2 flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap text-n0 ring-0",
    root: "relative inline-flex shrink-0 items-center justify-center"
  },
  variants: {
    color: {
      error: "bg-error",
      info: "bg-info",
      insp: "ring-insp-content bg-insp",
      neutral: "bg-neutral! text-nc!",
      p0: "bg-p0",
      p1: "bg-p1",
      p2: "bg-p2",
      p3: "bg-p3",
      p4: "bg-p5",
      transparent: "bg-transparent ring-transparent!",
      success: "bg-success",
      warning: "bg-warning",
      legendary: "bg-legendary",
      dom: "status bg-dom",
      win: "status bg-win",
      illuminate: "animateed-opal",

      diminuendo: "bg-diminuendo",
      flow: "bg-flow",
      contaminate: "bg-contaminate",
      whimsy: "bg-whimsy",
      cask: "bg-cask",
      onslaught: "bg-onslaught",
      spark: "bg-spark",
      encore: "bg-encore",
      legends: "bg-legends"
    },
    inset: {
      false: {
        base: "ring-0"
      },
      true: {
        base: "ring-1 ring-p0"
      }
    },
    position: {
      "bottom-left": "bottom-0 left-0",
      "bottom-right": "right-0 bottom-0",
      "top-left": "top-0 left-0",
      "top-right": "top-0 right-0"
    },
    size: {
      "4xs": "h-[3px] min-w-[3px] text-[3px]",
      "3xs": "h-[4px] min-w-[4px] text-[4px]",
      "2xs": "h-[5px] min-w-[5px] text-[5px]",
      xs: "h-[6px] min-w-[6px] text-[6px]",
      sm: "h-[7px] min-w-[7px] text-[7px]",
      md: "h-[8px] min-w-[8px] text-[7px]",
      lg: "h-[9px] min-w-[9px] text-[8px]",
      xl: "h-[10px] min-w-[10px] text-[8px]",
      "2xl": "h-[11px] min-w-[11px] text-[8px]! font-bold",
      "3xl": "h-[12px] min-w-[12px] text-[8px] font-bold"
    },
    standalone: {
      false: "absolute"
    }
  },
  compoundVariants: [
    {
      class:
        "translate-x-[calc(50%-0px)] -translate-y-[calc(50%-0px)] transform",
      inset: false,
      position: "top-right"
    },
    {
      class: "translate-1/2 transform",
      inset: false,
      position: "bottom-right"
    },
    {
      class: "-translate-1/2 transform",
      inset: false,
      position: "top-left"
    },
    {
      class: "-translate-x-1/2 translate-y-1/2 transform",
      inset: false,
      position: "bottom-left"
    },
    {
      class: "ring-2",
      inset: true,
      size: ["md"]
    }
  ],
  defaultVariants: {
    color: "p0",
    position: "top-right",
    size: "md"
  }
})

export default chipTheme
