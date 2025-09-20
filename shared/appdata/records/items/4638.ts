const item: Item = {
  id: 4638,
  name: 'Watchful Wardstone',
  nicknames: ['Support', 'Ward'],
  active: [
    {
      effects:
        'Consumes a charge of <i>Arcane Cache</i> to place a visible <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward at the target location (600 range).',
      unique: true,
    },
  ],
  buildsInto: [
    {
      id: 4643,
      name: 'Vigilant Wardstone',
      gold: 2300,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4638_enchanter_t3_watchfulsightstone.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Arcane Cache',
      effects:
        'Purchasing a <img src="/img/icons/control-ward.webp" class="tip-icon" />Control Ward stocks it as a charge, up to maximum of 3.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 1100,
      sell: 440,
      total: 1100,
    },
    tags: ['SUPPORT'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 10,
    health: 150,
    magicResistance: 15,
  },
}
export default item
