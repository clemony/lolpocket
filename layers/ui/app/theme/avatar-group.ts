import { defineUiTheme } from "./defineUiTheme"

export const avatarGroupTheme = defineUiTheme({
  slots: {
    root: 'inline-flex flex-row-reverse justify-end',
    base: 'relative rounded-full ring-bg first:me-0'
  },
  variants: {
    size: {
      '3xs': {
        base: '-me-0.5 ring'
      },
      '2xs': {
        base: '-me-0.5 ring'
      },
      'xs': {
        base: '-me-0.5 ring'
      },
      'sm': {
        base: '-me-1.5 ring-2'
      },
      'md': {
        base: '-me-1.5 ring-2'
      },
      'lg': {
        base: '-me-1.5 ring-2'
      },
      'xl': {
        base: '-me-2 ring-3'
      },
      '2xl': {
        base: '-me-2 ring-3'
      },
      '3xl': {
        base: '-me-2 ring-3'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export default avatarGroupTheme
