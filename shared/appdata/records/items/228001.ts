const item: Item = {
  name: 'Anathema\'s Chains',
  id: 228001,
  rank: 'Legendary',
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/8001_tank_t3_anathemaschains.png',
  passives: [
    {
      name: 'Vendetta',
      unique: true,
      effects: 'Take 30% reduced damage from your <i>Nemesis</i> and reduce their <img src="/img/icons/tenacity.webp" class="tip-icon" />tenacity by 20% while they are within 700 units of you.'
    }
  ],
  active: [
    {
      name: 'Vow',
      unique: true,
      effects: 'Curse the target enemy champion, designating them as your <i>Nemesis</i>. Choosing a new <i>Nemesis</i> removes the curse from the old one. Cannot be cast for 15 seconds while in combat with enemy champions.',
      range: 0
    }
  ],
  stats: {
    health: 650,
    abilityHaste: 20
  },
  shop: {
    prices: {
      total: 2500,
      combined: 2500,
      sell: 1000
    },
    tags: [
      'TANK',
      'SUPPORT'
    ]
  },
  maps: [
    30
  ]
}
export default item