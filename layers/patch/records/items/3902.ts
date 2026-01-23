// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3902,
  name: '<rarityLegendary>Death\'s Daughter</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>',
  description: 'Cannon Barrage additionally fires a mega-cannonball at the center of the Barrage, dealing bonus true damage and Slowing.',
  gold: {
    base: 0,
    purchasable: false,
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
  passives: [
    {
      name: 'Death\'s Daughter',
      effects: 'A massive cannonball lands after {{ais|Cannon Barrage|Gangplank|Gangplank}} first cluster of waves, dealing <img src="/img/icons/true-damage.webp" class="tip-icon" />true damage (+30% AP) true damage to enemies struck and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 75% for 1 second.',
      mythic: false,
      unique: true
    }
  ],
  removed: false,
  requiredChampion: 'Gangplank',
  specialRecipe: 0,
  stats: {}
}
export default item