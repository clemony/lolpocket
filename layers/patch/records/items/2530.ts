// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2530,
  name: 'Diadem of Songs',
  description: '200 Health\n8% Heal and Shield Power\n1000 Mana\n100% Base Mana Regen\n\nHarmony\nGain % Heal and Shield Power.\n\nConsonance\nWhile you or any ally you\'ve healed or shielded in the last 3 seconds is in combat with champions, each second, heal the lowest health nearby ally champion.',
  gold: {
    base: 2250,
    purchasable: false,
    sell: 1575,
    total: 2250
  },
  maps: [
    11,
    12,
    21
  ],
  noEffects: false,
  passives: [
    {
      name: 'Harmony',
      effects: 'Grants heal and shield power equal to 0.5% <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      name: 'Consonance',
      effects: 'While you or any allied champion you granted a <img src="/img/icons/heal.webp" class="tip-icon" />heal or <img src="/img/icons/shield.webp" class="tip-icon" />shield to in the last 3 seconds is in combat with champions, each second, you heal the most wounded and nearest allied champion for 0.8% of your <b>bonus</b> mana.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 2526,
  stats: {
    healAndShieldPower: 8,
    health: 200,
    mana: 1000,
    manaRegen: 100
  }
}
export default item