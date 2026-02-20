import { defineUiTheme } from "./defineUiTheme"

export const tooltipTheme = defineUiTheme({
  slots: {
    arrow: "",
    content: [
      "ease-none pointer-events-auto inline-flex h-6 origin-(--reka-tooltip-content-transform-origin) animate-none! cursor-default items-center gap-1 rounded-lg px-2.5 py-1 align-baseline text-xs shadow-md ring ring-default drop-shadow-sm transition-none! duration-0! select-none",
    ],
    kbds: "hidden shrink-0 items-center gap-0.5 not-first-of-type:before:me-0.5 not-first-of-type:before:content-['·'] lg:inline-flex",
    kbdsSize: "sm",
    text: "truncate",
    trailingIcon: "",
  },
  variants: {
    color: {
      neutral: {
        arrow: "fill-neutral/85",
        content:
          "border-tint-neutral/30 bg-neutral/86 font-medium text-nc ring-neutral inset-shadow-white/10 backdrop-blur-md",
      },
      primary: {
        arrow: "fill-p0/90",
        content:
          "border-p3 bg-p0/90 font-medium text-pc ring-p0/50 backdrop-blur-md",
      },
    },
    size: {
      lg: "max-w-80",
      md: "",
      sm: {
        arrow: "in-data-[side=left]:scale-140 in-data-[side=right]:scale-140",
        content:
          "h-6 px-2 py-0.75 text-[0.9rem]" /*  data-[side=left]:rounded-r-[0.7rem] data-[side=right]:rounded-l-[0.7rem]  */,
      },
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "sm",
  },
})

export default tooltipTheme
