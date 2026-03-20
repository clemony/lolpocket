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
    icon: "i-lp-fighter"
  },
  {
    color: "var(--color-pre)",
    id: "Marksman",
    name: "Marksman",
    icon: "i-lp-marksman"
  },
  {
    color: "var(--color-domination)",
    id: "Assassin",
    name: "Assassin",
    icon: "i-lp-assassin"
  },
  {
    color: "var(--color-sorc)",
    id: "Mage",
    name: "Mage",
    icon: "i-lp-mage"
  },
  {
    color: "var(--color-res)",
    id: "Tank",
    name: "Tank",
    icon: "i-lp-tank"
  },
  {
    color: "var(--color-insp)",
    id: "Support",
    name: "Support",
    icon: "i-lp-support"
  },
  {
    color: "var(--color-onhit)",
    id: "Onhit_effects",
    name: "On-Hit Effects",
    icon: "i-stat-on-hit"
  },
  {
    color: "var(--color-p4)",
    id: "Movement",
    name: "Movement",
    icon: "i-stat-movespeed"
  },
  {
    color: "var(--color-vamp)",
    id: "Lifesteal_vamp",
    name: "Lifesteal & Omnivamp",
    icon: "i-stat-omnivamp"
  }
]
