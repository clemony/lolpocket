import { cva } from 'class-variance-authority'

export const navigationMenuTriggerStyle = cva(
  `group btn btn-ghost hover:bg-p2/60 hover:text-pc focus:bg-p2/60 focus:text-pc data-[active]:bg-p2/60! data-[state=open]:bg-p2/60! inline-flex h-9 w-max items-center justify-center gap-1 rounded-lg text-sm font-medium capitalize transition-colors hover:text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50`
)
