// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443056,
  name: 'Demon King\'s Crown',
  description: 'Supremacy\nIncreases your Health, Armor, Magic Resist, Attack Damage, Ability Power, Attack Speed, and Ability Haste by 26%, increased by 0% per round win and -3% each round lost after acquiring this item.',
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
      name: 'Supremacy',
      effects: 'Increase your <b>total</b> attack damage, ability power, attack speed, <b>maximum</b> health, armor, magic resistance, and ability haste by 26%, further increased by 1.2% for each round you win and reduced by 3% for each round you lose.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {}
}
export default item