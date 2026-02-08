export default {
  chip: {
    slots: {
      base: 'rounded-full ring-none status dst flex items-center shrink-0 justify-center text-n0 font-medium whitespace-nowrap',
      root: 'relative inline-flex items-center justify-center shrink-0'
    },
    variants: {
      color: {
        error: 'bg-error',
        info: 'bg-info',
        insp: 'bg-insp ring-insp-content',
        neutral: 'bg-n0',
        p0: 'bg-p0',
        p1: 'bg-p1',
        p2: 'bg-p2',
        p3: 'bg-p3  ring-p2',
        success: 'bg-success',
        warning: 'bg-warning'
      },
      inset: {
        false: ''
      },
      position: {
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0'
      },
      size: {
        '2xl': 'h-[11px] min-w-[11px] text-[11px]',
        '2xs': 'h-[5px] min-w-[5px] text-[5px]',
        '3xl': 'h-[12px] min-w-[12px] text-[12px]',
        '3xs': 'h-[4px] min-w-[4px] text-[4px]',
        'dot': 'size-[5px]',
        'lg': 'h-[9px] min-w-[9px] text-[9px]',
        'md': 'h-[8px] min-w-[8px] text-[8px]',
        'sm': 'h-[7px] min-w-[7px] text-[7px]',
        'xl': 'h-[10px] min-w-[10px] text-[10px]',
        'xs': 'h-[6px] min-w-[6px] text-[6px]'
      },
      standalone: {
        false: 'absolute',
      }
    },
    compoundVariants: [
      {
        class: '-translate-y-1/2 translate-x-1/2 transform',
        inset: false,
        position: 'top-right'
      },
      {
        class: 'translate-y-1/2 translate-x-1/2 transform',
        inset: false,
        position: 'bottom-right'
      },
      {
        class: '-translate-y-1/2 -translate-x-1/2 transform',
        inset: false,
        position: 'top-left'
      },
      {
        class: 'translate-y-1/2 -translate-x-1/2 transform',
        inset: false,
        position: 'bottom-left'
      }
    ],
    defaultVariants: {
      color: 'p0',
      position: 'top-right',
      size: 'md'
    }
  }
}