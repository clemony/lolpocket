const item: Item = {
  id: 3155,
  name: 'Hexdrinker',
  buildsFrom: [
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
    {
      id: 1033,
      name: 'Null-Magic Mantle',
      gold: 400,
    },
    {
      id: 1036,
      name: 'Long Sword',
      gold: 350,
    },
  ],
  buildsInto: [
    {
      id: 3156,
      name: 'Maw of Malmortius',
      gold: 3100,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3155_fighter_t2_hexdrinker.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Lifeline',
      cooldown: '90',
      effects:
        'If you would take magic damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs (<img src="/img/icons/melee.webp" class="inline-icon" />110 – 280 /<img src="/img/icons/ranged.webp" class="inline-icon" />82.5 – 210) magic damage for 2.5 seconds.',
      unique: true,
    },
  ],
  rank: 'Epic',
  removed: false,
  shop: {
    prices: {
      combined: 200,
      sell: 520,
      total: 1300,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN'],
  },
  simpleDescription: 'Increases Attack Damage and Magic Resist',
  specialRecipe: 0,
  stats: {
    attackDamage: 25,
    magicResistance: 25,
  },
}
export default item
