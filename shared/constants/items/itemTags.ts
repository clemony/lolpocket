export interface ItemTag {
  color: string
  id: string
  name: string
  icon: string
}
export const itemTags = [
  {
    color: "var(--color-fighter)",
    id: "Fighter",
    name: "Fighter",
    icon: "i-lol-fighter",
  },
  {
    color: "var(--color-pre)",
    id: "Marksman",
    name: "Marksman",
    icon: "i-lol-marksman",
  },
  {
    color: "var(--color-domination)",
    id: "Assassin",
    name: "Assassin",
    icon: "i-lol-assassin",
  },
  {
    color: "var(--color-sorc)",
    id: "Mage",
    name: "Mage",
    icon: "i-lol-mage",
  },
  {
    color: "var(--color-res)",
    id: "Tank",
    name: "Tank",
    icon: "i-lol-tank",
  },
  {
    color: "var(--color-insp)",
    id: "Support",
    name: "Support",
    icon: "i-lol-support",
  },
  {
    color: "var(--color-onhit)",
    id: "Onhit_effects",
    name: "On-Hit Effects",
    icon: "i-lol-on-hit",
  },
  {
    color: "var(--color-p4)",
    id: "Movement",
    name: "Movement",
    icon: "i-lol-ms",
  },
  {
    color: "var(--color-vamp)",
    id: "Lifesteal_vamp",
    name: "Lifesteal & Omnivamp",
    icon: "i-lol-vamp",
  },
]
