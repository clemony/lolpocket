export default {
  breadcrumb: {
    slots: {
      item: 'flex min-w-0',
      link: 'group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-primary',
      linkLabel: 'truncate',
      linkLeadingAvatar: 'shrink-0',
      linkLeadingAvatarSize: '2xs',
      linkLeadingIcon: 'shrink-0 size-5',
      list: 'flex items-center gap-1.5',
      root: 'relative min-w-0',
      separator: 'flex',
      separatorIcon: 'shrink-0 size-5 text-muted'
    },
    variants: {
      active: {
        false: {
          link: 'text-muted font-medium'
        },
        true: {
          link: 'text-primary font-semibold'
        }
      },
      disabled: {
        true: {
          link: 'cursor-not-allowed opacity-75'
        }
      },
      to: {
        true: ''
      }
    },
    compoundVariants: [
      {
        active: false,
        disabled: false,
        to: true,
        class: {
          link: [
            'hover:text-default',
            'transition-colors'
          ]
        }
      }
    ]
  }
}