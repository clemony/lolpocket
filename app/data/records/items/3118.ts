const item: Item = {
  name: 'Malignance',
  id: 3118,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200,
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3118_malignance.png',
  simpleDescription: 'Partner with an ally to protect each other',
  passives: [
    {
      name: 'Scorn',
      unique: true,
      effects: 'Gain 20 ultimate haste.',
    },
    {
      name: 'Hatefog',
      unique: true,
      effects: 'Dealing ability damage to enemy champions with your ultimate ability creates a 251 – 550 (based on ultimate\'s damage instance) radius scorched zone beneath them for 3 seconds, applying a <i>Curse</i> to enemies within that deals 15 magic damage (+1.25% AP) magic damage every 0.25 seconds and reduces their magic resistance by 10 (3 second cooldown per target, starts on zone creation).',
    },
  ],
  stats: {
    abilityPower: 90,
    mana: 600,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 2700,
      combined: 650,
      sell: 1080,
    },
    tags: [
      'MAGE',
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