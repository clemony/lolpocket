const item: Item = {
  name: 'Kinkou Jitte',
  id: 447116,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447116_kinkoujitte.png',
  passives: [
    {
      name: 'Between the Ribs',
      unique: true,
      effects: 'You can now identify the <i>Weakpoints</i> of nearby enemy champions, marked as an arc around them and pointing towards a specific direction. <i>Weakpoints</i> on targets take 4 seconds to become exposed and linger for 11.25 seconds afterwards. Dealing damage in the direction of an exposed <i>Weakpoint</i> will consume it to deal <b>bonus</b> true damage equal to 3% hp (+3% per 100 AD) (+2% per 100 AP) of the target\'s <b>maximum</b> health and grant you 30% – 75% (based on %) <b>bonus</b> movement speed for 1.5 seconds. Once a target\'s <i>Weakpoint</i> is consumed or expires, you identify a new <i>Weakpoint</i> on them.',
    },
  ],
  stats: {
    health: 400,
    abilityHaste: 30,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'ASSASSIN',
      'FIGHTER',
      'MAGE',
    ],
  },
  maps: [
    30,
  ],
}
export default item