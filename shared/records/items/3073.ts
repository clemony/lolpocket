const item: Item = {
  id: 3073,
  name: 'Experimental Hexplate',
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
    {
      id: 3044,
      name: 'Phage',
      gold: 1100,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3073_hexaegis.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Hexcharged',
      effects: 'Gain 30 ultimate haste.',
      unique: true,
    },
    {
      name: 'Overdrive',
      effects:
        'Upon casting your ultimate ability, enter <i>Overdrive</i> to gain 30% <b>bonus</b> attack speed and 15% <b>bonus</b> movement speed for 8 seconds (30 second cooldown, starts on ultimate cast).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 1200,
      total: 3000,
    },
    tags: ['FIGHTER', 'ABILITY_HASTE', 'MOVEMENT'],
  },
  simpleDescription: 'Increases maximum Mana as Mana is spent',
  specialRecipe: 0,
  stats: {
    attackDamage: 40,
    attackSpeed: 20,
    health: 450,
  },
}
export default item
