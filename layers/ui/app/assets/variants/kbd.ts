export default {
  kbd: {
    variants: {
      color: {
        default: '',
        neutral: '',
        p1: '',
        p2: '',
      },
      variant: {
        solid: '',
        outline: '',
        soft: '',
        subtle: ''
      },
      size: {
        lg: 'h-6 min-w-[24px] text-[12px]',
        md: 'h-5 min-w-[20px] text-[11px]',
        sm: 'h-4 min-w-[16px] text-[10px]'
      },
      square: {
        false: '',
        true: ''
      },
    },
    base: 'inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase',
    compoundVariants: [
      {
        color: 'p1',
        variant: 'solid',
        class: 'text-n0 bg-p1'
      },
      {
        color: 'p1',
        variant: 'outline',
        class: 'ring ring-inset ring-p1/50 text-p1'
      },
      {
        color: 'p1',
        variant: 'soft',
        class: 'text-p1 bg-p1/10'
      },
      {
        color: 'p1',
        variant: 'subtle',
        class: 'text-p1 ring ring-inset ring-p1/25 bg-p1/10'
      },
      {
        color: 'neutral',
        variant: 'solid',
        class: 'text-n0 bg-n0'
      },
      {
        color: 'neutral',
        variant: 'outline',
        class: 'ring ring-inset ring-accented text-default bg-default'
      },
      {
        color: 'neutral',
        variant: 'soft',
        class: 'text-default bg-elevated'
      },
      {
        color: 'neutral',
        variant: 'subtle',
        class: 'ring ring-inset ring-accented text-default bg-elevated'
      },
      {
        class: 'size-4 aspect-square',
        size: 'sm',
        square: 'true',
      },
      {
        class: 'size-5 aspect-square',
        size: 'md',
        square: 'true',
      },
      {
        class: 'size-6 aspect-square',
        size: 'lg',
        square: 'true',
      },
    ],
    defaultVariants: {
      color: 'neutral',
      variant: 'outline',
      size: 'md',
      square: 'true'
    }
  }

}