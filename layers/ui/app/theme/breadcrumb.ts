import { defineUiTheme } from "./defineUiTheme"

export const breadcrumbTheme = defineUiTheme({
  slots: {
    item: "flex min-w-0",
    link: "group relative flex min-w-0 items-center gap-1.5 text-sm select-none focus-visible:outline-neutral",
    linkLabel: "truncate",
    linkLeadingAvatar: "shrink-0",
    linkLeadingAvatarSize: "2xs",
    linkLeadingIcon: "size-5 shrink-0",
    list: "flex items-center gap-1",
    root: "relative min-w-0",
    separator: "flex",
    separatorIcon: "size-4 shrink-0 text-n5",
  },
  variants: {
    active: {
      false: {
        link: "font-medium text-n5",
      },
      true: {
        link: "font-semibold text-neutral",
      },
    },
    disabled: {
      true: {
        link: "cursor-not-allowed opacity-75",
      },
    },
    to: {
      true: "",
    },
  },
  compoundVariants: [
    {
      active: false,
      disabled: false,
      to: true,
      class: {
        link: ["hover:text-default", "transition-colors"],
      },
    },
  ],
})

export default breadcrumbTheme
