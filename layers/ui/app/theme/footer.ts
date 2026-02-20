import { defineUiTheme } from "./defineUiTheme"

export const footerTheme = defineUiTheme({
  slots: {
    root: '',
    top: 'py-8 lg:py-12',
    bottom: 'py-8 lg:py-12',
    container: 'py-8 lg:flex lg:items-center lg:justify-between lg:gap-x-3 lg:py-4',
    left: 'mt-3 flex items-center justify-center gap-x-1.5 lg:order-1 lg:mt-0 lg:flex-1 lg:justify-start',
    center: 'mt-3 flex items-center justify-center lg:order-2 lg:mt-0',
    right: 'flex items-center justify-center gap-x-1.5 lg:order-3 lg:flex-1 lg:justify-end'
  }
})

export default footerTheme
