const item: Item = {
  id: 446632,
  name: 'Divine Sunderer',
  nicknames: ['devourer'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6632_fighter_t4_divinedevourer.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Spellblade',
      effects:
        'After using an ability, your next basic attack within 10 seconds deals 180% <b>base</b> AD (+(<img src="/img/icons/melee.webp" class="inline-icon" />4% /<img src="/img/icons/ranged.webp" class="inline-icon" />2%) of target\'s <b>maximum</b> health) as <b>bonus</b> physical damage on-hit, for a <b>minimum</b> of 180% <b>base</b> AD. If the target is a champion, <img src="/img/icons/heal.webp" class="tip-icon" />heal for 99% <b>base</b> AD (+(2.2% /1.1%) of target\'s <b>maximum</b> health)(1.5 second cooldown, starts after using the empowered attack).',
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
    tags: ['FIGHTER'],
  },
  specialRecipe: 220007,
  stats: {
    abilityHaste: 20,
    attackDamage: 55,
    health: 350,
  },
}
export default item
