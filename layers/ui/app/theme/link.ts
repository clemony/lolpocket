export default {
  base: "focus-visible:outline-primary cursor-pointer",
  variants: {
    active: {
      true: "text-pc",
      false: "text-pc",
    },
    disabled: {
      true: "cursor-not-allowed opacity-75",
    },
    underline: {
      true: "",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
  compoundVariants: [
    {
      active: false,
      disabled: false,
      class: ["hover:text-pc"],
    },
    {
      size: "xs",
      underline: true,
      class: "hover:underline text-xs",
    },
    {
      size: "sm",
      underline: true,
      class: "hover:underline text-sm",
    },
    {
      size: "md",
      underline: true,
      class: "hover:underline text-md",
    },
    {
      size: "lg",
      underline: true,
      class: "hover:underline text-lg",
    },
  ],
  defaultVariants: {
    size: "sm",
  },
}
