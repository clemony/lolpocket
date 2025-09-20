const item: Item = {
  id: 3100,
  name: 'Lich Bane',
  buildsFrom: [
    {
      id: 3057,
      name: 'Sheen',
      gold: 900,
    },
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900,
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3100_mage_t3_lichbane.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Spellblade',
      effects:
        'After using an ability, your next basic attack within 10 seconds gains 50% <b>bonus</b> attack speed and deals 75% <b>base</b> AD (+40% AP) <b>bonus</b> magic damage on-hit (1.5 second cooldown, starts after using the empowered attack).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 250,
      sell: 1160,
      total: 2900,
    },
    tags: ['MAGE', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Grants a bonus to next attack after spell cast',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    abilityPower: 100,
    percentMovespeed: 4,
  },
}
export default item
