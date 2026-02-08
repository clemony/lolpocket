export default {
  commandPalette: {
    slots: {
      back: 'p-0',
      close: '',
      content: 'relative overflow-hidden flex flex-col',
      empty: 'text-center text-n5',
      footer: 'p-1',
      group: 'p-1 isolate',
      input: '',
      item: 'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75',
      itemDescription: 'truncate text-n5',
      itemLabel: 'truncate space-x-1 text-n4',
      itemLabelBase: 'text-pc [&>mark]:text-nc [&>mark]:bg-n0',
      itemLabelPrefix: 'text-p3',
      itemLabelSuffix: 'text-n4 [&>mark]:text-nc [&>mark]:bg-n0',
      itemLeadingAvatar: 'shrink-0',
      itemLeadingAvatarSize: '',
      itemLeadingChip: 'shrink-0',
      itemLeadingChipSize: '',
      itemLeadingIcon: 'shrink-0 ',
      itemTrailing: 'ms-auto inline-flex items-center',
      itemTrailingIcon: 'shrink-0',
      itemTrailingKbds: 'hidden lg:inline-flex items-center shrink-0',
      itemTrailingKbdsSize: '',
      itemTrailingpcIcon: 'shrink-0 text-n4 hidden group-data-highlighted:inline-flex',
      itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
      label: 'font-semibold text-pc',
      root: 'flex flex-col min-h-0 min-w-0 divide-y divide-p3',
      viewport: 'relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none'
    },
    variants: {
      active: {
        false: {
          item: [
            'text-p3 data-highlighted:not-data-disabled:text-pc data-highlighted:not-data-disabled:before:bg-p3/50',
            'transition-colors before:transition-colors'
          ],
          itemLeadingIcon: [
            'text-n4 group-data-highlighted:not-group-data-disabled:text-p3',
            'transition-colors'
          ]
        },
        true: {
          item: 'text-pc before:bg-p3',
          itemLeadingIcon: 'text-p3'
        }
      },
      loading: {
        true: {
          itemLeadingIcon: 'animate-spin'
        }
      },
      size: {
        lg: {
          empty: 'py-7 text-sm',
          input: '[&>input]:h-13',
          item: 'p-2 text-sm gap-2',
          itemLeadingAvatarSize: '2xs',
          itemLeadingChip: 'size-5',
          itemLeadingChipSize: 'md',
          itemLeadingIcon: 'size-5',
          itemTrailing: 'gap-2',
          itemTrailingIcon: 'size-5',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'md',
          itemTrailingpcIcon: 'size-5',
          label: 'p-2 text-xs gap-2'
        },
        md: {
          empty: 'py-6 text-sm',
          input: '[&>input]:h-12 [&_svg]:size-4! [&_svg]:text-n4',
          item: 'p-1.5 text-sm gap-1.5',
          itemLeadingAvatarSize: '2xs',
          itemLeadingChip: 'size-5',
          itemLeadingChipSize: 'md',
          itemLeadingIcon: 'size-4',
          itemTrailing: 'gap-1.5',
          itemTrailingIcon: 'size-4',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'md',
          itemTrailingpcIcon: 'size-5',
          label: 'p-1.5 text-xs gap-1.5',
          root: '[&_svg]:size-4! [&_svg]:text-n4'
        },
        sm: {
          empty: 'py-4 text-xs',
          input: '[&>input]:h-11',
          item: 'p-1.5 text-xs gap-1.5',
          itemLeadingAvatarSize: '3xs',
          itemLeadingChip: 'size-4',
          itemLeadingChipSize: 'sm',
          itemLeadingIcon: 'size-4',
          itemTrailing: 'gap-1.5',
          itemTrailingIcon: 'size-4',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'sm',
          itemTrailingpcIcon: 'size-4',
          label: 'p-1.5 text-[10px]/3 gap-1.5'
        },
        xl: {
          empty: 'py-8 text-base',
          input: '[&>input]:h-14',
          item: 'p-2 text-base gap-2',
          itemLeadingAvatarSize: 'xs',
          itemLeadingChip: 'size-6',
          itemLeadingChipSize: 'lg',
          itemLeadingIcon: 'size-6',
          itemTrailing: 'gap-2',
          itemTrailingIcon: 'size-6',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'lg',
          itemTrailingpcIcon: 'size-6',
          label: 'p-2 text-sm gap-2'
        },
        xs: {
          empty: 'py-3 text-xs',
          input: '[&>input]:h-10',
          item: 'p-1 text-xs gap-1',
          itemLeadingAvatarSize: '3xs',
          itemLeadingChip: 'size-4',
          itemLeadingChipSize: 'sm',
          itemLeadingIcon: 'size-4',
          itemTrailing: 'gap-1',
          itemTrailingIcon: 'size-4',
          itemTrailingKbds: 'gap-0.5',
          itemTrailingKbdsSize: 'sm',
          itemTrailingpcIcon: 'size-4',
          label: 'p-1 text-[10px]/3 gap-1'
        }
      },
      virtualize: {
        false: {
          viewport: 'divide-y divide-p3'
        },
        true: {
          viewport: 'p-1 isolate'
        }
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
}