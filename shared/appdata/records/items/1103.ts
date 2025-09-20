const item: Item = {
  id: 1103,
  name: 'Mosstomper Seedling',
  nicknames: ['jungle'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1103_jungle_t1_mosstomperseedling.png',
  maps: [11, 21],
  noEffects: false,
  passives: [
    {
      name: 'Jungle Companions',
      effects:
        'Summon a <i>Mosstomper Seedling</i> companion to assist you in combat against monsters.',
      unique: true,
    },
    {
      name: 'Mosstomper\'s Courage',
      effects:
        'Feed your companion enough treats to evolve it and upgrade your <img src="/img/icons/smite.webp" class="tip-icon" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Mosstomper&#039;s Courage|Mosstomper&#039;s Courage}} buff.',
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
