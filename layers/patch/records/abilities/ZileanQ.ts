// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  key: 'Q',
  name: 'Time Bomb',
  affects: 'Enemies',
  blurb: 'Active:  Zilean throws a ticking time bomb to the target location that will attach upon enemy contact,  revealing them. It will detonate after a short time or when the attached unit dies, dealing magic damage to nearby enemies hit.',
  castTime: '0.25',
  collisionRadius: '140',
  cooldown: '10 / 9.5 / 9 / 8.5 / 8',
  cost: '60 / 65 / 70 / 75 / 80',
  damageType: 'Magic damage',
  effectRadius: '350 /  500',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Zilean throws a ticking time bomb to the target location that briefly grants sight of its surroundings as it travels as well as while lingering in the area. The bomb will attach itself to units that move within the epicenter, or those hit directly at the time of the bomb\'s landing, revealing them and their surroundings.</p>'
    },
    {
      description: 'After 3 seconds, or when the attached unit dies, the bomb explodes to deal magic damage to nearby enemies.',
      leveling: [
        {
          attribute: 'Magic Damage',
          modifiers: [
            {
              values: '75 / 115 / 165 / 230 / 300'
            },
            {
              unit: '% AP',
              values: '90'
            }
          ]
        }
      ]
    },
    {
      description: 'The bomb detonates immediately if another bomb attaches itself to the same unit, stunning nearby enemies for a duration.',
      leveling: [
        {
          attribute: 'Stun Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '1.1 / 1.2 / 1.3 / 1.4 / 1.5'
            }
          ]
        }
      ]
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/q',
  notes: 'Time Bombs landing directly on top of multiple units follow a priority order for whom to attach themselves to.\nUnits already carrying a bomb\nEnemy champions\nAllied champions\nEnemy minions\nAllied minions\nTime Bombs are not visible to enemies if they attach to an ally that is  stealthed and vice versa.\nWhen Time Bomb snaps onto an enemy, it  deals 0  proc damage.\nThis triggers in-combat effects such as drawing turret aggro and drawing monster aggression.\nIt also triggers  Sudden Impact and applies  Elixir of Sorcery.\nIt does not trigger  Cheap Shot, however, as  proc damage doesn\'t trigger  Cheap Shot.\nZilean can detonate an enemy counterpart\'s Time Bomb by placing his own on the same unit (the first bomb still deals damage).\nTime Bomb will be dispelled if the holder takes fatal damage and is saved by  resurrection before it explodes.\nTime Bomb can deal damage to the enemy holder through  untargetablility.\n Spell shield will prevent the application of Time Bomb and its detonation damage as well as block the  stun, but not its immediate detonation if the target already has a Time Bomb on them.\nWhile  disguised as a non-champion,  Neeko cannot be affected by Time Bomb.(bug)',
  projectile: 'TRUE',
  resource: 'Mana',
  spellEffects: 'spellaoe',
  spellshieldable: 'True',
  targeting: 'Location',
  targetRange: '900'
}
export default ability
