const item: Item = {
  name: 'Moonstone Renewer',
  id: 6617,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6617_enchanter_t4_moonstonerenewer.png',
  simpleDescription: 'Your heals and shields cool down faster and have greater effect on low health allies',
  nicknames: [
    'yuumi',
  ],
  passives: [
    {
      name: 'Starlit Grace',
      unique: true,
      effects: '<img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding an allied champion chains the effect to the other nearest allied champion within 800 units of them (<i>excluding yourself</i>), granting them 30% of the heal or 35% of the shield\'s initial strength. If no other allied champions are in the radius, grant the same target an additional 30% of the heal or 35% of the shield.',
    },
  ],
  stats: {
    abilityPower: 25,
    health: 200,
    manaRegen: 125,
    abilityHaste: 20,
  },
  shop: {
    prices: {
      total: 2200,
      combined: 500,
      sell: 880,
    },
    tags: [
      'SUPPORT',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item