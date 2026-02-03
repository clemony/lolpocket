export default {
  button: {
    slots: {
      base: [
        'rounded-lg group/btn font-medium  text-xs  inline-flex items-center disabled:cursor-not-allowed text-bc aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 cursor-pointer'
      ],
      label: 'truncate',
      leadingAvatar: 'shrink-0',
      leadingAvatarSize: '',
      leadingIcon: 'shrink-0',
      trailingIcon: 'shrink-0'
    },
    variants: {
      color: {
        b2: '',
        b3: '',
        domination: '',
        muted: '',
        neutral: '',
        primary: '',
        transparent: ''
      },
      variant: {
        solid: 'btn shadow-sm',
        ghost: 'disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
        inset: 'on:inset-shadow-xs',
        outline: 'btn btn-outline'
      },
      active: {
        false: {
          base: ''
        },
        true: {
          base: 'on'
        }
      },
      fieldGroup: {
        horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
        vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]'
      },
      size: {
        lg: {
          base: 'px-3 h-12 gap-2',
          leadingAvatarSize: '2xs',
          leadingIcon: 'size-5',
          trailingIcon: 'size-5'
        },
        md: {
          base: 'px-2.5 h-10 gap-1.5',
          leadingAvatarSize: '2xs',
          leadingIcon: 'size-5',
          trailingIcon: 'size-5'
        },
        sm: {
          base: 'px-2.5 h-8 gap-1.5',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-4',
          trailingIcon: 'size-4'
        },
        xl: {
          base: 'px-3 h-14 gap-2 rounded-xl',
          leadingAvatarSize: 'xs',
          leadingIcon: 'size-6',
          trailingIcon: 'size-6'
        },
        xs: {
          base: 'px-2 h-7 gap-1',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-4',
          trailingIcon: 'size-4'
        },
        xxs: {
          base: 'px-2 h-6 gap-1',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-4',
          trailingIcon: 'size-4'
        }
      },
      square: {
        true: 'anchor'
      }
    },
    compoundVariants: [
      {
        color: 'transparent',
        variant: ['solid', 'inset'],
        class: ''
      },
      {
        color: 'muted',
        variant: ['solid', 'inset'],
        class: 'text-bc btn bg-muted border-b3 ring-muted'
      },
      {
        color: 'primary',
        variant: ['solid', 'inset'],
        class: 'text-bc btn bg-b1 ring-default border-b2 '
      },
      {
        color: 'b2',
        variant: ['solid', 'inset'],
        class: 'text-bc btn bg-b2 '
      },
      {
        color: 'b3',
        variant: ['solid', 'inset'],
        class: 'text-bc btn bg-b3 '
      },
      {
        color: 'neutral',
        variant: ['solid', 'inset'],
        class: {
          base: 'btn-neutral btn  bg-neutral on:text-nc  on:btn-neutral  on:btn-neutral focus-visible:bg-neutral active:bg-neutral',
          leadingIcon: 'group-hover/btn:**:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ',
          trailingIcon: 'group-hover/btn:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ',
        },
      },
      {
        color: 'neutral',
        variant: 'ghost',
        class: {
          base: 'btn btn-ghost on:text-nc hover:**:text-nc hover:btn-neutral hover:bg-neutral',
          leadingIcon: 'group-hover/btn:**:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ',
          trailingIcon: 'group-hover/btn:**:text-nc group-active/btn:**:text-nc focus-group-visible/btn:**:text-nc ',
        },
      },

      {
        color: 'muted',
        variant: 'ghost',
        class: 'text-bc btn btn-ghost on:backdrop-blur-sm bg-clip-padding on:btn-active on:border-muted/40 on:ring-2    on:ring-muted/80 on:bg-muted'
      },
      {
        color: 'primary',
        variant: 'ghost',
        class: 'on:bg-b1 text-bc  btn btn-ghost on:border-b3/60 '
      },
      {
        color: 'neutral',
        variant: 'inset',
        class: 'on:inset-shadow-default/14'
      },
      {
        color: 'transparent',
        variant: 'inset',
        class: 'btn btn-ghost bg-transparent on:inset-shadow-default/14'
      },
      {
        class: 'size-6 rounded-md',
        size: 'xxs',
        square: true
      },
      {
        class: 'size-7 rounded-md',
        size: 'xs',
        square: true
      },
      {
        class: 'size-8',
        size: 'sm',
        square: true
      },
      {
        class: 'anchor size-10',
        size: 'md',
        square: true
      },
      {
        class: 'size-12',
        size: 'lg',
        square: true
      },
      {
        class: 'size-14',
        size: 'xl',
        square: true
      },

    ],
    defaultVariants: {
      color: 'muted',
      variant: 'solid',
      size: 'md'
    }
  }
}