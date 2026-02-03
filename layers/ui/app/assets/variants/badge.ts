export default {
  badge: {
    slots: {
      base: 'w-fit border'
    },
    variants: {
      color: {
        ad: '',
        b2: '',
        domination: '',
        gold: '',
        inspiration: '',
        muted: '',
        neutral: '',
        precision: '',
        primary: '',
        resolve: '',
        sorcery: '',
      },
      variant: {
        solid: '',
        outline: '',
        soft: '',
      },
      size: {
        lg: {
          base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
          leadingAvatarSize: '2xs',
          leadingIcon: 'size-5',
          trailingIcon: 'size-5'
        },
        md: {
          base: 'text-xs px-2 py-1 gap-1 rounded-md',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-4',
          trailingIcon: 'size-4'
        },
        sm: {
          base: 'text-xs/3.5 px-1.5 py-1 gap-1 rounded-md',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-3.5 **:stroke-[2.4]',
          trailingIcon: 'size-3.5 **:stroke-[2.4]'
        },
        xl: {
          base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
          leadingAvatarSize: '2xs',
          leadingIcon: 'size-6',
          trailingIcon: 'size-6'
        },
        xs: {
          base: 'text-[10px]/3 px-1.5 py-0.5 gap-1 rounded-md',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-3.5 **:stroke-[2.4]',
          trailingIcon: 'size-3.5 **:stroke-[2.4]'
        }
      },
      square: {
        true: ''
      }
    },
    compoundVariants: [
      {
        color: 'ad',
        variant: 'solid',
        class: 'border-ad dark:font-bold light:font-semibold text-white   light:bg-ad/70 dark:bg-ad/90'
      },
      {
        color: 'muted',
        variant: 'solid',
        class: 'border-b2 text-bc font-semibold   bg-muted '
      },
      {
        color: 'b2',
        variant: 'solid',
        class: 'border-b3 text-bc  font-semibold   bg-b2 '
      },
      {
        color: 'precision',
        variant: 'solid',
        class: 'border-precision  font-semibold text-white bg-precision'
      },
      {
        color: 'gold',
        variant: 'solid',
        class: 'border-g  font-semibold text-white **:text-white bg-g/80'
      },
      {
        color: 'domination',
        variant: 'solid',
        class: 'border-domination  font-semibold text-white bg-domination'
      },
      {
        color: 'sorcery',
        variant: 'solid',
        class: 'border-sorcery  font-semibold text-white bg-sorcery'
      },
      {
        color: 'resolve',
        variant: 'solid',
        class: 'border-resolve  font-medium text-white bg-resolve'
      },
      {
        color: 'inspiration',
        variant: 'solid',
        class: 'border-inspiration  font-semibold text-white bg-inspiration'
      },
      {
        color: 'precision',
        variant: 'soft',
        class: 'border-precision/50  font-semibold text-bc/70   bg-precision/40 '
      },
      {
        color: 'gold',
        variant: 'soft',
        class: 'border-g/50  font-semibold text-bc/70   bg-g/40 '
      },
      {
        color: 'domination',
        variant: 'soft',
        class: 'border-domination/50  font-semibold text-bc/70   bg-domination/40 '
      },
      {
        color: 'sorcery',
        variant: 'soft',
        class: 'border-sorcery/50 noise font-semibold text-bc/70   bg-sorcery/40 '
      },
      {
        color: 'resolve',
        variant: 'soft',
        class: 'border-resolve/50  font-medium text-bc/70   bg-resolve/40 '
      },
      {
        color: 'inspiration',
        variant: 'soft',
        class: 'border-inspiration/50  font-semibold text-bc/70   bg-inspiration/40 '
      }
    ],
    defaultVariants: {
      color: 'muted',
      variant: 'solid'
    }
  }
}