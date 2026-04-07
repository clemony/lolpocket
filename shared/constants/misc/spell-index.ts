// Updated Patch 16.7 - 04/03/2026 09:49:38 AM CDT
    import type { Spell } from "#shared/types"

    export const spellIndex: Record<number, Spell> = {
  1: {
    id: 1,
    name: "Cleanse",
    cd: 240,
    description: "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and gives Tenacity.",
    level: 9,
    range: 200
  },
  3: {
    id: 3,
    name: "Exhaust",
    cd: 240,
    description: "Slows target enemy champion and reduces their damage dealt.",
    level: 4,
    range: 650
  },
  4: {
    id: 4,
    name: "Flash",
    cd: 300,
    description: "Teleports you a short distance toward your cursor.",
    level: 7,
    range: 425
  },
  6: {
    id: 6,
    name: "Ghost",
    cd: 240,
    description: "Gain Move Speed and ignore unit collision for the duration.",
    level: 1,
    range: 200
  },
  7: {
    id: 7,
    name: "Heal",
    cd: 240,
    description: "Restores Health and grants Move Speed to you and target allied champion.",
    level: 1,
    range: 875
  },
  11: {
    id: 11,
    name: "Smite",
    charges: 2,
    description: "Deals true damage to a monster or minion.",
    level: 3,
    range: 500,
    recharge: 15
  },
  12: {
    id: 12,
    name: "Teleport",
    cd: 300,
    description: "After a brief channel, become untargetable and travel to an allied unit. Upgrades into Unleashed Teleport, which significantly increases travel speed. ",
    level: 7,
    range: 25000
  },
  13: {
    id: 13,
    name: "Clarity",
    cd: 240,
    description: "Restores your and ally champion's Mana.",
    level: 6,
    range: 600
  },
  14: {
    id: 14,
    name: "Ignite",
    cd: 180,
    description: "Deals true damage over time to target enemy champion and reduces healing effects on them for the duration.",
    level: 9,
    range: 600
  },
  21: {
    id: 21,
    name: "Barrier",
    cd: 180,
    description: "Gain a brief Shield.",
    level: 4,
    range: 1200
  },
  30: {
    id: 30,
    name: "To the King!",
    cd: 10,
    description: "Quickly travel to the Poro King's side.",
    level: 1,
    range: 200
  },
  31: {
    id: 31,
    name: "Poro Toss",
    cd: 20,
    description: "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.",
    level: 1,
    range: 2500
  },
  32: {
    id: 32,
    name: "Mark",
    cd: 80,
    description: "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
    level: 6,
    range: 1600
  },
  39: {
    id: 39,
    name: "Mark",
    cd: 80,
    description: "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
    level: 6,
    range: 8000
  },
  55: {
    id: 55,
    name: "Placeholder and Attack-Smite",
    cd: 0,
    description: "This slot will be replaced by another champion's ultimate and you will gain Attack-Smite. There will be 30 seconds to select an ultimate. Be prepared!",
    level: 1,
    range: 400
  },
  2201: {
    id: 2201,
    name: "Flee",
    cd: 45,
    description: "Gain a short burst of Move Speed, increased while running away from enemy champions.",
    level: 1,
    range: 25000
  },
  2202: {
    id: 2202,
    name: "Flash",
    cd: 0,
    description: "Teleports your champion a short distance toward your cursor's location.",
    level: 1,
    range: 425
  }
}