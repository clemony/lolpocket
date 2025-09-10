const item: Item = {
  name: 'Terminus',
  id: 3302,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3051,
      name: 'Hearthbound Axe',
      gold: 1200
    },
    {
      id: 1043,
      name: 'Recurve Bow',
      gold: 700
    }
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3302_terminus.png',
  simpleDescription: 'Kill minions periodically to heal and grant gold to a nearby ally',
  nicknames: [
    'bow',
    'sentinel'
  ],
  passives: [
    {
      name: 'Shadow',
      unique: true,
      effects: 'Basic attacks deal 30 <b>bonus</b> magic damage on-hit.'
    },
    {
      name: 'Juxtaposition',
      unique: true,
      effects: 'Basic attacks <img src="/img/icons/on-hit.webp" class="tip-icon" />on-hit against champions alternate between <i>Light</i> and <i>Dark</i> hits, each one granting a bonus for 5 seconds that stacks up to 3 times. <i>Light</i> hits grant 1 – 14 (based on level) <b>bonus</b> armor and <b>bonus</b> magic resistance while <i>Dark</i> hits grant 10% armor penetration and magic penetration, for a total of 18 – 24 (based on level) <b>bonus</b> resistances and 30% resistances penetration at maximum stacks of each.'
    }
  ],
  stats: {
    attackDamage: 30,
    attackSpeed: 35
  },
  shop: {
    prices: {
      total: 3000,
      combined: 1100,
      sell: 1200
    },
    tags: [
      'FIGHTER',
      'MARKSMAN',
      'ONHIT_EFFECTS',
      'ARMOR_PEN',
      'MAGIC_PEN'
    ]
  },
  maps: [
    11,
    12,
    21,
    35
  ]
}
export default item