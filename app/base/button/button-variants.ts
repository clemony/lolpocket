import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "btn",
      destructive:
        "bg-destructive btn text-destructive shadow-sm hover:bg-destructive/90",
      outline:
        "border btn border-b4/80 bg-background shadow-xs hover:bg-b2/60 hover:text-bc/60",
      secondary: "bg-b3 text-bc shadow-sm hover:bg-b3/80",
      ghost: "btn btn-ghost",
      link: "btn text-n1 underline-offset-4 hover:underline",
    },
    size: {
      default: "btn-md",
      xs: "btn-xs text-1 rounded-md",
      sm: "btn-sm text-2 rounded-lg",
      lg: "btn-lg",
    },
    shape: {
      square: "btn-square",
      circle: "btn-circle !rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
