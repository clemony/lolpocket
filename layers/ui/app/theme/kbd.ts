import { defineUiTheme } from "./defineUiTheme"

export const kbdTheme = defineUiTheme({
  variants: {
    color: {
      default: "",
      neutral: "",
      p1: "",
      p2: "",
    },
    variant: {
      solid: "",
      outline: "",
      soft: "",
      subtle: "",
      ghost: "",
    },
    size: {
      lg: "min-w-unset h-6 text-[12px]",
      md: "min-w-unset h-5 text-[11px]",
      sm: "min-w-unset h-4 text-[10px]",
    },
    square: {
      false: "px-1",
      true: "aspect-square gap-0 p-0",
    },
  },
  base: "inline-flex items-center justify-center rounded-sm p-0 font-sans font-medium uppercase",
  compoundVariants: [
    {
      color: "p1",
      variant: "solid",
      class: "bg-p1 text-n0",
    },
    {
      color: "p1",
      variant: "ghost",
      class: "bg-transparent text-n4",
    },
    {
      color: "p1",
      variant: "outline",
      class: "text-p1 ring ring-p1/50 ring-inset",
    },
    {
      color: "p1",
      variant: "soft",
      class: "bg-p1/10 text-p1",
    },
    {
      color: "p1",
      variant: "subtle",
      class: "bg-p1/10 text-p1 ring ring-p1/25 ring-inset",
    },
    {
      color: "neutral",
      variant: "solid",
      class: "bg-n0 text-n0",
    },
    {
      color: "neutral",
      variant: "outline",
      class: "bg-n0 text-nc ring ring-p5 ring-inset",
    },
    {
      color: "neutral",
      variant: "soft",
      class: "bg-elevated text-default",
    },
    {
      color: "neutral",
      variant: "subtle",
      class: "bg-elevated text-default ring ring-accented ring-inset",
    },
    {
      class:
        "grid aspect-square size-4! max-h-4 min-h-4 max-w-4 min-w-4 shrink-0 place-items-center gap-0 overflow-hidden p-0",
      size: "sm",
      square: true,
    },
    {
      class: "aspect-square size-5",
      size: "md",
      square: true,
    },
    {
      class: "aspect-square size-6",
      size: "lg",
      square: true,
    },
  ],
  defaultVariants: {
    color: "p1",
    variant: "outline",
    size: "md",
    square: "true",
  },
})

export default kbdTheme
