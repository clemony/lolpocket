import type { AvatarProps } from "@nuxt/ui"
import {
  externalResources,
  officialResources
} from "~/domain/lp/external/externalResources"

const shared = {
  target: "_blank",
  external: true,
  avatar: {
    size: "3xs" as AvatarProps["size"],
    class: "rounded-sm"
  },
  ui: {
    label: "grow-0"
  }
}

/* -------------- SUPPORT -------------- */
export const resourceNav = [
  {
    label: "Official",
    size: "xs",
    ui: {
      item: "pointer-events-none max-h-6 ",
      itemLabel: "label text-xs opacity-50"
    }
  },
  ...officialResources.map((i) => Object_assign(i, shared)),

  {
    label: "External",
    size: "xs",
    ui: {
      item: "pointer-events-none  max-h-6 ",
      itemLabel: "label text-xs opacity-50"
    }
  },
  ...externalResources.map((i) => Object_assign(i, shared))
]

export const helpNav = [
  {
    label: "Help & Support",
    size: "xs",
    ui: {
      item: "pointer-events-none items-end pb-0",
      itemLabel: "label text-xs opacity-50"
    }
  },

  {
    label: "Docs",
    to: "/docs",
    icon: "lucide:square-terminal"
  },
  {
    label: "About",
    to: "/about",
    icon: "lucide:message-circle-question-mark"
  },
  {
    label: "Legal",
    size: "xs",
    ui: {
      item: "pointer-events-none items-end pb-0",
      itemLabel: "label text-xs opacity-50"
    }
  },
  {
    label: "Terms & Conditions",
    to: "/tos",
    icon: "lucide:scale"
  },
  {
    label: "Privacy Policy",
    to: "/privacy",
    icon: "lucide:shield-check"
  }
]
