// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 4401,
  name: 'Force of Nature',
  nicknames: [
    'fon'
  ],
  buildsFrom: [
    {
      id: 1057,
      name: 'Negatron Cloak',
      gold: 850
    },
    {
      id: 1028,
      name: 'Ruby Crystal',
      gold: 400
    },
    {
      id: 3066,
      name: 'Winged Moonplate',
      gold: 800
    }
  ],
  description: '400 Health\n55 Magic Resist\n4% Move Speed\n\nSteadfast\nGain 70 Magic Resist and 6% bonus Move Speed after taking magic damage from Champions 8 times.',
  gold: {
    base: 750,
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
      name: 'Steadfast',
      effects: 'Taking magic damage from champions generates a stack of <i>Steadfast</i> for 7 seconds, stacking up to 8 times with the duration refreshing on subsequent magic damage from them and whenever dealing damage to them. Becoming <img src="/img/icons/immobilize.webp" class="tip-icon" />immobilized by an enemy champion generates 2 stacks and also refreshes the duration. Once per cast instance, each incoming basic attack, ability, or item effect can only generate 1 stack of <i>Steadfast</i> from their damage every 1 second. At <b>maximum</b> stacks, gain 70 <b>bonus</b> magic resistance and 6% <b>bonus</b> movement speed.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Legendary',
  removed: false,
  specialRecipe: 0,
  stats: {
    health: 400,
    magicResistance: 55,
    percentMovespeed: 4
  }
}
export default item