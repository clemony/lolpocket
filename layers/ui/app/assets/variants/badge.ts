export default {
  badge: {
    slots: {
      base: 'w-fit border  flex dxs  items-center'
    },
    variants: {
      color: {
        ad: '',
        dom: '',
        gold: '',
        insp: '',
        neutral: '',
        p0: '',
        p1: '',
        p2: '',
        p3: '',
        pre: '',
        res: '',
        sorc: '',
      },
      variant: {
        solid: '',
        outline: '',
        soft: '',
      },
      size: {
        lg: {
          base: 'text-sm px-2 py-1 gap-1.5 rounded-lg',
          leadingAvatarSize: '2xs',
          leadingIcon: 'size-5',
          trailingIcon: 'size-5'
        },
        md: {
          base: 'text-xs px-2 py-1 gap-1 rounded-lg',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-4',
          trailingIcon: 'size-4'
        },
        sm: {
          base: 'text-xs/4 px-2 py-0.75 gap-1.5  rounded-lg',
          leadingAvatarSize: '3xs',
          leadingIcon: 'size-3.5 **:stroke-[2.4]',
          trailingIcon: 'size-3.5 **:stroke-[2.4]'
        },
        xl: {
          base: 'text-pc px-2.5 py-1 gap-1.5 rounded-lg',
          leadingAvatarSize: '2xs',
          leadingIcon: 'size-6',
          trailingIcon: 'size-6'
        },
        xs: {
          base: 'text-[10px]/3.5 px-1.5 py-0.5   gap-1.5 rounded-lg',
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
        color: 'p0',
        variant: 'solid',
        class: 'border-p3 border text-pc font-medium ring-p2  bg-p0 '
      },
      {
        color: 'p1',
        variant: 'solid',
        class: 'border-p3 border text-pc font-medium ring-p2  bg-p1 '
      },
      {
        color: 'p2',
        variant: 'solid',
        class: 'border-p3 text-pc  font-semibold   bg-p2 '
      },
      {
        color: 'p3',
        variant: 'outline',
        class: 'border-p3 text-pc font-medium '
      },

      // neutral

      {
        color: 'neutral',
        variant: 'solid',
        class: 'border-n2 border noise text-nc font-semibold ring-n3 bg-n0/85 '
      },

      // dom
      {
        color: 'dom',
        variant: 'solid',
        class: 'border-dom  font-semibold text-white bg-dom'
      },
      {
        color: 'dom',
        variant: 'soft',
        class: 'border-dom/50  font-semibold text-pc/70   bg-dom/40 '
      },

      // sorc
      {
        color: 'sorc',
        variant: 'soft',
        class: 'border-sorc/50 noise font-semibold text-pc/70   bg-sorc/40 '
      },
      {
        color: 'sorc',
        variant: 'solid',
        class: 'border-sorc font-semibold text-white bg-sorc'
      },

      // insp
      {
        color: 'insp',
        variant: 'solid',
        class: 'border-insp   font-semibold text-insp-content bg-insp '
      },

      {
        color: 'insp',
        variant: 'outline',
        class: 'border-insp-offset/40 text-pc   font-semibold '
      },
      {
        color: 'insp',
        variant: 'soft',
        class: 'border-p3 ring-insp/40 border font-semibold text-pc   bg-insp-content/50 noise '
      },

      // pre
      {
        color: 'pre',
        variant: 'soft',
        class: 'border-pre/50  font-semibold text-pc/70   bg-pre/40 '
      },
      {
        color: 'pre',
        variant: 'solid',
        class: 'border-pre  font-semibold text-white bg-pre'
      },

      // gold
      {
        color: 'gold',
        variant: 'solid',
        class: 'border-g  font-semibold text-white **:text-white bg-g/80'
      },
      {
        color: 'gold',
        variant: 'soft',
        class: 'border-g/50  font-semibold text-pc/70   bg-g/40 '
      },

      // res
      {
        color: 'res',
        variant: 'soft',
        class: 'border-res/50  font-medium text-pc/70   bg-res/40 '
      },
      {
        color: 'res',
        variant: 'solid',
        class: 'border-res  font-medium text-white bg-res'
      },
    ],
    defaultVariants: {
      color: 'p1',
      variant: 'solid'
    }
  }
}