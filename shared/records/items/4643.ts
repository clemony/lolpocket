const item: Item = {
  id: 4643,
  name: 'Vigilant Wardstone',
  nicknames: ['Support', 'Ward', 'sightstone'],
  active: [
    {
      effects:
        'Consumes a charge of <i>Arcane Cache</i> to place a visible <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward at the target location (600 range).',
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 4638,
      name: 'Watchful Wardstone',
      gold: 1100,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4643_enchanter_t3_vigilantsightstone.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Arcane Cache',
      effects:
        'Purchasing a <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward stocks it as a charge, up to maximum of 3.',
      unique: true,
    },
    {
      name: 'Behold',
      effects:
        'Increase your <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward, <img src="/img/icons/totem-ward.webp" class="tip-icon" />Totem Ward, and <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward caps by 1.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 1200,
      sell: 920,
      total: 2300,
    },
    tags: ['SUPPORT'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    armor: 25,
    health: 250,
    magicResistance: 30,
  },
}
export default item
