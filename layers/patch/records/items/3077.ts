// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3077,
  name: 'Tiamat',
  active: [
    {
      name: 'Crescent',
      effects: 'Deal 75% AD physical damage to enemies within a 450 radius in front of you.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  buildsInto: [
    {
      id: 3074,
      name: 'Ravenous Hydra',
      gold: 3300
    },
    {
      id: 3748,
      name: 'Titanic Hydra',
      gold: 3300
    },
    {
      id: 6698,
      name: 'Profane Hydra',
      gold: 2850
    },
    {
      id: 6631,
      name: 'Stridebreaker',
      gold: 3300
    }
  ],
  description: '20 Attack Damage\n\nCleave\nAttacks deal physical damage to nearby enemies.\nCrescent\nDeal physical damage to enemies around you.',
  gold: {
    base: 500,
    sell: 840,
    total: 1200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Cleave',
      effects: 'Basic attacks on-hit deal (<img src="/img/icons/melee.webp" class="inline-icon" />40% AD /<img src="/img/icons/ranged.webp" class="inline-icon" />20% AD) ad physical damage to other enemies in a 350 radius centered around the target.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Epic',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 20
  }
}
export default item