// Updated Patch 25.17 - 09/18/2025 02:20:05 AM CDT

const champion: Champion = {
  id: 112,
  key: 'Viktor',
  name: 'Viktor',
  title: 'the Herald of the Arcane',
  abilities: [
    {
      key: 'P',
      name: 'Glorious Evolution',
      affects: 'Self',
      blurb: 'Innate:  Viktor collects Hex Fragments from enemies he kills and enemy champion  takedowns.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Viktor can augment each of his abilities at the cost of 100 Hex Fragments, which he gains from killing enemies:</p>\n Minions and monsters generate 1 Hex Fragment.\nSiege minions, super minions, and epic monsters generate 10 Hex Fragments.\nEnemy champion takedowns generate 20 Hex Fragments.'
        },
        {
          description: 'Arcane Storm can be augmented after all of Viktor\'s basic abilities have been augmented.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/p',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Siphon Power',
      affects: 'Enemies / Self',
      blurb: 'Active:  Viktor throws a draining device at the target enemy that deals magic damage. He also gains Discharge and  shields himself for a short time.',
      castTime: '0.25',
      cooldown: '9 / 8 / 7 / 6 / 5',
      cost: '45 / 50 / 55 / 60 / 65',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Viktor throws a draining device at the target enemy that deals magic damage. He also grants himself a shield for 40 - 115 (based on level) (+ 18% AP) for 2.5 seconds and gains Discharge for 3.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '60 / 75 / 90 / 105 / 120'
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
          description: '<p class="ability-effect"><span class="ability-header">Discharge:</span> Viktor\'s next basic attack is empowered to become non-projectile and deal modified magic damage.</p>',
          leveling: [
            {
              attribute: 'Modified Magic Damage',
              modifiers: [
                {
                  values: '20 / 45 / 70 / 95 / 120'
                },
                {
                  unit: '% AD',
                  values: '100'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '80 / 120 / 160 / 200 / 240'
                },
                {
                  unit: '% AD',
                  values: '100'
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
          description: '<p class="ability-effect"><span class="ability-header">Augment:</span> Turbocharge — After the device hits, Viktor gains 30% bonus movement speed for 2.5 seconds and the shield\'s strength is increased[ by 60%. ][ to 64 - 184 (based on level) (+ 32% AP). ]</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/q',
      maxCharges: -1,
      notes: 'Discharge does not convert the bonus damage dealt by  Spellblade to magic damage from physical.(bug)\nDischarge disables the bonus damage from  critical strikes.(bug)\n Spell shield does not prevent Viktor from gaining Discharge.\nOnly the initial projectile can be  intercepted.\nDischarge\'s empowered attack can be  blocked (damage is negated and the empowered attack will still be consumed).\nPENDING FOR TEST:: Interactions with other parrying effects ( blind and  dodge).\nThe empowered attack will trigger against turrets but not be consumed nor apply its effects against wards.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).',
      projectile: 'SPECIAL',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '600'
    },
    {
      key: 'W',
      name: 'Gravity Field',
      affects: 'Enemies',
      blurb: 'Active:  Viktor deploys a gravity field that remains at the target location for a few seconds. After a brief delay, the field will activate to continually  slow enemies within and inflict  stack of Gravity Field.',
      castTime: '0.25',
      cooldown: '17 / 16 / 15 / 14 / 13',
      cost: '65',
      effectRadius: '340',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Viktor deploys a gravity field at the target location for 4.5 seconds. After a 0.75-second delay, it activates to slow enemies within for 1 second, refreshing every 0.25 seconds while they remain inside.</p>',
          leveling: [
            {
              attribute: 'Slow',
              modifiers: [
                {
                  unit: '%',
                  values: '33 / 36 / 39 / 42 / 45'
                }
              ]
            }
          ]
        },
        {
          description: 'The field applies a stack to enemies within every 0.25 seconds, stacking up to 5 times. The fifth stack consumes them all to knock down and stun the target for 1.5 seconds. The knockdown and stun can be triggered only once per cast per enemy.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Augment:</span> Magnetize — Viktor\'s other abilities, excluding Arcane Storm\'s persistent damage, slow enemies hit by 20% for 1 second.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/w',
      maxCharges: -1,
      notes: 'Gravity Field applies a single debuff for both the slow and the stack.\nTargets can be applied further stacks after having their stacks consumed for the first time.\nStacks are always consumed upon the fifth stack, but only the first instance of stacks being consumed can trigger the crowd control effects.\nThe debuff lasts for 1 second.\nGravity Field will remain active if Viktor dies.\nGravity Field\'s animation can be seen by both teams through  fog of war.\nIf an enemy enters the area of effect while  untargetable, they may generate stacks even after becoming stunned once, causing them to get stunned up-to 3 times by a single Gravity Field.(bug)',
      resource: 'Mana',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '800'
    },
    {
      key: 'E',
      name: 'Hextech Ray',
      width: '90',
      affects: 'Enemies',
      blurb: 'Active:  Viktor fires an energy beam along the target path that deals magic damage to enemies hit.',
      castTime: 'none',
      cooldown: '12 / 11 / 10 / 9 / 8',
      cost: '60 / 70 / 80 / 90 / 100',
      damageType: 'Magic damage',
      effectRadius: '500',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Viktor fires an energy beam along the target path that deals magic damage to enemies hit and briefly grants sight of the area.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 110 / 150 / 190 / 230'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Augment:</span> Aftershock — The path explodes along the beam\'s wake after 1 second, dealing magic damage to enemies hit.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '20 / 50 / 80 / 110 / 140'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '90 / 160 / 230 / 300 / 370'
                },
                {
                  unit: '% AP',
                  values: '130'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/e',
      maxCharges: -1,
      notes: 'Viktor may freely act while the ray is traveling.\nThe effected area is set upon casting, no matter how far away Viktor moves. Unlike a leash, Hextech Ray will not break off its own effect.\nThe laser grants a moderate area of  sight around where the beam strikes the ground.\nIf Hextech Ray is  intercepted, the initial ray is not destroyed.\nHowever, the capability to be blocked only applies to the laser as it hits the ground. Viktor can cast the ability over the wall and it will not be destroyed or intercepted.\nAugmented Hextech Ray will still cause the entire target area to explode even if the laser is blocked.\nIf Viktor dies while he is firing the beam it only deals damage up to the location at the time of his death.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1050 / 1500',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Vector',
      targetRange: '550'
    },
    {
      key: 'R',
      name: 'Arcane Storm',
      affects: 'Enemies',
      blurb: 'Active:  Viktor conjures an arcane singularity at the target location that deals magic damage to enemies within and  disrupts their channeled abilities. The singularity then remains for a duration, continually dealing magic damage to enemies within the area. If the initial hit has struck at least one enemy  champion, it will automatically follow the nearest one hit.',
      castTime: '0.25',
      cooldown: '120 / 100 / 80',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '325',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Viktor conjures an arcane singularity at the target location, dealing magic damage to enemies within the area and disrupting their channeled abilities.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '100 / 175 / 250'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            }
          ]
        },
        {
          description: 'The singularity then remains active for 6.5 seconds, dealing magic damage to enemies within it every second and granting sight of the area. The singularity targets the nearest champion hit by its initial damage and will follow them. The singularity moves faster based on its proximity to Viktor.',
          leveling: [
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '65 / 105 / 145'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            },
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '490 / 805 / 1120'
                },
                {
                  unit: '% AP',
                  values: '260'
                }
              ]
            }
          ]
        },
        {
          description: 'Arcane Storm can be recast at any time while the singularity is active.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Viktor directs the singularity to the target location, or to follow the target enemy champion or himself.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Augment:</span> Perfect Storm — The singularity moves 25% faster. Additionally, whenever an enemy champion is taken down after being damaged by Arcane Storm, the singularity increases in size by 40% and extends its duration by 3 seconds. The singularity radius can be increased up to 6 times and its duration can be extended only up to the original duration.</p>'
        },
        {
          description: 'Arcane Storm\'s recast can be used while affected by cast-inhibiting crowd control.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/r',
      maxCharges: -1,
      notes: 'The  disrupt is \'wrapped\' into a status effect that says the target is  Silenced for 0.25 seconds, but it does not actually silence. It however makes sure that the disrupt is prevented by  immunity to silences.\nViktor can command the singularity regardless of how far away he is from it.\nThe singularity will remain active even if Viktor dies and will automatically follow the nearest enemy champion in range at the time of his death, if it wasn\'t locked on already.\nThe singularity will only be issued to automatically follow a nearby champion once; it will not lock on to a new target if its current target becomes invalid.\nAny commands it was issued prior to his death will not be interrupted.\nThe base duration allows for 7 strikes (including the initial one).\nThe storm will follow its target even if they are not  visible, effectively giving away their position.\nArcane Storm is not obstructed by terrain.\nAfter becoming augmented, an  alternate icon is used for the recast of Arcane Storm.\nThe champion that Arcane Storm is following will have an overhead indicator.',
      resource: 'Mana',
      speed: '200 : 300 / 250 : 375',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location / Unit',
      targetRange: '700'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 90,
    control: 2,
    damage: 3,
    difficulty: 3,
    mobility: 1,
    toughness: 1,
    utility: 1
  },
  faction: 'zaun',
  lore: 'The fully biomechanical evolution of his former self, Viktor has embraced his Glorious Evolution and become something of a messiah to his followers. He sacrificed his own humanity under the logic that eliminating emotion would thereby eliminate suffering—and now seeks to bring the revelation of the hexcore to the rest of the world, even if they\'re incapable of understanding the benefit. After all, to this master of the arcane, violence is merely a variable necessary to balance the ultimate equation.',
  patchLastChanged: '25.06',
  positions: [
    'Middle'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2011-12-29',
  resource: 'Mana',
  roles: [
    'Battlemage',
    'Mage'
  ],
  stats: {
    acquisitionRadius: {
      flat: 525
    },
    armor: {
      flat: 23,
      perLevel: 4.4
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 53,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.12
    },
    attackRange: {
      flat: 525
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 2.11
    },
    attackSpeedRatio: {
      flat: 0.658
    },
    attackTotalTime: {
      flat: 1.6
    },
    criticalStrikeDamage: {
      flat: 175
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    gameplayRadius: {
      flat: 65
    },
    health: {
      flat: 600,
      perLevel: 100
    },
    healthRegen: {
      flat: 8,
      perLevel: 0.65
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 405,
      perLevel: 45
    },
    manaRegen: {
      flat: 8,
      perLevel: 0.8
    },
    movespeed: {
      flat: 335
    },
    pathingRadius: {
      flat: 35
    },
    selectionRadius: {
      flat: 120
    }
  }
}
export default champion