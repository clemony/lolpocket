const item: Item = {
  id: 3599,
  name: 'Black Spear',
  active: [
    {
      name: 'Oathsworn Bond',
      effects:
        'Consumes this item to initiate a 3.5-second cast time and a 3-second <img src="/img/icons/channel.webp" class="tip-icon" />channel afterwards from the user and the target allied champion, both becoming bound allies. The target is unable to act for 6 seconds after the channel\'s duration. Afterwards, the target becomes an <i>Oathsworn</i>.',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3599_kalistapassiveitem.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  rank: 'Starter',
  removed: false,
  requiredChampion: 'Kalista',
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
  },
  simpleDescription: 'Kalista\'s spear that binds an Oathsworn Ally.',
  specialRecipe: 0,
  stats: {},
}
export default item
