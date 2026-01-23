// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3121,
  name: 'Fimbulwinter',
  description: '550 Health\n1000 Mana\n15 Ability Haste\n\nAwe\nGain  Health.\n\nEverlasting (0s)\nImmobilizing or Slowing (Melee only) an enemy champion grants a Shield for 3 seconds. \nThe Shield is increased by 80% if more than one enemy is nearby.',
  gold: {
    base: 2400,
    purchasable: false,
    sell: 1680,
    total: 2400
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
      effects: 'Grants <b>bonus</b> health equal to 15% <b>bonus</b> mana.',
      mythic: false,
      unique: true
    },
    {
      name: 'Everlasting',
      effects: '<img src="/img/icons/immobilize.webp" class="tip-icon" />Immobilizing, or <img src="/img/icons/slow.webp" class="tip-icon" />slowing if you are <img src="/img/icons/melee.webp" class="tip-icon" />melee, an enemy champion grants a 100 (+4.5% <b>current</b> mana) <img src="/img/icons/shield.webp" class="tip-icon" />shield for 3 seconds (8 second cooldown). The shield\'s strength is increased by 80% if there is more than one enemy champion within 1200 units.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 3119,
  stats: {
    abilityHaste: 15,
    health: 550,
    mana: 1000
  }
}
export default item