import { defineUiTheme } from "./defineUiTheme"

export const tooltipTheme = defineUiTheme({
  slots: {
    arrow:
      "fill-neutral/85 stroke-n5/60 stroke-1 group-data-[side=bottom]/tt:group-data-[align=start]/tt:-translate-x-4",
    content: [
      "group/tt pointer-events-auto z-[120] inline-flex h-7.5 min-h-7.5 origin-(--reka-tooltip-content-transform-origin) cursor-default items-center gap-1 rounded-lg px-3 py-1.5 align-baseline text-sm shadow-md drop-shadow-none transition-[transform,opacity] duration-150 ease-out will-change-[transform,opacity] select-none data-[side=bottom]:translate-y-0.5 data-[side=left]:-translate-x-0.5 data-[side=right]:translate-x-0.5 data-[side=top]:-translate-y-0.5 data-[state=closed]:scale-98 data-[state=closed]:opacity-0 motion-reduce:transition-none"
    ],
    kbds: "hidden shrink-0 items-center gap-0.5 not-first-of-type:before:me-0.5 not-first-of-type:before:content-['·'] lg:inline-flex",
    kbdsSize: "sm",
    text: "truncate",
    trailingIcon: "ml-2 inline size-3.5 translate-y-0.75 text-nc"
  },
  variants: {
    color: {
      neutral: {
        arrow: "",
        content:
          "border-n1 bg-neutral/92 font-medium text-nc ring-n5/60 inset-shadow-white/10 backdrop-blur-sm"
      },
      primary: {
        arrow: "fill-p0/90",
        content:
          "border-p3 bg-p0/96 font-medium text-pc ring-p0/50 backdrop-blur-sm"
      }
    },
    size: {
      sm: {
        arrow: "in-data-[side=left]:scale-140 in-data-[side=right]:scale-140",
        content:
          "rounded-lg px-3 py-0.75 text-[0.9rem]" /*  data-[side=left]:rounded-r-[0.7rem] data-[side=right]:rounded-l-[0.7rem]  */
      },
      md: "",
      lg: "max-w-80"
    },
    align: {
      offset: "translate-x-[calc(100%-1.5rem)]"
    }
  },
  defaultVariants: {
    color: "neutral",
    size: "sm"
  }
})

export default tooltipTheme
