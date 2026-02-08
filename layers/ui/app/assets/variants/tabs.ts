export default {
  tabs: {
    slots: {
      indicator: ' ',
      list: 'rounded-xl ',
      trigger: 'cursor-pointer text-2',
    },
    variants: {
      variant: {
        pill: {
          indicator: 'rounded-lg shadow-sm shadow-black/6 border',
          list: 'border inset-shadow-xs inset-shadow-black/4',
          trigger: 'grow'
        },
      },
      rounded: {
        true: {
          trigger: 'rounded-full'
        }
      }
    },
    compoundVariants: [
      {
        color: 'p1',
        variant: 'pill',
        class: {
          indicator: 'bg-p0 border-p3',
          list: 'bg-p1 noise border-p3/80 ',
          trigger: 'data-[state=active]:text-pc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1  '
        }
      },
      {
        color: 'neutral',
        variant: 'pill',
        class: {
          indicator: 'bg-neutral/90 border-nc/60 noise',
          list: 'bg-p1 noise border-p3/80 ',
          trigger: 'text-pc focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-nc active:hover:**:text-pc data-[state=active]:**:text-nc'
        }
      },
    ],
    defaultVariants: {
      color: 'p1',
      variant: 'pill'
    }
  },
}