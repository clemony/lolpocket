// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443090,
  name: 'Reaper\'s Toll',
  description: '40 Adaptive Force\n50% Attack Speed\n5% Move Speed\n\nSow\nIncrease your Attack Speed from all sources by 15%.\n\nReap\nOn-Hit, deal max Health true damage, and reduce their Max Health by the damage dealt for the rest of the round. Consecutive hits against the same enemy increase this amount by 0.1%.',
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
      name: 'Reap',
      effects: 'Basic attacks on-hit apply a <i>Reap</i> stack to the target, stacking infinitely and lasting for the remainder of the combat phase, and deal <b>bonus</b> true damage equal to (<img src="/img/icons/melee.webp" class="inline-icon" />0.7% /<img src="/img/icons/ranged.webp" class="inline-icon" />0.5%) (+0.1% per target\'s <i>Reap</i> stack) of the target\'s <b>maximum</b> health. Additionally, the target is inflicted a health threshold equal to 100% of their <b>maximum</b> health minus the <b>total</b> amount of <b>bonus</b> damage dealt against them, lasting until the end of the round and capped at a threshold of 50% of their <b>maximum</b> health.',
      mythic: false,
      unique: true
    },
    {
      name: 'Sow',
      effects: 'Increases the attack speed gained from all sources by 15%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    attackSpeed: 50,
    percentMovespeed: 5
  }
}
export default item