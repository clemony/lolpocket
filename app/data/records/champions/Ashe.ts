// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 22,
  key: 'Ashe',
  name: 'Ashe',
  title: 'the Frost Archer',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 610,
      perLevel: 101,
    },
    healthRegen: {
      flat: 3.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 280,
      perLevel: 35,
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.65,
    },
    armor: {
      flat: 26,
      perLevel: 4.6,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 59,
      perLevel: 2.95,
    },
    movespeed: {
      flat: 325,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 120,
    },
    pathingRadius: {
      flat: 35,
    },
    gameplayRadius: {
      flat: 65,
    },
    criticalStrikeDamage: {
      flat: 100,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 3.33,
    },
    attackSpeedRatio: {
      flat: 0.658,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.081,
    },
    attackRange: {
      flat: 600,
    },
  },
  positions: [
    'Bottom',
    'Support',
  ],
  roles: [
    'Marksman',
    'Support',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 1,
    control: 3,
    mobility: 1,
    utility: 2,
    abilityReliance: 20,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'Frost Shot',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Ashe\'s basic attacks deal bonus physical damage equal to (75% + 40%) critical strike chance. Critical strikes do not deal any additional damage.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Frost Shot:</span> Ashe\'s basic attacks and ability hits apply Frost to enemies for 2 seconds, which slows them by 20% - 30% (based on level) for the duration.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate - Critical Slow:</span> Ashe\'s critical strikes double Frost\'s slow strength to 40% - 60% (based on level), decaying over the first second of the duration to its normal strength.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Enemies',
        spellshieldable: 'True',
        damageType: 'Physical damage',
        notes: 'Ashe\'s critical strikes are still considered critical strike damage and thus will be reduced by  Randuin\'s Omen\'s Resilience.\n Runaan\'s Hurricane\'s will not deal additional damage on  critical strikes.\n Cheap Shot will trigger on a subsequent basic attack even when the target is no longer slowed.(note)',
        blurb: 'Innate:  Ashe\'s basic attacks deal increased damage based on her critical strike chance and critical strike damage.',
      },
    ],
    Q: [
      {
        name: 'Ranger\'s Focus',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> While Ranger\'s Focus is inactive, Ashe\'s basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times. Stacks expire by one every 1 second.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe gains bonus attack speed for 6 seconds and empowers her basic attacks to fire a flurry of five arrows.</p>',
            leveling: [
              {
                attribute: 'Bonus Attack Speed',
                modifiers: [
                  {
                    values: [
                      25,
                      37.5,
                      50,
                      62.5,
                      75,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Each arrow deals modified physical damage that benefits from Frost Shot and life steal. Flurries apply on-hit effects only once.',
            leveling: [
              {
                attribute: 'Physical Damage Per Arrow',
                modifiers: [
                  {
                    values: [
                      22,
                      23.5,
                      25,
                      26.5,
                      28,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Damage Per Flurry',
                modifiers: [
                  {
                    values: [
                      110,
                      117.5,
                      125,
                      132.5,
                      140,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Ranger\'s Focus resets Ashe\'s basic attack timer.',
          },
        ],
        cost: [
          30,
        ],
        cooldown: [
          0,
        ],
        targeting: 'Auto',
        affects: 'Self',
        spellshieldable: 'false',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'The first attack from Ranger\'s Focus has 6 arrows, thus dealing 20% more total damage than expected.\nRanger\'s Focus first bolt deals  basic damage with the subsequent 4 bolts dealing a non-reactive damage type (e.g.  default damage or  proc damage). The entire effect is classified as a basic attack on a script-level, but is considered an ability for other effects (i.e  Sap Magic), which is likely due to a mistaken script-level tag.\nAlthough Ranger\'s Focus has no actual cooldown, 4 stacks of focus are needed before Ranger\'s Focus can be reactivated. The time before being able to reactivate Ranger\'s Focus is 6.08 : 1.6 (based on attack speed) seconds.\nEach arrow from a flurry applies  Frost and the bonus damage from  Frost Shot is calculated individually per arrow.\nSimilarly, since a flurry is 5 instances of physical damage,  Black Cleaver allows her to cleave the enemy target 5 times per flurry.\nSources of flat damage reduction against any (physical) damage such as  Amumu\'s  Tantrum,  Leona\'s  Eclipse or  Fizz\'s  Nimble Fighter will apply the reduction to each arrow\'s damage, resulting in extremely reduced damaged compared to a normal attack.\nEach additional arrow from  Runaan\'s Hurricane will also split into 5 arrows.\nThe arrows are evenly distributed among secondary enemies but one enemy cannot be hit by more than 5 arrows.\nThe flurry will trigger on-hit effects once to each enemy hit, but no more than 3 targets per attack.\nThe flurry applies against structures. Stacks of Focus will be granted when attacking structures.',
        blurb: 'Passive:  Ashe\'s basic attacks generate stacks of Focus, up to a cap. Once the stacks reach the cap, she can cast Ranger\'s Focus.',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Volley',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe shoots a volley of arrows in a cone in the target direction, each dealing physical damage to the first enemy hit, and applying Critical Slow to enemy champions hit.</p>',
            leveling: [
              {
                attribute: 'Arrows',
                modifiers: [
                  {
                    values: [
                      7,
                      8,
                      9,
                      10,
                      11,
                    ],
                  },
                ],
              },
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      95,
                      130,
                      165,
                      200,
                    ],
                  },
                  {
                    values: [
                      110,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Enemies can intercept multiple arrows but do not take damage from any beyond the first.',
          },
        ],
        cost: [
          75,
          70,
          65,
          60,
          55,
        ],
        cooldown: [
          18,
          14.5,
          11,
          7.5,
          4,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'aoe',
        projectile: 'TRUE',
        notes: 'The missiles are spawned in a straight horizontal line 75 units in front of Ashe, with a total width of 75/100/100/123/123 units.\nBetween each missile spawn location is a distance of 12.5 units, except for the two outermost ones at the last two ranks (which are 11.5 units from the closest other one), and the two centermost missiles at ranks 2 and 4 (which have 20 units between them and 15 units to the next missile, respectively).\nThis inconsistent behaviour of spawn locations means the angle between each missile can vary off of 4.625° slighty.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Ashe fires arrows in a cone dealing physical damage and applying  Critical Slow to the first enemies hit.',
        speed: '2000',
        width: '20',
        angle: '27.75°/ 37° / 46.25° / 4.625°',
        castTime: '0.25',
        effectRadius: '1200',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Hawkshot',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe sends a hawk spirit to a location, granting sight of the area along its path[ repeatedly for 0.5 seconds after every 100 units traveled ][ for effectively up-to 1.8 seconds at any location ]and at its destination for 5 seconds.</p>',
          },
          {
            description: 'Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          5,
        ],
        targeting: 'Location',
        affects: 'Enemies',
        spellshieldable: 'false',
        resource: 'Charge',
        projectile: 'SPECIAL',
        notes: 'Hawkshot\'s recharge timer seems to start at the beginning of the game, even prior to ranking the ability, but upon actually ranking the ability, it starts with one charge and the recharge timer starts from 0.\nHawkshot will ping enemy champions it spots if allies didn\'t already have vision of them, and put a \'revealed\' visual effect on them for 2.75 seconds, but does not actually reveal the units in particular, and is removed if the champion leaves the area.\nHawkshot will grant assist credit if a previously-unseen enemy champion is killed within 10 seconds of being revealed by the ability.\nHawkshot will trigger upon colliding with  Blade Whirl or  Wind Wall but not  Unbreakable.\nHawkshot will grant 0.33 points of vision score for each champion revealed.',
        blurb: 'Active:  Ashe sends a hawk spirit to a location,  exposing the area along its path and a large area at its destination.',
        rechargeRate: [
          90,
          80,
          70,
          60,
          50,
        ],
        speed: '1400',
        castTime: '0.25',
        effectRadius: '1000',
        targetRange: 'Global',
        maxCharges: 2,
      },
    ],
    R: [
      {
        name: 'Enchanted Crystal Arrow',
        icon: 'https://cdn.communitydragon.org/latest/champion/Ashe/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Ashe fires a massive arrow of ice in the target direction, granting sight of the area it flies through each for 1 second. The arrow shatters upon hitting an enemy champion, dealing them magic damage, stunning them for 1 - 3.5 (based on distance traveled) seconds, and granting sight of the area around them for 1 second.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      400,
                      600,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Enemies surrounding the primary target are dealt the same damage and afflicted with Frost Shot.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          100,
          80,
          60,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        projectile: 'TRUE',
        notes: 'Enchanted Crystal Arrow\'s projectile has an  icon on the mini-map while it is in flight. It can be seen by only Ashe and her allies.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe effect will be centered on the first champion struck, not at the location the missile collided with them.',
        blurb: 'Active:  Ashe launches a crystal arrow of ice that  stuns the first enemy champion hit, dealing magic damage. The arrow accelerates initially and its stun duration increases the farther the arrow has traveled.',
        speed: '1500 - 2100',
        width: '260',
        castTime: '0.25',
        effectRadius: '400 / 350',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people\'s belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.',
}
export default champion