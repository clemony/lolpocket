const item: Item = {
  name: 'Cull',
  id: 1083,
  rank: 'Starter',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1083_marksman_t1_cull.png',
  simpleDescription: 'Provides damage and Life Steal on hit - Killing minions grant bonus Gold',
  nicknames: [
    'dblade',
  ],
  passives: [
    {
      name: 'Reap',
      unique: true,
      effects: 'Killing a minion grants an additional <img src="/img/icons/gold-coin.webp" class="inline-icon" />1, up to a <b>maximum</b> of <img src="/img/icons/gold-coin.webp" class="inline-icon" />100.',
    },
  ],
  stats: {
    attackDamage: 7,
  },
  shop: {
    prices: {
      total: 450,
      combined: 450,
      sell: 180,
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'ASSASSIN',
      'LIFESTEAL_VAMP',
      'ONHIT_EFFECTS',
    ],
  },
  maps: [
    11,
  ],
}
export default item