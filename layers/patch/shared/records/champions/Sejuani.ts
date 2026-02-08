// Updated Patch 16.1 - 01/29/2026 04:27:07 PM CST
import type { Champion } from '#shared/types'

const champion: Champion = {
  id: 113,
  key: 'Sejuani',
  name: 'Sejuani',
  title: 'Fury of the North',
  adaptiveType: 'Magic damage',
  attackType: 'Melee',
  patchLastChanged: '25.24',
  releaseDate: '2012-01-17',
  resource: 'Mana',
  abilities: [
    {
      key: 'P',
      name: 'Fury of the North',
      affects: 'Self, Enemies',
      blurb: 'Innate - Icebreaker: Enemies  stunned by  Sejuani are also marked Frozen at the same time. Her next  basic attack or  ability against a Frozen target will consume the mark to deal bonus magic damage based on their maximum health.',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/p',
      notes: 'Gaining Frost Armor does not remove any pre-existing  slows or  cripples.\nIcebreaker will not trigger if the basic attack is  blocked.\nPENDING FOR TEST:: Icebreaker\'s  interactions with  dodging and  blinding effects via basic attack.\nPENDING FOR TEST::  Spell shield interaction with Icebreaker.',
      spellEffects: 'proc',
      spellshieldable: 'unknown',
      targeting: 'Passive',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Icebreaker:</span> Enemies stunned by Sejuani are marked Frozen for the disable\'s duration. Sejuani\'s next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 250 against epic monsters.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Frost Armor:</span> Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy champions, turrets, or large monsters. She restores it after 12 - 6 (based on level) seconds without taking damage from them.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Frost Armor:</span> Sejuani gains slow immunity, cripple immunity, 10 (+ 75% bonus armor) bonus armor, and 10 (+ 75% bonus magic resistance) bonus magic resistance.</p>'
        }
      ]
    },
    {
      key: 'Q',
      name: 'Arctic Assault',
      affects: 'Enemies',
      blurb: 'Active:  Sejuani  dashes to the target location, dealing magic damage and briefly  knocking up enemies she passes through. She will stop upon hitting an enemy  champion.',
      castTime: 'none',
      collisionRadius: '75',
      cooldown: '18 / 16.5 / 15 / 13.5 / 12',
      cost: '60 / 65 / 70 / 75 / 80',
      damageType: 'Magic damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/q',
      notes: 'Champions will slightly be  knocked back, while minions and monsters will instead be slightly  pulled for a fixed distance.\nArctic Assault cannot  knock enemies over terrain.\nCasting  Flash during Arctic Assault will end the dash and affect enemies at the new location.\nUpon colliding with an enemy  champion, Sejuani will  attack them.',
      resource: 'Mana',
      speed: '1000',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '650',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Bristle dashes to the target location until he collides with an enemy champion, dealing magic damage to enemies he passes through and knocking them up for 0.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '90 / 140 / 190 / 240 / 290'
                },
                {
                  unit: '% AP',
                  values: '75'
                }
              ]
            }
          ]
        },
        {
          description: 'Arctic Assault can be cast during her other abilities without cancelling them and vice versa.'
        }
      ]
    },
    {
      key: 'W',
      name: 'Winter\'s Wrath',
      width: '150',
      affects: 'Enemies',
      angle: '70°',
      blurb: 'Active:  Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit,  knocking back  minions and  monsters.',
      castTime: '1',
      cooldown: '9 / 8 / 7 / 6 / 5',
      cost: '60',
      damageType: 'Physical damage',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/w',
      notes: 'Spell shields will block only a single instance of damage - either the swing or the lash.\nThis ability will cast from wherever the caster is at the end of the cast time.\nBoth swings will strike in the cast direction, but the second swing will do so from Sejuani\'s location at the end of the cast time.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'Special',
      targeting: 'Direction',
      targetRange: '600',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> After 0.25 seconds into the cast time, Sejuani swings her flail in a cone in the target direction that deals physical damage to enemies hit and knocks back minions and monsters hit, though not through terrain.</p>',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '5 / 15 / 25 / 35 / 45'
                },
                {
                  unit: '% AP',
                  values: '30'
                },
                {
                  unit: '% of her maximum health',
                  values: '4'
                }
              ]
            }
          ]
        },
        {
          description: 'After the cast time, Sejuani lashes out with her flail in a line in the same direction, dealing physical damage to enemies hit and slowing them by 75% for 0.25 seconds.',
          leveling: [
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '5 / 25 / 45 / 65 / 85'
                },
                {
                  unit: '% AP',
                  values: '60'
                },
                {
                  unit: '% of her maximum health',
                  values: '8'
                }
              ]
            },
            {
              attribute: 'Total Physical Damage',
              modifiers: [
                {
                  values: '10 / 40 / 70 / 100 / 130'
                },
                {
                  unit: '% AP',
                  values: '90'
                },
                {
                  unit: '% of her maximum health',
                  values: '12'
                }
              ]
            }
          ]
        },
        {
          description: 'Sejuani can move during Winter\'s Wrath\'s cast time.'
        }
      ]
    },
    {
      key: 'E',
      name: 'Permafrost',
      affects: 'Enemies, Allies, Self',
      blurb: 'Passive:  Winter\'s Wrath and both  Sejuani\'s and nearby allied  melee champions\'  basic attacks  on-hit apply  stacks of Frost against  champions, medium / large  monsters and large  minions, which lasts a few seconds and stacks up to a cap. Sejuani can cast Permafrost against an enemy with max stacks.',
      castTime: '0.25',
      cooldown: '1.5',
      cost: '20',
      damageType: 'Magic damage',
      effectRadius: '1100',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/e',
      notes: 'Permafrost\'s targeting prioritizes champions within  50 units of the cursor\'s selection, then non-champions within  50 units of the cursor\'s selection, then champions within  350 units of the cursor\'s selection, then the closest unit to the cursor within  2500 units (the last case strictly applies if there is no target being selected).\nFrost stacks will not be applied if the basic attack is  blocked.\nPENDING FOR TEST:: Permafrost\'s stack application interaction with parrying effects ( dodge,  blind).\n Master Yi\'s  Alpha Strike does not interact with Permafrost.(note)\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but still go on  cooldown and pay its cost.(bug)',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'Single target',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '600',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive - Frostbrand:</span> Winter\'s Wrath and both Sejuani\'s and nearby allied melee champions\' basic attacks on-hit apply stacks of Frost to enemy champions, medium or large monsters, and large minions for 5 seconds, refreshing on subsequent applications and stacking up to 4 times, though not applying if the target is Frozen. Enemies hit by Permafrost or Glacial Prison\'s bola have all of their Frost stacks consumed. Enemy champions cannot be affected by Frost for 8 seconds after having it consumed. Sejuani can cast Permafrost against an enemy with 4 stacks.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sejuani hurls a trap at the visible enemy with 4 stacks of Frost closest to the cursor, which deals magic damage, displaces slightly, and stuns them for 1 second.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '55 / 105 / 155 / 205 / 255'
                },
                {
                  unit: '% AP',
                  values: '70'
                }
              ]
            }
          ]
        },
        {
          description: 'Permafrost resets Sejuani\'s basic attack timer.'
        }
      ]
    },
    {
      key: 'R',
      name: 'Glacial Prison',
      width: '240',
      affects: 'Enemies',
      blurb: 'Active:  Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and briefly  stunning them.',
      castTime: '0.25',
      cooldown: '120 / 105 / 90',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '450 /  450 /  300',
      icon: 'https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/r',
      notes: 'Applies  spell damage to the primary target and  area damage to secondary targets in the ice storm.\n Spell shields will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.\nBoth areas of effect will be centered on the first champion struck, not at the location the missile collided with them.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1600',
      spellEffects: 'Special',
      spellshieldable: 'Special',
      targeting: 'Direction',
      targetRange: '1300',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Sejuani throws an ice bola in the target direction that stops upon hitting an enemy champion, dealing magic damage and stunning them for 1 second.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '125 / 150 / 175'
                },
                {
                  unit: '% AP',
                  values: '40'
                }
              ]
            }
          ]
        },
        {
          description: 'If the bola travels at least 425 units, it becomes empowered to detonate upon reaching maximum range or hitting an enemy champion, dealing increased magic damage and stunning for 1.5 seconds instead. For the same duration, a frost storm is created around the location of the detonation that slows enemies within by 30% and grants sight of the area in a smaller radius.',
          leveling: [
            {
              attribute: 'Increased Damage',
              modifiers: [
                {
                  values: '200 / 300 / 400'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            }
          ]
        },
        {
          description: 'After 2 seconds, the storm shatters to deal the increased magic damage to enemies within and slow them by 80% for 1 second, as well as revealing them and granting sight of the area for 0.5 seconds.'
        },
        {
          description: 'The enemy hit by the bola is not affected by the storm\'s effects.'
        }
      ]
    }
  ],
  attributeRatings: {
    abilityReliance: 75,
    control: 3,
    damage: 2,
    difficulty: 2,
    mobility: 2,
    toughness: 2,
    utility: 1
  },
  positions: [
    'Jungle'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  roles: [
    'Fighter',
    'Tank',
    'Vanguard'
  ],
  stats: {
    armor: 34,
    attackDamage: 66,
    attackRange: 150,
    attackSpeed: 0.7,
    hp: 630,
    hpRegen: 8.5,
    magicResist: 32,
    movespeed: 340,
    mp: 400,
    mpRegen: 7
  },
  statsPerLevel: {
    armor: 5.5,
    attackDamage: 4,
    attackSpeed: 3.5,
    hp: 114,
    hpRegen: 1,
    magicResist: 2.1,
    mp: 40,
    mpRegen: 0.7
  }
}
export default champion