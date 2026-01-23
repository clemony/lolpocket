// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3153,
  name: 'Blade of The Ruined King',
  nicknames: [
    'brk',
    'bork',
    'botrk',
    'mist'
  ],
  buildsFrom: [
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    }
  ],
  description: '40 Attack Damage\n25% Attack Speed\n10% Life Steal\n\nMist\'s Edge\nAttacks deal a percentage of enemy\'s current Health as bonus physical damage On-Hit.\n\nClawing Shadows\nAttacking a champion 3 times Slows them by 30% for 1 second.',
  gold: {
    base: 725,
    sell: 2240,
    total: 3200
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
      name: 'Mist\'s Edge',
      effects: 'Basic attacks deal <b>bonus</b> physical damage on-hit equal to (<img src="/img/icons/melee.webp" class="inline-icon" />9% /<img src="/img/icons/ranged.webp" class="inline-icon" />6%) of the target\'s <b>current</b> health, with a <b>maximum</b> of 100 against <img src="/img/icons/minions.webp" class="tip-icon" />minions and <img src="/img/icons/monsters.webp" class="tip-icon" />monsters.',
      mythic: false,
      unique: true
    },
    {
      name: 'Clawing Shadows',
      cooldown: '15',
      effects: 'Basic attacks on-hit against enemy champions apply a stack for 6 seconds, stacking up to 3 times. The third stack consumes them all to <img src="/img/icons/slow.webp" class="tip-icon" />slow the target by 30% for 1 second.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 40,
    attackSpeed: 25,
    lifesteal: 10
  }
}
export default item