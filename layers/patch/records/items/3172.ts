// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3172,
  name: 'Gunmetal Greaves',
  buildsFrom: [
    {
      id: 3006,
      name: 'Berserker\'s Greaves',
      gold: 1100
    }
  ],
  description: '40% Attack Speed\n45 Move Speed\n5% Life Steal\n\nNoxian Gait\nAttacks against Champions grant Move Speed On-Hit decaying over 2 seconds.',
  gold: {
    base: 0,
    sell: 770,
    total: 1100
  },
  maps: [
    11,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Like the Wind',
      effects: 'Basic attacks on-hit grant a stack of <i>Like The Wind</i> for 6 seconds, refreshing on subsequent attacks. For each stack, gain 5% <b>bonus</b> movement speed ms, stacking up to 5 times for a total of 25% ms.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 30,
    attackSpeed: 50,
    percentMovespeed: 10,
    tenacity: 20
  }
}
export default item