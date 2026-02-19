export default {
  slots: {
    root: "inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle bg-elevated",
    image: "h-full w-full rounded-[inherit] object-cover",
    fallback: "font-medium leading-none text-muted truncate",
    icon: "text-muted shrink-0",
  },
  variants: {
    size: {
      "3xs": {
        root: "size-4 text-[8px]",
        image: "size-4",
      },
      "2xs": {
        root: "size-5 text-[10px]",
        image: "size-5",
      },
      xs: {
        root: "size-6 text-xs",
        image: "size-6",
      },
      sm: {
        root: "size-7 text-sm",
        image: "size-7",
      },
      md: {
        root: "size-8 text-base",
        image: "size-8",
      },
      lg: {
        root: "size-9 text-lg",
        image: "size-9",
      },
      xl: {
        root: "size-10 text-xl",
        image: "size-10",
      },
      "2xl": {
        root: "size-11 text-[22px]",
        image: "size-11",
      },
      "3xl": {
        root: "size-12 text-2xl",
        image: "size-12",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
}
