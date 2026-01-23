// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3157,
  name: 'Zhonya\'s Hourglass',
  nicknames: [
    'zhg',
    'zonyas',
    'zhonyas',
    'Witchcap',
    'Wooglets'
  ],
  active: [
    {
      name: 'Time Stop',
      effects: 'Put yourself in <img src="/img/icons/stasis.webp" class="tip-icon" />stasis for 2.5 seconds, rendering you <img src="/img/icons/untargetable.webp" class="tip-icon" />untargetable and <img src="/img/icons/invulnerable.webp" class="tip-icon" />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.',
      unique: true
    }
  ],
  buildsFrom: [
    {
      id: 1058,
      name: 'Needlessly Large Rod',
      gold: 1200
    },
    {
      id: 2420,
      name: 'Seeker\'s Armguard',
      gold: 1600
    }
  ],
  description: '105 Ability Power\n50 Armor\n\nTime Stop\nEnter Stasis for 2.5 seconds.',
  gold: {
    base: 450,
    sell: 2275,
    total: 3250
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 105,
    armor: 50
  }
}
export default item