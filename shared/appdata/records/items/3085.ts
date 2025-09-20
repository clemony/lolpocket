const item: Item = {
  id: 3085,
  name: 'Runaan\'s Hurricane',
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3085_marksman_t3_runaans.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Wind\'s Fury',
      effects:
        'Basic attacks on-attack fire additional bolts at up to 2 enemies in front of you, each dealing 55% AD physical damage. Bolts apply <img src="/img/icons/on-hit.webp" class="tip-icon" />on-hit effects and are affected by <img src="/img/icons/critical-strike.webp" class="tip-icon" />critical strike modifiers.',
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
    tags: ['MARKSMAN', 'ONHIT_EFFECTS', 'MOVEMENT'],
  },
  simpleDescription: 'Ranged attacks fire two bolts at nearby enemies',
  specialRecipe: 0,
  stats: {
    attackSpeed: 40,
    criticalStrikeChance: 25,
    percentMovespeed: 4,
  },
}
export default item
