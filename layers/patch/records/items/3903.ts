// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 3903,
  name: '<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>',
  description: 'Allies in the Cannon Barrage gain bonus Move Speed.',
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
      name: 'Raise Morale',
      effects: '{{ci|Gangplank|Gangplank}} and his allies within {{ai|Cannon Barrage|Gangplank|Gangplank}} gain 40% <b>bonus</b> movement speed, which persists for 2 seconds after leaving the area.',
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