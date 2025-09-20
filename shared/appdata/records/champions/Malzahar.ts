// Updated Patch 25.17 - 09/18/2025 02:20:03 AM CDT

const champion: Champion = {
  id: 90,
  key: 'Malzahar',
  name: 'Malzahar',
  title: 'the Prophet of the Void',
  abilities: [
    {
      key: 'P',
      name: 'Void Shift',
      affects: 'Self',
      blurb: 'Innate: Periodically,  Malzahar gains Void Shift until he takes non- minion damage or negates a  crowd control effect, to which it then lingers for a brief time before expiring.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Malzahar gains Void Shift until he takes non- minion damage or negates a crowd control effect, to which it then lingers for 0.25 seconds before expiring. Void Shift: Malzahar gains crowd control immunity and 90% damage reduction.</p>'
        },
        {
          description: 'Void Shift\'s cooldown refreshes whenever Malzahar takes non- minion damage or is affected by a crowd control effect, and resets upon respawning.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/p',
      notes: 'Void Shift will not resist allied  crowd control nor will it be deactivated by them.\nVoid Shift will not mitigate  true damage but the buff will still be consumed.\nIt does not deactivate against the  Nexus Obelisk.\n Shields will take priority over Void Shift, but the buff will still be consumed (does not reduce damage inflicted). Void Shift triggers even if the shield negated the damage entirely.\nHowever, if Malzahar has a  spell shield and the  shield fully mitigates the damage, Void Shift does not trigger.(bug) The damage taken must be from an effect that cannot be negated by spell shields.\n Spell shields take priority over Void Shift. If the triggering hostile ability does not contain a  crowd control effect, both Void Shift and the spell shield break simultaneously.\nSince spell shields are precedent over Void Shift, applied  crowd control from effects that cannot be blocked by spell shields (i.e.  Wall of Pain) will also ignore Void Shift despite its  crowd control immunity. The effect must not damage Malzahar for this event to take place.\nVoid Shift will specifically not deactivate if Malzahar eats  Honeyfruit or is within a hostile  Frozen Heart passive aura.\nVoid Shift will prevent  Chum the Waters from attaching to him.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Call of the Void',
      affects: 'Enemies',
      blurb: 'Active:  Malzahar opens two portals to the void at the target location that last a brief time, which then deal magic damage to enemies between and briefly  silence them.',
      castTime: '0.25',
      cooldown: '6',
      cost: '60 / 65 / 70 / 75 / 80',
      damageType: 'Magic damage',
      effectRadius: '200',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Malzahar opens two portals to the void centered at the target location, granting sight of the area in between. After 0.4 seconds, enemies between the portals are dealt magic damage and silenced for a duration.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 105 / 140 / 175 / 210'
                },
                {
                  unit: '% AP',
                  values: '55'
                }
              ]
            },
            {
              attribute: 'Silence Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '1 / 1.25 / 1.5 / 1.75 / 2'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/q',
      maxCharges: -1,
      notes: 'Spell shield will prevent Call of the Void\'s refresh on  Malefic Visions.\n Malefic Visions\' debuff will also be removed.(note)',
      resource: 'Mana',
      spellEffects: 'Area of effect',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '900'
    },
    {
      key: 'W',
      name: 'Void Swarm',
      affects: 'Enemies',
      blurb: 'Passive:  Malzahar generates a stack of Zz\'Rot Swarm when he casts another  ability, up to a maximum.',
      castTime: 'none',
      cooldown: '8',
      cost: '40 / 45 / 50 / 55 / 60',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Malzahar generates a stack of Zz\'Rot Swarm when he casts another ability, up to a maximum of 2.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Malzahar consumes all Zz\'Rot Swarm stacks and, after a 0.5-second delay, summons a Voidling at the target location. Additional Voidlings are then summoned for each Zz\'Rot Swarm stack consumed, with each Voidling being summoned 0.5 seconds after the previous one.</p>',
          leveling: [
            {
              attribute: 'Voidling Duration',
              modifiers: [
                {
                  unit: ' seconds',
                  values: '8 / 8 / 9 / 9 / 10'
                }
              ]
            }
          ]
        },
        {
          description: 'Voidlings deal magic damage with their attacks, reduced by 50% against epic monsters and increased by 200% to enemy minions infected by Malefic Visions.',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '5 / 8.5 / 12 / 15.5 / 19 / 22.5 / 26 / 29.5 / 33 / 36.5 / 40 / 43.5 / 47 / 50.5 / 54 / 57.5 / 61 / 64.5'
                },
                {
                  values: '12 / 14 / 16 / 18 / 20'
                },
                {
                  unit: '% bonus AD',
                  values: '40'
                },
                {
                  unit: '% AP',
                  values: '20'
                }
              ]
            },
            {
              attribute: 'Minion Damage',
              modifiers: [
                {
                  values: '15 / 25.5 / 36 / 46.5 / 57 / 67.5 / 78 / 88.5 / 99 / 109.5 / 120 / 130.5 / 141 / 151.5 / 162 / 172.5 / 183 / 193.5'
                },
                {
                  values: '36 / 42 / 48 / 54 / 60'
                },
                {
                  unit: '% bonus AD',
                  values: '120'
                },
                {
                  unit: '% AP',
                  values: '60'
                }
              ]
            }
          ]
        },
        {
          description: 'See Pets for more details about Voidlings.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/w',
      notes: 'Malzahar loses all  stacks upon  death.\nZz\'Rot Swarm stacks are gained per cast and not per ability activation. For example, if  Malefic Visions is cast and the ability cancels under certain circumstances, a Zz\'Rot Swarm stack will still be granted despite the ability\'s failure to complete.',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      targeting: 'Location',
      targetRange: '150'
    },
    {
      key: 'E',
      name: 'Malefic Visions',
      affects: 'Enemies',
      blurb: 'Active:  Malzahar infects the target enemy\'s mind, continually dealing magic damage over a few seconds, which refreshes upon damaging them with  Call of the Void or  Nether Grasp.',
      castTime: '0.25',
      cooldown: '11 / 10 / 9 / 8 / 7',
      cost: '60 / 70 / 80 / 90 / 100',
      damageType: 'Magic damage',
      effectRadius: '500',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Malzahar infects the target enemy\'s mind, dealing magic damage every 0.25 seconds over 4 seconds, which refreshes upon damaging them with Call of the Void or Nether Grasp. Malefic Visions executes minions if they would be damaged below 10 - 30 (based on level) health.</p>',
          leveling: [
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '80 / 115 / 150 / 185 / 220'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '5 / 7.19 / 9.38 / 11.56 / 13.75'
                },
                {
                  unit: '% AP',
                  values: '5'
                }
              ]
            }
          ]
        },
        {
          description: 'If the target dies while infected, they spread Malefic Visions onto the closest nearby enemy and Malzahar restores 2% of his maximum mana.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/e',
      maxCharges: -1,
      notes: 'No additional notes.',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'DoT',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '650'
    },
    {
      key: 'R',
      name: 'Nether Grasp',
      affects: 'Enemies',
      castTime: '0.005',
      cooldown: '140 / 110 / 80',
      cost: '100',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Malzahar tethers to the target enemy champion, knocking them down. He then channels for up to 2.5 seconds, suppressing and revealing the target and dealing them magic damage every 0.25 seconds, revealing himself in the process.</p>',
          leveling: [
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '125 / 200 / 275'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  values: '12.5 / 20 / 27.5'
                },
                {
                  unit: '% AP',
                  values: '8'
                }
              ]
            }
          ]
        },
        {
          description: 'Malzahar will continue to channel as long as the tether is not broken, even if the suppression is removed.'
        },
        {
          description: 'Additionally, a Null Zone is opened beneath the target\'s location at the time of cast that lasts 5 seconds, dealing magic damage every 0.5 seconds to enemies within, capped at 120 per tick against minions and monsters.',
          leveling: [
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '10 / 15 / 20'
                },
                {
                  unit: '% per 100 AP',
                  values: '2.5'
                }
              ]
            },
            {
              attribute: 'Magic Damage Per Tick',
              modifiers: [
                {
                  unit: '%  of target\'s maximum health',
                  values: '1 / 1.5 / 2'
                },
                {
                  unit: '% per 100 AP',
                  values: '0.25'
                }
              ]
            }
          ]
        },
        {
          description: 'Null Zone will persist even if the channel is interrupted.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/r',
      maxCharges: -1,
      notes: 'If a target is currently being affected by  Malefic Visions, casting Nether Grasp on them will grant 2 stacks toward effects such as  Electrocute or  Phase Rush.(bug)\nThis is, correctly, not the case if Nether Grasp is cast before Malefic Visions.\nApplies  persistent damage for the tether and  persistent area damage to enemies within the Null Zone.\nThe tether will not break if the target enters a  zombie state or enters  resurrection.\nThe tether will continue to damage the target for its full duration even if it is broken early.(bug)\nRemoving the  suppression will also remove the  reveal.\nMalzahar places himself onto the ground and interrupts  displacements affecting him upon starting the channel.\nThe following table refers for interactions while Malzahar is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled if attacking Nether Grasp target. Otherwise interrupts after 0.5 seconds of channeling.\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled for the first 0.5 seconds. Interrupts afterwards.\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
      projectile: 'FALSE',
      resource: 'Mana',
      spellEffects: 'Special',
      spellshieldable: 'True',
      targeting: 'Unit',
      targetRange: '700',
      tetherRadius: '1250'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 100,
    control: 3,
    damage: 3,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'void',
  lore: 'A zealous seer dedicated to the unification of all life, Malzahar truly believes the newly emergent Void to be the path to Runeterra\'s salvation. In the desert wastes of Shurima, he followed the voices that whispered in his mind, all the way to ancient Icathia. Amidst the ruins of that land, he gazed into the dark heart of the Void itself, and was gifted new power and purpose. Malzahar now sees himself as a shepherd, empowered to bring others into the fold… or to release the voidling creatures that dwell beneath.',
  patchLastChanged: '25.04',
  positions: [
    'Middle'
  ],
  price: {
    blueEssence: 2400,
    rp: 880
  },
  releaseDate: '2010-06-01',
  resource: 'Mana',
  roles: [
    'Assassin',
    'Battlemage',
    'Mage'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 18,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 55,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.11
    },
    attackRange: {
      flat: 500
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 1.5
    },
    attackSpeedRatio: {
      flat: 0.625
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
      flat: 580,
      perLevel: 101
    },
    healthRegen: {
      flat: 6,
      perLevel: 0.6
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 375,
      perLevel: 28
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