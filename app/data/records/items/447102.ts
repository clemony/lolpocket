const item: Item = {
  name: 'Reality Fracture',
  id: 447102,
  rank: 'Special',
  specialRecipe: 220007,
  noEffects: false,
  removed: false,
  icon: 'https://raw.communitydragon.org/15.11/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7102_realityfracture.png',
  passives: [
    {
      name: 'ZZ\'Rot',
      unique: true,
      effects: 'Basic attacks on-attack and damaging abilities against enemies summon 8 allied <img src="/img/icons/voidmites.webp" class="tip-icon" />Voidmites that are <img src="/img/icons/untargetable.webp" class="tip-icon" />untargetable and attack the target (15 second cooldown). <img src="/img/icons/voidmites.webp" class="tip-icon" />Voidmites deal 6 magic damage (+4% of your AD) (+8% of your AP) magic damage with each of their basic attacks and last for up to 3 seconds. Additionally, summon 6 <img src="/img/icons/voidmites.webp" class="tip-icon" />Voidmites upon your death.',
    },
  ],
  stats: {
    abilityPower: 80,
    attackSpeed: 40,
    health: 300,
  },
  shop: {
    prices: {
      total: 0,
      combined: 1000,
      sell: 0,
    },
    tags: [
      'MAGE',
    ],
  },
  maps: [
    30,
  ],
}
export default item