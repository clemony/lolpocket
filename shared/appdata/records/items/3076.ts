const item: Item = {
  name: 'Bramble Vest',
  id: 3076,
  rank: 'Epic',
  buildsFrom: [
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
    {
      id: 1029,
      name: 'Cloth Armor',
      gold: 300,
    },
  ],
  buildsInto: [
    {
      id: 323075,
      name: 'Thornmail',
      gold: 2650,
    },
    {
      id: 3075,
      name: 'Thornmail',
      gold: 2450,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3076_tank_t2_bramblevest.png',
  nicknames: ['grievous wounds'],
  passives: [
    {
      name: 'Thorns',
      unique: true,
      effects:
        'When struck by a basic attack on-hit, deal 10 magic damage to the attacker and, if they are a champion, inflict them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
    },
  ],
  stats: {
    armor: 30,
  },
  shop: {
    prices: {
      total: 800,
      combined: 200,
      sell: 320,
    },
    tags: ['TANK'],
  },
  maps: [11, 12, 21, 35],
}
export default item
