// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3040,
  name: 'Seraph\'s Embrace',
  description: '70 Ability Power\n1000 Mana\n25 Ability Haste\n\nAwe\nGain  Ability Power.\n\nLifeline (0s)\nTaking damage that would reduce your Health below 30% grants a  Shield for 3 seconds.',
  gold: {
    base: 2900,
    purchasable: false,
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
      name: 'Awe',
      effects: 'Grants ability power equal to 2% <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      name: 'Lifeline',
      cooldown: '90',
      effects: 'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 3 seconds that absorbs damage equal to 18% <b>maximum</b> mana for 3 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 3003,
  stats: {
    abilityHaste: 25,
    abilityPower: 70,
    mana: 1000
  }
}
export default item