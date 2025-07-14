import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const badgeVariants = cva(
  "inline-flex badge text-2 items-center rounded-lg  w-fit leading-4 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-n1 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-b3/50",
        n1: "bg-n1 text-nc **:text-nc badge-neutral ",
        b2: "bg-b2 text-bc",
        outline: "text-bc  border-b4/70 shadow-xs shadow-black/4",
        shortcut: "opacity-60",
        ghost: "badge-ghost",
      },

      size: {
        xs: "badge-xs",
        sm: "badge-sm",
        default: "px-2.5 py-1 ",
        lg: "badge-lg",
        xl: "badge-xl rounded-field",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
