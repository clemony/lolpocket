export default {
  slots: {
    name: "font-semibold text-pc",
    avatar: "shrink-0 **:text-pc/20 ds-sm sh-sm",
    description: "text-n5",
    root: "relative group/user",
    wrapper: "",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "flex items-center",
      },
      vertical: {
        root: "flex flex-col",
      },
    },
    size: {
      "2xl": {
        name: "text-pc text-md",
        description: "text-pc text-xs",
        root: "gap-3",
      },
      "2xs": {
        name: "text-xs",
        description: "text-xs",
        root: "gap-1.5",
        wrapper: "flex items-center gap-1.5",
      },
      "3xl": {
        name: "text-lg",
        description: "text-pc",
        root: "gap-3",
      },
      "3xs": {
        name: "text-xs",
        description: "text-xs",
        root: "gap-1",
        wrapper: "flex items-center gap-1",
      },
      lg: {
        name: "text-sm",
        description: "text-xs",
        root: "gap-2.5",
      },
      md: {
        name: "text-sm",
        description: "text-xs",
        root: "gap-2",
        wrapper: "*:leading-4.5",
      },
      sm: {
        name: "text-xs",
        description: "text-xs",
        root: "gap-2",
      },
      xl: {
        name: "text-pc",
        description: "text-xs",
        root: "gap-2.5",
      },
      xs: {
        name: "text-xs",
        description: "text-xs",
        root: "gap-1.5",
        wrapper: "flex items-center gap-1.5",
      },
    },
    to: {
      false: {
        name: "text-highlighted",
        description: "",
      },
      true: {
        name: [
          "text-default peer-hover:text-highlighted peer-focus-visible:text-highlighted",
          "transition-colors",
        ],
        avatar:
          "transform transition-transform duration-200 group-hover/user:scale-115 group-has-focus-visible/user:scale-115",
        description: [
          "peer-hover:text-n3 peer-focus-visible:text-n3",
          "transition-colors",
        ],
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
}
