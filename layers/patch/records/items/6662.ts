// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6662,
  name: 'Iceborn Gauntlet',
  nicknames: [
    'Spellblade',
    'ibg',
    'frostfire',
    'frozen',
    'frozen gauntlet'
  ],
  buildsFrom: [
    {
      id: 3057,
      name: 'Sheen',
      gold: 900
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 1031,
      name: 'Chain Vest',
      gold: 800
    }
  ],
  description: '300 Health\n50 Armor\n15 Ability Haste\n\nSpellblade\nAfter using an Ability, your next Attack deals bonus physical damage On-Hit and creates a frost field for 2s that Slows.',
  gold: {
    base: 800,
    sell: 2030,
    total: 2900
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Spellblade',
      effects: 'After using an ability, your next basic attack within 10 seconds deals 150% <b>base</b> AD <b>bonus</b> physical damage on-hit and creates a 300 radius frost field for 2 seconds. Enemies within the field are slowed by (<img src="/img/icons/melee.webp" class="inline-icon" />25% /<img src="/img/icons/ranged.webp" class="inline-icon" />12.5%) (1.5 second cooldown, starts after using the empowered attack).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    armor: 50,
    health: 300
  }
}
export default item