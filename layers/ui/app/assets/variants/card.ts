export default {
  card: {
    slots: {
      body: 'p-0 sm:p-0',
      footer: 'p-0 sm:p-0',
      header: 'p-0 sm:p-0',
      root: 'rounded-xl overflow-hidden',
    },
    variants: {
      variant: {
        solid: '',
        outline: '',
        soft: '',
        subtle: '',
        field: {
          body: 'text-pc',
          footer: 'text-pc',
          header: 'absolute! p-0 -top-2 left-2 text-pc fieldset-legend font-medium max-h-12 max-w-64 text-sm',
          root: 'ring-none noise border border-p3/80 field-box  shadow-black/5 drop-shadow-sm drop-shadow-black/5 shadow-sm bg-p1 text-pc divide-p3 relative overflow-visible'
        },
        p0: {
          root: 'ring-p3 shadow-sm bg-p0 shadow-black/6 border border-p3  text-pc divide-p3'
        },
        p1: {
          footer: 'text-pc',
          root: 'ring-none noise border border-p3/80 field-box  shadow-black/5 drop-shadow-sm drop-shadow-black/5 shadow-sm bg-p1 text-pc divide-p3 relative '
        },
      },
      legend: {
        false: '',
        true: '',
      },
    },
    defaultVariants: {
      variant: 'p0',
    }
  }
}