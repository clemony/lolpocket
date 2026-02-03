export default {
  navigationMenu: {
    slots: {
      childItem: '',
      childLabel: 'text-xs  text-bc',
      childLink: 'group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
      childLinkDescription: 'text-muted',
      childLinkIcon: 'size-5 shrink-0',
      childLinkLabel: 'truncate',
      childLinkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
      childLinkWrapper: 'min-w-0',
      childList: 'isolate',
      content: '',
      indicator: 'absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[2] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200',
      item: 'min-w-0',
      label: 'w-full flex text-bc items-center gap-1.5 font-semibold text-xs/5   px-2.5 py-1.5',
      link: 'group relative text-bc w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
      linkLabel: 'truncate text-bc',
      linkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
      linkLeadingAvatar: 'shrink-0 transition-opacity duration-200',
      linkLeadingAvatarSize: 'xs',
      linkLeadingIcon: 'shrink-0 size-5 text-bc **:text-bc',
      linkTrailing: 'group ms-auto inline-flex ml-0.5 gap-1.5 items-center',
      linkTrailingBadge: 'shrink-0',
      linkTrailingBadgeSize: 'sm',
      linkTrailingIcon: 'size-4 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200',
      list: 'isolate min-w-0',
      root: 'relative flex gap-1.5 [&>div]:min-w-0 ',
      separator: 'px-2 h-px bg-b3',
      viewport: 'bg-default/90 relative overflow-hidden shadow-lg rounded-lg ring ring-b3 h-(--reka-navigation-menu-viewport-height) w-full    z-[1]',
      viewportWrapper: ' absolute top-full left-0 flex w-full'
    },

    variants: {
      active: {
        false: {
          childLink: [
            'hover:before:bg-elevated/50 text-default hover:text-highlighted',
            'transition-colors before:transition-colors'
          ],
          childLinkIcon: [
            'text-dimmed group-hover:text-default',
            'transition-colors'
          ],
          link: 'text-muted',
          linkLeadingAvatar: 'opacity-90 hover:opacity-100 ',
          linkLeadingIcon: 'text-dimmed'
        },
        true: {
          childLink: 'before:bg-elevated text-highlighted',
          childLinkIcon: 'text-default',
          linkLeadingAvatar: 'opacity-100'
        }
      },
    },

    defaultVariants: {
      variant: 'pill'
    }
  }
}