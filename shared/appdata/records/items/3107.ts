const item: Item = {
  id: 3107,
  name: 'Redemption',
  active: [
    {
      name: 'Intervention',
      effects:
        'Call upon a 550-radius beam of light to strike upon the target location after 2.5 seconds, granting <img src="/img/icons/sight.webp" class="tip-icon" />sight of the area for the duration. Allies within the area are <img src="/img/icons/heal.webp" class="tip-icon" />healed for 200 – 400 (based on target\'s level), while enemy champions within take 10% of target\'s <b>maximum</b> health as true damage. <b>Can be used while dead.</b>',
      range: 5500,
      unique: true,
    },
  ],
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 3114,
      name: 'Forbidden Idol',
      gold: 600,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3107_enchanter_t3_redemption.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 900,
      sell: 920,
      total: 2300,
    },
    tags: ['SUPPORT'],
  },
  simpleDescription: 'Activate to heal allies and damage enemies in an area',
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    healAndShieldPower: 10,
    health: 200,
    manaRegen: 100,
  },
}
export default item
