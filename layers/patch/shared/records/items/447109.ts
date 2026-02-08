// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 447109,
  name: 'Cruelty',
  description: '80 Ability Power\n30 Armor\n30 Magic Resist\n\nWatch Them Fall\nOn Immobilize or Grounding an enemy champion, summon a comet above them. The comet lands after 1 second, dealing additional  magic damage in the area. This effect has a 6s cooldown per target per spell cast.',
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  passives: [
    {
      name: 'Watch Them Fall',
      effects: '<img src="/img/icons/immobilize.webp" class="tip-icon " />Immobilizing or <img src="/img/icons/ground.webp" class="tip-icon " />grounding an enemy champion summons a comet above them that lands at their current location after 1 second, dealing 50 – 150 (based on level) magic damage (+40% AP) (+4% of your <b>maximum</b> health) magic damage to enemies within the area (6 second cooldown per target per cast instance).',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityPower: 80,
    armor: 30,
    magicResistance: 30
  }
}
export default item