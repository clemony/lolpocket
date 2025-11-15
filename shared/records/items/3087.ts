const item: Item = {
  id: 3087,
  name: 'Statikk Shiv',
  buildsFrom: [
    {
      id: 3144,
      name: 'Scout\'s Slingshot',
      gold: 600,
    },
    {
      id: 6690,
      name: 'Rectrix',
      gold: 775,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3087_statikk_shiv.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Electrospark',
      effects:
        'Your next 3 basic attacks <img src="/img/icons/on-hit.webp" class="tip-icon" />on-hit within 8 seconds are empowered to deal 60 <b>bonus</b> magic damage, increased to 85 magic damage against non-champions. This bounces to the closest target within 500 units, repeating from the new target to strike up to 5 targets (25 – 10 (based on level) second cooldown, starts after using the first empowered attack).',
      unique: true,
    },
    {
      name: 'Electroshock',
      effects:
        'Scoring a <img src="/img/icons/takedown.webp" class="tip-icon" />takedown against an enemy champion within 3 seconds of damaging them resets <i>Electrospark\'s</i> cooldown.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1080,
      total: 2700,
    },
    tags: ['MARKSMAN', 'ONHIT_EFFECTS'],
  },
  simpleDescription:
    'Movement builds charges that release chain lightning on basic attack',
  specialRecipe: 0,
  stats: {
    attackDamage: 45,
    attackSpeed: 30,
    percentMovespeed: 4,
  },
}
export default item
