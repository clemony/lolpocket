const item: Item = {
  name: 'Diamond-Tipped Spear',
  id: 447120,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447120_diamondtippedspear.png',
  passives: [
    {
      name: 'Reach Weapon',
      unique: true,
      effects: 'Gain <img src="/img/icons/range.webp" class="tip-icon" />range.',
    },
    {
      name: 'Sweet Spot',
      unique: true,
      effects: 'Basic attacks deal 0% – 30% (based on distance) increased damage and abilities deal 0% – 40% (based on distance) increased damage. The distance is calculated from your current position to the target\'s position when the triggering attack or ability hits them.',
    },
  ],
  stats: {
    attackSpeed: 30,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'MARKSMAN',
      'MAGE',
    ],
  },
  maps: [
    30,
  ],
}
export default item