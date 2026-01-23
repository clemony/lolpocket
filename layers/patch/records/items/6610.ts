// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6610,
  name: 'Sundered Sky',
  buildsFrom: [
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  description: '45 Attack Damage\n400 Health\n10 Ability Haste\n\nLightshield Strike\nYour first Attack against a champion Critically Strikes and restores Health.',
  gold: {
    base: 500,
    sell: 2170,
    total: 3100
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
      name: 'Lightshield Strike',
      effects: 'Your next basic attack against a champion is empowered to <img src="/img/icons/critical-strike.webp" class="tip-icon" />critically strike for 160% damage and <img src="/img/icons/heal.webp" class="tip-icon" />heal you for (<img src="/img/icons/melee.webp" class="inline-icon" />100% /<img src="/img/icons/ranged.webp" class="inline-icon" />50%) <b>base</b> AD (+6% of your <b>missing</b> health) (10 second cooldown per target). Excess healing beyond <b>maximum</b> health is converted to <b>bonus</b> health for 8 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 45,
    health: 400
  }
}
export default item