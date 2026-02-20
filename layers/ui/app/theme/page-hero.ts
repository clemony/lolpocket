import { defineUiTheme } from "./defineUiTheme"

export const pageHeroTheme = defineUiTheme({
  slots: {
    root: 'relative isolate',
    container: 'flex flex-col gap-16 py-24 sm:gap-y-24 sm:py-32 lg:grid lg:py-40',
    wrapper: '',
    header: '',
    headline: 'mb-4',
    title: 'text-5xl font-bold tracking-tight text-pretty text-highlighted sm:text-7xl',
    description: 'text-lg text-muted sm:text-xl/8',
    body: 'mt-10',
    footer: 'mt-10',
    links: 'flex flex-wrap gap-x-6 gap-y-3'
  },
  variants: {
    orientation: {
      horizontal: {
        container: 'lg:grid-cols-2 lg:items-center',
        description: 'text-pretty'
      },
      vertical: {
        container: '',
        headline: 'justify-center',
        wrapper: 'text-center',
        description: 'text-balance',
        links: 'justify-center'
      }
    },
    reverse: {
      true: {
        wrapper: 'order-last'
      }
    },
    headline: {
      true: {
        headline: 'flex items-center gap-1.5 font-semibold text-primary'
      }
    },
    title: {
      true: {
        description: 'mt-6'
      }
    }
  }
})

export default pageHeroTheme
