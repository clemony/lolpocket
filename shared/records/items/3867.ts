const item: Item = {
  id: 3867,
  name: 'Bounty of Worlds',
  active: [
    {
      name: 'Ward',
      effects:
        'Consumes a charge to place a <img src="/img/icons/stealth-ward.webp" class="tip-icon" />Stealth Ward at the target location, which grants <img src="/img/icons/sight.webp" class="tip-icon" />sight of the surrounding area. Charges refill upon visiting the shop.',
      range: 600,
      unique: true,
    },
  ],
  buildsInto: [
    {
      id: 3869,
      name: 'Celestial Opposition',
      gold: 400,
    },
    {
      id: 3870,
      name: 'Dream Maker',
      gold: 400,
    },
    {
      id: 3871,
      name: 'Zaz\'Zak\'s Realmspike',
      gold: 400,
    },
    {
      id: 3876,
      name: 'Solstice Sleigh',
      gold: 400,
    },
    {
      id: 3877,
      name: 'Bloodsong',
      gold: 400,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3867_bountyofworlds.png',
  maps: [11],
  noEffects: false,
  passives: [
    {
      name: 'Upgrade',
      effects:
        'You have completed the support quest and can now upgrade this item, <b>Bounty of Worlds</b>, for free into <i><img src="/img/icons/bloodsong.webp" class="tip-icon" />Bloodsong</i>, <i><img src="/img/icons/celestial-opposition.webp" class="tip-icon" />Celestial Opposition</i>, <i><img src="/img/icons/dream-maker.webp" class="tip-icon" />Dream Maker</i>, <i><img src="/img/icons/solstice-sleigh.webp" class="tip-icon" />Solstice Sleigh</i>, or <i><img src="/img/icons/zazzaks-realmspike.webp" class="tip-icon" />Zaz\'Zak\'s Realmspike</i> by selecting one of them from a custom menu in the HUD or the shop. <i>The upgrade can be done outside the shop using the menu.</i>',
      unique: true,
    },
    {
      effects: 'Receives diminishing gold from excessive minion kills.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 160,
      total: 400,
    },
    purchasable: false,
    tags: ['SUPPORT'],
  },
  specialRecipe: 3866,
  stats: {
    goldPer10: 5,
    health: 200,
    healthRegen: 75,
    manaRegen: 75,
  },
}
export default item
