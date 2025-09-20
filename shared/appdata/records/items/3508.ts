const item: Item = {
  id: 3508,
  name: 'Essence Reaver',
  nicknames: ['er', '<s>bloothirster</s>'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3508_marksman_t3_essencereaver.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Essence Drain',
      effects:
        'Basic attacks on-hit restore 15 mana (+10% <b>bonus</b> AD) ad mana.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 375,
      sell: 1160,
      total: 2900,
    },
    tags: ['MARKSMAN', 'MANA_AND_REG', 'ONHIT_EFFECTS'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 60,
    criticalStrikeChance: 25,
  },
}
export default item
