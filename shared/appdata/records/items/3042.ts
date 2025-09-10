const item: Item = {
  name: 'Muramana',
  id: 3042,
  rank: 'Legendary',
  specialRecipe: 3004,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3042_marksman_t3_muramana.png',
  passives: [
    {
      name: 'Awe',
      unique: true,
      effects: 'Grants <b>bonus</b> attack damage equal to 2% <b>maximum</b> mana.'
    },
    {
      name: 'Shock',
      unique: true,
      effects: 'Basic attacks on-hit against champions deal 1.2% <b>maximum</b> mana <b>bonus</b> physical damage. Dealing ability damage to champions deals (<img src="/img/icons/melee.webp" class="inline-icon" />4% /<img src="/img/icons/ranged.webp" class="inline-icon" />3%) <b>maximum</b> mana <b>bonus</b> physical damage. Can only be triggered on the same target once every 6.5 seconds from the same attack or cast.'
    }
  ],
  stats: {
    attackDamage: 35,
    mana: 860,
    abilityHaste: 15
  },
  shop: {
    prices: {
      total: 2900,
      combined: 2900,
      sell: 1160
    },
    purchasable: false,
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'ASSASSIN',
      'ONHIT_EFFECTS'
    ]
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item