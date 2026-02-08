// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3430,
  name: 'Rite Of Ruin',
  description: '50 Ability Power\n15 Ability Haste\n25% Critical Strike Chance\n\nWrath and Ruin\nOn spell cast, gain 2.5% critical chance for 6 seconds, stacking up to 20%.\n\nSalvage the Wreckage\nYour spells have a chance equal to your crit chance to grant you or your targeted ally a shield for  for 3s.\n',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 2500,
    sell: 1250,
    total: 2500
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Wrath and Ruin',
      effects: 'Casting an ability grants <img src="/img/icons/2.5%-critical-strike-chance.webp" class="tip-icon" />2.5% critical strike chance for 6 seconds, stacking up to 8 times for a maximum of <img src="/img/icons/critical-strike-chance.webp" class="tip-icon" />critical strike chance.',
      mythic: false,
      unique: true
    },
    {
      name: 'Salvage the Wreckage',
      effects: 'Casting an ability has a 0% – 100% (based on critical strike chance) chance to grant you or your ally a <img src="/img/icons/shield.webp" class="tip-icon light:invert" />shield for 3 seconds that absorbs 70 – 210 (based on level) (+25% <b>bonus</b> AD) (+15% AP) damage.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 50,
    criticalStrikeChance: 25
  }
}
export default item