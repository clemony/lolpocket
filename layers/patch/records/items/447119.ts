// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
const item: Item = {
  id: 447119,
  name: 'Lightning Rod',
  description: '500 Health\n30 Armor\n30 Magic Resist\n8% Move Speed\n\nCall Lightning\nEvery 16 seconds, Autocast summon a stormcloud above you, which after a brief delay fires a lightning bolt, dealing  plus 10% max Health magic damage and Slowing by 30% for 2 seconds.\n\nIf you are struck by the lightning, gain a  Shield for 2 seconds.\n\nFully Automated\nYour Autocast Cooldowns are reduced by 1 seconds and benefit from your Ability Haste.\n\nCall Lighting has a minimum cooldown of 5 seconds.',
  gold: {
    base: 1000,
    sell: 400,
    total: 1000
  },
  maps: [
    30
  ],
  noEffects: false,
  passives: [
    {
      name: 'Call Lightning',
      cooldown: '16',
      effects: 'Automatically river summon a storm cloud above you, which strikes a lightning bolt at your current location after 1.5 seconds to deal 135 – 230 (based on level) magic damage (+30% <b>bonus</b> AD) (+50% AP) (+10% of target\'s <b>maximum</b> health) magic damage to enemies within the area and <img src="/img/icons/slow.webp" class="tip-icon" />slow them by 30% for 2 seconds. If you are within the lightning strike, gain a <img src="/img/icons/shield.webp" class="tip-icon" />shield equal to 14% of your <b>maximum</b> health (+75% AP) for 2 seconds.',
      mythic: false,
      unique: true
    },
    {
      name: 'Fully Automated',
      effects: 'Automatic river effects have their cooldown reduced by 1 second and now benefit from your ability haste. <i>Call Lightning\'s</i> cooldown cannot be reduced below 5 seconds by this effect.',
      mythic: false,
      unique: true
    }
  ],
  rank: 'Special',
  removed: false,
  specialRecipe: 220007,
  stats: {
    armor: 30,
    health: 500,
    magicResistance: 30,
    percentMovespeed: 8
  }
}
export default item