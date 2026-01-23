// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 4011,
  name: 'Sword of Blossoming Dawn',
  description: '45 Ability Power\n200 Health\n12% Heal and Shield Power\n15 Ability Haste\n\nEffervescence\nGain +1.2% Attack Speed for every 1% Heal and Shield Power you have. \n\nPeppermint\nOn-Hit, heal the lowest health ally champion near you for , prioritizing lower health allies.',
  gold: {
    base: 2500,
    sell: 1250,
    total: 2500
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Effervescence',
      effects: 'Gain 1.2% <b>bonus</b> attack speed per 1% <img src="/img/icons/heal-and-shield-power.webp" class="tip-icon" />heal and shield power.',
      mythic: false,
      unique: true
    },
    {
      name: 'Peppermint',
      effects: 'Basic attacks on-hit cause the most wounded and nearest allied champion to be <img src="/img/icons/heal.webp" class="tip-icon" />healed for 15 – 45 (based on level) (+10% <b>bonus</b> AD) (+7% AP).',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 45,
    healAndShieldPower: 12,
    health: 200
  }
}
export default item