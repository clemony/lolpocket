const item: Item = {
  id: 3142,
  name: 'Youmuu\'s Ghostblade',
  active: [
    {
      name: 'Wraith Step',
      effects:
        'Gain (<img src="/img/icons/melee.webp" class="inline-icon" />20% /<img src="/img/icons/ranged.webp" class="inline-icon" />15%) <b>bonus</b> movement speed and <img src="/img/icons/ghosted.webp" class="tip-icon" />ghosting for (<img src="/img/icons/melee.webp" class="inline-icon" />6 /<img src="/img/icons/ranged.webp" class="inline-icon" />4) seconds.',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 6690,
      name: 'Rectrix',
      gold: 775,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3142_assassin_t3_youmuusghostblade.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Haunt',
      effects:
        'Gain (<img src="/img/icons/melee.webp" class="inline-icon" />20 /<img src="/img/icons/ranged.webp" class="inline-icon" />10) <b>bonus</b> movement speed while out-of-combat with enemy champions for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 675,
      sell: 1120,
      total: 2800,
    },
    tags: ['ASSASSIN', 'MOVEMENT'],
  },
  simpleDescription: 'Activate to greatly increase Move Speed',
  specialRecipe: 0,
  stats: {
    attackDamage: 55,
    lethality: 18,
    percentMovespeed: 4,
  },
}
export default item
