const item: Item = {
  id: 446671,
  name: 'Galeforce',
  nicknames: ['squallrider'],
  active: [
    {
      name: 'Cloudburst II',
      effects:
        '<img src="/img/icons/dash.webp" class="tip-icon" />Dash to the target location and fire three homing missiles at the most wounded enemy within 750 units of you at the end of the dash, prioritizing enemy champions. Each missile deals (+26.6 {{recurring|6|6|6|6}}% <b>bonus</b> AD) physical damage, for a total of 150 – 350 (based on level) (+80% <b>bonus</b> AD) physical damage, increased by 0% – 50% (based on target\'s missing health).',
      range: 0,
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6671_marksman_t4_galeforce.png',
  maps: [30],
  noEffects: false,
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['MARKSMAN'],
  },
  specialRecipe: 220007,
  stats: {
    attackDamage: 65,
    attackSpeed: 30,
    criticalStrikeChance: 25,
    percentMovespeed: 12,
  },
}
export default item
