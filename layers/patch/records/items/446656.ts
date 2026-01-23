// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 446656,
  name: 'Everfrost',
  nicknames: [
    'GLP',
    'hose',
    'supersoaker'
  ],
  active: [
    {
      name: 'Glaciate',
      effects: 'Unleash a fan of icy shards in a cone in the target direction, dealing 300 magic damage (+85% AP) magic damage to enemies struck within and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 70% for 1.5 seconds. Enemies hit in the center of the cone are <img src="/img/icons/root.webp" class="tip-icon" />rooted for the same duration instead.',
      unique: true
    }
  ],
  description: '100 Ability Power\n250 Health\n600 Mana\n25 Ability Haste\n\nACTIVE (0s)\nGlaciate\n Deal damage in a cone, Slowing enemies hit. Enemies at the center of the cone are Rooted instead.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    abilityPower: 100,
    health: 250,
    mana: 600
  }
}
export default item