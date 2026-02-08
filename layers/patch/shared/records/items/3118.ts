// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3118,
  name: 'Malignance',
  nicknames: [
    'burn'
  ],
  description: '90 Ability Power\n600 Mana\n15 Ability Haste\n\nScorn\nGain 20 Ultimate Ability Haste.\n\nHatefog\nDamaging a champion with your Ultimate burns the ground beneath them for 3s, dealing magic damage per second and reducing their Magic Resist. \n',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850
    }
  ],
  gold: {
    base: 650,
    sell: 1890,
    total: 2700
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Scorn',
      effects: 'Gain 20 ultimate haste.',
      mythic: false,
      unique: true
    },
    {
      name: 'Hatefog',
      effects: 'Dealing ability damage to enemy champions with your ultimate ability creates a 251 – 550 (based on ultimate\'s damage instance) radius scorched zone beneath them for 3 seconds, applying a <i>Curse</i> to enemies within that deals 15 magic damage (+1.25% AP) magic damage every 0.25 seconds and reduces their magic resistance by 10 (3 second cooldown per target, starts on zone creation).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    abilityPower: 90,
    mana: 600
  }
}
export default item