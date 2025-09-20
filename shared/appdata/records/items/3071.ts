const item: Item = {
  id: 3071,
  name: 'Black Cleaver',
  nicknames: ['bc'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3071_fighter_t3_blackcleaver.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Carve',
      effects:
        'Dealing physical damage to an enemy champion applies a stack of <i>Carve</i> for 6 seconds, stacking up to 5 times. Each stack inflicts 6% armor reduction, up to 30% armor at 5 stacks.',
      unique: true,
    },
    {
      name: 'Fervor',
      effects:
        'Dealing physical damage grants you 20 <b>bonus</b> movement speed for 2 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 225,
      sell: 1200,
      total: 3000,
    },
    tags: ['FIGHTER', 'ONHIT_EFFECTS', 'ARMOR_PEN', 'MOVEMENT'],
  },
  simpleDescription:
    'Dealing physical damage to enemy champions reduces their Armor',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    attackDamage: 40,
    health: 400,
  },
}
export default item
