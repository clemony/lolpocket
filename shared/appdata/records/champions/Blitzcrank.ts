// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  id: 53,
  key: 'Blitzcrank',
  name: 'Blitzcrank',
  title: 'the Great Steam Golem',
  abilities: [
    {
      key: 'P',
      name: 'Mana Barrier',
      affects: 'Self',
      blurb: 'Innate: Periodically, when  Blitzcrank gets to low-health, Mana Barrier generates a  shield that scales with  maximum mana.',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, when damaged to 30% maximum health, Blitzcrank generates a shield equal to 35% of maximum mana, lasting for up to 10 seconds.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/p',
      notes: 'The shield will absorb the portion of incoming damage that would reduce health past 30%.\nMana Barrier\'s interactions with other  shield effects that trigger before taking damage that would reduce below 30% health:\nMana Barrier will trigger simultaneously with the Lifeline effect from  Hexdrinker,  Maw of Malmortius, or  Immortal Shieldbow if Blitzcrank takes damage while above 30% health, and trigger before them when the damage is taken while below 30% health.\nMana Barrier will always trigger simultaneously with the Lifeline effect from  Sterak\'s Gage if Blitzcrank takes damage while above or below 30% health.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Rocket Grab',
      width: '140 /  60',
      affects: 'Enemies',
      castTime: '0.25',
      cooldown: '20 / 19 / 18 / 17 / 16',
      cost: '100',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Blitzcrank fires their right hand in the target direction that catches the first enemy hit, dealing them magic damage, stunning them for 0.65 seconds, and pulling them towards Blitzcrank, during which they are revealed.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '110 / 160 / 210 / 260 / 310'
                },
                {
                  unit: '% AP',
                  values: '120'
                }
              ]
            }
          ]
        },
        {
          description: 'Blitzcrank is unable to move or attack while Rocket Grab is in flight.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/q',
      maxCharges: -1,
      notes: 'Rocket Grab\'s range is composed of a missile with 1080 range, and a smaller center-range area check at the end (colloqially known as a \'lollipop\').\nThe area check is currently half as long as it is supposed to be, reducing the intended 1150 range of the ability to 1115 range.\nHitting an enemy with this area check only also fails to play the ability\'s hit SFX. This makes it possible to easily distinguish whether the target was picked up by the missile collision or \'lollipop\'.\nTargets larger than 95 units in radius can be hit by a different edge-range circle check at the end of the missile.\nThe  airborne debuff lasts for up-to 1 second but will end prematurely when the target\'s movement stops, while the stun will persist (if duration permits).\n Displacement immunity will not resist the application of the  stun.\nThe target\'s destination lies 75 units in front of Blitzcrank.\nIf the target is closer than this, the effect will still move them to this location.\nIf this location would be inside static terrain, the target\'s destination will end up on Blitzcrank\'s side, even if that means pulling them right on top of Blitzcrank.\nThis can occasionally fail.(bug)\nIf Blitzcrank is being moved (e.g.  Airborne,  Kinematics or  Fate\'s Call) during the grab, the target will be pulled towards Blitzcranks old location.\nBlitzcrank will be ordered to basic attack the target once the target arrives.\nIf the target dies to Rocket Grab\'s damage, they will not be pulled.\nThis ability will cast from wherever the caster is at the end of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1800 / 1800',
      spellEffects: 'spell',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'W',
      name: 'Overdrive',
      affects: 'Self',
      blurb: 'Active:  Blitzcrank shifts into overdrive, gaining  bonus attack speed and a burst of  movement speed.',
      castTime: 'none',
      cooldown: '15',
      cost: '75',
      damageType: 'Magic damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Blitzcrank shifts into overdrive, gaining bonus attack speed for 5 seconds and bonus movement speed that decays to 10% over the first 2.9 seconds.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '30 / 40 / 50 / 60 / 70'
                }
              ]
            },
            {
              attribute: 'Initial Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '60 / 65 / 70 / 75 / 80'
                }
              ]
            }
          ]
        },
        {
          description: 'When Overdrive ends, Blitzcrank is slowed by 30% for 1.5 seconds.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/w',
      maxCharges: -1,
      notes: 'The movement speed boost\'s decay is linear. On the first stat update after the buff is gained, the boost does not decay.\nThe self-slow is affected by  slow resist and  Tenacity.',
      resource: 'Mana',
      spellEffects: 'proc',
      targeting: 'Auto'
    },
    {
      key: 'E',
      name: 'Power Fist',
      affects: 'Enemy, Structure',
      blurb: 'Active:  Blitzcrank charges up a fist to make the next  basic attack deal double damage and  knock up the target into the air.',
      castTime: 'none',
      cooldown: '9 / 8 / 7 / 6 / 5',
      cost: '25',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Blitzcrank empowers their next basic attack within 5 seconds to have an uncancellable windup, deal 100% AD (+ 25% AP) bonus physical damage and knock up the target for 1 second. This damage is affected by critical strike modifiers.</p>'
        },
        {
          description: 'Power Fist resets Blitzcrank\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/e',
      maxCharges: -1,
      notes: 'Power Fist deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nThis includes the basic attack itself.\nThe  knockup is applied even if the attack is  dodged or  missed.\nIt is not applied if it is  blocked.\n Spell shield prevents the  knockup but not the damage.\nThe enhanced attack will still complete and hit the target even if they become  untargetable during the attack\'s windup.\nThe target is displaced a short distance during the  knockup in a random direction.',
      resource: 'Mana',
      spellEffects: 'Special',
      spellshieldable: 'special',
      targeting: 'Auto'
    },
    {
      key: 'R',
      name: 'Static Field',
      affects: 'Enemies',
      blurb: 'Passive: While Static Field is ready,  Blitzcrank\'s basic attacks apply a  stack of Static Field.',
      castTime: '0.25',
      cooldown: '60 / 40 / 20',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '600',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> While Static Field is not on cooldown, Blitzcrank\'s basic attacks apply a stack to the target on-hit. After every 1 second, one stack is consumed to deal them magic damage.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '50 / 100 / 150'
                },
                {
                  unit: '% AP',
                  values: '30 / 40 / 50'
                },
                {
                  unit: '% maximum mana',
                  values: '2'
                }
              ]
            }
          ]
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Blitzcrank detonates a static field that destroys the damage-mitigating shields of all nearby enemies, excluding the shields of monsters, and then deals them magic damage and silences them for 0.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '275 / 400 / 525'
                },
                {
                  unit: '% AP',
                  values: '100'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Blitzcrank/ability-icon/r',
      maxCharges: -1,
      notes: 'Blitzcrank\'s attacks do not have to deal damage to apply the mark.\nThe mark will be consumed even if the target becomes  untargetable.\nThe lightning bolts deal  spell damage while the static field applies  area damage.\nEven if Static Field is blocked by a  spell shield, it will still destroy any existing damage  shields on the target.\nThe visual effects will appear from wherever Blitzcrank is at the end of the cast time.(bug)\n\nThis ability will cast from wherever the caster is at the start of the cast time.',
      resource: 'Mana',
      spellEffects: 'Special',
      spellshieldable: 'true',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Melee',
  attributeRatings: {
    abilityReliance: 90,
    control: 3,
    damage: 1,
    difficulty: 1,
    mobility: 1,
    toughness: 2,
    utility: 1
  },
  faction: 'zaun',
  lore: 'Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.',
  patchLastChanged: '25.08',
  positions: [
    'Support'
  ],
  price: {
    blueEssence: 675,
    rp: 585
  },
  releaseDate: '2009-09-02',
  resource: 'Mana',
  roles: [
    'Catcher',
    'Support',
    'Tank'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 37,
      perLevel: 4.7
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 62,
      perLevel: 3.5
    },
    attackDelayOffset: {
      flat: -0.03
    },
    attackRange: {
      flat: 125
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 1.13
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
      flat: 80
    },
    health: {
      flat: 600,
      perLevel: 109
    },
    healthRegen: {
      flat: 7.5,
      perLevel: 0.75
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05
    },
    mana: {
      flat: 267,
      perLevel: 40
    },
    manaRegen: {
      flat: 8.5,
      perLevel: 0.8
    },
    movespeed: {
      flat: 325
    },
    pathingRadius: {
      flat: 50
    },
    selectionRadius: {
      flat: 140
    }
  }
}
export default champion