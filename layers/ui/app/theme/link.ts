import { defineUiTheme } from "./defineUiTheme"

export const linkTheme = defineUiTheme({
  base: "cursor-pointer focus-visible:outline-primary",
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
      class: "text-xs hover:underline",
    },
    {
      size: "sm",
      underline: true,
      class: "text-sm hover:underline",
    },
    {
      size: "md",
      underline: true,
      class: "text-md hover:underline",
    },
    {
      size: "lg",
      underline: true,
      class: "text-lg hover:underline",
    },
  ],
  defaultVariants: {
    size: "sm",
  },
})

export default linkTheme
