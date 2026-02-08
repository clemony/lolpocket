// Updated Patch 16.1 - 01/30/2026 09:14:37 PM CST
import type { Item } from '#shared/types'

const item: Item = {
  id: 3074,
  name: 'Ravenous Hydra',
  nicknames: [
    'rav hydra'
  ],
  description: '65 Attack Damage\n15 Ability Haste\n12% Life Steal\n\nCleave\nAttacks deal physical damage to nearby enemies.Ravenous Crescent\nDeal physical damage to enemies around you. \nYour Life Steal applies to this damage.',
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  active: [
    {
      name: 'Ravenous Crescent',
      effects: 'Deal 80% AD physical damage to enemies within a 450 radius in front of you. This damage benefits from <img src="/img/icons/life-steal.webp" class="tip-icon" />life steal at 100% effectiveness.',
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
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  gold: {
    base: 150,
    sell: 2310,
    total: 3300
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
      effects: 'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target. This damage benefits from <img src="/img/icons/life-steal.webp" class="tip-icon" />life steal at 100% effectiveness.',
      mythic: false,
      unique: true
    }
  ],
  stats: {
    abilityHaste: 15,
    attackDamage: 65,
    lifesteal: 12
  }
}
export default item