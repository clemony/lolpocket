// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3156,
  name: 'Maw of Malmortius',
  buildsFrom: [
    {
      id: 3155,
      name: 'Hexdrinker',
      gold: 1300
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050
    }
  ],
  description: '60 Attack Damage\n15 Ability Haste\n40 Magic Resist\n\nLifeline\nTaking magic damage that would reduce your Health below 30% grants a magic damage Shield for 3 seconds and 10% Omnivamp until end of combat.',
  gold: {
    base: 750,
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
      name: 'Lifeline',
      cooldown: '90',
      effects: 'If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />200 /<img src="/img/icons/ranged.webp" class="inline-icon" />150) magic damage (+(<img src="/img/icons/melee.webp" class="inline-icon" />150% /<img src="/img/icons/ranged.webp" class="inline-icon" />112.5%) <b>bonus</b> AD) magic damage for 3 seconds. Additionally, triggering this effect grants you 10% omnivamp until the end of combat.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 60,
    magicResistance: 40
  }
}
export default item