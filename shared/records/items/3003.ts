const item: Item = {
  id: 3003,
  name: 'Archangel\'s Staff',
  nicknames: ['aa'],
  buildsFrom: [
    {
      id: 3070,
      name: 'Tear of the Goddess',
      gold: 400,
    },
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3003_mage_t3_archangelstaff.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Awe',
      effects: 'Grants ability power equal to 1% <b>bonus</b> mana.',
      unique: true,
    },
    {
      name: 'Manaflow',
      effects:
        'Grants a charge every 8 seconds, up to 5 charges. Affecting an enemy or ally with an ability consumes a charge to grant 5 <b>bonus</b> mana, increased to 10 mana if they are a champion, up to a <b>maximum</b> of 360 <b>bonus</b> mana.',
      unique: true,
    },
    {
      effects:
        'Transforms into <img src="/img/icons/seraphs-embrace.webp" class="tip-icon" />Seraph\'s Embrace at 360 <b>bonus</b> mana.',
      unique: false,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1160,
      total: 2900,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'Increases Ability Power based on maximum Mana',
  specialRecipe: 0,
  stats: {
    abilityHaste: 25,
    abilityPower: 70,
    mana: 600,
  },
}
export default item
