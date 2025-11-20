// Updated Patch 25.22 - 11/19/2025 02:33:09 PM CST

export const spells: Record<number, Spell> = {
  1: {
    id: 1,
    name: "Cleanse",
    description: "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and gives Tenacity.",
    cd: 240,
    range: 200,
    charges: null,
    recharge: null,
    level: 9
  },
  3: {
    id: 3,
    name: "Exhaust",
    description: "Slows target enemy champion and reduces their damage dealt.",
    cd: 240,
    range: 650,
    charges: null,
    recharge: null,
    level: 4
  },
  4: {
    id: 4,
    name: "Flash",
    description: "Teleports you a short distance toward your cursor.",
    cd: 300,
    range: 425,
    charges: null,
    recharge: null,
    level: 7
  },
  6: {
    id: 6,
    name: "Ghost",
    description: "Gain Move Speed and ignore unit collision for the duration.",
    cd: 240,
    range: 200,
    charges: null,
    recharge: null,
    level: 1
  },
  7: {
    id: 7,
    name: "Heal",
    description: "Restores Health and grants Move Speed to you and target allied champion.",
    cd: 240,
    range: 875,
    charges: null,
    recharge: null,
    level: 1
  },
  11: {
    id: 11,
    name: "Smite",
    description: "Deals true damage to a monster or minion.",
    cd: null,
    range: 500,
    charges: 2,
    recharge: 15,
    level: 3
  },
  12: {
    id: 12,
    name: "Teleport",
    description: "After a brief channel, become untargetable and travel to an allied unit. Upgrades into Unleashed Teleport, which significantly increases travel speed. ",
    cd: 300,
    range: 25000,
    charges: null,
    recharge: null,
    level: 7
  },
  13: {
    id: 13,
    name: "Clarity",
    description: "Restores your and ally champion's Mana.",
    cd: 240,
    range: 600,
    charges: null,
    recharge: null,
    level: 6
  },
  14: {
    id: 14,
    name: "Ignite",
    description: "Deals true damage over time to target enemy champion and reduces healing effects on them for the duration.",
    cd: 180,
    range: 600,
    charges: null,
    recharge: null,
    level: 9
  },
  21: {
    id: 21,
    name: "Barrier",
    description: "Gain a brief Shield.",
    cd: 180,
    range: 1200,
    charges: null,
    recharge: null,
    level: 4
  },
  30: {
    id: 30,
    name: "To the King!",
    description: "Quickly travel to the Poro King's side.",
    cd: 10,
    range: 200,
    charges: null,
    recharge: null,
    level: 1
  },
  31: {
    id: 31,
    name: "Poro Toss",
    description: "Toss a Poro at your enemies. If it hits, you can quickly travel to your target as a follow up.",
    cd: 20,
    range: 2500,
    charges: null,
    recharge: null,
    level: 1
  },
  32: {
    id: 32,
    name: "Mark",
    description: "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
    cd: 80,
    range: 1600,
    charges: null,
    recharge: null,
    level: 6
  },
  39: {
    id: 39,
    name: "Mark",
    description: "Throw a snowball in a straight line at your enemies. If it hits an enemy, they become marked, granting True Sight, and your champion can quickly travel to the marked target as a follow up.",
    cd: 80,
    range: 8000,
    charges: null,
    recharge: null,
    level: 6
  },
  55: {
    id: 55,
    name: "Placeholder and Attack-Smite",
    description: "This slot will be replaced by another champion's ultimate and you will gain Attack-Smite. There will be 30 seconds to select an ultimate. Be prepared!",
    cd: 0,
    range: 400,
    charges: null,
    recharge: null,
    level: 1
  },
  2201: {
    id: 2201,
    name: "Flee",
    description: "Gain a short burst of Move Speed, increased while running away from enemy champions.",
    cd: 45,
    range: 25000,
    charges: null,
    recharge: null,
    level: 1
  },
  2202: {
    id: 2202,
    name: "Flash",
    description: "Teleports your champion a short distance toward your cursor's location.",
    cd: 0,
    range: 425,
    charges: null,
    recharge: null,
    level: 1
  }
}