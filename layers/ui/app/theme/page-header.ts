export default {
  slots: {
    root: "relative border-b border-p2 pt-8 pb-6",
    container: "",
    wrapper:
      "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
    headline: "mb-2.5 text-xs font-semibold text-n5 flex items-center gap-1.5",
    title: "text-3xl sm:text-4xl text-pretty font-bold text-highlighted",
    description: "text-sm text-pretty text-muted",
    links: "flex flex-wrap items-center gap-1.5",
  },
  variants: {
    title: {
      true: {
        description: "mt-4",
      },
    },
  },
}
