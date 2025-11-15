const item: Item = {
  id: 3094,
  name: 'Rapid Firecannon',
  nicknames: ['canon', 'gun', 'rapidfire', 'rfc'],
  buildsFrom: [
    {
      id: 3086,
      name: 'Zeal',
      gold: 1200,
    },
    {
      id: 3144,
      name: 'Scout\'s Slingshot',
      gold: 600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3094_marksman_t3_rapidfirehandcannon.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Energized',
      effects:
        'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      unique: true,
    },
    {
      name: 'Sharpshooter',
      effects:
        'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack deals 40 <b>bonus</b> magic damage on-hit. <i>Energized</i> attacks gain 35% <b>bonus</b> range, capped at 150.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 850,
      sell: 1060,
      total: 2650,
    },
    tags: ['MARKSMAN', 'MOVEMENT'],
  },
  simpleDescription:
    'Movement builds charges that release a sieging fire attack on release',
  specialRecipe: 0,
  stats: {
    attackSpeed: 35,
    criticalStrikeChance: 25,
    percentMovespeed: 4,
  },
}
export default item
