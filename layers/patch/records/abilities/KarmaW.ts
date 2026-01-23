// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  key: 'W',
  name: 'Renewal',
  affects: 'Enemies / Self',
  blurb: 'Mantra Bonus:\nFocused Resolve\'s  root is increased.',
  cooldown: '12',
  cost: '50 / 55 / 60 / 65 / 70',
  damageType: 'Magic damage',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Mantra Bonus:</span> Focused Resolve\'s root duration is increased. Karma heals for 17% (+ 1% per 100 AP) of her missing health once on-cast, and again once the tether lasts its full duration or the target dies while tethered.</p>',
      leveling: [
        {
          attribute: 'Root Duration Increase',
          modifiers: [
            {
              unit: ' seconds',
              values: '0.5 / 0.75 / 1 / 1.25'
            }
          ]
        },
        {
          attribute: 'Total Root Duration',
          modifiers: [
            {
              unit: '  seconds',
              values: '1.6 / 1.7 / 1.8 / 1.9 / 2'
            },
            {
              tooltip: 'Scaling per rank:\n0.5 / 0.75 / 1 / 1.25',
              values: '0.5 - 1.25'
            }
          ]
        }
      ]
    },
    {
      description: 'Renewal scales with Mantra\'s rank.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Karma/ability-icon/w',
  notes: 'Spell shield will block the tether\'s application and damage but not the aftereffects of one already applied.\nIf Karma is  tethered to multiple targets, the visual effects of all tethers will disappear at the end of the first tether\'s duration, but the other targets will remain tethered.(bug)\nOn cast, Renewal is treated as 2 abilities for  Conqueror,  Electrocute and  Phase Rush, instead of 1.(bug)\nIf the target becomes  untargetable,  dies, or is no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost.\nIf they move too far away during the cast time, however, the ability will cancel as normal but still go on cooldown and pay its cost.(bug)\nKarma is still healed on-cast.\n Summon Aery will still count as the target being damaged this way.(note)',
  projectile: 'FALSE',
  spellEffects: 'spell',
  spellshieldable: 'Special',
  targeting: 'Unit'
}
export default ability
