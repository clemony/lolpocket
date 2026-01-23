// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3599,
  name: 'Kalista\'s Black Spear',
  nicknames: [
    'spear'
  ],
  active: [
    {
      name: 'Oathsworn Bond',
      effects: 'Consumes this item to initiate a 3.5-second cast time and a 3-second <img src="/img/icons/channel.webp" class="tip-icon" />channel afterwards from the user and the target allied champion, both becoming bound allies. The target is unable to act for 6 seconds after the channel\'s duration. Afterwards, the target becomes an <i>Oathsworn</i>.',
      unique: true
    }
  ],
  description: 'Active - Consume: Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.',
  gold: {
    base: 0,
    sell: 0,
    total: 0
  },
  maps: [
    11,
    12,
    21,
    30,
    35
  ],
  noEffects: false,
  rank: 'Starter',
  removed: false,
  requiredChampion: 'Kalista',
  specialRecipe: 0,
  stats: {}
}
export default item