const item: Item = {
  name: 'Riftmaker',
  id: 4633,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3147,
      name: 'Haunting Guise',
      gold: 1300,
    },
    {
      id: 3108,
      name: 'Fiendish Codex',
      gold: 850,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4633_mage_t4_riftmaker.png',
  nicknames: [
    'velkoz',
  ],
  passives: [
    {
      name: 'Void Corruption',
      unique: true,
      effects: 'For each second in combat with champions, deal 2% increased damage, stacking up to 4 times for a total of 8% increased damage. At maximum stacks, gain (<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />6%) omnivamp.',
    },
    {
      name: 'Void Infusion',
      unique: true,
      effects: 'Gain ability power equal to 2% <b>bonus</b> health.',
    },
  ],
  stats: {
    abilityPower: 70,
    health: 350,
    abilityHaste: 15,
  },
  shop: {
    prices: {
      total: 3100,
      combined: 950,
      sell: 1240,
    },
    tags: [
      'MAGE',
      'LIFESTEAL_VAMP',
    ],
  },
  maps: [
    11,
    12,
    21,
    35,
  ],
}
export default item