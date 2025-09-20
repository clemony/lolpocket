const item: Item = {
  id: 1056,
  name: 'Doran\'s Ring',
  nicknames: ['dring'],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/1056_mage_t1_doransring.png',
  maps: [11, 12, 21],
  noEffects: false,
  passives: [
    {
      name: 'Restoration',
      effects:
        'Restore 1.25 mana every second. If you cannot gain mana, <img src="/img/icons/healing.webp" class="tip-icon" />heal 0.55 health instead.',
      unique: true,
    },
    {
      name: 'Helping Hand',
      effects:
        'Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.',
      unique: true,
    },
  ],
  rank: 'Starter',
  removed: false,
  shop: {
    prices: {
      combined: 400,
      sell: 160,
      total: 400,
    },
    tags: ['MAGE', 'MANA_AND_REG', 'ONHIT_EFFECTS'],
  },
  simpleDescription: 'Good starting item for casters',
  specialRecipe: 0,
  stats: {
    abilityPower: 18,
    health: 90,
  },
}
export default item
