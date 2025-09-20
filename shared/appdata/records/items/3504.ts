const item: Item = {
  id: 3504,
  name: 'Ardent Censer',
  buildsFrom: [
    {
      id: 3113,
      name: 'Aether Wisp',
      gold: 900,
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3504_enchanter_t3_ardentcenser.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Sanctify',
      effects:
        '<img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding allied champions (<i>excluding yourself</i>) enhances you and them for 6 seconds, granting 25% <b>bonus</b> attack speed and 20 <b>bonus</b> magic damage on-hit on basic attacks.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 700,
      sell: 880,
      total: 2200,
    },
    tags: ['SUPPORT', 'ATTACK_SPEED'],
  },
  simpleDescription:
    'Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.',
  specialRecipe: 0,
  stats: {
    abilityPower: 45,
    healAndShieldPower: 10,
    manaRegen: 125,
    percentMovespeed: 4,
  },
}
export default item
