import { defineUiTheme } from "./defineUiTheme"

export const separatorTheme = defineUiTheme({
  slots: {
    avatar: "shrink-0",
    avatarSize: "2xs",
    border: "n",
    container: "flex font-medium text-default",
    icon: "size-5 shrink-0",
    label: "text-sm",
    root: "align-center flex items-center rounded-md text-center"
  },
  variants: {
    color: {
      neutral: {
        border: "border-neutral"
      },
      p0: {
        border: "bg-p0"
      },
      p1: {
        border: "border-p1"
      },
      p2: {
        border: "border-p2"
      },
      p3: {
        border: "bg-p3/80"
      },
      n3: {
        border: "border-n3/70"
      }
    },
    size: {
      sm: "border-1",
      md: "border-2",
      lg: "border-3"
    }
  },
  defaultVariants: {
    color: "p2",
    size: "sm"
  }
})

export default separatorTheme
