const item: Item = {
  id: 447108,
  name: 'Runecarver',
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/7108_runecarver.png',
  maps: [30],
  noEffects: false,
  passives: [
    {
      name: 'Energized',
      effects:
        'Moving and basic attacking generates <i>Energize</i> stacks, up to 100.',
      unique: true,
    },
    {
      name: 'Helix',
      effects:
        'Dealing damage with an ability generates 30 <i>Energize</i> stacks and triggers the effects of <img src="/img/icons/energized.webp" class="tip-icon" />Energized attacks if they are ready (2.5-second cooldown per cast instance).',
      unique: true,
    },
    {
      name: 'Spiral Out',
      effects:
        'When fully <img src="/img/icons/energized.webp" class="tip-icon" />Energized, your next basic attack generates a <i>Rune</i> stack and fires a missile at the target for each <i>Rune</i> stack you have, dealing 20 – 45 (based on level) magic damage (+11% <b>bonus</b> AD) (+8% AP) (+0.3 per 100 <b>bonus</b> health) magic damage with each missile. Stacks are reset every round and between each phase in a round.',
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
    abilityPower: 80,
    percentMovespeed: 8,
  },
}
export default item
