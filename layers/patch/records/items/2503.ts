// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 2503,
  name: 'Blackfire Torch',
  nicknames: [
    'bft'
  ],
  buildsFrom: [
    {
      id: 3802,
      name: 'Lost Chapter',
      gold: 1200
    },
    {
      id: 2508,
      name: 'Fated Ashes',
      gold: 900
    }
  ],
  description: '80 Ability Power\n600 Mana\n20 Ability Haste\n\nBaleful Blaze\nDamaging Abilities deals bonus magic damage for 3 seconds.\n\nBlackfire\nFor each enemy champion, epic and large monster affected by your Baleful Blaze, gain 4% Ability Power. ',
  gold: {
    base: 700,
    sell: 1960,
    total: 2800
  },
  maps: [
    11,
    12,
    21,
    35
  ],
  noEffects: false,
  passives: [
    {
      name: 'Baleful Blaze',
      effects: 'Dealing ability damage burns enemies, causing them to take 10 (+1% AP) magic damage every 0.5 seconds over 3 seconds, for a total of 60 magic damage (+6% AP). Against monsters, the burn deals 10 <b>bonus</b> magic damage per tick, dealing a total of 20 (+1% AP) magic damage per tick for up to 120 magic damage (+6% AP).',
      mythic: false,
      unique: true
    },
    {
      name: 'Blackfire',
      effects: 'For each champion, epic monster, and large monster afflicted with <i>Baleful Blaze\'s</i> burn, increase your ability power by 4%.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    abilityHaste: 20,
    abilityPower: 80,
    mana: 600
  }
}
export default item