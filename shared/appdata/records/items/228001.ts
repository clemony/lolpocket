const item: Item = {
  id: 228001,
  name: 'Anathema\'s Chains',
  active: [
    {
      name: 'Vow',
      effects:
        'Curse the target enemy champion, designating them as your <i>Nemesis</i>. Choosing a new <i>Nemesis</i> removes the curse from the old one. Cannot be cast for 15 seconds while in combat with enemy champions.',
      range: 0,
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/8001_tank_t3_anathemaschains.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Vendetta',
      effects:
        'Take 30% reduced damage from your <i>Nemesis</i> and reduce their <img src="/img/icons/tenacity.webp" class="tip-icon" />tenacity by 20% while they are within 700 units of you.',
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
    tags: ['TANK', 'SUPPORT'],
  },
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    health: 650,
  },
}
export default item
