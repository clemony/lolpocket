import { defineUiTheme } from "./defineUiTheme"

export const formFieldTheme = defineUiTheme({
  slots: {
    root: '',
    wrapper: '',
    labelWrapper: 'flex content-center items-center justify-between gap-1',
    label: 'block font-medium text-default',
    container: 'relative',
    description: 'text-muted',
    error: 'mt-2 text-error',
    hint: 'text-muted',
    help: 'mt-2 text-muted'
  },
  variants: {
    size: {
      xs: { root: 'text-xs' },
      sm: { root: 'text-xs' },
      md: { root: 'text-sm' },
      lg: { root: 'text-sm' },
      xl: { root: 'text-base' }
    },
    required: {
      true: {
        label: `after:ms-0.5 after:text-error after:content-['*']`
      }
    },
    orientation: {
      vertical: {
        container: 'mt-1'
      },
      horizontal: {
        root: 'flex place-items-baseline justify-between gap-2'
      }
    }
  },
  defaultVariants: {
    size: 'md',
    orientation: 'vertical'
  }
})

export default formFieldTheme
