import { defineUiTheme } from "./defineUiTheme"

export const tooltipTheme = defineUiTheme({
  slots: {
    arrow:
      "fill-n1/90 stroke-[color-mix(in_oklab,var(--color-p5)_10%,var(--color-n5)_40%))] stroke-[0.75] group-data-[side=bottom]/tt:group-data-[align=start]/tt:-translate-x-4 group-data-[side=left]/tt:scale-x-170!",
    content: () => [
      "group/tt pointer-events-auto isolate z-[677] inline-flex h-7.5 min-h-7.5 origin-(--reka-tooltip-content-transform-origin) cursor-default items-center gap-1 rounded-lg bg-n1/90 px-3 py-1.5 align-baseline text-sm font-medium text-nc shadow-md ring-n5/60 inset-shadow-white/10 drop-shadow-none backdrop-blur-md transition-[transform,opacity] duration-110 ease-out will-change-[transform,opacity] select-none motion-reduce:transition-none",
      /*       "transition-all! duration-200! ease-spring-soft!",
      "translate-y-5 data-[state=closed]:data-[side=bottom]:translate-y-5 data-[state=delayed-open]:data-[side=bottom]:translate-y-0" */

      "open:left:animate-shift-toward-left-enter closed:left:animate-shift-toward-left-exit",
      "open:right:animate-shift-toward-right-enter closed:right:animate-shift-toward-right-exit",
      "open:top:animate-shift-toward-top-enter closed:top:animate-shift-toward-top-exit",
      "open:bottom:animate-shift-toward-bottom-enter closed:bottom:animate-shift-toward-bottom-exit",
      "motion-reduce:animate-none motion-reduce:transition-none",
    ],
    kbds: "hidden shrink-0 items-center gap-0.5 not-first-of-type:before:me-0.5 not-first-of-type:before:content-['·'] lg:inline-flex",
    kbdsSize: "sm",
    text: "truncate",
    trailingIcon: "ml-2 inline size-3.5 translate-y-0.75 text-nc",
  },
  variants: {
    align: {
      offset: "translate-x-[calc(100%-1.5rem)]",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "sm",
  },
})

export default tooltipTheme
