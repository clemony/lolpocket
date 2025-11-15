const item: Item = {
  id: 6655,
  name: 'Luden\'s Companion',
  nicknames: ['boomstick', 'gun'],
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200,
    },
    {
      id: 3145,
      name: 'Hextech Alternator',
      gold: 1100,
    },
  ],
  icon: 'https://raw.communitydragon.org/15.15/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/6655_casterscompanion.png',
  maps: [11, 12, 21, 35],
  noEffects: false,
  passives: [
    {
      name: 'Fire',
      cooldown: '12',
      effects:
        'Gain 6 <i>Shot Charge</i> stacks to fire. Dealing ability damage to an enemy consumes all <i>Shot Charges</i> to deal 75 magic damage (+5% AP) <b>bonus</b> magic damage to them and, for each charge consumed beyond the first, an additional enemy within 600 units of them, firing an orb at each secondary target that impacts after 0.528 seconds to deal the damage. If the number of additional targets fired at is less than the number of charges consumed, deal an additional 15 - 75 (based on remaining Shot Charges) (+1% - 5% AP) magic damage to the primary target, for a total of <span class="text-nowrap whitespace-nowrap">90 - 150</span> <span class="text-nowrap whitespace-nowrap">(+6 - 10% AP).</span>',
      unique: true,
    },
  ],
  rank: 'Legendary',
  removed: false,
  shop: {
    prices: {
      combined: 450,
      sell: 1100,
      total: 2750,
    },
    tags: ['MAGE'],
  },
  simpleDescription: 'High burst damage, good against fragile foes',
  specialRecipe: 0,
  stats: {
    abilityHaste: 10,
    abilityPower: 100,
    mana: 600,
  },
}
export default item
