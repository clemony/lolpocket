// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1502,
  name: 'Reinforced Armor',
  description: 'Reinforced\nTurrets take 80% reduced damage, including True Damage, when no enemy Lane Minions or Rift Herald are nearby.\n\nMelee Weakness\nTurrets take 20% increased damage from melee Champions.',
  gold: {
    base: 0,
    purchasable: false,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21,
    30,
    35
  ],
  noEffects: false,
  passives: [
    {
      effects: 'While no enemy <img src="/img/icons/minions.webp" class="tip-icon" />minions or <img src="/img/icons/rift-herald-mercenary.webp" class="tip-icon" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  stats: {}
}
export default item