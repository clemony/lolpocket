const item: Item = {
  id: 1083,
  name: 'Cull',
  nicknames: ['dblade'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1083_marksman_t1_cull.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Reap',
      effects:
        'Killing a minion grants an additional <img src="/img/icons/gold-coin.webp" class="inline-icon" />1, up to a <b>maximum</b> of <img src="/img/icons/gold-coin.webp" class="inline-icon" />100.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 180,
      total: 450,
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'ASSASSIN',
      'LIFESTEAL_VAMP',
      'ONHIT_EFFECTS',
    ],
  },
  simpleDescription:
    'Provides damage and Life Steal on hit - Killing minions grant bonus Gold',
  specialRecipe: 0,
  stats: {
    attackDamage: 7,
  },
}
export default item
