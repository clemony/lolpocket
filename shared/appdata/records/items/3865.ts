const item: Item = {
  name: 'World Atlas',
  id: 3865,
  rank: 'Starter',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3865_worldatlas.png',
  passives: [
    {
      name: 'Support Quest',
      unique: true,
      effects:
        'Earn <img src="/img/icons/gold-coin.webp" class="inline-icon" />400 through <i>Shared Riches</i> to automatically upgrade to <img src="/img/icons/runic-compass.webp" class="tip-icon" />Runic Compass, gaining the <i>Ward</i> active with 3 wards in stock.',
    },
    {
      name: 'Shared Riches',
      unique: true,
      effects:
        'Grants a <b>Shared Riches</b> charge every 20 seconds, up to 3 charges. When an allied champion is within 1050 units of you, consume a charge in the following ways:<br>• Kill a minion by any means, granting you <img src="/img/icons/gold-coin.webp" class="inline-icon" />15 and the nearest allied champion kill <img src="/img/icons/gold-coin.webp" class="inline-icon" />gold. Damaging a minion <b>below</b> (<img src="/img/icons/melee.webp" class="inline-icon" />50% /<img src="/img/icons/ranged.webp" class="inline-icon" />30%) of its <b>maximum</b> health <img src="/img/icons/execute.webp" class="tip-icon" />executes it.<br>• Damage an enemy champion or structure with a basic attack or ability, granting you <img src="/img/icons/gold-coin.webp" class="inline-icon" />(<img src="/img/icons/melee.webp" class="inline-icon" />22 /<img src="/img/icons/ranged.webp" class="inline-icon" />20). A charge may be consumed this way only once per attack or ability.',
    },
    {
      unique: true,
      effects: 'Receives diminishing gold from excessive minion kills.',
    },
    {
      unique: true,
      effects:
        'Receives <img src="/img/icons/lane-swap-detector.webp" class="tip-icon" />Lane Swap Detector penalties if detected within the top or middle lanes early in the game.',
    },
  ],
  stats: {
    goldPer10: 3,
    health: 30,
    healthRegen: 25,
    manaRegen: 25,
  },
  shop: {
    prices: {
      total: 400,
      combined: 400,
      sell: 160,
    },
    tags: ['SUPPORT', 'MAGE'],
  },
  maps: [11],
}
export default item
