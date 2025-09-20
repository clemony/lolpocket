const item: Item = {
  id: 443061,
  name: 'Force of Entropy',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3061_forceofentropy.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Atrophy',
      effects:
        '<img src="/img/icons/immobilize.webp" class="tip-icon" />Immobilizing effects against <img src="/img/icons/champions.webp" class="tip-icon" />champions have a 0% – 100% (based on critical strike chance) chance to increase in duration by 0.25 seconds (+33% of immobilizing effect\'s duration).',
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
    tags: ['TANK'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 30,
    criticalStrikeChance: 25,
    health: 900,
  },
}
export default item
