import { defineUiTheme } from "./defineUiTheme"

export const tabsTheme = defineUiTheme({
  slots: {
    indicator:
      "absolute shrink-0 grow transform-gpu transition-transform duration-200 will-change-transform",
    list: "group/list relative flex rounded-xl p-1 inset-ring-0 inset-shadow-black/3 group-active:inset-ring-0",
    trigger:
      "group/trigger relative inline-flex min-w-0 shrink-0 grow cursor-pointer items-center rounded-lg text-sm font-medium active:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30",

    root: "group/tabs flex items-center gap-0 inset-ring-0",
    leadingIcon: "shrink-0",
    leadingAvatar: "shrink-0",
    leadingAvatarSize: "",
    label: "truncate",
    trailingBadge: "shrink-0",
    trailingBadgeSize: "sm",
    content: "w-full focus:outline-none",
  },
  variants: {
    color: {
      neutral: "",
      transparent: "",
      default: "",
    },
    variant: {
      solid: {
        indicator: "shadow-sm shadow-black/6",
      },
      link: {
        list: "border-b-0 border-b-transparent",
        indicator:
          "grid -translate-y-1 after:absolute after:h-0.5 after:w-[75%] after:justify-self-center after:border-b",
        trigger: "focus:outline-none on:text-pc",
      },
      ghost: {
        list: "shadow-none inset-shadow-none",
      },
      lift: {
        list: "tabs-lift-list tabs-lift z-4! tabs flex h-auto items-center rounded-none border-0! p-0",
        root: "h-auto p-0",
        indicator:
          "tab-active tab z-2 w-full translate-y-px overflow-visible! rounded-b-none! border-b-0! first:before:[--radius-start:unset]",
        leadingIcon:
          "[color:unset] opacity-60 group-hover/trigger:opacity-100 group-data-[state-active]/trigger:opacity-100",
        trigger:
          "group/trigger relative z-4! flex items-center rounded-b-none! border-0! font-medium tracking-normal after:absolute after:bottom-0 after:left-0 after:z-6 after:h-px after:w-[calc(100%+10px)] after:-translate-x-[5px] not-active:after:hidden data-[state=active]:after:opacity-100 data-[state=inactive]:after:opacity-0",
        label:
          "pointer-events-none w-full leading-none opacity-50 group-hover/trigger:opacity-100 group-active/trigger:opacity-100",
        content:
          "tabs-content tabs-lift-content z-0 overflow-hidden rounded-4xl",
      },
      outline: {},
    },
    orientation: {
      horizontal: {
        list: "h-full",
        indicator:
          "left-0 h-[calc(100%-var(--spacing))] w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position) self-center",
        trigger: "h-full grow justify-center",
      },
      vertical: {
        list: "w-max flex-col items-center",
        trigger: "items-center justify-self-center",
        indicator:
          "top-0 left-[calc(50%-var(--reka-tabs-indicator-size)/2)] size-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position) justify-self-center",
      },
    },
    size: {
      xs: {
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      sm: {
        indicator: "rounded-[0.47rem]",
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "3xs",
      },
      md: {
        indicator: "rounded-xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-4",
        leadingAvatarSize: "2xs",
      },
      lg: {
        indicator: "rounded-xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-5",
        leadingAvatarSize: "2xs",
      },
      xl: {
        list: "rounded-5xl",
        indicator: "rounded-4xl",
        trigger: "gap-0 p-0",
        leadingIcon: "size-5",
        leadingAvatarSize: "xs",
      },
    },
  },
  compoundVariants: [
    {
      color: "base",
      variant: "lift",
      class: {
        root: "tabs-light tabs",
        indicator: "after:bg-p0",
        label: "text-pc",
        leadingIcon: "text-pc",
        content: "border-x border-b border-p3",
        trigger: "border-transparent",
      },
    },
    {
      color: "neutral",
      variant: "lift",
      class: {
        indicator: "tab-dark bg-neutral",
        root: "tabs-dark tabs border-0! [--tab-bg:var(--color-neutral)]! [--tab-inset-color:var(--color-n2)]!",
        list: "border-0!",
        label:
          "group-data-[state=active]/trigger:text-nc! group-data-[state=active]/trigger:**:text-nc! group-not-[.background-tab]/trigger:after:bg-n0",
        trigger: "border-0!",
        leadingIcon:
          "group-data-[state=active]/trigger:text-nc! group-data-[state=active]/trigger:**:text-nc!",
      },
    },
    {
      color: "primary",
      variant: "lift",
      class: {
        indicator: "bg-p1 [--tab-bg:var(--color-p1)]",
        root: "[--tab-bg:var(--color-p1)]! [--tab-inset-color:var(--color-border)]!",
        list: "border-0!",
        trigger: "[--tab-bg:var(--color-p1)]!",
        content: "border border-t-0! border-border",
      },
    },
    {
      color: "base",
      variant: "pill",
      class: {
        content: "border-border!",
        indicator: "fx-depth bg-p0 shadow-xs inset-ring inset-ring-p3 depth-3",
        list: "noise bg-p1 inset-shadow-xs inset-ring inset-shadow-black/4 inset-ring-p3/80",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc",
      },
    },

    {
      color: "base",
      variant: "link",
      class: {
        indicator: "after:border-pc/60 after:bg-pc",
        list: "",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc",
      },
    },
    {
      color: "transparent",
      variant: "pill",
      class: {
        indicator: "bg-transparent shadow-none inset-ring-0",
        list: "bg-transparent shadow-none inset-ring-0",
        trigger:
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-p1 data-[state=active]:text-pc",
      },
    },
    {
      color: "neutral",
      variant: "pill",
      class: {
        indicator:
          "noise bg-neutral/90 shadow-xs inset-shadow-xs inset-ring inset-shadow-p1/10 inset-ring-n4",
        list: "noise bg-p2/70 inset-ring inset-ring-p3/60",
        trigger:
          "text-pc hover:text-pc! focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-p1 active:hover:**:text-nc data-[state=active]:text-nc data-[state=active]:**:text-nc",
      },
    },

    {
      color: "neutral",
      variant: "ghost",
      class: {
        indicator:
          "noise bg-neutral/90 shadow-xs inset-shadow-xs inset-ring inset-shadow-p1/10 inset-ring-n4",
        list: "",
        trigger:
          "text-pc hover:text-pc! focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-p1 active:hover:**:text-nc data-[state=active]:text-nc data-[state=active]:**:text-nc",
      },
    },

    /* orientation */
    {
      orientation: "horizontal",
      class: {
        root: "grow",
      },
    },
    /* size */

    {
      variant: "lift",
      size: "xs",
      class: {
        list: "tabs-xs text-xs",
      },
    },
    {
      variant: "lift",
      size: "sm",
      class: {
        list: "tabs-sm text-sm",
      },
    },
    {
      variant: "lift",
      size: "md",
      class: {
        list: "h-10 tabs-md",
        trigger: "h-10 text-sm",
        content: "rounded-4xl",
      },
    },
    {
      variant: "lift",
      size: "lg",
      class: {
        list: "h-12 tabs-md",
        trigger: "h-12 max-w-32 rounded-t-2xl text-sm",
        content: "rounded-4xl",
      },
    },
    {
      variant: "lift",
      size: "xl",
      class: {
        list: "h-14 tabs-xl",
        trigger: "h-14 text-sm",
        content: "rounded-4xl",
      },
    },
    {
      variant: "lift",
      color: "base",
      class: {
        content: "border-p2 bg-p0",
      },
    },
    {
      size: "xl",
      orientation: "horizontal",
      class: {
        list: "h-14 px-2 py-1.75!",
        indicator: "h-10.5",
        trigger: "h-full",
      },
    },
  ],
  defaultVariants: {
    color: "base",
    variant: "pill",
    size: "md",
  },
})

export default tabsTheme
