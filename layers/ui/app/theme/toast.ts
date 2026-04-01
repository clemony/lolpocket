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
    root: "group relative flex h-max max-h-max flex-col gap-2.5 overflow-hidden rounded-lg p-4 shadow-lg ring backdrop-blur-lg focus:outline-none data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out] data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out]",
    wrapper: "flex w-full flex-1 flex-col"
  },
  variants: {
    color: {
      default: {
        description: "text-pc",
        icon: "text-pc",
        root: "bg-p0/90 ring-p3/70 focus-visible:ring-2 focus-visible:ring-pc/60 focus-visible:ring-inset"
      },

      neutral: {
        description: "text-nc",
        icon: "text-nc",
        title: "text-nc",
        root: "bg-neutral/90 ring-n2/50 backdrop-blur-lg focus-visible:ring focus-visible:ring-nc focus-visible:ring-inset"
      },
      dom: {}
    },
    orientation: {
      horizontal: {
        root: "data-[state=open]:animate-in data-[state=open]:slide-in-from-top! data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top! inset-x-0 m-0! -mt-[0px]! -mb-[16px] h-(--ui-header-height)! max-h-(--ui-header-height)! min-h-(--ui-header-height)! w-screen origin-top! flex-row items-center justify-center rounded-none ring-1",
        wrapper: "max-w-(--ui-container) flex-row items-center gap-4",
        title: "text-md",
        icon: "mt-0.75 ml-6 self-start",
        actions: "absolute right-11 justify-end justify-self-end",
        close:
          "top-0 order-last block self-center text-nc **:text-nc [&_svg]:size-5 [&_svg]:**:stroke-[1.6] group-hover:[&_svg]:**:stroke-[2.1]"
      }
    }
  },
  defaultVariants: {
    color: "neutral"
  }
})

export default toastTheme
