const item: Item = {
  name: 'Dark Seal',
  id: 1082,
  rank: 'Starter',
  buildsInto: [
    {
      id: 3041,
      name: 'Mejai\'s Soulstealer',
      gold: 1500,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1082_mage_t1_darkseal.png',
  simpleDescription: 'Provides Ability Power and Mana.  Increases in power as you kill enemies.',
  nicknames: [
    'Noxian',
  ],
  passives: [
    {
      name: 'Glory',
      unique: true,
      effects: 'Gain 2 stacks for each champion kill and 1 stack for each assist, up to a <b>maximum</b> of 10 stacks. For every stack, gain 4 ability power, up to 40 AP at <b>maximum</b> stacks. Lose 5 stacks on death. Stacks are preserved when upgrading to <img src="/img/icons/mejais-soulstealer.webp" class="tip-icon" />Mejai\'s Soulstealer.',
    },
  ],
  stats: {
    abilityPower: 15,
    health: 50,
  },
  shop: {
    prices: {
      total: 350,
      combined: 350,
      sell: 140,
    },
    tags: [
      'MAGE',
    ],
  },
  maps: [
    11,
  ],
}
export default item