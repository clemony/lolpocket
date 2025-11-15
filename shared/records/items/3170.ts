const item: Item = {
  id: 3170,
  name: 'Swiftmarch',
  buildsFrom: [
    {
      id: 3009,
      name: 'Boots of Swiftness',
      gold: 1000,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_swiftness_64.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Fleetfooted',
      effects: 'Gain 25% slow resist.',
      unique: true,
    },
    {
      name: 'Noxian Fervor',
      effects:
        'Gain <img src="/img/icons/adaptive-force.webp" class="tip-icon" />adaptive force equal to 5% of your <b>total</b> movement speed.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 600,
      total: 1500,
    },
  },
  simpleDescription:
    'Improves defense and reduces duration of disabling effects',
  specialRecipe: 0,
  stats: {
    flatMovespeed: 65,
  },
}
export default item
