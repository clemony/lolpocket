import { defineUiTheme } from "./defineUiTheme"

export const errorTheme = defineUiTheme({
  slots: {
    root: 'flex min-h-[calc(100vh-var(--ui-header-height))] flex-col items-center justify-center text-center',
    statusCode: 'text-base font-semibold text-primary',
    statusMessage: 'mt-2 text-4xl font-bold text-balance text-highlighted sm:text-5xl',
    message: 'mt-4 text-lg text-balance text-muted',
    links: 'mt-8 flex items-center justify-center gap-6'
  }
})

export default errorTheme
