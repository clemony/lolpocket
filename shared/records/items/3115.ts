const item: Item = {
  id: 3115,
  name: 'Nashor\'s Tooth',
  nicknames: ['nashors'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3115_mage_t3_nashorstooth.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Icathian Bite',
      effects:
        'Basic attacks deal 15 (+15% AP) <b>bonus</b> magic damage on-hit.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 1160,
      total: 2900,
    },
    tags: ['MARKSMAN', 'MAGE', 'ONHIT_EFFECTS'],
  },
  simpleDescription:
    'Increases Attack Speed, Ability Power, and Cooldown Reduction',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 80,
    attackSpeed: 50,
  },
}
export default item
