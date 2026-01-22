import { cva } from "class-variance-authority"

export const navigationMenuTriggerStyle = cva(
  `group btn inline-flex h-9 w-max items-center justify-center gap-1 rounded-lg text-sm font-medium capitalize btn-ghost transition-colors hover:bg-b2/60 hover:text-sm hover:text-bc focus:bg-b2/60 focus:text-bc focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-b2/60! data-[state=open]:bg-b2/60!`
)
