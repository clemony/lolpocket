const item: Item = {
  id: 443079,
  name: 'Turbo Chemtank',
  nicknames: ['catastrophe'],
  active: [
    {
      name: 'Supercharged',
      effects:
        'Removes all crowd control debuffs (except <img src="/img/icons/airborne.webp" class="tip-icon" />Airborne) from your champion and grants you <img src="/img/icons/cc-immune.webp" class="tip-icon" />total crowd control immunity for the next 3 seconds.',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6664_tank_t4_acceleratedchemtank.png',
  maps: [30],
  noEffects: false,
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['TANK'],
  },
  specialRecipe: 220007,
  stats: {
    health: 600,
  },
}
export default item
