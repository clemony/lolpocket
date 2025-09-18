const item: Item = {
  id: 3156,
  name: 'Maw of Malmortius',
  buildsFrom: [
    {
      id: 3155,
      name: 'Hexdrinker',
      gold: 1300,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3156_fighter_t3_mawofmalmortiui.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Lifeline',
      cooldown: '90',
      effects:
        'If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />200 /<img src="/img/icons/ranged.webp" class="inline-icon" />150) magic damage (+(<img src="/img/icons/melee.webp" class="inline-icon" />150% /<img src="/img/icons/ranged.webp" class="inline-icon" />112.5%) <b>bonus</b> AD) magic damage for 3 seconds. Additionally, triggering this effect grants you 10% omnivamp until the end of combat.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 750,
      sell: 1240,
      total: 3100,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  simpleDescription: 'Grants bonus Attack Damage when Health is low',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    attackDamage: 60,
    magicResistance: 40,
  },
}
export default item
