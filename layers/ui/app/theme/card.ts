export default {
  slots: {
    body: "p-0 sm:p-0",
    footer: "p-0 sm:p-0",
    header: "p-0 sm:p-0",
    root: "rounded-xl relative overflow-hidden text-pc",
  },
  variants: {
    variant: {
      outline: {
        root: "border text-pc shadow-sm",
      },
      default: {
        footer: "text-pc",
        body: "text-pc",
        header: "text-pc",
        root: "ring-p3/80 bg-p0 border-p3/80  text-pc divide-p3/80 border shadow-sm text-pc  shadow-black/6 divide",
      },
      muted: {
        footer: "text-pc",
        body: "text-pc",
        header: "text-pc",
        root: "border shadow-sm text-pc  shadow-black/6 divide ring-none noise border border-p3/80 field-box  shadow-black/5 drop-shadow-sm drop-shadow-black/5 shadow-sm bg-p1! text-pc divide-p3 relative ",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
}
