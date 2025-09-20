const item: Item = {
  id: 3068,
  name: 'Sunfire Aegis',
  nicknames: ['funfire', 'sunborn'],
  buildsFrom: [
    {
      id: 6660,
      name: 'Bami\'s Cinder',
      gold: 900,
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3068_tank_t4_sunfireaegis.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Immolate',
      effects:
        'Taking or dealing damage activates this passive for 3 seconds. Deal 20 (+1% <b>bonus</b> health) magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased by 50% against <img src="/img/icons/minions.webp" class="tip-icon" />minions and <img src="/img/icons/monsters.webp" class="tip-icon" />monsters. This executes minions that would be killed by one more tick of damage.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 1080,
      total: 2700,
    },
    tags: ['TANK'],
  },
  simpleDescription:
    'High armor. Constantly deals damage to nearby enemies. Immobilize enemies to release a wave of damaging flame',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 50,
    health: 350,
  },
}
export default item
