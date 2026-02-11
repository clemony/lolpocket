export default {
  slots: {
    title:
      "text-3xl sm:text-4xl lg:text-5xl text-pretty tracking-tight font-bold text-pc",
    body: "mt-8",
    container: "flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16",
    description: "text-pc sm:text-lg text-n4",
    features: "grid",
    footer: "mt-8",
    header: "",
    headline: "mb-3",
    leading: "flex items-center mb-6",
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
        headline: "font-semibold text-pc flex items-center gap-1.5",
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
        description: " text-balance",
        features: "sm:grid-cols-2 lg:grid-cols-3 gap-8",
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
}
