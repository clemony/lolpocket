const item: Item = {
  name: 'Youmuu\'s Ghostblade',
  id: 3142,
  rank: 'Legendary',
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
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3142_assassin_t3_youmuusghostblade.png',
  simpleDescription: 'Activate to greatly increase Move Speed',
  passives: [
    {
      name: 'Haunt',
      unique: true,
      effects:
        'Gain (<img src="/img/icons/melee.webp" class="inline-icon" />20 /<img src="/img/icons/ranged.webp" class="inline-icon" />10) <b>bonus</b> movement speed while out-of-combat with enemy champions for 3 seconds.',
    },
  ],
  active: [
    {
      name: 'Wraith Step',
      unique: true,
      effects:
        'Gain (<img src="/img/icons/melee.webp" class="inline-icon" />20% /<img src="/img/icons/ranged.webp" class="inline-icon" />15%) <b>bonus</b> movement speed and <img src="/img/icons/ghosted.webp" class="tip-icon" />ghosting for (<img src="/img/icons/melee.webp" class="inline-icon" />6 /<img src="/img/icons/ranged.webp" class="inline-icon" />4) seconds.',
    },
  ],
  stats: {
    attackDamage: 55,
    lethality: 18,
    percentMovespeed: 4,
  },
  shop: {
    prices: {
      total: 2800,
      combined: 675,
      sell: 1120,
    },
    tags: ['ASSASSIN', 'MOVEMENT'],
  },
  maps: [11, 12, 21, 35],
}
export default item
