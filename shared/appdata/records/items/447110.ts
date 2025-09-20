const item: Item = {
  id: 447110,
  name: 'Moonflair Spellblade',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7110_moonflairspellblade.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Relentless',
      effects:
        'Casting an ability <img src="/img/icons/basic-attack-reset.webp" class="tip-icon" />resets your basic attack timer and empowers your next two basic attacks with 90% <b>bonus</b> attack speed. Additionally, each basic attack on-attack reduces the cooldowns of all your abilities by 0.5 seconds.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityPower: 85,
    health: 400,
    tenacity: 30,
  },
}
export default item
