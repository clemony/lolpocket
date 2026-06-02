import type { BadgeProps, BlogPostProps, UserProps } from "@nuxt/ui"

export const postBadge = (label?: string) =>
  ({
    label: label || undefined,
    size: "xs",
    variant: "solid",
    color: "transparent",
    icon: "i-hash",
    ui: {
      base: "px-0! lowercase order-last gap-0",
      label: "text-pc/60",
      leadingIcon: "size-3.25 text-pc/70 **:stroke-[1.8]"
    }
  }) as BadgeProps

export const postAuthorUi = {
  avatar: "shadow-none! drop-shadow-2xs shrink-0 size-5.5",
  description: "truncate block",
  root: "w-full inline-flex items-center gap-1.5",
  name: "tracking-tight",
  wrapper: "max-w-90 inline-flex truncate items-center gap-1"
}

export const pbeAuthor: BlogPostProps["authors"] = [
  {
    name: "Official Lol Wiki",
    description: "contributors",
    size: "xs",
    avatar: {
      src: "/img/logos/wiki.webp",
      ui: {
        image: "scale-80",
        root: "bg-[#0a323d]"
      }
    }
  }
]

export const patchAuthor = (author: string) =>
  <UserProps>{
    name: author ?? undefined,
    description: "Riot Games",
    avatar: {
      icon: "i-riot",
      loading: "lazy",
      ui: {
        root: "bg-neutral **:text-nc!",
        icon: "size-3.5 -translate-x-[0.5px]"
      }
    },
    ui: postAuthorUi,
    size: "xs"
  }
