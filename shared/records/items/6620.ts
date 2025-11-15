const item: Item = {
  id: 6620,
  name: 'Echoes of Helia',
  nicknames: ['spooky cup'],
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
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6620_echoes_of_helia.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Soul Siphon',
      effects:
        'Damaging an enemy champion with a basic attack or ability damage grants a <i>Soul Shard</i>, up to 2. <img src="/img/icons/heal.webp" class="tip-icon" />Healing or <img src="/img/icons/shield.webp" class="tip-icon" />shielding an allied champion (<i>excluding yourself</i>) consumes all <i>Soul Shards</i> to heal them for 65 per shard and deal 50 magic damage per shard to the nearest enemy champion within 1100 units of the ally.',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 500,
      sell: 880,
      total: 2200,
    },
    tags: ['SUPPORT'],
  },
  simpleDescription:
    'Damage low-health enemies to trigger a cursed explosion, dealing damage and slowing nearby foes',
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 35,
    health: 200,
    manaRegen: 125,
  },
}
export default item
