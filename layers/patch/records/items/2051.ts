// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2051,
  name: 'Guardian\'s Horn',
  nicknames: [
    'Golden Arm of Kobe',
    'Golden Bicep of Kobe',
    'Horn',
    'Horn of the ManWolf',
    'ManWolf'
  ],
  description: '150 Health\n\n\nRecovery: Restores 20 Health every 5 seconds.Undaunted: Blocks 15 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).\n',
  gold: {
    base: 950,
    sell: 665,
    total: 950
  },
  maps: [
    11,
    12,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Undaunted',
      effects: 'Reduces all sources of incoming champion damage by 15, modified to 3.75 against damage over time abilities.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 150,
    healthRegen: 20
  }
}
export default item