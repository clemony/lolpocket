import { defineUiTheme } from "./defineUiTheme"

export const emptyTheme = defineUiTheme({
  slots: {
    root: "relative flex min-w-0 flex-col items-center justify-center gap-4 rounded-lg p-4 sm:p-6 lg:p-8",
    header: "flex max-w-sm flex-col items-center gap-2 text-center",
    avatar: "mb-2 shrink-0 bg-transparent",
    title: "font-medium text-pretty text-highlighted",
    description: "text-center text-balance",
    body: "flex max-w-sm flex-col items-center gap-4",
    actions: "flex shrink-0 flex-wrap justify-center gap-2",
    footer: "flex max-w-sm flex-col items-center gap-2"
  },
  variants: {
    size: {
      xs: {
        avatar: "size-8 text-base",
        title: "text-sm",
        description: "text-xs"
      },
      sm: {
        avatar: "size-9 text-lg",
        title: "text-sm",
        description: "text-xs"
      },
      md: {
        avatar: "size-10 text-xl",
        title: "text-md",
        description: "text-sm"
      },
      lg: {
        root: "rounded-xl!",
        avatar: "size-11 text-[22px]",
        title: "text-xl font-semibold text-pc/90",
        description: "text-md",
        actions: "mt-2"
      },
      xl: {
        avatar: "size-12 text-2xl",
        title: "text-lg",
        description: "text-base"
      }
    },
    variant: {
      solid: {
        root: "bg-inverted",
        title: "text-inverted",
        description: "text-dimmed"
      },
      outline: {
        root: "bg-p0 ring ring-p3/80",
        description: "text-muted"
      },
      soft: {
        root: "bg-p0 shadow-sm ring shadow-black/2 ring-p3/60 drop-shadow-sm drop-shadow-black/4",
        description: "text-toned"
      },
      subtle: {
        root: "bg-elevated/50 ring ring-default",
        description: "text-toned"
      },
      naked: {
        description: "text-muted"
      }
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
})

export default emptyTheme
