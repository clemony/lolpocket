const item: Item = {
  name: 'Voltaic Cyclosword',
  id: 6699,
  rank: 'Legendary',
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
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6699_voltaiccyclosword.png',
  passives: [
    {
      name: 'Energized',
      unique: true,
      effects: 'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.'
    },
    {
      name: 'Galvanize',
      unique: true,
      effects: '<img src="/img/icons/energized.webp" class="tip-icon" />Energized stack generation is increased by 75% for distance travelled from <img src="/img/icons/dash.webp" class="tip-icon" />dashes, <img src="/img/icons/lunge.webp" class="tip-icon" />lunges and <img src="/img/icons/blink.webp" class="tip-icon" />blinks, as well as while moving in <img src="/img/icons/stealth.webp" class="tip-icon" />stealth.'
    },
    {
      name: 'Firmament',
      unique: true,
      effects: 'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals 100 <b>bonus</b> physical damage on-hit and <img src="/img/icons/slow.webp" class="tip-icon" />slows the target by (<img src="/img/icons/melee.webp" class="inline-icon" />99% /<img src="/img/icons/ranged.webp" class="inline-icon" />20%) for 0.75 seconds.'
    }
  ],
  stats: {
    attackDamage: 55,
    lethality: 18,
    abilityHaste: 10
  },
  shop: {
    prices: {
      total: 3000,
      combined: 963,
      sell: 1200
    },
    tags: [
      'ASSASSIN'
    ]
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item