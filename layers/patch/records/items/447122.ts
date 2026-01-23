// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 447122,
  name: 'Black Hole Gauntlet',
  active: [
    {
      name: 'Dark Star',
      effects: 'Summon a black hole at the target location after a 0.5-second delay that lasts for 2 (+0.1 per 100 <b>bonus</b> health) seconds. Enemies within are dealt 30 – 100 (based on level) magic damage (+5% of user\'s <b>maximum</b> health) magic damage every second, <img src="/img/icons/slow.webp" class="tip-icon" />slowed by 30%, and <img src="/img/icons/kinematics.webp" class="tip-icon" />dragged inward until they reach the horizon at the center. Additionally, for each enemy champion inside the black hole, generate 1 stack of <i>Accretion</i> per second.',
      unique: true
    }
  ],
  description: '900 Health\n25 Ability Haste\n\nAccretion\nOn-Hit, gain 1 stack of Accretion, and 5 stacks for immobilizing an enemy champion. These stacks last for the rest of the round, up to 50. Each stack increases your size by 2%.\n\nACTIVE (0s)\nDark Star\nSummon a Black Hole that scales with your size. Slowing nearby enemies by 30% while those in the center are pulled closer and take  magic damage each second, granting you 1 stack of Accretion. The Black Hole lasts for  seconds.\n\nIncreases in size every 10 stacks. ',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Accretion',
      effects: 'Basic attacks on-hit and <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilizing effects against enemy champions generate 1 and 5 stacks of <i>Accretion</i>, respectively, up to 50. For each <i>Accretion</i> stack, gain 10% <b>base</b> health regeneration, up to 500% <b>base</b> health regeneration at <b>maximum</b> stacks. Additionally, for every 10 <i>Accretion</i> stacks, gain 20% increased size, up to 100% at <b>maximum</b> stacks. Stacks are reset every round and between each phase in a round.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    health: 900
  }
}
export default item