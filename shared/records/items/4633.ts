const item: Item = {
  id: 4633,
  name: 'Riftmaker',
  nicknames: ['velkoz'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/4633_mage_t4_riftmaker.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Void Corruption',
      effects:
        'For each second in combat with champions, deal 2% increased damage, stacking up to 4 times for a total of 8% increased damage. At maximum stacks, gain (<img src="/img/icons/melee.webp" class="inline-icon" />10% /<img src="/img/icons/ranged.webp" class="inline-icon" />6%) omnivamp.',
      unique: true,
    },
    {
      name: 'Void Infusion',
      effects: 'Gain ability power equal to 2% <b>bonus</b> health.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 950,
      sell: 1240,
      total: 3100,
    },
    tags: ['MAGE', 'LIFESTEAL_VAMP'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 15,
    abilityPower: 70,
    health: 350,
  },
}
export default item
