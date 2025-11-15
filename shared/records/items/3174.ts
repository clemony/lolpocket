const item: Item = {
  id: 3174,
  name: 'Armored Advance',
  buildsFrom: [
    {
      id: 3047,
      name: 'Plated Steelcaps',
      gold: 1200,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/boots_tier3_platedsteelcaps_64.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Plating',
      effects:
        'Reduces incoming damage from all basic attacks by 10% (<i>excluding turret attacks</i>).',
      unique: true,
    },
    {
      name: 'Noxian Endurance',
      cooldown: '15',
      effects:
        'Taking physical damage from champions grants you a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs 10 – 120 (based on level) (+4% <b>maximum</b> health) physical damage for 4 seconds.',
      unique: true,
    },
  ],
  rank: 'Boots',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 680,
      total: 1700,
    },
  },
  simpleDescription: 'Deal damage to empower your heals and shields',
  specialRecipe: 0,
  stats: {
    armor: 40,
    flatMovespeed: 50,
  },
}
export default item
