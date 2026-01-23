// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  key: 'E',
  name: 'Unbreakable',
  affects: 'Self',
  angle: '180°',
  blurb: 'Active:  Braum becomes  ghosted and raises his shield in a direction for a few seconds, intercepting any enemy  projectiles to hit him and be destroyed.',
  castTime: 'none',
  cooldown: '16 / 14 / 12 / 10 / 8',
  cost: '30 / 35 / 40 / 45 / 50',
  effects: [
    {
      description: '<p class="ability-effect"><span class="ability-header">Active:</span> Braum sets his shield in the target direction for a duration, creating a barrier in front of him that intercepts all incoming hostile projectiles and reduces the damage Braum takes through it. The first instance of damage dealt by a champion from this direction is reduced by 100%. Unbreakable does not affect turrets.</p>',
      leveling: [
        {
          attribute: 'Damage reduction',
          modifiers: [
            {
              unit: '%',
              values: '35 / 40 / 45 / 50 / 55'
            }
          ]
        },
        {
          attribute: 'Barrier Duration',
          modifiers: [
            {
              unit: ' seconds',
              values: '3 / 3.25 / 3.5 / 3.75 / 4'
            }
          ]
        }
      ]
    },
    {
      description: 'While his shield is raised, Braum also gains 10% bonus movement speed and ghosting.'
    }
  ],
  icon: 'https://cdn.communitydragon.org/latest/champion/Braum/ability-icon/e',
  notes: 'Definitions\nIncoming: Damage sources coming from somewhere facing the shield. Those coming from different sides are not affected.\nProjectiles: Sped up entities not classified as a unit ( champions,  minions,  monsters, etc.)\nIntercepting: A projectile hitting Braum because he is standing in front of the intended target. In addition to being redirected, an intercepted projectile is also destroyed after hitting Braum (although this is only applicable to pass-through projectiles).\nUnbreakable\'s full damage reduction can block multiple instances of damage if they\'re dealt at the same time.\nMoving units do not count for being blocked by Unbreakable.\nChampion summoned units are not classified as units until they hit the ground (e.g.  Sapling Toss) and thus will interact with Unbreakable whilst en route.\nProjectiles whose effects trigger on collision will still trigger - dealing damage, applying debuffs, creating area of effects and marking the target as \'hit\'.\nProjectiles that create an area of effect upon their collision will still affect other units and not only Braum.\nProjectiles that cannot hit Braum or his allies (such as an enemy  Prismatic Barrier) will not be intercepted.[2]\n Soraka\'s  Starcall\'s Rejuvenation projectile is however blocked.\nThe damage reduction will affect any source of damage whose origin is in front of the shield. This includes:\nAll intercepted projectiles.\n Melee and non-projectile-based  ranged attacks.\nInstantaneous direction-targeted abilities (e.g.  Arcanopulse,  Final Spark,  Lifeform Disintegration Ray.)\nInstantaneously-placed ground-targeted abilities (e.g.  Lay Waste,  Pillar of Flame,  Rupture) relative to the ability\'s center and not the caster\'s.\nPoint-blank area-of-effects (e.g.  Ground Slam,  Tantrum,  Time Bomb not targeted at Braum)\nInstantaneous targeted abilities (e.g.  Malefic Visions,  Transfusion,  Time Bomb targeted at Braum) and  AoE DoT (e.g.  Spirit Fire,  Tormented Shadow,  Poison Trail).\nThe damage reduction only benefits Braum.\n Damage over time is calculated per tick but the full damage reduction will still only apply to a single tick.\nIf the damage mitigated by Unbreakable exceeds a minimum threshold it is represented with floating text similar to the damage mitigated by shields (\'-X\')\nThis floating text is always shown for the single fully-reduced damage source.\nBraum\'s facing direction is in the direction he\'s moving in.\nIf Braum is protected by a  spell shield, both it and the one-time-use full damage reduction can be consumed by a single blockable spell.\nThe one-time-use full damage reduction will not be consumed if the damage source is nothing but  true damage.\nUnbreakable will grant assist credit if the enemy whose damaging projectile is blocked from is killed within 10 seconds.',
  resource: 'Mana',
  targeting: 'Direction'
}
export default ability
