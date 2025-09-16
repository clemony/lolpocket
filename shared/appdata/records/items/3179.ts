const item: Item = {
  name: 'Umbral Glaive',
  id: 3179,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3134,
      name: 'Serrated Dirk',
      gold: 1000,
    },
    {
      id: 3133,
      name: 'Caulfield\'s Warhammer',
      gold: 1050,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3179_assassin_t3_umbralglaive.png',
  simpleDescription: 'Provides trap and ward detection periodically',
  passives: [
    {
      name: 'Blackout',
      unique: true,
      effects:
        'When near an enemy stealthed <img src="/img/icons/ward.webp" class="tip-icon" />ward or <img src="/img/icons/stealthed-trap.webp" class="tip-icon" />trap, gain <i>Blackout</i> for 8 seconds.',
      cooldown: '90',
      range: 400,
    },
    {
      name: 'Blackout',
      unique: false,
      effects:
        'You <img src="/img/icons/disabled-ward.webp" class="tip-icon" />disable surrounding stealthed wards, as well as <img src="/img/icons/expose.webp" class="tip-icon" />expose and <img src="/img/icons/true-sight.webp" class="tip-icon" />reveal nearby stealthed wards and traps while <i>Blackout</i> is active.',
    },
    {
      name: 'Extinguish',
      unique: true,
      effects:
        'Your basic attacks deal (<img src="/img/icons/melee.webp" class="inline-icon" />2 /<img src="/img/icons/ranged.webp" class="inline-icon" />1) <b>bonus</b> true damage to wards.',
    },
  ],
  stats: {
    attackDamage: 55,
    lethality: 15,
    abilityHaste: 10,
  },
  shop: {
    prices: {
      total: 2500,
      combined: 450,
      sell: 1000,
    },
    tags: ['ASSASSIN'],
  },
  maps: [11, 12, 21, 35],
}
export default item
