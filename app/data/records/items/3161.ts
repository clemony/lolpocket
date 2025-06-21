const item: Item = {
  name: 'Spear of Shojin',
  id: 3161,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3161_fighter_t3_spearofshojin.png',
  simpleDescription: 'Reduce damage taken from champions by a flat amount. Attack while near multiple enemy champions to increase this amount for a short time.',
  passives: [
    {
      name: 'Dragonforce',
      unique: true,
      effects: 'Gain 25 basic ability haste.',
    },
    {
      name: 'Focused Will',
      unique: true,
      effects: 'Dealing ability damage with a non-innate ability grants a stack for 6 seconds, stacking up to 4 times and up to once per cast instance per second and every second for damage over time abilities. For each stack, your non-<img src="/img/icons/basic-damage.webp" class="tip-icon" />basic damage dealt by non-items gain 3% increased damage, for a total increase of 12% at <b>maximum</b> stacks.',
    },
  ],
  stats: {
    attackDamage: 45,
    health: 450,
  },
  shop: {
    prices: {
      total: 3100,
      combined: 675,
      sell: 1240,
    },
    tags: [
      'FIGHTER',
      'ABILITY_HASTE',
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