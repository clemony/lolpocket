const item: Item = {
  name: 'Essence Reaver',
  id: 3508,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
    {
      id: 1018,
      name: 'Cloak of Agility',
      gold: 600,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3508_marksman_t3_essencereaver.png',
  nicknames: [
    'er',
    '<s>bloothirster</s>',
  ],
  passives: [
    {
      name: 'Essence Drain',
      unique: true,
      effects: 'Basic attacks on-hit restore 15 mana (+10% <b>bonus</b> AD) ad mana.',
    },
  ],
  stats: {
    attackDamage: 60,
    criticalStrikeChance: 25,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 2900,
      combined: 375,
      sell: 1160,
    },
    tags: [
      'MARKSMAN',
      'MANA_AND_REG',
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