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
        field: {
          body: 'text-bc',
          footer: 'text-bc',
          header: 'absolute! p-0 -top-2 left-2 text-bc fieldset-legend font-medium max-h-12 max-w-64 text-sm',
          root: 'ring-none noise border border-b3/80 field-box  shadow-black/5 drop-shadow-sm drop-shadow-black/5 shadow-sm bg-muted text-bc divide-b3 relative overflow-visible'
        },
        muted: {
          footer: 'text-bc',
          root: 'ring-none noise border border-b3/80 field-box  shadow-black/5 drop-shadow-sm drop-shadow-black/5 shadow-sm bg-muted text-bc divide-b3 relative '
        },
        outline: '',
        primary: {
          root: 'ring-b3 shadow-sm bg-primary shadow-black/6 border border-b3  text-bc divide-b3'
        },
        soft: '',
        subtle: '',
      },
      legend: {
        false: '',
        true: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    }
  }
}