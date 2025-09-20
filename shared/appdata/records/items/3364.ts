const item: Item = {
  id: 3364,
  name: 'Oracle Lens',
  nicknames: ['red', 'totem', 'trinket', 'sweeper', 'spinny'],
  active: [
    {
      effects:
        'Consume one charge to summon a <img src="/img/icons/sweeper-drone.webp" class="tip-icon" />Sweeper Drone that escorts you for the next 6 seconds, detecting nearby enemies that are not <img src="/img/icons/sight.webp" class="tip-icon" />visible.',
      range: 0,
      unique: false,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3364_class_t1_oracleslens.png',
  maps: [11, 21],
  noEffects: false,
  rank: 'Consumable',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
  },
  simpleDescription: 'Disables nearby invisible wards and traps for a duration',
  specialRecipe: 0,
  stats: {},
}
export default item
