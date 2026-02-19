export default {
  slots: {
    arrow: "",
    content: [
      "inline-flex align-baseline items-center gap-1 cursor-default drop-shadow-sm transition-none! duration-0! ease-none shadow-md rounded-lg ring ring-default h-6 px-2.5 py-1 text-xs select-none animate-none! origin-(--reka-tooltip-content-transform-origin) pointer-events-auto ",
    ],
    kbds: "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
    kbdsSize: "sm",
    text: "truncate",
    trailingIcon: "",
  },
  variants: {
    color: {
      neutral: {
        arrow: "fill-neutral/85",
        content:
          " border-tint-neutral/30  bg-neutral/86 font-medium text-nc  backdrop-blur-md  ring-neutral inset-shadow-white/10",
      },
      primary: {
        arrow: "fill-p0/90",
        content:
          " border-p3  bg-p0/90 font-medium text-pc  backdrop-blur-md  ring-p0/50  ",
      },
    },
    size: {
      lg: "max-w-80",
      md: "",
      sm: {
        arrow: "in-data-[side=left]:scale-140 in-data-[side=right]:scale-140",
        content:
          " px-2 py-0.75 text-[0.9rem] h-6 " /*  data-[side=left]:rounded-r-[0.7rem] data-[side=right]:rounded-l-[0.7rem]  */,
      },
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "sm",
  },
}
