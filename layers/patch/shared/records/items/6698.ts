// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 6698,
  name: 'Profane Hydra',
  nicknames: [
    'lethality'
  ],
  description: '55 Attack Damage\n18 Lethality\n10 Ability Haste\n\nCleave\nAttacks deal physical damage to nearby enemies.\nHeretical Cleave\nDeal physical damage around you.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Heretical Cleave',
      effects: 'Deal 80% AD physical damage to enemies in a 450 radius.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 3077,
      name: 'Tiamat',
      gold: 1200
    },
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    }
  ],
  gold: {
    base: 313,
    sell: 1995,
    total: 2850
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  passives: [
    {
      name: 'Cleave',
      effects: 'Damaging basic attacks deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 10,
    attackDamage: 55,
    lethality: 18
  }
}
export default item