const item: Item = {
  id: 6616,
  name: 'Staff of Flowing Water',
  nicknames: ['nami'],
  buildsFrom: [
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3744_enchanter_t3_staffofflowingwater.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Rapids',
      effects:
        '<img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding allied champions (<i>excluding yourself</i>) grants you and them 45 ability power for 6 seconds.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 800,
      sell: 900,
      total: 2250,
    },
    tags: ['SUPPORT'],
  },
  simpleDescription:
    'Your heals and shields reduce crowd control and grant Move Speed',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 35,
    healAndShieldPower: 10,
    manaRegen: 125,
  },
}
export default item
