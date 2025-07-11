const item: Item = {
  name: 'Eclipse',
  id: 6692,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6692_assassin_t4_eclipse.png',
  passives: [
    {
      name: 'Ever Rising Moon',
      unique: true,
      effects: 'Damaging basic attacks, abilities, item effects, and summoner spells, as well as the application of crowd control and damage over time effects, generate stacks against enemy champions, up to one per attack or cast per champion. Applying 2 stacks to a champion within a 2 second period deals <b>bonus</b> physical damage to them equal to (<img src="/img/icons/melee.webp" class="inline-icon" />6% /<img src="/img/icons/ranged.webp" class="inline-icon" />4%) of target\'s <b>maximum</b> health and grants you a <img src="/img/icons/shield.webp" class="tip-icon" />shield for (<img src="/img/icons/melee.webp" class="inline-icon" />160 /<img src="/img/icons/ranged.webp" class="inline-icon" />80) (+(<img src="/img/icons/melee.webp" class="inline-icon" />40% /<img src="/img/icons/ranged.webp" class="inline-icon" />20%) <b>bonus</b> AD) for 2 seconds.',
      cooldown: '6',
    },
  ],
  stats: {
    attackDamage: 60,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 2900,
      combined: 625,
      sell: 1160,
    },
    tags: [
      'FIGHTER',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item