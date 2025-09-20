const item: Item = {
  id: 447116,
  name: 'Kinkou Jitte',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447116_kinkoujitte.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Between the Ribs',
      effects:
        'You can now identify the <i>Weakpoints</i> of nearby enemy champions, marked as an arc around them and pointing towards a specific direction. <i>Weakpoints</i> on targets take 4 seconds to become exposed and linger for 11.25 seconds afterwards. Dealing damage in the direction of an exposed <i>Weakpoint</i> will consume it to deal <b>bonus</b> true damage equal to 3% hp (+3% per 100 AD) (+2% per 100 AP) of the target\'s <b>maximum</b> health and grant you 30% – 75% (based on %) <b>bonus</b> movement speed for 1.5 seconds. Once a target\'s <i>Weakpoint</i> is consumed or expires, you identify a new <i>Weakpoint</i> on them.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['ASSASSIN', 'FIGHTER', 'MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 30,
    health: 400,
  },
}
export default item
