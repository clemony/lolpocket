// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6676,
  name: 'The Collector',
  nicknames: [
    'deathblade',
    'gun',
    'lethality'
  ],
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600
    }
  ],
  description: '50 Attack Damage\n10 Lethality\n25% Critical Strike Chance\n\nDeath\nYour damage executes champions that are below 5% Health.\n\nTaxes\nChampion kills grant 25 bonus gold.',
  gold: {
    base: 525,
    sell: 2100,
    total: 3000
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
      name: 'Death',
      effects: 'If you deal post-mitigation damage that would leave a champion below 5% of their <b>maximum</b> health, <img src="/img/icons/execute.webp" class="tip-icon" />execute them.',
      mythic: false,
      unique: true
    },
    {
      name: 'Taxes',
      effects: 'Killing a champion grants you an additional <img src="/img/icons/gold-coin.webp" class="inline-icon" />25.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    attackDamage: 50,
    criticalStrikeChance: 25,
    lethality: 10
  }
}
export default item