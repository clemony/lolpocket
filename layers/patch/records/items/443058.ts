// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443058,
  name: 'Shield of Molten Stone',
  description: '300 Health\n100 Armor\n\nImmovable as the Earth\nIncrease your armor by 20%, and gain Block Chance based on your Armor.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Immovable as the Earth',
      effects: 'Increase your <b>total</b> armor by 20% armor. Additionally, basic attacks that hit you have a chance of being <img src="/img/icons/block.webp" class="tip-icon" />blocked equal to 5% per 200 <b>total</b> armor, up to a maximum of 50% chance.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    armor: 100,
    health: 300
  }
}
export default item