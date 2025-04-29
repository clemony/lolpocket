import { cva } from 'class-variance-authority'

export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center gap-1 rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-b2 hover:text-bc focus:bg-b2 focus:text-bc focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-b2/50 data-[state=open]:bg-b2/50',
)
