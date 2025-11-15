const item: Item = {
  id: 1506,
  name: 'Base Turret Reinforced Armor (Turret Item)',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/3042_netherrift_armor.png',
  maps: [11, 12, 21, 30, 35],
  noEffects: false,
  passives: [
    {
      effects:
        'While no enemy <img src="/img/icons/minions.webp" class="tip-icon" />minions or <img src="/img/icons/rift-herald-mercenary.webp" class="tip-icon" />Rift Herald Mercenary are within range, gain 80% damage reduction, including against true damage.',
      unique: true,
    },
    {
      effects:
        'Base turrets have health regeneration, but cannot regenerate past their current segment. They are segmented at 33% health, 66% health and 100% health.',
      unique: true,
    },
  ],
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 0,
      sell: 0,
      total: 0,
    },
    purchasable: false,
  },
  specialRecipe: 0,
  stats: {},
}
export default item
