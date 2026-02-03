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
        color: 'muted',
        variant: 'pill',
        class: {
          indicator: 'bg-primary border-b3',
          list: 'bg-muted noise border-b3/80 ',
          trigger: 'data-[state=active]:text-bc focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-muted  '
        }
      },
      {
        color: 'neutral',
        variant: 'pill',
        class: {
          indicator: 'bg-neutral/90 border-nc/60 noise',
          list: 'bg-muted noise border-b3/80 ',
          trigger: 'text-bc focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-muted data-[state=active]:text-nc active:hover:**:text-bc data-[state=active]:**:text-nc'
        }
      },
    ],
    defaultVariants: {
      color: 'muted',
      variant: 'pill'
    }
  },
}