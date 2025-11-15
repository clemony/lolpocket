const item: Item = {
  id: 2502,
  name: 'Unending Despair',
  buildsFrom: [
    {
      id: 3105,
      name: 'Aegis of the Legion',
      gold: 1100,
    },
    {
      id: 1011,
      name: 'Giant\'s Belt',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/2502_unendingdespair.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Anguish',
      effects:
        'Every 4 seconds after entering combat with champions, sap all enemy champions around you within 650 units to deal magic damage equal to 3% of your <b>bonus</b> health to them and <img src="/img/icons/heal.webp" class="tip-icon" />heal yourself equal to 250% of the post-mitigation damage dealt.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 1120,
      total: 2800,
    },
    tags: ['TANK'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    armor: 25,
    health: 400,
    magicResistance: 25,
  },
}
export default item
