export default {
  slots: {
    root: "relative overflow-hidden w-full rounded-lg p-4 flex gap-2.5",
    wrapper: "min-w-0 flex-1 flex flex-col",
    title: "text-sm font-medium",
    description: "text-sm opacity-90",
    icon: "shrink-0 size-5",
    avatar: "shrink-0",
    avatarSize: "2xl",
    actions: "flex flex-wrap gap-1.5 shrink-0",
    close: "p-0",
  },
  variants: {
    variant: {
      solid: "",
      outline: "",
      soft: "",
      subtle: "",
    },
    orientation: {
      horizontal: {
        root: "items-center",
        actions: "items-center",
      },
      vertical: {
        root: "items-start",
        actions: "items-start mt-2.5",
      },
    },
    title: {
      true: {
        description: "mt-1",
      },
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    variant: "solid",
  },
}
