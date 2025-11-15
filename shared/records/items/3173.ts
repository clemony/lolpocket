const item: Item = {
  id: 3173,
  name: 'Chainlaced Crushers',
  buildsFrom: [
    {
      id: 3111,
      name: 'Mercury\'s Treads',
      gold: 1250,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_mercury_64.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Noxian Persistence',
      cooldown: '15',
      effects:
        'Taking magic damage from champions grants you a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs 10 – 120 (based on level) (+4% <b>maximum</b> health) magic damage for 4 seconds.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 700,
      total: 1750,
    },
  },
  simpleDescription: 'Increases Move Speed and Cooldown Reduction',
  specialRecipe: 0,
  stats: {
    flatMovespeed: 50,
    magicResistance: 35,
    tenacity: 30,
  },
}
export default item
