import { cva, type VariantProps } from 'class-variance-authority'

export const avatarVariant = cva('inline-flex items-center justify-center font-normal text-nc select-none shrink-0 bg-neutral overflow-hidden', {
  variants: {
    size: {
      sm: 'h-10 w-10 text-2',
      base: 'h-16 w-16 text-7',
      lg: 'h-32 w-32 text-10',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
  },
})

export type AvatarVariants = VariantProps<typeof avatarVariant>
