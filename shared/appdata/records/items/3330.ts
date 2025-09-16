const item: Item = {
  name: 'Scarecrow Effigy',
  id: 3330,
  rank: 'Consumable',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  requiredChampion: 'FiddleSticks',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/fiddlestickstrinket1.png',
  simpleDescription: 'Periodically place a Stealth Ward',
  active: [
    {
      name: 'Trinket',
      unique: true,
      effects:
        'Consume a charge to place a visible <img src="/img/icons/effigy.webp" class="tip-icon" />Effigy at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight over the surrounding area for 130 – 280 (based on level) seconds. For enemies, it visually appears identical to {{ci|Fiddlesticks|Fiddlesticks}} (including on the minimap) and has no visible health bar until it <i>activates</i>. Enemy <img src="/img/icons/champion.webp" class="tip-icon" />champions that approach it will activate it, causing it to automatically sound a Danger ping to its allies as well as fake a random action for up to 2 seconds. If not destroyed by that time, it will deal 1 damage to itself.',
      range: 625,
    },
  ],
  stats: {},
  shop: {
    prices: {
      total: 0,
      combined: 0,
      sell: 0,
    },
  },
  maps: [11, 12, 21, 30, 35],
}
export default item
