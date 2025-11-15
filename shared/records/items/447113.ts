const item: Item = {
  id: 447113,
  name: 'Detonation Orb',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7113_detonationorb.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'The Bomb',
      effects:
        'Dealing ability damage against enemy champions marks them for 3 seconds, storing 20% of the post-mitigation damage you deal to them, increased to 25% if they are <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilized. Each instance of your ability damage dealt to a marked target refreshes their mark. Once the mark expires, it detonates to deal true damage equal to the amount stored against the target. If a mark would deal lethal damage to the target, it is detonated immediately.',
      unique: true,
    },
  ],
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
    abilityHaste: 20,
    abilityPower: 90,
    flatMagicPenetration: 12,
    mana: 600,
  },
}
export default item
