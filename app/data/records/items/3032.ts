const item: Item = {
  name: 'Yun Tal Wildarrows',
  id: 3032,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300,
    },
    {
      id: 3144,
      name: 'Scout\'s Slingshot',
      gold: 600,
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
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3032_yuntalwildarrows.png',
  nicknames: [
    'arrow',
    'yuntal',
  ],
  passives: [
    {
      name: 'Practice Makes Lethal',
      unique: true,
      effects: 'Basic attacks on-attack grant (<img src="/img/icons/melee.webp" class="inline-icon" />0.4% /<img src="/img/icons/ranged.webp" class="inline-icon" />0.2%) critical strike chance permanently, stacking up to (<img src="/img/icons/melee.webp" class="inline-icon" />63 /<img src="/img/icons/ranged.webp" class="inline-icon" />125) times (capped at 25% critical strike chance).',
    },
    {
      name: 'Flurry',
      unique: true,
      effects: 'Using a basic attack against an enemy champion grants you 30% <b>bonus</b> attack speed for 6 seconds (30 second cooldown, reduced by 1 second on-attack and 2 seconds if the attack <img src="/img/icons/critical-strike.webp" class="tip-icon" />critically strikes).',
    },
  ],
  stats: {
    attackDamage: 55,
    attackSpeed: 35,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 750,
      sell: 1200,
    },
    tags: [
      'MARKSMAN',
      'ARMOR_PEN',
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