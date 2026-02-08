// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6610,
  name: 'Sundered Sky',
  description: '45 Attack Damage\n400 Health\n10 Ability Haste\n\nLightshield Strike\nYour first Attack against a champion Critically Strikes and restores Health.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  gold: {
    base: 500,
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
      name: 'Lightshield Strike',
      effects: 'Your next basic attack against a champion is empowered to <img src="/img/icons/critical-strike.webp" class="tip-icon " />critically strike for 160% damage and <img src="/img/icons/heal.webp" class="tip-icon light:invert" />heal you for (<img src="/img/icons/melee.webp" class="inline-icon" />100% /<img src="/img/icons/ranged.webp" class="inline-icon" />50%) <b>base</b> AD (+6% of your <b>missing</b> health) (10 second cooldown per target). Excess healing beyond <b>maximum</b> health is converted to <b>bonus</b> health for 8 seconds.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    attackDamage: 45,
    health: 400
  }
}
export default item