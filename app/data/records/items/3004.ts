const item: Item = {
  name: 'Manamune',
  id: 3004,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3070,
      name: 'Tear of the Goddess',
      gold: 400,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3004_marksman_t3_manamune.png',
  simpleDescription: 'Increases Attack Damage based on maximum Mana',
  passives: [
    {
      name: 'Awe',
      unique: true,
      effects: 'Grants <b>bonus</b> attack damage equal to 2% <b>maximum</b> mana.',
    },
    {
      name: 'Manaflow',
      unique: true,
      effects: 'Grants a charge every 8 seconds, up to 4 charges. Consumes a charge on-hit and whenever affecting an enemy or ally with an ability to grant 3 <b>bonus</b> mana, increased to 6 mana for champion targets, up to a <b>maximum</b> of 360 <b>bonus</b> mana.',
    },
    {
      unique: false,
      effects: 'Transforms into <img src="/img/icons/muramana.webp" class="tip-icon" />Muramana at 360 <b>bonus</b> mana.',
    },
  ],
  stats: {
    attackDamage: 35,
    mana: 500,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 2900,
      combined: 1100,
      sell: 1160,
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'ASSASSIN',
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