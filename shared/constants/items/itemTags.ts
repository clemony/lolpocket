export interface ItemTag {
  color: string
  id: string
  name: string
  icon: string
}
export const itemTags: Record<string, ItemTag> = {
  fighter: {
    color: "dom",
    id: "Fighter",
    name: "Fighter",
    icon: "i-lp-fighter"
  },
  marksman: {
    color: "pre",
    id: "Marksman",
    name: "Marksman",
    icon: "i-lp-marksman"
  },
  assassin: {
    color: "dom",
    id: "Assassin",
    name: "Assassin",
    icon: "i-lp-assassin"
  },
  mage: {
    color: "sorc",
    id: "Mage",
    name: "Mage",
    icon: "i-lp-mage"
  },
  tank: {
    color: "res",
    id: "Tank",
    name: "Tank",
    icon: "i-lp-tank"
  },
  support: {
    color: "insp",
    id: "Support",
    name: "Support",
    icon: "i-lp-support"
  },
  consumable: {
    color: "insp",
    id: "Consumable",
    name: "Consumable",
    icon: "i-lp-regen"
  },
  trinket: {
    color: "pre",
    id: "Trinket",
    name: "Trinket",
    icon: "i-gg-radio-checked"
  },
  /*   onhit: {
    color: "dom",
    id: "Onhit_effects",
    name: "On-Hit Effects",
    icon: "i-stat-on-hit"
  }, */
  movement: {
    color: "p3",
    id: "Movement",
    name: "Movement",
    icon: "i-stat-movespeed"
  }
  /*   lifesteal: {
    color: "dom",
    id: "Lifesteal_vamp",
    name: "Lifesteal & Omnivamp",
    icon: "i-stat-omnivamp"
  } */
  /*special: {
    color: "special",
    id: "special",
    name: "Special",
    icon: "i-star-solid"
  } */
}
