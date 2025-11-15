const item: Item = {
  id: 1043,
  name: 'Recurve Bow',
  buildsFrom: [
    {
      id: 1042,
      name: 'Dagger',
      gold: 250,
    },
  ],
  buildsInto: [
    {
      id: 3115,
      name: 'Nashor\'s Tooth',
      gold: 2900,
    },
    {
      id: 3302,
      name: 'Terminus',
      gold: 3000,
    },
    {
      id: 3091,
      name: 'Wit\'s End',
      gold: 2800,
    },
    {
      id: 3124,
      name: 'Guinsoo\'s Rageblade',
      gold: 3000,
    },
    {
      id: 3153,
      name: 'Blade of The Ruined King',
      gold: 3200,
    },
    {
      id: 6672,
      name: 'Kraken Slayer',
      gold: 3000,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1043_base_t2_recurvebow.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Sting',
      effects: 'Basic attacks deal 15 <b>bonus</b> physical damage on-hit.',
      unique: false,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 280,
      total: 700,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Greatly increases Attack Speed',
  specialRecipe: 0,
  stats: {
    attackSpeed: 15,
  },
}
export default item
