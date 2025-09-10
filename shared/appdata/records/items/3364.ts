const item: Item = {
  name: 'Oracle Lens',
  id: 3364,
  rank: 'Consumable',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3364_class_t1_oracleslens.png',
  simpleDescription: 'Disables nearby invisible wards and traps for a duration',
  nicknames: [
    'red',
    'totem',
    'trinket',
    'sweeper',
    'spinny'
  ],
  active: [
    {
      unique: false,
      effects: 'Consume one charge to summon a <img src="/img/icons/sweeper-drone.webp" class="tip-icon" />Sweeper Drone that escorts you for the next 6 seconds, detecting nearby enemies that are not <img src="/img/icons/sight.webp" class="tip-icon" />visible.',
      range: 0
    }
  ],
  stats: {},
  shop: {
    prices: {
      total: 0,
      combined: 0,
      sell: 0
    }
  },
  maps: [
    11,
    21
  ]
}
export default item