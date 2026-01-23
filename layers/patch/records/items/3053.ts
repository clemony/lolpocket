// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3053,
  name: 'Sterak\'s Gage',
  nicknames: [
    'juggernaut',
    'primal',
    'shield',
    'sterak\'s cage'
  ],
  buildsFrom: [
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875
    },
    {
      id: 2021,
      name: 'Tunneler',
      gold: 1150
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    }
  ],
  description: '400 Health\n20% Tenacity\n\nThe Claws that Catch\nGain bonus Attack Damage.\n\nLifeline\nTaking damage that would reduce your Health below 30% grants a decaying Shield for 4.5 seconds.',
  gold: {
    base: 775,
    sell: 2240,
    total: 3200
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'The Claws that Catch',
      effects: 'Gain <b>bonus</b> attack damage equal to 45% <b>base</b> AD.',
      mythic: false,
      unique: true
    },
    {
      name: 'Lifeline',
      cooldown: '90',
      effects: 'If you would take damage that would reduce you below 30% of your <b>maximum</b> health, you first gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield that absorbs damage equal to 60% of <b>bonus</b> health which decays over 4.5 seconds.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 400,
    tenacity: 20
  }
}
export default item