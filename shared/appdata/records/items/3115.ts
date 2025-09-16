const item: Item = {
  name: 'Nashor\'s Tooth',
  id: 3115,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700,
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3115_mage_t3_nashorstooth.png',
  simpleDescription:
    'Increases Attack Speed, Ability Power, and Cooldown Reduction',
  nicknames: ['nashors'],
  passives: [
    {
      name: 'Icathian Bite',
      unique: true,
      effects:
        'Basic attacks deal 15 (+15% AP) <b>bonus</b> magic damage on-hit.',
    },
  ],
  stats: {
    abilityPower: 80,
    attackSpeed: 50,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 2900,
      combined: 500,
      sell: 1160,
    },
    tags: ['MARKSMAN', 'MAGE', 'ONHIT_EFFECTS'],
  },
  maps: [11, 12, 21, 35],
}
export default item
