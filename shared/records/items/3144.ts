const item: Item = {
  id: 3144,
  name: 'Scout\'s Slingshot',
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3032,
      name: 'Yun Tal Wildarrows',
      gold: 3000,
    },
    {
      id: 3087,
      name: 'Statikk Shiv',
      gold: 2700,
    },
    {
      id: 3085,
      name: 'Runaan\'s Hurricane',
      gold: 2650,
    },
    {
      id: 3094,
      name: 'Rapid Firecannon',
      gold: 2650,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3144_scoutslingshot.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Bullseye',
      effects:
        'Damaging an enemy champion deals 40 <b>bonus</b> magic damage (40 second cooldown, reduced by 1 second ).',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 100,
      sell: 240,
      total: 600,
    },
    tags: ['MARKSMAN', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Activate to deal magic damage and slow target champion',
  specialRecipe: 0,
  stats: {
    attackSpeed: 20,
  },
}
export default item
