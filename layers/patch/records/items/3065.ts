// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3065,
  name: 'Spirit Visage',
  nicknames: [
    'sv'
  ],
  buildsFrom: [
    {
      id: 3211,
      name: 'Spectre\'s Cowl',
      gold: 1250
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800
    }
  ],
  description: '400 Health\n50 Magic Resist\n10 Ability Haste\n100% Base Health Regen\n\nBoundless Vitality\nHeals and Shields on you are increased by 25%.',
  gold: {
    base: 650,
    sell: 1890,
    total: 2700
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
      name: 'Boundless Vitality',
      effects: 'Increases all <img src="/img/icons/heal.webp" class="tip-icon" />healing and <img src="/img/icons/shield.webp" class="tip-icon" />shielding received as well as <img src="/img/icons/health-regeneration.webp" class="tip-icon" />health regeneration by 25%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    health: 400,
    healthRegen: 100,
    magicResistance: 50
  }
}
export default item