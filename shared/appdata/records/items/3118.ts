const item: Item = {
  id: 3118,
  name: 'Malignance',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3118_malignance.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Scorn',
      effects: 'Gain 20 ultimate haste.',
      unique: true,
    },
    {
      name: 'Hatefog',
      effects:
        'Dealing ability damage to enemy champions with your ultimate ability creates a 251 – 550 (based on ultimate\'s damage instance) radius scorched zone beneath them for 3 seconds, applying a <i>Curse</i> to enemies within that deals 15 magic damage (+1.25% AP) magic damage every 0.25 seconds and reduces their magic resistance by 10 (3 second cooldown per target, starts on zone creation).',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 650,
      sell: 1080,
      total: 2700,
    },
    tags: ['MAGE', 'ABILITY_HASTE'],
  },
  simpleDescription: 'Partner with an ally to protect each other',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 90,
    mana: 600,
  },
}
export default item
