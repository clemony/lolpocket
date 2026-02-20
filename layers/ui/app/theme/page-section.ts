import { defineUiTheme } from "./defineUiTheme"

export const pageSectionTheme = defineUiTheme({
  slots: {
    title:
      "text-3xl font-bold tracking-tight text-pretty text-pc sm:text-4xl lg:text-5xl",
    body: "mt-8",
    container: "flex flex-col gap-8 py-16 sm:gap-16 sm:py-24 lg:grid lg:py-32",
    description: "text-n4 sm:text-lg",
    features: "grid",
    footer: "mt-8",
    header: "",
    headline: "mb-3",
    leading: "mb-6 flex items-center",
    leadingIcon: "size-10 shrink-0 text-pc",
    links: "flex flex-wrap gap-x-6 gap-y-3",
    root: "relative isolate",
    wrapper: "",
  },
  variants: {
    title: {
      true: {
        description: "mt-6",
      },
    },
    align: {
      center: {
        title: "text-center",
        description: "text-center",
        headline: "justify-center",
        leading: "justify-center",
        links: "justify-center",
      },
      end: {
        title: "text-end",
        description: "text-end",
        headline: "justify-end",
        leading: "justify-end",
        links: "justify-end",
      },
      start: {
        title: "text-start",
        description: "text-start",
        headline: "justify-start",
        leading: "justify-start",
        links: "justify-start",
      },
    },
    body: {
      true: "",
    },
    description: {
      true: "",
    },
    headline: {
      true: {
        headline: "flex items-center gap-1.5 font-semibold text-pc",
      },
    },
    orientation: {
      horizontal: {
        container: "lg:grid-cols-2 lg:items-center",
        description: "text-pretty",
        features: "gap-4",
      },
      vertical: {
        container: "",
        description: "text-balance",
        features: "gap-8 sm:grid-cols-2 lg:grid-cols-3",
      },
    },
    reverse: {
      true: {
        wrapper: "order-last",
      },
    },
  },
  compoundVariants: [
    {
      title: true,
      orientation: "vertical",
      class: {
        body: "mt-16",
      },
    },
    {
      description: true,
      orientation: "vertical",
      class: {
        body: "mt-16",
      },
    },
    {
      body: true,
      orientation: "vertical",
      class: {
        footer: "mt-16",
      },
    },
  ],
  defaultVariants: {
    align: "start",
    orientation: "horizontal",
  },
})

export default pageSectionTheme
