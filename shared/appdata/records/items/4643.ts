const item: Item = {
  name: 'Vigilant Wardstone',
  id: 4643,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 4638,
      name: 'Watchful Wardstone',
      gold: 1100
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4643_enchanter_t3_vigilantsightstone.png',
  nicknames: [
    'Support',
    'Ward',
    'sightstone'
  ],
  passives: [
    {
      name: 'Arcane Cache',
      unique: true,
      effects: 'Purchasing a <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward stocks it as a charge, up to maximum of 3.'
    },
    {
      name: 'Behold',
      unique: true,
      effects: 'Increase your <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward, <img src="/img/icons/totem-ward.webp" class="tip-icon" />Totem Ward, and <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward caps by 1.'
    }
  ],
  active: [
    {
      unique: true,
      effects: 'Consumes a charge of <i>Arcane Cache</i> to place a visible <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward at the target location (600 range).'
    }
  ],
  stats: {
    armor: 25,
    health: 250,
    magicResistance: 30,
    abilityHaste: 20
  },
  shop: {
    prices: {
      total: 2300,
      combined: 1200,
      sell: 920
    },
    tags: [
      'SUPPORT'
    ]
  },
  maps: [
    11
  ]
}
export default item