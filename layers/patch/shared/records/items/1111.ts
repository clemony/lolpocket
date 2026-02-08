// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 1111,
  name: 'Jarvan I\'s',
  description: '25% Attack Speed\n100 Move Speed\n10 Ability Haste\n12 Magic Penetration\n25 Armor\n20 Magic Resist\n30% Tenacity\n\nJarvan One\nGive you stats and passives from all boots.\n\nRequires Augment: Quest: SneakerHead',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  gold: {
    base: 300,
    purchasable: false,
    sell: 210,
    total: 300
  },
  maps: [
    12
  ],
  passives: [
    {
      name: 'Jarvan One',
      effects: 'This item gains the stats and passive effects of all Boots items.',
      mythic: false,
      unique: true
    },
    {
      name: 'Fleetfooted',
      effects: 'Gain 25% slow resist.',
      mythic: false,
      unique: true
    },
    {
      name: 'Ionian Insight',
      effects: 'Gain 10 summoner spell haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Plating',
      effects: 'Reduces all incoming <img src="/img/icons/basic-damage.webp" class="tip-icon " />basic damage by 10% (<i>excluding from turret attacks</i>).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    armor: 25,
    attackSpeed: 25,
    flatMagicPenetration: 12,
    flatMovespeed: 100,
    magicResistance: 20,
    tenacity: 30
  }
}
export default item