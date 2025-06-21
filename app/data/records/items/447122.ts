const item: Item = {
  name: 'Black Hole Gauntlet',
  id: 447122,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447122_blackholegauntlet.png',
  passives: [
    {
      name: 'Accretion',
      unique: true,
      effects: 'Basic attacks on-hit and <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilizing effects against enemy champions generate 1 and 5 stacks of <i>Accretion</i>, respectively, up to 50. For each <i>Accretion</i> stack, gain 10% <b>base</b> health regeneration, up to 500% <b>base</b> health regeneration at <b>maximum</b> stacks. Additionally, for every 10 <i>Accretion</i> stacks, gain 20% increased size, up to 100% at <b>maximum</b> stacks. Stacks are reset every round and between each phase in a round.',
    },
  ],
  active: [
    {
      name: 'Dark Star',
      unique: true,
      effects: 'Summon a black hole at the target location after a 0.5-second delay that lasts for 2 (+0.1 per 100 <b>bonus</b> health) seconds and has a radius of [ 225 / 75 units]{{times|times}} champion size modifier (+0.1% per <i>Accretion</i> stack). Enemies within are dealt 30 – 100 (based on level) magic damage (+6.5% of user\'s <b>maximum</b> health) magic damage every second, <img src="/img/icons/slow.webp" class="tip-icon" />slowed by 35%, and <img src="/img/icons/kinematics.webp" class="tip-icon" />dragged inward until they reach the horizon at the center. Additionally, for each enemy champion inside the black hole, generate 1 stack of <i>Accretion</i> per second.',
    },
  ],
  stats: {
    health: 900,
    abilityHaste: 25,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'TANK',
    ],
  },
  maps: [
    30,
  ],
}
export default item