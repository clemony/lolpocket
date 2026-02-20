import { defineUiTheme } from "./defineUiTheme"

export const colorPickerTheme = defineUiTheme({
  slots: {
    root: 'data-[disabled]:opacity-75',
    picker: 'flex gap-4',
    selector: 'touch-none rounded-md',
    selectorBackground: 'relative size-full rounded-md',
    selectorThumb: 'absolute size-4 -translate-1/2 cursor-pointer rounded-full ring-2 ring-white data-[disabled]:cursor-not-allowed',
    track: 'relative w-[8px] touch-none rounded-md',
    trackThumb: 'absolute size-4 -translate-x-[4px] -translate-y-1/2 transform cursor-pointer rounded-full ring-2 ring-white data-[disabled]:cursor-not-allowed rtl:translate-x-[4px]'
  },
  variants: {
    size: {
      xs: {
        selector: 'size-38',
        track: 'h-38'
      },
      sm: {
        selector: 'size-40',
        track: 'h-40'
      },
      md: {
        selector: 'size-42',
        track: 'h-42'
      },
      lg: {
        selector: 'size-44',
        track: 'h-44'
      },
      xl: {
        selector: 'size-46',
        track: 'h-46'
      }
    }
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'md'
  }
})

export default colorPickerTheme
