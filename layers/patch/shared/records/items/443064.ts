// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 443064,
  name: 'Talisman Of Ascension',
  nicknames: [
    'Support',
    'Economy',
    'Gold'
  ],
  description: '? Attack Damage\n? Attack Speed\n? Critical Strike Chance\n? Critical Strike Damage\n\n?  Ability Power\n? Ability Haste\n\n? Health\n?% Base Health Regen\n? Mana\n?% Base Mana Regen\n? Armor\n? Magic Resist\n\n? || ?% Lethality and Armor Penetration\n? || ?% Magic Penetration\n?% Lifesteal\n?% Omnivamp\n? || ?% Move Speed\n?% Heal and Shield Power\n\n\nACTIVE\nImbricate Re-roll the stats on Talisman of Ascension. Each time you do so, the stats get stronger. Twice Per Round (Thrice with Apex Inventor).',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  active: [
    {
      name: 'Imbricate',
      effects: 'Reroll the stats on this item, up to twice per round and up to thrice with the 20px|link= Apex Inventor augment. Each time you do so, the stats become higher in value.',
      unique: true
    }
  ],
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  stats: {}
}
export default item