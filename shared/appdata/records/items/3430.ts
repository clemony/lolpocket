const item: Item = {
  id: 3430,
  name: 'Rite of Ruin',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3430_riteofruin.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Wrath and Ruin',
      effects:
        'Casting an ability grants <img src="/img/icons/2.5%-critical-strike-chance.webp" class="tip-icon" />2.5% critical strike chance for 6 seconds, stacking up to 8 times for a maximum of <img src="/img/icons/critical-strike-chance.webp" class="tip-icon" />critical strike chance.',
      unique: true,
    },
    {
      name: 'Salvage the Wreckage',
      effects:
        'Casting an ability has a 0% – 100% (based on critical strike chance) chance to grant you or your ally a <img src="/img/icons/shield.webp" class="tip-icon" />shield for 3 seconds that absorbs 70 – 210 (based on level) (+25% <b>bonus</b> AD) (+15% AP) damage.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 2500,
      sell: 1000,
      total: 2500,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 50,
    criticalStrikeChance: 25,
  },
}
export default item
