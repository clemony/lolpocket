const item: Item = {
  name: 'Axiom Arc',
  id: 6696,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 2020,
      name: 'The Brutalizer',
      gold: 1337,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6696_axiomarc.png',
  passives: [
    {
      name: 'Flux',
      unique: true,
      effects: 'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them refunds 15% (+0.15% per 1 Lethality) of your ultimate ability\'s <b>total</b> cooldown.',
    },
  ],
  stats: {
    attackDamage: 55,
    lethality: 18,
    abilityHaste: 20,
  },
  shop: {
    prices: {
      total: 3000,
      combined: 613,
      sell: 1200,
    },
    tags: [
      'ASSASSIN',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item