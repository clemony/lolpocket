const item: Item = {
  name: 'Guinsoo\'s Rageblade',
  id: 3124,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1052,
      name: 'Amplifying Tome',
      gold: 400,
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700,
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
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3124_marksman_t3_guinsoosrageblade.png',
  passives: [
    {
      name: 'Wrath',
      unique: true,
      effects: 'Basic attacks deal 30 <b>bonus</b> magic damage on-hit.',
    },
    {
      name: 'Seething Strike',
      unique: true,
      effects: 'Basic attacks grant 8% <b>bonus</b> attack speed for 3 seconds, stacking up to 4 times for a total of 32% <b>bonus</b> attack speed. At maximum stacks, basic attacks also grant a <i>Phantom</i> stack for 6 seconds, up to 2 stacks. At 2 <i>Phantom</i> stacks, the next basic attack consumes all of those stacks to trigger a <i>Phantom Hit</i> that applies <img src="/img/icons/on-hit.webp" class="tip-icon" />on-hit effects to the target after a 0.15 second delay.',
    },
  ],
  stats: {
    abilityPower: 30,
    attackDamage: 30,
    attackSpeed: 25,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 1025,
      sell: 1200,
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'ONHIT_EFFECTS',
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