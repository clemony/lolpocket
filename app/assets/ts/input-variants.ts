import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

// One master style definition
// export
const inputVariants = cva(
  'data-[state=active]:btn-active text-start data-[state=open]:btn-active has-[span:empty]:gap-0 ',
  {
    variants: {
      variant: {
        'default': '',
        'base': 'btn bg-transparent hover:bg-transparent fx-0 shadow-0  border-0',
        'btn': 'btn  bg-tint-b2/60 border-b2',
        'neutral': 'btn-neutral btn',
        'outline': 'btn btn-outline  border-b3',
        'secondary': 'bg-b3 text-bc shadow-sm hover:bg-b3/80',
        'ghost': 'btn btn-ghost',
        'link': 'btn text-n1 underline-offset-4 hover:underline',
        'shadow':
          'btn shadow-xs shadow-black/6 hover:shadow-black-2 drop-shadow-black/2 drop-shadow-xs hover:inset-shadow-xs hover:drop-shadow-none hover:inset-shadow-black/6 border-b3/80 bg-b1 btn-extras hover:bg-tint-b2/20 noise-sm [&.btn-active]:bg-tint-b2/20 ',
        'label': 'font-medium opacity-60',
        'disabled': '',
        'shadow-outline': 'btn btn-shadow ',
      },
      size: {
        default: '',
        base: '',
        xs: 'btn-xs h-8 text-xxs rounded-md',
        sm: 'btn-sm h-9 text-xs rounded-lg',
        md: 'btn-md h-10',
        lg: 'btn-lg',
        xl: 'btn-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
/*
export type InputVariants = VariantProps<typeof inputVariants> */
