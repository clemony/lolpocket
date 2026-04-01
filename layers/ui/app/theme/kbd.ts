import { defineUiTheme } from "./defineUiTheme"

export const kbdTheme = defineUiTheme({
  variants: {
    color: {
      default: "",
      neutral: "",
      n3: "",
      p4: ""
    },
    variant: {
      solid: "",
      outline: "",
      soft: "",
      subtle: "",
      ghost: ""
    },
    size: {
      sm: "h-4 min-w-[16px] text-[11px] [&[square]]:w-4 [&[square]]:min-w-4",
      md: "h-5 w-fit min-w-[20px] text-sm [&[square]]:w-5 [&[square]]:min-w-5",
      lg: "h-6 w-fit min-w-[24px] rounded-[4px] text-[12px] [&[square]]:w-6 [&[square]]:min-w-6",
      xl: "h-7 w-fit min-w-6 text-[12px] [&[square]]:w-7 [&[square]]:min-w-6"
    }
  },
  base: "inline-flex w-fit shrink items-center justify-center rounded-sm px-1 align-baseline font-sans font-medium uppercase [&[square]]:aspect-square [&[square]]:gap-0 [&[square]]:p-0",
  compoundVariants: [
    {
      color: "default",
      variant: "solid",
      class: "noise bg-p1 text-n3 inset-ring inset-ring-p4/80"
    },
    {
      color: "default",
      variant: "soft",
      class:
        "bg-p0 text-n3 shadow-xs inset-ring shadow-black/6 inset-ring-p3/80"
    },
    {
      color: "default",
      variant: "ghost",
      size: "sm",
      class: "mx-px bg-transparent text-n4"
    },
    {
      color: "default",
      variant: "ghost",
      size: "md",
      class: "gap-0 bg-transparent px-0 !text-n4/80"
    },
    {
      color: "default",
      variant: "outline",
      class:
        "border-r border-b border-r-p3/60 border-b-p3/80 text-pc ring ring-p3"
    },
    {
      color: "p4",
      variant: "outline",
      class: "text-pc ring ring-p4"
    },
    {
      color: "default",
      variant: "soft",
      class: "bg-p1/10 text-p1"
    },
    {
      color: "default",
      variant: "subtle",
      class: "bg-p1/10 text-p1 ring ring-p1/25 ring-inset"
    },
    {
      color: "neutral",
      variant: "solid",
      class: "bg-n0 text-nc"
    },
    {
      color: "neutral",
      variant: "ghost",
      class: "text-nc/70"
    },
    {
      color: "neutral",
      variant: "outline",
      class:
        "border-r border-b border-nc border-r-n5 border-b-n4 bg-transparent text-nc ring ring-p4 ring-inset"
    },
    {
      color: "neutral",
      variant: "soft",
      class: "bg-elevated text-default"
    },
    {
      color: "neutral",
      variant: "subtle",
      class: "bg-elevated text-default ring ring-accented ring-inset"
    },
    {
      color: "n3",
      variant: "solid",
      class: "bg-n3 text-nc ring ring-n4 ring-inset"
    }
  ],
  defaultVariants: {
    color: "default",
    variant: "outline",
    size: "md"
  }
})

export default kbdTheme
