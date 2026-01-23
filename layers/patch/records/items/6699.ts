// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 6699,
  name: 'Voltaic Cyclosword',
  nicknames: [
    'lethality'
  ],
  buildsFrom: [
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350
    }
  ],
  description: '55 Attack Damage\n18 Lethality\n10 Ability Haste\n\nGalvanize\nDashes and Stealth stack Energized 75% faster.\n\nFirmament\nYour Energized Attack deals bonus physical damage and Slows for 0.75 seconds.',
  gold: {
    base: 963,
    sell: 2100,
    total: 3000
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
      name: 'Energized',
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      mythic: false,
      unique: true
    },
    {
      name: 'Galvanize',
      effects: '<img src="/img/icons/energized.webp" class="tip-icon" />Energized stack generation is increased by 75% for distance travelled from <img src="/img/icons/dash.webp" class="tip-icon" />dashes, <img src="/img/icons/lunge.webp" class="tip-icon" />lunges and <img src="/img/icons/blink.webp" class="tip-icon" />blinks, as well as while moving in <img src="/img/icons/stealth.webp" class="tip-icon" />stealth.',
      mythic: false,
      unique: true
    },
    {
      name: 'Firmament',
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals 100 <b>bonus</b> physical damage on-hit and <img src="/img/icons/slow.webp" class="tip-icon" />slows the target by (<img src="/img/icons/melee.webp" class="inline-icon" />99% /<img src="/img/icons/ranged.webp" class="inline-icon" />20%) for 0.75 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    attackDamage: 55,
    lethality: 18
  }
}
export default item