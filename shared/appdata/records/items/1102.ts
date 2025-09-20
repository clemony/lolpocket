const item: Item = {
  id: 1102,
  name: 'Gustwalker Hatchling',
  nicknames: ['jungle'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1102_jungle_t1_gustwalkerhatchling.png',
  maps: [11, 21],
  noEffects: false,
  passives: [
    {
      name: 'Jungle Companions',
      effects:
        'Summon a <i>Gustwalker Hatchling</i> companion to assist you in combat against monsters.',
      unique: true,
    },
    {
      name: 'Gustwalker\'s Gait',
      effects:
        'Feed your companion enough treats to evolve it and upgrade your <img src="/img/icons/smite.webp" class="tip-icon" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Gustwalker&#039;s Gait|Gustwalker&#039;s Gait}} buff.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 180,
      total: 450,
    },
    tags: ['FIGHTER', 'MARKSMAN', 'ASSASSIN', 'MAGE', 'TANK', 'LIFESTEAL_VAMP'],
  },
  specialRecipe: 0,
  stats: {},
}
export default item
