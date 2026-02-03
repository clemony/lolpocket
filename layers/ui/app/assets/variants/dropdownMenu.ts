export default {
  dropdownMenu: {
    slots: {
      arrow: 'fill-default',
      content: 'min-w-32 bg-default/94 backdrop-blur-md shadow-lg rounded-lg ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col select-none',
      group: 'p-1 isolate',
      item: 'group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75',
      itemDescription: 'truncate text-muted',
      itemLabel: 'truncate font-medium',
      itemLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
      itemLeadingAvatar: 'shrink-0',
      itemLeadingAvatarSize: '',
      itemLeadingIcon: 'shrink-0',
      itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
      itemTrailingIcon: 'shrink-0',
      itemTrailingKbds: 'hidden lg:inline-flex text-xs items-center shrink-0 text-bc/50 font-mono',
      itemTrailingKbdsSize: '',
      itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
      label: 'w-full flex items-center font-semibold text-highlighted',
    },
    variants: {
      color: {
        error: '',
        info: '',
        muted: '',
        neutral: '',
        secondary: '',
        success: '',
        warning: ''
      },
      active: {
        false: {
          item: [
            'text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50',
            'transition-colors before:transition-colors'
          ],
          itemLeadingIcon: [
            'text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default',
            'transition-colors'
          ]
        },
        true: {
          item: 'text-highlighted before:bg-elevated',
          itemLeadingIcon: 'text-default'
        }
      },
      loading: {
        true: {
          itemLeadingIcon: 'animate-spin'
        }
      },
      size: {
        lg: {
          item: 'p-2 text-sm gap-2',
          itemLeadingAvatarSize: '2xs',
          itemLeadingIcon: 'size-5',
          itemTrailingIcon: 'size-5',
          itemTrailingKbds: 'gap-1',
          itemTrailingKbdsSize: 'md',
          label: 'p-2 text-sm gap-2'
        },
        md: {
          item: 'p-1.5 text-sm gap-1.5',
          itemLeadingAvatarSize: 'xs',
          itemLeadingIcon: 'size-4',
          itemTrailingIcon: 'size-4',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'md',
          label: 'p-1.5 text-sm gap-1.5'
        },
        sm: {
          item: 'p-1.5 text-xs gap-1.5',
          itemLeadingAvatarSize: '2xs',
          itemLeadingIcon: 'size-4',
          itemTrailingIcon: 'size-4',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'sm',
          label: 'p-1.5 text-xs gap-1.5'
        },
        xl: {
          item: 'p-2 text-base gap-2',
          itemLeadingAvatarSize: 'xs',
          itemLeadingIcon: 'size-6',
          itemTrailingIcon: 'size-6',
          itemTrailingKbds: 'gap-1',
          itemTrailingKbdsSize: 'lg',
          label: 'p-2 text-base gap-2'
        },
        xs: {
          item: 'p-1 text-xs gap-1',
          itemLeadingAvatarSize: '2xs',
          itemLeadingIcon: 'size-4',
          itemTrailingIcon: 'size-4',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'sm',
          label: 'p-1 text-xs gap-1'
        }
      }
    },
    compoundVariants: [
      {
        color: 'muted',
        active: false,
        class: {
          item: 'text-muted data-highlighted:text-muted data-highlighted:before:bg-muted/10 data-[state=open]:before:bg-muted/10',
          itemLeadingIcon: 'text-muted/75 group-data-highlighted:text-muted group-data-[state=open]:text-muted'
        }
      },
      {
        color: 'muted',
        active: true,
        class: {
          item: 'text-muted before:bg-muted/10',
          itemLeadingIcon: 'text-muted'
        }
      }
    ],
    defaultVariants: {
      size: 'md'
    }
  }

}