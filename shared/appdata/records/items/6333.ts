const item: Item = {
  name: 'Death\'s Dance',
  id: 6333,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 2019,
      name: 'Steel Sigil',
      gold: 1100,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6333_fighter_t3_deathsdance.png',
  nicknames: ['dd', '<s>Bloodbag</s>'],
  passives: [
    {
      name: 'Ignore Pain',
      unique: true,
      effects:
        'Reduces (<img src="/img/icons/melee.webp" class="inline-icon" />30% /<img src="/img/icons/ranged.webp" class="inline-icon" />10%) of all post-mitigation physical damage and magic damage damage received and instead stores the damage to successively take it as true damage over 3 seconds, dealing a third of the stored damage each second.',
    },
    {
      name: 'Defy',
      unique: true,
      effects:
        'If an enemy champion dies within 3 seconds of you damaging them, removes <i>Ignore Pain\'s</i> remaining stored damage and <img src="/img/icons/heals.webp" class="tip-icon" />heals you for 75% <b>bonus</b> AD over 2 seconds.',
    },
  ],
  stats: {
    armor: 50,
    attackDamage: 60,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 3300,
      combined: 275,
      sell: 1320,
    },
    tags: ['FIGHTER'],
  },
  maps: [11, 12, 21, 35],
}
export default item
