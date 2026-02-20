import { defineUiTheme } from "./defineUiTheme"

export const dashboardSearchTheme = defineUiTheme({
  slots: {
    modal: '',
    input: ''
  },
  variants: {
    fullscreen: {
      false: {
        modal: 'h-full sm:h-[28rem] sm:max-w-3xl'
      }
    },
    size: {
      xs: {
        input: '[&>input]:text-sm'
      },
      sm: {
        input: '[&>input]:text-sm'
      },
      md: {
        input: '[&>input]:text-base/5'
      },
      lg: {
        input: '[&>input]:text-base/5'
      },
      xl: {
        input: '[&>input]:text-lg'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export default dashboardSearchTheme
