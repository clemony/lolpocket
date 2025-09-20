const item: Item = {
  id: 3152,
  name: 'Hextech Rocketbelt',
  nicknames: ['protobelt', 'rocket belt'],
  active: [
    {
      name: 'Supersonic',
      effects:
        '<img src="/img/icons/dash.webp" class="tip-icon" />Dash 275 units in the target direction, though not through terrain, then unleash an arc of 7 rockets forward which upon collision explode in a 185-radius area. Enemies within 85 units of your dash, a 400 unit distance behind you {{bug|2|2}}, and ones hit by any rocket\'s explosion are dealt 100 (+10% AP) magic damage, once per cast.',
      range: 0,
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 3145,
      name: 'Hextech Alternator',
      gold: 1100,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3152_mage_t4_hextechrocketbelt.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 300,
      sell: 1060,
      total: 2650,
    },
    tags: ['MAGE', 'MOVEMENT'],
  },
  simpleDescription: 'Activate to dash forward and unleash a fiery explosion',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 70,
    health: 300,
  },
}
export default item
