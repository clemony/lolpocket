const item: Item = {
  name: 'Swiftmarch',
  id: 3170,
  rank: 'Boots',
  buildsFrom: [
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_swiftness_64.png',
  simpleDescription: 'Improves defense and reduces duration of disabling effects',
  passives: [
    {
      name: 'Fleetfooted',
      unique: true,
      effects: 'Gain 25% slow resist.'
    },
    {
      name: 'Noxian Fervor',
      unique: true,
      effects: 'Gain <img src="/img/icons/adaptive-force.webp" class="tip-icon" />adaptive force equal to 5% of your <b>total</b> movement speed.'
    }
  ],
  stats: {
    flatMovespeed: 65
  },
  shop: {
    prices: {
      total: 1500,
      combined: 500,
      sell: 600
    }
  },
  maps: [
    11
  ]
}
export default item