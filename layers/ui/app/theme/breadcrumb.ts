export default {
  slots: {
    item: "flex min-w-0 ",
    link: "group relative select-none  flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-neutral",
    linkLabel: "truncate ",
    linkLeadingAvatar: "shrink-0",
    linkLeadingAvatarSize: "2xs",
    linkLeadingIcon: "shrink-0 size-5",
    list: "flex items-center gap-1 ",
    root: "relative min-w-0 ",
    separator: "flex",
    separatorIcon: "shrink-0 size-4 text-n5",
  },
  variants: {
    active: {
      false: {
        link: "text-n5 font-medium ",
      },
      true: {
        link: "text-neutral font-semibold ",
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
}
