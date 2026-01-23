// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 228002,
  name: 'Wooglet\'s Witchcap',
  nicknames: [
    'Quest',
    'Deathcap'
  ],
  active: [
    {
      name: 'Stasis',
      effects: 'Put yourself in <img src="/img/icons/stasis.webp" class="tip-icon" />stasis for 2.5 seconds, rendering you <img src="/img/icons/untargetable.webp" class="tip-icon" />untargetable and <img src="/img/icons/invulnerable.webp" class="tip-icon" />invulnerable for the duration but also unable to move, declare basic attacks, cast abilities, use summoner spells, or activate items.',
      unique: true
    }
  ],
  description: '300 Ability Power\n50 Armor\n20 Ability Haste\n\nMagical Opus\nIncreases your total Ability Power by 50%.\n\nRequires Augment: Quest: Wooglet\'s Witchcap\n\nTime Stop\nEnter Stasis for 2.5 seconds.',
  gold: {
    base: 6000,
    sell: 4200,
    total: 6000
  },
  maps: [
    12,
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Magical Opus',
      effects: 'Increase your ability power by 50%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 300,
    armor: 50
  }
}
export default item