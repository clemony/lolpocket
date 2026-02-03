export default {
  user: {
    slots: {
      name: 'font-medium',
      avatar: 'shrink-0',
      description: 'text-muted',
      root: 'relative group/user',
      wrapper: ''
    },
    variants: {
      orientation: {
        horizontal: {
          root: 'flex items-center'
        },
        vertical: {
          root: 'flex flex-col'
        }
      },
      size: {
        '2xl': {
          name: 'text-base',
          description: 'text-base',
          root: 'gap-3'
        },
        '2xs': {
          name: 'text-xs',
          description: 'text-xs',
          root: 'gap-1.5',
          wrapper: 'flex items-center gap-1.5'
        },
        '3xl': {
          name: 'text-lg',
          description: 'text-base',
          root: 'gap-3'
        },
        '3xs': {
          name: 'text-xs',
          description: 'text-xs',
          root: 'gap-1',
          wrapper: 'flex items-center gap-1'
        },
        'lg': {
          name: 'text-sm',
          description: 'text-sm',
          root: 'gap-2.5'
        },
        'md': {
          name: 'text-sm',
          description: 'text-xs',
          root: 'gap-2'
        },
        'sm': {
          name: 'text-xs',
          description: 'text-xs',
          root: 'gap-2'
        },
        'xl': {
          name: 'text-base',
          description: 'text-sm',
          root: 'gap-2.5'
        },
        'xs': {
          name: 'text-xs',
          description: 'text-xs',
          root: 'gap-1.5',
          wrapper: 'flex items-center gap-1.5'
        }
      },
      to: {
        false: {
          name: 'text-highlighted',
          description: ''
        },
        true: {
          name: [
            'text-default peer-hover:text-highlighted peer-focus-visible:text-highlighted',
            'transition-colors'
          ],
          avatar: 'transform transition-transform duration-200 group-hover/user:scale-115 group-has-focus-visible/user:scale-115',
          description: [
            'peer-hover:text-toned peer-focus-visible:text-toned',
            'transition-colors'
          ]
        }
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }

}