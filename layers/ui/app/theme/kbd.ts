import { defineUiTheme } from "./defineUiTheme"

export const kbdTheme = defineUiTheme({
  variants: {
    color: {
      base: "",
      neutral: "",
      n3: "",
      p4: ""
    },
    variant: {
      solid: "",
      outline: "text-pc",
      soft: "",
      subtle: "",
      ghost: ""
    },
    size: {
      sm: "h-4 min-w-[16px] text-[11px] [&[square]]:w-4 [&[square]]:min-w-4",
      md: "h-5 w-fit min-w-[20px] rounded-md text-sm [&[square]]:w-5 [&[square]]:min-w-5",
      lg: "h-6 w-fit min-w-[24px] rounded-md text-[12px] [&[square]]:w-6 [&[square]]:min-w-6",
      xl: "h-7 w-fit min-w-6 rounded-md text-[12px] [&[square]]:w-7 [&[square]]:min-w-6"
    }
  },
  base: "inline-flex w-fit shrink items-center justify-center rounded-sm px-1 align-baseline font-sans font-medium text-pc uppercase ring-p4 [&[square]]:aspect-square [&[square]]:gap-0 [&[square]]:p-0",
  compoundVariants: [
    {
      color: "base",
      variant: "solid",
      class: "noise bg-p1 text-n3 ring ring-p4/80"
    },
    {
      color: "base",
      variant: "soft",
      class: "bg-p1/10 text-n3 shadow-xs ring shadow-black/6 ring-p3/80"
    },
    {
      color: "base",
      variant: "ghost",
      size: "md",
      class: "gap-0 bg-transparent px-0 text-pc/50 ring-transparent"
    },
    {
      color: "base",
      variant: "outline",
      class: "bg-transparent text-pc/70 ring ring-p4"
    },
    {
      color: "neutral",
      variant: "solid",
      class: "bg-n0 text-nc"
    },
    {
      color: "neutral",
      variant: "subtle",
      class: "bg-transparent text-nc/70 ring-transparent"
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
      class: "bg-elevated text-base"
    },
    {
      color: "n3",
      variant: "solid",
      class: "bg-n3 text-nc ring ring-n4 ring-inset"
    }
  ],
  baseVariants: {
    color: "base",
    variant: "outline",
    size: "md"
  }
})

export default kbdTheme
