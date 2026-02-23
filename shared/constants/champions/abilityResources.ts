export interface AbilityResource {
  color?: string
  name: string
  title?: string
  class?: string
  icon?: string
}

export const abilityResources: AbilityResource[] = [
  // in champ filter
  {
    color: "var(--color-platinum)",
    name: "Mana",
    icon: "stat:mana",
  },
  {
    color: "var(--color-pre)",
    name: "Energy",
    icon: "icon-park-solid:lightning",
  },
  {
    color: "var(--color-neutral)",
    name: "None",
    title: "Resourceless",
  },
  // ability only
  {
    color: "var(--color-energy)",
    name: "Charge",
    class: "!size-4.5 **:stroke-[2.2]",
    icon: "lucide:battery-charging",
  },
  {
    color: "var(--color-res)",
    name: "Current health",
    title: "Current HP",
    class: "!size-3.5",
    icon: "stat:health",
  },
  {
    color: "var(--color-fighter)",
    name: "Fury",
    icon: "lp:fury",
  },
  {
    color: "var(--color-bronze)",
    name: "Grit",
    class: "rounded-sm !size-5",
    icon: "/img/icons/Graves_Quickdraw.png",
  },
  {
    color: "var(--color-hp)",
    name: "Health",
    icon: "stat:hp",
  },
  {
    color: "var(--color-insp",
    name: "Mana / s",
    icon: "stat:mana-regen",
  },
  {
    color: "var(--color-hp)",
    name: "Max health",
    title: "Max HP",
    icon: "stat:hp",
  },
  {
    color: "var(--color-vamp)",
    name: "Blood well",
    title: "Blood Well",
    class: "rounded-sm !size-5",
    icon: "/img/icons/Aatrox-Blood-Well.webp",
  },
]
