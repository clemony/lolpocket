const item: Item = {
  id: 443090,
  name: 'Reaper\'s Toll',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/443090_reaperstoll.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Reap',
      effects:
        'Basic attacks on-hit apply a <i>Reap</i> stack to the target, stacking infinitely and lasting for the remainder of the combat phase, and deal <b>bonus</b> true damage equal to (<img src="/img/icons/melee.webp" class="inline-icon" />0.7% /<img src="/img/icons/ranged.webp" class="inline-icon" />0.5%) (+0.1% per target\'s <i>Reap</i> stack) of the target\'s <b>maximum</b> health. Additionally, the target is inflicted a health threshold equal to 100% of their <b>maximum</b> health minus the <b>total</b> amount of <b>bonus</b> damage dealt against them, lasting until the end of the round and capped at a threshold of 50% of their <b>maximum</b> health.',
      unique: true,
    },
    {
      name: 'Sow',
      effects: 'Increases the attack speed gained from all sources by 25%.',
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
    tags: ['MARKSMAN'],
  },
  specialRecipe: 220007,
  stats: {
    attackSpeed: 50,
    percentMovespeed: 10,
  },
}
export default item
