const item: Item = {
  id: 3172,
  name: 'Zephyr',
  buildsFrom: [
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_berserkersgreaves_64.png',
  maps: [11, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Like the Wind',
      effects:
        'Basic attacks on-hit grant a stack of <i>Like The Wind</i> for 6 seconds, refreshing on subsequent attacks. For each stack, gain 5% <b>bonus</b> movement speed ms, stacking up to 5 times for a total of 25% ms.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 1000,
      total: 2500,
    },
    tags: ['MARKSMAN', 'FIGHTER'],
  },
  simpleDescription: 'Mobility and Tenacity',
  specialRecipe: 0,
  stats: {
    abilityHaste: 30,
    attackSpeed: 50,
    percentMovespeed: 10,
    tenacity: 20,
  },
}
export default item
