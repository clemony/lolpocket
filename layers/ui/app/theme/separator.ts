import { defineUiTheme } from "./defineUiTheme"

export const separatorTheme = defineUiTheme({
  slots: {
    root: "align-center flex items-center text-center",
    border: "",
    container: "flex font-medium text-default",
    icon: "size-5 shrink-0",
    avatar: "shrink-0",
    avatarSize: "2xs",
    label: "text-sm"
  },
  variants: {
    color: {
      neutral: {
        border: "border-neutral"
      },
      base: {
        border: "border-p0"
      },
      primary: {
        border: "border-p1"
      },
      secondary: {
        border: "border-p2"
      },
      tertiary: {
        border: "border-p3/80"
      }
    },
    orientation: {
      horizontal: {
        root: "w-full flex-row",
        border: "w-full",
        container: "mx-3 whitespace-nowrap"
      },
      vertical: {
        root: "h-full flex-col",
        border: "h-full",
        container: "my-2"
      }
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: ""
    },
    type: {
      solid: {
        border: "border-solid"
      },
      dashed: {
        border: "border-dashed"
      },
      dotted: {
        border: "border-dotted"
      }
    }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      size: "xs",
      class: {
        border: "border-t"
      }
    },
    {
      orientation: "horizontal",
      size: "sm",
      class: {
        border: "border-t-[2px]"
      }
    },
    {
      orientation: "horizontal",
      size: "md",
      class: {
        border: "border-t-[3px]"
      }
    },
    {
      orientation: "horizontal",
      size: "lg",
      class: {
        border: "border-t-[4px]"
      }
    },
    {
      orientation: "horizontal",
      size: "xl",
      class: {
        border: "border-t-[5px]"
      }
    },
    {
      orientation: "vertical",
      size: "xs",
      class: {
        border: "border-s"
      }
    },
    {
      orientation: "vertical",
      size: "sm",
      class: {
        border: "border-s-[2px]"
      }
    },
    {
      orientation: "vertical",
      size: "md",
      class: {
        border: "border-s-[3px]"
      }
    },
    {
      orientation: "vertical",
      size: "lg",
      class: {
        border: "border-s-[4px]"
      }
    },
    {
      orientation: "vertical",
      size: "xl",
      class: {
        border: "border-s-[5px]"
      }
    }
  ],
  defaultVariants: {
    color: "tertiary",
    size: "xs",
    type: "solid"
  }
})

export default separatorTheme
