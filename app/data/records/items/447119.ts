const item: Item = {
  name: 'Lightning Rod',
  id: 447119,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/447119_lightningrod.png',
  passives: [
    {
      name: 'Call Lightning',
      unique: true,
      effects: 'Automatically river summon a storm cloud above you, which strikes a lightning bolt at your current location after 1.5 seconds to deal 135 – 230 (based on level) magic damage (+30% <b>bonus</b> AD) (+50% AP) (+10% of target\'s <b>maximum</b> health) magic damage to enemies within the area and <img src="/img/icons/slow.webp" class="tip-icon" />slow them by 30% for 2 seconds. If you are within the lightning strike, gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield equal to 14% of your <b>maximum</b> health (+75% AP) for 2 seconds.',
      cooldown: '16',
    },
    {
      name: 'Fully Automated',
      unique: true,
      effects: 'Automatic river effects have their cooldown reduced by 1 second and now benefit from your ability haste. <i>Call Lightning\'s</i> cooldown cannot be reduced below 5 seconds by this effect.',
    },
  ],
  stats: {
    armor: 30,
    attackSpeed: 30,
    health: 500,
    magicResistance: 30,
    percentMovespeed: 8,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'TANK',
    ],
  },
  maps: [
    30,
  ],
}
export default item