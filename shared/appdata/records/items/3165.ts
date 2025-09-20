const item: Item = {
  id: 3165,
  name: 'Morellonomicon',
  nicknames: ['nmst', 'grievous', 'last shadow', 'book', 'forbidden book'],
  buildsFrom: [
    {
      id: 3916,
      name: 'Oblivion Orb',
      gold: 800,
    },
    {
      id: 1026,
      name: 'Blasting Wand',
      gold: 850,
    },
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3165_mage_t3_morellonomicon.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Grievous Wounds',
      effects:
        'Dealing magic damage to enemy champions inflicts them with <img src="/img/icons/grievous-wounds.webp" class="tip-icon" />Grievous Wounds for 3 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 1140,
      total: 2850,
    },
    tags: ['MAGE', 'SUPPORT'],
  },
  simpleDescription: 'Increases magic damage',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 75,
    health: 350,
  },
}
export default item
