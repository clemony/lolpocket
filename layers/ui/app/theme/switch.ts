export default {
  slots: {
    root: "relative flex items-start cursor-pointer group",
    base: "inline-flex items-center shrink-0 rounded-full border-2 border-transparent  cursor-pointer  focus-visible:focus-ring hover:focus-ring   data-[state=unchecked]:bg-accented",
    container: "flex items-center sh-sm  cursor-pointer",
    thumb:
      "group pointer-events-none rounded-full bg-p0 shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
    icon: "absolute shrink-0 group-data-[state=unchecked]:text-dimmed opacity-0 size-10/12",
    wrapper: "ms-2",
    label: "block cursor-pointer  font-medium leading-none text-pc",
    description: "text-muted",
  },
  variants: {
    primary: {
      container: "group-hover:before:ring-pc/80",
      base: "data-[state=checked]:bg-neutral  checked:bg-neutral focus-visible:outline-neutral",
      icon: "group-data-[state=checked]:text-highlighted",
    },
    neutral: {
      base: "data-[state=checked]:bg-inverted focus-visible:outline-inverted group-hover:before:ring-nc",
      icon: "group-data-[state=checked]:text-highlighted",
    },
  },
  size: {
    xs: {
      base: "w-7",
      container: "h-4",
      thumb:
        "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
      wrapper: "text-xs",
    },
    sm: {
      base: "w-8",
      container: "h-4",
      thumb:
        "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
      wrapper: "text-xs pb-1",
    },
    md: {
      base: "w-9",
      container: "h-5",
      thumb:
        "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
      wrapper: "text-sm",
    },
    lg: {
      base: "w-10",
      container: "h-5",
      thumb:
        "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
      wrapper: "text-sm",
    },
    xl: {
      base: "w-11",
      container: "h-6",
      thumb:
        "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
      wrapper: "text-base",
    },
  },
  checked: {
    true: {
      icon: "group-data-[state=checked]:opacity-100",
    },
  },
  unchecked: {
    true: {
      icon: "group-data-[state=unchecked]:opacity-100",
    },
  },
  loading: {
    true: {
      icon: "animate-spin",
    },
  },
  required: {
    true: {
      label: "after:content-['*'] after:ms-0.5 after:text-error",
    },
  },
  disabled: {
    true: {
      root: "opacity-75",
      base: "cursor-not-allowed",
      label: "cursor-not-allowed",
      description: "cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
}
