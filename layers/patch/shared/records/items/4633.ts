// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 4633,
  name: 'Riftmaker',
  nicknames: [
    'velkoz'
  ],
  description: '70 Ability Power\n350 Health\n15 Ability Haste\n\nVoid Corruption\nFor each second in combat with enemy champions, deal 2% bonus damage, up to 8%. At maximum strength, gain Omnivamp.\n\nVoid Infusion\nGain 2% of your bonus Health as Ability Power.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3147,
      name: 'Haunting Guise',
      gold: 1300
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850
    }
  ],
  gold: {
    base: 950,
    sell: 2170,
    total: 3100
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Void Corruption',
      effects: 'For each second in combat with champions, deal 2% increased damage, stacking up to 4 times for a total of 8% increased damage. At maximum stacks, gain (<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />6%) omnivamp.',
      mythic: false,
      unique: true
    },
    {
      name: 'Void Infusion',
      effects: 'Gain ability power equal to 2% <b>bonus</b> health.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 70,
    health: 350
  }
}
export default item