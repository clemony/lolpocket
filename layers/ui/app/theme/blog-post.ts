import { defineUiTheme } from "./defineUiTheme"

export const blogPostTheme = defineUiTheme({
  slots: {
    root: "group/post relative flex flex-col overflow-hidden rounded-xl",
    header: "pointer-events-none relative aspect-[16/9] w-full overflow-hidden",
    body: "flex min-w-0 flex-1 flex-col",
    footer: "",
    image:
      "size-full object-cover object-center inset-ring inset-ring-black/10",
    title: "text-xl font-semibold text-pretty text-highlighted",
    description: "mt-1 text-pretty text-base",
    authors: "mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-4",
    avatar: "",
    meta: "mb-2 flex items-center gap-2",
    date: "text-xs",
    badge: "rounded-lg px-2"
  },
  variants: {
    orientation: {
      horizontal: {
        root: "gap-x-8 lg:grid lg:grid-cols-2 lg:items-center",
        body: "justify-center p-4 sm:p-6 lg:px-0"
      },
      vertical: {
        root: "flex flex-col",
        body: "p-4 sm:p-6"
      }
    },
    variant: {
      outline: {
        root: "bg-p0 ring ring-p3",
        date: "text-toned",
        description: "text-n5"
      },
      soft: {
        root: "bg-elevated/50",
        date: "text-muted",
        description: "text-toned"
      },
      subtle: {
        root: "bg-elevated/50 ring ring-default",
        date: "text-muted",
        description: "text-toned"
      },
      ghost: {
        date: "text-toned",
        description: "text-muted",
        header: "rounded-lg shadow-lg"
      },
      naked: {
        root: "p-0 sm:p-0",
        date: "text-toned",
        description: "text-muted",
        header: "rounded-2xl shadow-sm shadow-black/20 drop-shadow-sm",
        image: "rounded-2xl"
      }
    },
    to: {
      true: {
        root: "has-focus-visible:ring-2 has-focus-visible:ring-primary",
        image:
          "transform transition-transform duration-200 group-hover/post:scale-110",
        avatar:
          "transform transition-transform duration-200 hover:scale-115 focus-visible:outline-primary"
      }
    },
    image: {
      true: ""
    }
  },
  compoundVariants: [
    {
      variant: "outline",
      to: true,
      class: {
        root: "hover:bg-elevated/50"
      }
    },
    {
      variant: "soft",
      to: true,
      class: {
        root: "hover:bg-elevated"
      }
    },
    {
      variant: "subtle",
      to: true,
      class: {
        root: "hover:bg-elevated hover:ring-accented"
      }
    },
    {
      variant: "ghost",
      to: true,
      class: {
        root: "hover:bg-elevated/50",
        header: "group-hover/post:shadow-none"
      }
    },
    {
      variant: "ghost",
      to: true,
      orientation: "vertical",
      class: {
        header: "group-hover/post:rounded-b-none"
      }
    },
    {
      variant: "ghost",
      to: true,
      orientation: "horizontal",
      class: {
        header: "group-hover/post:rounded-r-none"
      }
    },
    {
      orientation: "vertical",
      image: false,
      variant: "naked",
      class: {
        body: "p-0 sm:p-0"
      }
    }
  ],
  defaultVariants: {
    variant: "outline"
  }
})

export default blogPostTheme
