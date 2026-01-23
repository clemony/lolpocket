// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 1082,
  name: 'Dark Seal',
  nicknames: [
    'Noxian'
  ],
  buildsInto: [
    {
      id: 3041,
      name: 'Mejai\'s Soulstealer',
      gold: 1500
    }
  ],
  description: '15 Ability Power\n50 Health\n\nGlory\nTakedowns grant Glory, up to 10. 5 Glory is lost on death.\nGain 4 Ability Power per Glory.',
  gold: {
    base: 350,
    sell: 140,
    total: 350
  },
  maps: [
    11
  ],
  noEffects: false,
  passives: [
    {
      name: 'Glory',
      effects: 'Gain 2 stacks for each champion kill and 1 stack for each assist, up to a <b>maximum</b> of 10 stacks. For every stack, gain 4 ability power, up to 40 AP at <b>maximum</b> stacks. Lose 5 stacks on death. Stacks are preserved when upgrading to <img src="/img/icons/mejais-soulstealer.webp" class="tip-icon" />Mejai\'s Soulstealer.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Starter',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityPower: 15,
    health: 50
  }
}
export default item