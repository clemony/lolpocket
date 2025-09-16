const item: Item = {
  name: 'Echoes of Helia',
  id: 6620,
  rank: 'Legendary',
  buildsFrom: [
    {
      id: 3067,
      name: 'Kindlegem',
      gold: 800,
    },
    {
      id: 4642,
      name: 'Bandleglass Mirror',
      gold: 900,
    },
  ],
  specialRecipe: 0,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6620_echoes_of_helia.png',
  simpleDescription:
    'Damage low-health enemies to trigger a cursed explosion, dealing damage and slowing nearby foes',
  nicknames: ['spooky cup'],
  passives: [
    {
      name: 'Soul Siphon',
      unique: true,
      effects:
        'Damaging an enemy champion with a basic attack or ability damage grants a <i>Soul Shard</i>, up to 2. <img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding an allied champion (<i>excluding yourself</i>) consumes all <i>Soul Shards</i> to heal them for 65 per shard and deal 50 magic damage per shard to the nearest enemy champion within 1100 units of the ally.',
    },
  ],
  stats: {
    abilityPower: 35,
    health: 200,
    manaRegen: 125,
    abilityHaste: 20,
  },
  shop: {
    prices: {
      total: 2200,
      combined: 500,
      sell: 880,
    },
    tags: ['SUPPORT'],
  },
  maps: [11, 12, 21, 35],
}
export default item
