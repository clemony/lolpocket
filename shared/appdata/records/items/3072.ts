const item: Item = {
  id: 3072,
  name: 'Bloodthirster',
  nicknames: ['bt', 'healsword'],
  buildsFrom: [
    {
      id: 1038,
      name: 'B. F. Sword',
      gold: 1300,
    },
    {
      id: 1037,
      name: 'Pickaxe',
      gold: 875,
    },
    {
      id: 1053,
      name: 'Vampiric Scepter',
      gold: 900,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3072_fighter_t3_bloodthirster.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Ichorshield',
      effects:
        'Convert the <img src="/img/icons/healing.webp" class="tip-icon" />healing received from <img src="/img/icons/life-steal.webp" class="tip-icon" />life steal in excess of <b>maximum</b> health into a <img src="/img/icons/shield.webp" class="tip-icon" />shield for up to 165 – 315 (based on level), which lasts until destroyed.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 325,
      sell: 1360,
      total: 3400,
    },
    tags: ['MARKSMAN'],
  },
  simpleDescription:
    'Grants Attack Damage, Life Steal and Life Steal now overheals',
  specialRecipe: 0,
  stats: {
    attackDamage: 80,
    lifesteal: 15,
  },
}
export default item
