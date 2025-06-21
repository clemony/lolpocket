const item: Item = {
  name: 'Iceborn Gauntlet',
  id: 6662,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3057,
      name: 'Sheen',
      gold: 900,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6662_tank_t3_iceborngauntlet.png',
  simpleDescription: 'High Magic Resist.Passively slow nearby enemies. When spells are cast near you, release a wave of energy that damages and slows.',
  passives: [
    {
      name: 'Spellblade',
      unique: true,
      effects: 'After using an ability, your next basic attack within 10 seconds deals 150% <b>base</b> AD <b>bonus</b> physical damage on-hit and creates a 300 radius frost field for 2 seconds. Enemies within the field are slowed by (<img src="/img/icons/melee.webp" class="inline-icon" />25% /<img src="/img/icons/ranged.webp" class="inline-icon" />12.5%) (1.5 second cooldown, starts after using the empowered attack).',
    },
  ],
  stats: {
    armor: 50,
    health: 300,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 2900,
      combined: 800,
      sell: 1160,
    },
    tags: [
      'FIGHTER',
      'TANK',
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