const item: Item = {
  name: 'Decapitator',
  id: 447107,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7107_decapitator.png',
  passives: [
    {
      name: 'Anticipation',
      unique: true,
      effects: 'Basic attacks and basic ability casts generate 1 and 2 stacks of <i>Anticipation</i> for the rest of the round, respectively, stacking up to 40 times. For each stack, increase your ultimate ability\'s damage by 3% and gain 2 ultimate haste, up to 120% increased ultimate damage and 80 ultimate haste. Stacks are reset every round and between each phase in a round.',
    },
  ],
  stats: {
    attackSpeed: 50,
    percentMovespeed: 12,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
  },
  maps: [
    30,
  ],
}
export default item