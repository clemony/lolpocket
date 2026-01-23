// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 443063,
  name: 'Eleisa\'s Miracle',
  description: '50 Armor\n50 Magic Resist\n25 Ability Haste\n\nEnduring Vitality\nGain +2.5% Heal and Shield Power per 100 Missing Health, up to 60%.',
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
      name: 'Enduring Vitality',
      effects: 'Gain <img src="/img/icons/hsp.webp" class="tip-icon" />hsp per 100 <b>current</b> health you are missing, up to 60% at 2400 <b>current</b> health missing.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    armor: 50,
    magicResistance: 50
  }
}
export default item