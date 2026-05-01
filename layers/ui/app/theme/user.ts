import { defineUiTheme } from "./defineUiTheme"

export const userTheme = defineUiTheme({
  slots: {
    name: "font-semibold text-pc antialiased",
    avatar: "shrink-0 **:text-pc/20",
    description: "text-n5 antialiased",
    root: "group/user relative",
    wrapper: ""
  },
  variants: {
    orientation: {
      horizontal: {
        root: "flex items-center"
      },
      vertical: {
        root: "flex flex-col"
      }
    },
    size: {
      "3xs": {
        name: "text-xs",
        description: "text-xs",
        root: "gap-1",
        wrapper: "flex items-center gap-1"
      },
      "2xs": {
        name: "text-sm",
        description: "text-xs",
        root: "gap-1",
        wrapper: "flex items-center gap-1"
      },
      xs: {
        name: "text-xs",
        description: "text-xs",
        root: "gap-1.5",
        wrapper: "flex items-center gap-1.5"
      },
      //
      sm: {
        name: "text-sm",
        description: "text-xs",
        avatar: "size-10",
        root: "gap-2"
      },
      //
      md: {
        name: "text-sm",
        description: "text-xs",
        avatar: "size-12",
        root: "gap-2",
        wrapper: "*:leading-4.5"
      },
      ///
      lg: {
        name: "text-sm",
        description: "text-xs",
        root: "gap-2.5"
      },
      xl: {
        name: "text-pc",
        description: "text-xs",
        root: "gap-2.5"
      },
      //
      "2xl": {
        name: "text-md text-pc",
        description: "text-xs text-pc",
        root: "gap-3"
      },
      "3xl": {
        name: "text-lg",
        description: "text-pc",
        root: "gap-3"
      }
    },
    to: {
      false: {
        name: "text-highlighted",
        description: ""
      },
      true: {
        name: [
          "text-default peer-hover:text-highlighted peer-focus-visible:text-highlighted",
          "transition-colors"
        ],
        avatar:
          "transform transition-transform duration-200 group-hover/user:scale-115 group-has-focus-visible/user:scale-115",
        description: [
          "peer-hover:text-n3 peer-focus-visible:text-n3",
          "transition-colors"
        ]
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
})

export default userTheme
