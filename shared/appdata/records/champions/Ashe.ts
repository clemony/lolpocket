// Updated Patch 25.17 - 09/18/2025 02:20:02 AM CDT

const champion: Champion = {
  id: 22,
  key: 'Ashe',
  name: 'Ashe',
  title: 'the Frost Archer',
  abilities: [
    {
      key: 'P',
      name: 'Frost Shot',
      affects: 'Enemies',
      blurb: 'Innate:  Ashe\'s basic attacks deal increased damage based on her critical strike chance and critical strike damage.',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Ashe\'s basic attacks deal bonus physical damage equal to (75% + 40%) critical strike chance. Critical strikes do not deal any additional damage.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Frost Shot:</span> Ashe\'s basic attacks and ability hits apply Frost to enemies for 2 seconds, which slows them by 20% - 30% (based on level) for the duration.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate - Critical Slow:</span> Ashe\'s critical strikes double Frost\'s slow strength to 40% - 60% (based on level), decaying over the first second of the duration to its normal strength.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/p',
      notes: 'Ashe\'s critical strikes are still considered critical strike damage and thus will be reduced by  Randuin\'s Omen\'s Resilience.\n Runaan\'s Hurricane\'s will not deal additional damage on  critical strikes.\n Cheap Shot will trigger on a subsequent basic attack even when the target is no longer slowed.(note)',
      spellshieldable: 'True',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Ranger\'s Focus',
      affects: 'Self',
      blurb: 'Passive:  Ashe\'s basic attacks generate  stacks of Focus, up to a cap. Once the stacks reach the cap, she can cast Ranger\'s Focus.',
      castTime: 'none',
      cooldown: '0',
      cost: '30',
      damageType: 'Physical damage',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Passive:</span> While Ranger\'s Focus is inactive, Ashe\'s basic attacks on-attack generate a stack of Focus for 4 seconds, refreshing on subsequent attacks and stacking up to 4 times. Stacks expire by one every second when the duration ends.</p>'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> For 6 seconds, Ashe gains bonus attack speed and empowers her basic attacks to fire a flurry of five arrows that deal modified physical damage. The flurries apply life steal and Frost Shot per arrow, but apply on-hit effects only once.</p>',
          leveling: [
            {
              attribute: 'Bonus Attack Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '25 / 37.5 / 50 / 62.5 / 75'
                }
              ]
            },
            {
              attribute: 'Physical Damage Per Arrow',
              modifiers: [
                {
                  unit: '% AD',
                  values: '22 / 23.5 / 25 / 26.5 / 28'
                }
              ]
            },
            {
              attribute: 'Total Damage Per Flurry',
              modifiers: [
                {
                  unit: '% AD',
                  values: '110 / 117.5 / 125 / 132.5 / 140'
                }
              ]
            }
          ]
        },
        {
          description: 'Ranger\'s Focus resets Ashe\'s basic attack timer.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/q',
      maxCharges: -1,
      notes: 'The flurries deal 1 instance of  basic damage followed by 4 instances of a non-reactive type of damage (either  default or  proc).\nThe flurries are classified as a basic attack on a script level, but are considered an ability for other effects (e.g.  Maokai\'s  Sap Magic).(bug)\nThe first flurry of a Ranger\'s Focus cast fires[ one additional arrow, dealing 20% increased total damage. ][ six arrows, dealing a total of 132 / 141 / 150 / 159 / 168% attack damage. ]\nRanger\'s Focus works against  structures.\nFlat damage reductions (e.g.  Amumu\'s  Tantrum,  Fizz\'s  Nimble Fighter, or  Leona\'s  Eclipse) apply per arrow, resulting in extremely increased effectiveness against Ranger\'s Focus.\nThe sole exception is  Warden\'s Mail\'s Rock Solid, as that applies per cast instance rather than per damage instance.\nA flurry can apply 5 stacks of  Black Cleaver\'s Carve to a single target as it deals 5 instances of physical damage.\nRanger\'s Focus also empowers  Runaan\'s Hurricane\'s Wind\'s Fury bolts to become a flurry of 5 bolts each as well.\nThe empowered bolts use Ashe\'s attack projectile, including her missile speed (2500 compared to their default 2000).\nThe bolts are evenly distributed among up to 3 secondary targets, but a single target cannot be hit by more than 5 bolts.\nThese flurries also apply  on-hit effects only once to each target hit.',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'special',
      spellshieldable: 'false',
      targeting: 'Auto'
    },
    {
      key: 'W',
      name: 'Volley',
      width: '20',
      affects: 'Enemies',
      angle: '27.75°/ 37° / 46.25° / 4.625°',
      blurb: 'Active:  Ashe fires arrows in a cone dealing physical damage and applying  Critical Slow to the first enemies hit.',
      castTime: '0.25',
      cooldown: '18 / 14.5 / 11 / 7.5 / 4',
      cost: '75 / 70 / 65 / 60 / 55',
      damageType: 'Physical damage',
      effectRadius: '1200',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe shoots a volley of arrows in a cone in the target direction, each dealing physical damage to the first enemy hit, and applying Critical Slow to enemy champions hit.</p>',
          leveling: [
            {
              attribute: 'Arrows',
              modifiers: [
                {
                  values: '7 / 8 / 9 / 10 / 11'
                }
              ]
            },
            {
              attribute: 'Physical Damage',
              modifiers: [
                {
                  values: '60 / 95 / 130 / 165 / 200'
                },
                {
                  unit: '% bonus AD',
                  values: '110'
                }
              ]
            }
          ]
        },
        {
          description: 'Enemies can intercept multiple arrows but do not take damage from any beyond the first.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/w',
      maxCharges: -1,
      notes: 'The missiles are spawned in a straight horizontal line 75 units in front of Ashe, with a total width of 75/100/100/123/123 units.\nBetween each missile spawn location is a distance of 12.5 units, except for the two outermost ones at the last two ranks (which are 11.5 units from the closest other one), and the two centermost missiles at ranks 2 and 4 (which have 20 units between them and 15 units to the next missile, respectively).\nThis inconsistent behaviour of spawn locations means the angle between each missile can vary off of 4.625° slighty.\nThis ability will cast from wherever the caster is at the end of the cast time.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '2000',
      spellEffects: 'aoe',
      spellshieldable: 'True',
      targeting: 'Direction'
    },
    {
      key: 'E',
      name: 'Hawkshot',
      affects: 'Enemies',
      blurb: 'Active:  Ashe sends a hawk spirit to a location,  exposing the area along its path and a large area at its destination.',
      castTime: '0.25',
      cooldown: '5',
      cost: '0',
      effectRadius: '1000',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe sends a hawk spirit to a location, granting sight of the area along its path[ repeatedly for 0.5 seconds after every 100 units traveled ][ for effectively up-to 1.8 seconds at any location ]and at its destination for 5 seconds.</p>'
        },
        {
          description: 'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/e',
      maxCharges: 2,
      notes: 'Hawkshot\'s recharge timer seems to start at the beginning of the game, even prior to ranking the ability, but upon actually ranking the ability, it starts with one charge and the recharge timer starts from 0.\nHawkshot will ping enemy champions it spots if allies didn\'t already have vision of them, and put a \'revealed\' visual effect on them for 2.75 seconds, but does not actually reveal the units in particular, and is removed if the champion leaves the area.\nAshe marks enemy champions who were previously unseen but were revealed Hawkshot in order to gain assist credit, lasting for the standard credit timer.\nHawkshot will trigger upon colliding with  Blade Whirl or  Wind Wall but not  Unbreakable.\nHawkshot will grant 0.33 points of vision score for each champion revealed.',
      projectile: 'SPECIAL',
      rechargeRate: '90 / 80 / 70 / 60 / 50',
      resource: 'Charge',
      speed: '1400',
      spellshieldable: 'false',
      targeting: 'Location',
      targetRange: 'Global'
    },
    {
      key: 'R',
      name: 'Enchanted Crystal Arrow',
      width: '260',
      affects: 'Enemies',
      blurb: 'Active:  Ashe launches a crystal arrow of ice that  stuns the first enemy champion hit, dealing magic damage. The arrow accelerates initially and its stun duration increases the farther the arrow has traveled.',
      castTime: '0.25',
      cooldown: '100 / 80 / 60',
      cost: '100',
      damageType: 'Magic damage',
      effectRadius: '400 /  350',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe fires a massive arrow of ice in the target direction, granting sight of the area it flies through each for 1 second. The arrow shatters upon hitting an enemy champion, dealing them magic damage, stunning them for 1 - 3.5 (based on distance traveled) seconds, and granting sight of the area around them for 1 second.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '200 / 400 / 600'
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
          description: 'Enemies surrounding the primary target are dealt the same damage and afflicted with Frost Shot.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/r',
      maxCharges: -1,
      notes: 'Enchanted Crystal Arrow\'s projectile has an  icon on the mini-map while it is in flight. It can be seen by only Ashe and her allies.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe effect will be centered on the first champion struck, not at the location the missile collided with them.',
      projectile: 'TRUE',
      resource: 'Mana',
      speed: '1500 : 2100',
      spellEffects: 'aoe',
      spellshieldable: 'True',
      targeting: 'Direction'
    }
  ],
  adaptiveType: 'Physical damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 20,
    control: 3,
    damage: 2,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 2
  },
  faction: 'freljord',
  lore: 'Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people\'s belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.',
  patchLastChanged: '25.11',
  positions: [
    'Bottom',
    'Support'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  releaseDate: '2009-02-21',
  resource: 'Mana',
  roles: [
    'Marksman',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 26,
      perLevel: 4.6
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 59,
      perLevel: 2.95
    },
    attackDelayOffset: {
      flat: -0.081
    },
    attackRange: {
      flat: 600
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 3.33
    },
    attackSpeedRatio: {
      flat: 0.658
    },
    attackTotalTime: {
      flat: 1.6
    },
    criticalStrikeDamage: {
      flat: 100
    },
    criticalStrikeDamageModifier: {
      flat: 1
    },
    gameplayRadius: {
      flat: 65
    },
    health: {
      flat: 610,
      perLevel: 101
    },
    healthRegen: {
      flat: 3.5,
      perLevel: 0.55
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 280,
      perLevel: 35
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.65
    },
    movespeed: {
      flat: 325
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