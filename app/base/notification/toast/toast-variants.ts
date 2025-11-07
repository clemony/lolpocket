import type { VariantProps } from 'class-variance-authority'
import type { ToastRootProps } from 'reka-ui'
import { cva } from 'class-variance-authority'

export { toast, useToast } from './use-toast'

export const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--reka-toast-swipe-end-x] data-[swipe=move]:translate-x-[--reka-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'border-b3/80 border bg-b1/90 backdrop-blur text-bc',
        destructive:
                    'destructive group border-destructive bg-destructive text-destructive-bc',
      },
    },
  },
)

type ToastVariants = VariantProps<typeof toastVariants>

export interface ToastProps extends ToastRootProps {
  class?: HTMLAttributes['class']
  onOpenChange?: ((value: boolean) => void) | undefined
  variant?: ToastVariants['variant']
}
