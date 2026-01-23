// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Across the Veil',
  affects: 'self',
  blurb: 'Active:  Aurora  hops into  invisibility for a moment and gains Realm Hopper for a few seconds.',
  castTime: 'none',
  cooldown: '22 / 21 / 20 / 19 / 18',
  cost: '80',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Aurora hops in the target direction inside a portal to the Spirit Realm. Upon completing the dash, she becomes invisible for a duration and gains Realm Hopper for 4 seconds.</p>',
      leveling: [
        {
          attribute: 'Invisibility Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1 / 1.15 / 1.3 / 1.45 / 1.6'
            }
          ]
        }
      ]
    },
    {
      description: '<p class="ability-effect"><span class="ability-header">Realm Hopper:</span> Aurora becomes ghosted and gains bonus movement speed for the duration.</p>',
      leveling: [
        {
          attribute: 'Bonus Movement Speed',
          modifiers: [
            {
              unit: '%',
              values: '20 / 25 / 30 / 35 / 40'
            }
          ]
        }
      ]
    },
    {
      description: 'Scoring a takedown against an enemy champion within 3 seconds of damaging them will reset Across the Veil\'s cooldown.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/w',
  notes: 'Aurora will not gain the stealth if her dash is interrupted.\nShe will however gain the stealth despite the dash being interrupted from colliding with  Between Worlds\' border.\nHer dash is interrupted in this case from being overridden by the rift dash.\nAurora is locked out of using all abilities, summoner spells, and item actives during the dash.\nShe cannot buffer these spells to cast after the lockout. This is in place to prevent her from breaking the stealth from certain spell casts.\nThis is the case even for spells that do not break stealth when cast.\nUsing a basic attack breaks the stealth at the end of the attack windup.\nAt rank 0, Realm Hopper will grant Aurora 15% bonus movement speed. This is only relevant for using  Between Worlds.\nIf the total duration of Realm Hopper gained from a new cast of Across the Veil or  Between Worlds is longer than the remaining duration of the one gained from a previous cast, then re-gaining Realm Hopper will override the previous buff\'s duration.\nIf the remaining duration from a previous cast is shorter, then the same buff remains in place without refreshing.\nIn both cases, the buff cannot stack with itself.',
  resource: 'Mana',
  speed: '350',
  targeting: 'Direction'
}
export default ability
