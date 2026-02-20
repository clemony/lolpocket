import { defineUiTheme } from "./defineUiTheme"

export const pageLogosTheme = defineUiTheme({
  slots: {
    root: 'relative overflow-hidden',
    title: 'text-center text-lg font-semibold text-highlighted',
    logos: 'mt-10',
    logo: 'size-10 shrink-0'
  },
  variants: {
    marquee: {
      false: {
        logos: 'flex shrink-0 items-center justify-around gap-(--gap) [--gap:--spacing(16)]'
      }
    }
  }
})

export default pageLogosTheme
