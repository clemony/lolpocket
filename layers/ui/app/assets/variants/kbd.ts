export default {
  kbd: {
    variants: {
      color: {
        default: '',
        muted: '',
        neutral: '',
        secondary: '',
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
        color: 'muted',
        variant: 'solid',
        class: 'text-inverted bg-muted'
      },
      {
        color: 'muted',
        variant: 'outline',
        class: 'ring ring-inset ring-muted/50 text-muted'
      },
      {
        color: 'muted',
        variant: 'soft',
        class: 'text-muted bg-muted/10'
      },
      {
        color: 'muted',
        variant: 'subtle',
        class: 'text-muted ring ring-inset ring-muted/25 bg-muted/10'
      },
      {
        color: 'neutral',
        variant: 'solid',
        class: 'text-inverted bg-inverted'
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