const item: Item = {
  id: 446656,
  name: 'Everfrost',
  nicknames: ['GLP', 'hose', 'supersoaker'],
  active: [
    {
      name: 'Glaciate',
      effects:
        'Unleash a fan of icy shards in a cone in the target direction, dealing 250 magic damage (+85% AP) magic damage to enemies struck within and <img src="/img/icons/slow.webp" class="tip-icon" />slowing them by 70% for 1.5 seconds. Enemies hit in the center of the cone are <img src="/img/icons/root.webp" class="tip-icon" />rooted for the same duration instead.',
      unique: true,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6656_mage_t4_everfrost.png',
  maps: [30],
  noEffects: false,
  rank: 'Special',
  removed: false,
  shop: {
    prices: {
      combined: 1000,
      sell: 0,
      total: 0,
    },
    tags: ['MAGE'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 25,
    abilityPower: 100,
    health: 250,
    mana: 600,
  },
}
export default item
