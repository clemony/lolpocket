export default {
  slots: {
    avatar: "shrink-0",
    avatarSize: "2xs",
    border: "",
    container: "font-medium text-default flex",
    icon: "shrink-0 size-5",
    label: "text-sm",
    root: "flex items-center align-center rounded-md text-center",
  },
  variants: {
    color: {
      neutral: {
        border: "border-neutral",
      },
      p0: {
        border: "border-p0",
      },
      p1: {
        border: "border-p1",
      },
      p2: {
        border: "border-p2",
      },
      p3: {
        border: "border-p3",
      },
    },
    size: {
      lg: "border-3",
      md: "border-2",
      sm: "border-1",
    },
  },
  defaultVariants: {
    color: "p3",
    size: "sm",
  },
}
