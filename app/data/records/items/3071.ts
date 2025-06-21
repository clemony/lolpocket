const item: Item = {
  name: 'Black Cleaver',
  id: 3071,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3044,
      name: 'Phage',
      gold: 1100,
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3071_fighter_t3_blackcleaver.png',
  simpleDescription: 'Dealing physical damage to enemy champions reduces their Armor',
  nicknames: [
    'bc',
  ],
  passives: [
    {
      name: 'Carve',
      unique: true,
      effects: 'Dealing physical damage to an enemy champion applies a stack of <i>Carve</i> for 6 seconds, stacking up to 5 times. Each stack inflicts 6% armor reduction, up to 30% armor at 5 stacks.',
    },
    {
      name: 'Fervor',
      unique: true,
      effects: 'Dealing physical damage grants you 20 <b>bonus</b> movement speed for 2 seconds.',
    },
  ],
  stats: {
    attackDamage: 40,
    health: 400,
    abilityHaste: 20,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 225,
      sell: 1200,
    },
    tags: [
      'FIGHTER',
      'ONHIT_EFFECTS',
      'ARMOR_PEN',
      'MOVEMENT',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item