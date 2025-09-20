const item: Item = {
  id: 4628,
  name: 'Horizon Focus',
  nicknames: ['snipe', 'lock on'],
  buildsFrom: [
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4628_mage_t3_horizonfocus.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Hypershot',
      effects:
        'Dealing ability damage to a champion at 600 or more units away from the cast position <img src="/img/icons/standard-sight.webp" class="tip-icon" />reveals them for 6 seconds.',
      unique: true,
    },
    {
      name: 'Focus',
      cooldown: '30',
      effects:
        'Upon triggering <i>Hypershot</i>, grant <img src="/img/icons/sight.webp" class="tip-icon" />sight of the area 1400 units around the target for 2 seconds and apply <i>Hypershot\'s</i> effects to enemy champions within the area for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 250,
      sell: 1120,
      total: 2800,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'Immobilizing a champion causes lightning to strike them',
  specialRecipe: 0,
  stats: {
    abilityHaste: 25,
    abilityPower: 115,
  },
}
export default item
