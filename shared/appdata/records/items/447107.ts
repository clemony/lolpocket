const item: Item = {
  id: 447107,
  name: 'Decapitator',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7107_decapitator.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Anticipation',
      effects:
        'Basic attacks and basic ability casts generate 1 and 2 stacks of <i>Anticipation</i> for the rest of the round, respectively, stacking up to 40 times. For each stack, increase your ultimate ability\'s damage by 3% and gain 2 ultimate haste, up to 120% increased ultimate damage and 80 ultimate haste. Stacks are reset every round and between each phase in a round.',
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
  },
  specialRecipe: 220007,
  stats: {
    attackSpeed: 50,
    percentMovespeed: 12,
  },
}
export default item
