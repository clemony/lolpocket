// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 228001,
  name: 'Anathema\'s Chains',
  nicknames: [
    'Helia',
    'Vendetta',
    'hel',
    'healia',
    'heal'
  ],
  description: '650 Health\n20 Ability Haste\n\nVendetta:\nTake reduced damage against your Nemesis. They have reduced Tenacity while near you.\n\nActive can be cast at global range.\n\n"She swore to dedicate her life to his destruction..."Active - Vow: Choose a Nemesis (90s).',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Vow',
      effects: 'Curse the target enemy champion, designating them as your <i>Nemesis</i>. Choosing a new <i>Nemesis</i> removes the curse from the old one. Cannot be cast for 15 seconds while in combat with enemy champions.',
      range: 0,
      unique: true
    }
  ],
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
      name: 'Vendetta',
      effects: 'Take 30% reduced damage from your <i>Nemesis</i> and reduce their <img src="/img/icons/tenacity.webp" class="tip-icon light:invert" />tenacity by 20% while they are within 700 units of you.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 20,
    health: 650
  }
}
export default item