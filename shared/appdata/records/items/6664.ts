const item: Item = {
  id: 6664,
  name: 'Hollow Radiance',
  buildsFrom: [
    {
      id: 6660,
      name: 'Bami\'s Cinder',
      gold: 900,
    },
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6664_hollowradiance.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Immolate',
      effects:
        'Taking or dealing damage activates this passive for 3 seconds. Deal 15 (+1% <b>bonus</b> health) magic damage every second to enemies within 325 (+100% <b>bonus</b> size) units, with the damage being increased by 25% against <img src="/img/icons/minions.webp" class="tip-icon" />minions and <img src="/img/icons/monsters.webp" class="tip-icon" />monsters. This executes minions that would be killed by one more tick of damage.',
      unique: true,
    },
    {
      name: 'Desolate',
      effects:
        'Killing a non-champion unit causes an eruption around their death location that deals 30 (+2% <b>bonus</b> health) magic damage to enemies within 350 units. Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them causes a larger eruption that deals 60 (+4% <b>bonus</b> health) magic damage to enemies within 500 units.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 650,
      sell: 1120,
      total: 2800,
    },
    tags: ['TANK'],
  },
  simpleDescription:
    'Immobilize enemies to gain a shield. Activate to run faster at opponents.',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    health: 400,
    healthRegen: 100,
    magicResistance: 40,
  },
}
export default item
