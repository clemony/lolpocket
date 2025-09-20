const item: Item = {
  id: 447112,
  name: 'Flesheater',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7112_flesheater.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Hack the Meat',
      effects:
        'Dealing damage reduces the target\'s armor and magic resistance by 3 for 5 seconds, stacking up to 10 times for a total resistances reduction of 30. Stacks can be applied to each enemy only once every second.',
      unique: true,
    },
    {
      name: 'Cannibalize',
      effects:
        'If you or the allied champion on your team score a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion, you are both <img src="/img/icons/heal.webp" class="tip-icon" />healed for 18% of the taken down target\'s <b>maximum</b> health.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 20,
    health: 500,
  },
}
export default item
