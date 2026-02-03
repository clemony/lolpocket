export default {
  toast: {
    slots: {
      title: 'text-sm font-medium',
      actions: 'flex gap-1.5 shrink-0',
      avatar: 'shrink-0',
      avatarSize: '2xl',
      close: 'p-0 [&_svg]:size-4 size-6 absolute right-3 top-3',
      description: 'text-sm',
      icon: 'shrink-0 size-5',
      progress: 'absolute inset-x-0 bottom-0',
      root: 'relative group max-h-max overflow-hidden backdrop-blur-lg shadow-lg rounded-lg ring h-max p-4 flex gap-2.5 focus:outline-none data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out]! data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]! flex-col',
      wrapper: 'w-full flex-1 flex flex-col'
    },
    variants: {
      color: {
        default: {
          description: 'text-bc',
          icon: 'text-bc',
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bc/60 bg-b1/90 ring-b3/70'
        },

        neutral: {
          description: 'text-nc',
          icon: 'text-nc',
          root: 'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-nc bg-neutral/90 ring-muted-700'
        }
      },
    },
    defaultVariants: {
      color: 'default',
    }
  },

}