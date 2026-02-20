import { defineUiTheme } from "./defineUiTheme"

export const toastTheme = defineUiTheme({
  slots: {
    title: "text-sm font-medium",
    actions: "flex shrink-0 gap-1.5",
    avatar: "shrink-0",
    avatarSize: "2xl",
    close: "absolute top-3 right-3 size-6 p-0 [&_svg]:size-4",
    description: "text-sm",
    icon: "size-5 shrink-0",
    progress: "absolute inset-x-0 bottom-0",
    root: "group relative flex h-max max-h-max flex-col gap-2.5 overflow-hidden rounded-lg p-4 shadow-lg ring backdrop-blur-lg focus:outline-none data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out]! data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out]!",
    wrapper: "flex w-full flex-1 flex-col",
  },
  variants: {
    color: {
      default: {
        description: "text-pc",
        icon: "text-pc",
        root: "bg-p0/90 ring-p3/70 focus-visible:ring-2 focus-visible:ring-pc/60 focus-visible:ring-inset",
      },

      neutral: {
        description: "text-nc",
        icon: "text-nc",
        root: "ring-p1-700 bg-neutral/90 focus-visible:ring-2 focus-visible:ring-nc focus-visible:ring-inset",
      },
      dom: {},
    },
  },
  defaultVariants: {
    color: "default",
  },
})

export default toastTheme
