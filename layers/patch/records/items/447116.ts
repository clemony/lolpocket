// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 447116,
  name: 'Kinkou Jitte',
  description: '85 Adaptive Force\n400 Health\n30 Ability Haste\n\nBetween the Ribs\nYou can see weakpoints in nearby enemy champions. Dealing damage through the weakpoint deals an additional  max Health true damage and grants  Move Speed for 1.5 seconds.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Between the Ribs',
      effects: 'You can now identify the <i>Weakpoints</i> of nearby enemy champions, marked as an arc around them and pointing towards a specific direction. <i>Weakpoints</i> on targets take 4 seconds to become exposed and linger for 11.25 seconds afterwards. Dealing damage while you are facing an exposed <i>Weakpoint</i> will consume it to deal <b>bonus</b> true damage equal to 3% hp (+3% per 100 AD) (+2% per 100 AP) of the target\'s <b>maximum</b> health and grant you 50% – 75% (based on %) <b>bonus</b> movement speed for 1.5 seconds. Once a target\'s <i>Weakpoint</i> is consumed or expires, you identify a new <i>Weakpoint</i> on them.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 30,
    health: 400
  }
}
export default item