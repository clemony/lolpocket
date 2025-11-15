const item: Item = {
  id: 8010,
  name: 'Bloodletter\'s Curse',
  buildsFrom: [
    {
      id: 3147,
      name: 'Haunting Guise',
      gold: 1300,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4010_bloodlettersveil.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Vile Decay',
      effects:
        'Dealing magic damage to an enemy champion with a champion ability applies a stack of <i>Vile Decay</i> to them for 6 seconds, stacking up to 4 times and up to once per basic attack or ability per cast instance every 0.3 seconds. Each stack inflicts 7.5% magic resistance reduction, up to 30% mr at 4 stacks.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 750,
      sell: 1160,
      total: 2900,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 65,
    health: 400,
  },
}
export default item
