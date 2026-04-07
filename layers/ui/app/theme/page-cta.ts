import { defineUiTheme } from "./defineUiTheme"

export const pageCtaTheme = defineUiTheme({
  slots: {
    root: "relative isolate overflow-hidden rounded-xl",
    container:
      "flex flex-col gap-8 px-6 py-12 sm:gap-16 sm:px-12 sm:py-24 lg:grid lg:px-16 lg:py-24",
    wrapper: "",
    header: "",
    title:
      "text-3xl font-bold tracking-tight text-pretty text-highlighted sm:text-4xl",
    description: "text-md text-muted sm:text-lg",
    body: "mt-8",
    footer: "mt-8",
    links: "flex flex-wrap gap-x-6 gap-y-3"
  },
  variants: {
    orientation: {
      horizontal: {
        container: "lg:grid-cols-2 lg:items-center",
        description: "text-pretty"
      },
      vertical: {
        container: "",
        title: "text-center",
        description: "text-center text-balance",
        links: "justify-center"
      }
    },
    reverse: {
      true: {
        wrapper: "order-last"
      }
    },
    variant: {
      solid: {
        root: "bg-inverted text-inverted",
        title: "text-inverted",
        description: "text-dimmed"
      },
      outline: {
        root: "bg-default ring ring-default",
        description: "text-muted"
      },
      soft: {
        root: "bg-elevated/50",
        description: "text-toned"
      },
      subtle: {
        root: "bg-elevated/50 ring ring-default",
        description: "text-toned"
      },
      naked: {
        description: "text-muted"
      }
    },
    title: {
      true: {
        description: "mt-6"
      }
    }
  },
  defaultVariants: {
    variant: "outline"
  }
})

export default pageCtaTheme
