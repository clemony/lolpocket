// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 166,
  key: 'Akshan',
  name: 'Akshan',
  title: 'the Rogue Sentinel',
  resource: 'Mana',
  attackType: 'Ranged',
  stats: {
    health: {
      flat: 630,
      perLevel: 107,
    },
    healthRegen: {
      flat: 3.75,
      perLevel: 0.65,
    },
    mana: {
      flat: 350,
      perLevel: 40,
    },
    manaRegen: {
      flat: 8.2,
      perLevel: 0.7,
    },
    armor: {
      flat: 26,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3,
    },
    attackDamage: {
      flat: 52,
      perLevel: 3,
    },
    movespeed: {
      flat: 330,
    },
    acquisitionRadius: {
      flat: 750,
    },
    selectionRadius: {
      flat: 100,
    },
    pathingRadius: {
      flat: 35,
    },
    gameplayRadius: {
      flat: 65,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.638,
      perLevel: 4,
    },
    attackSpeedRatio: {
      flat: 0.4,
    },
    attackCastTime: {
      flat: 0.3,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackDelayOffset: {
      flat: -0.167,
    },
    attackRange: {
      flat: 500,
    },
  },
  positions: [
    'Middle',
  ],
  roles: [
    'Assassin',
    'Marksman',
  ],
  attributeRatings: {
    damage: 3,
    toughness: 1,
    control: 1,
    mobility: 3,
    utility: 2,
    abilityReliance: 1,
    difficulty: 3,
  },
  abilities: {
    P: [
      {
        name: 'Dirty Fighting',
        icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Whenever Akshan uses a basic attack, he fires an additional shot after a delay that deals 50% AD physical damage, increased to 100% AD against minions. Issuing an attack order on a different target before the additional shot has been launched causes Akshan to fire it at the new target. If the second shot is cancelled instead, he gains 20 - 75 (based on level) × (1 + 100% bonus attack speed) bonus movement speed decaying over 1 second.</p>',
          },
          {
            description: 'The additional shot applies on-hit effects, triggers on-attack effects, and can critically strike[ for (22.5% + 12%) bonus damage. ][ 100% base damage + 30% bonus critical damage. ]',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Akshan\'s basic attacks on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal them 15 / 40 / 80 / 150 (based on level) (+ 60% AP) bonus magic damage; if the target is a champion, Akshan will also gain a 40 - 280 (based on level) (+ 35% bonus AD) shield for 2 seconds. The shield may be gained only once every few seconds.</p>',
          },
        ],
        targeting: 'Passive',
        affects: 'Self, Enemies',
        spellshieldable: 'false',
        damageType: 'Mixed damage',
        spellEffects: 'special',
        projectile: 'TRUE',
        notes: 'If the first shot has killed its target, Akshan will automatically acquire another enemy within 200 units beyond his  basic attack range, else he can do so by issuing an attack order to a different target.\nApplies  basic damage for the second shot and  proc damage for the bonus damage.\nThe second shot:\nIs treated as a basic attack.\nCritically strikes independently from the first shot.\nCan be cancelled by inputting a different command right after using the first shot.\nCounts as a separate hit for effects such as  Electrocute,  Muramana\'s Shock, and  Eclipse\'s Ever Rising Moon.\nStarts the attack windup\'s cooldown after it is used, rather than when the first shot is.\nThe attack speed scaling on the movement speed buff includes the bonus attack speed gained from Akshan\'s innate attack speed growth.\nAt level 18, at minimum it grants 126 decaying movement speed.\nChanging targets for the second shot will also acquire the new target.\nThe second shot, if the first shot\'s target was killed, will prioritize  visible enemy champions, then  minions on  low health.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
        blurb: 'Innate:  Akshan\'s basic attack causes him to fire a second attack that deals reduced physical damage. If Akshan cancels the second attack, he gains a brief burst of  move speed, increased based on his  attack speed.',
        speed: '2000 / 5000',
      },
    ],
    Q: [
      {
        name: 'Avengerang',
        icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akshan throws a boomerang in the target direction that briefly grants sight around its trajectory and deals physical damage to enemies hit, revealing them for 1 second and extending its range each time it hits a target. If this hits an enemy champion, Akshan gains 20% (+ 5% per 100 AP) bonus movement speed that decays over 1 second.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      5,
                      25,
                      45,
                      65,
                      85,
                    ],
                  },
                  {
                    values: [
                      80,
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
            description: 'Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.',
            leveling: [
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      10,
                      50,
                      90,
                      130,
                      170,
                    ],
                  },
                  {
                    values: [
                      160,
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
            description: 'Avengerang deals reduced damage against non-champions.',
            leveling: [
              {
                attribute: 'Non-Champion Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      50,
                      60,
                      70,
                      80,
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
            description: 'Enemies can be hit only once per pass.',
          },
        ],
        cost: [
          60,
          65,
          70,
          75,
          80,
        ],
        cooldown: [
          8,
          7.25,
          6.5,
          5.75,
          5,
        ],
        targeting: 'Direction',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        projectile: 'TRUE',
        notes: 'Spell shield will only block a single hit. They do not prevent the initial throw from extending its range.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.',
        blurb: 'Active:  Akshan throws a boomerang that deals physical damage to enemies hit, extending the boomerang range and briefly  revealing them. If this hits an enemy  champion, Akshan gains a brief burst of  move speed.',
        speed: '1500 / 2400',
        width: '120',
        castTime: '0.25',
        effectRadius: '400',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Going Rogue',
        icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Akshan marks enemy champions that kill allied champions as Scoundrels for 60 seconds. If Akshan scores a takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional 100 and resurrects all dead allied champions that they have slain after 1 second.</p>',
          },
          {
            description: 'When Akshan claims a Scoundrel\'s bounty he removes the marks of all other enemies. Scoundrels refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. Akshan cannot mark enemies as Scoundrels while they are dead. Allies are resurrected at their summoning platform.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akshan enters camouflage, which lasts indefinitely while he is near terrain or inside brush, and for 2 seconds otherwise. During this time. he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains bonus mana regeneration equal to 12% of his missing mana as well as bonus movement speed.</p>',
            leveling: [
              {
                attribute: 'Bonus Movement Speed',
                modifiers: [
                  {
                    values: [
                      80,
                      90,
                      100,
                      110,
                      120,
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Going Rogue can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends Going Rogue immediately.',
          },
          {
            description: 'Akshan can move during Going Rogue\'s cast time.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Akshan ends Going Rogue.</p>',
          },
        ],
        cost: [
          40,
          30,
          20,
          10,
          0,
        ],
        cooldown: [
          18,
          14,
          10,
          6,
          2,
        ],
        targeting: 'Auto',
        affects: 'Self, Enemies',
        resource: 'Mana',
        notes: 'The mark displays the duration and slay count.\nEnemy champions that kill Akshan will not be marked as Scoundrels nor increase their slay count.\n Clones do not count for triggering Going Rogue\'s passive.\nGoing Rogue\'s buff refreshes to last indefinitely upon moving near terrain or into brush, and will refresh to 2 seconds after leaving near terrain or brush.\nAllied champions within a  zombie state are resurrected only after the state ends.\nAkshan can still trigger Going Rogue\'s passive while he is within a  zombie state.\nUsing a basic attack breaks the stealth at the start of the attack windup.',
        blurb: 'Passive: Enemy  champions that kill allied champions are marked as a Scoundrel for a long time. When  Akshan scores a  takedown on a Scoundrel, he gains  bonus gold, all allies killed by the Scoundrel are resurrected, and Scoundrel status is removed from all other enemies.',
        castTime: '0.5',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Heroic Swing',
        icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akshan can activate Heroic Swing three times before the ability goes on cooldown, and can use the third cast only after 0.5 seconds of the second cast. Akshan may input an attack or movement command to use the second and third casts.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">First Cast:</span> Akshan fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2.125 seconds. Heroic Swing\'s second cast can be used while the hook is attached. If the hook fails to attach or Akshan is moved or becomes immobilized, grounded, or polymorphed within the duration, the preparation will end prematurely, cancelling Heroic Swing in the process.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Second Cast:</span> Akshan swings around the terrain in either a clockwise or counterclockwise direction based on the position of the cursor relative to his facing direction, stopping upon colliding with an enemy champion or terrain. While swinging, he fires at the nearest visible enemy every 0.231 seconds to deal them physical damage and apply on-hit effects for each shot, with on-hit damage reduced to 25% effectiveness.Akshan will be knocked down by any immobilizing or polymorphing crowd control during the dash.</p>',
            leveling: [
              {
                attribute: 'Physical Damage per Shot',
                modifiers: [
                  {
                    values: [
                      15,
                      30,
                      45,
                      60,
                      75,
                    ],
                    units: [
                      '  ×',
                    ],
                  },
                  {
                    values: [
                      15,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      1,
                    ],
                    units: [
                      ' + 0.3 per 100% bonus attack speed',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Third Cast:</span> Akshan ends the swing by jumping to the target location and fires one last shot at a nearby visible enemy.</p>',
          },
          {
            description: 'Scoring an enemy champion takedown reduces Heroic Swing\'s current cooldown to 0.5 seconds. The shots can critically strike for[ (157.5% + 36%) damage ][ 90% total critical damage ]and apply life steal at 100% effectiveness.',
          },
          {
            description: 'Avengerang and Going Rogue can be cast during the third cast\'s dash. Comeuppance can be cast at all points during Heroic Swing, though Akshan cannot fire during the swing while it is active. Akshan prioritizes firing at enemy champions with stacks of Dirty Fighting, then those damaged by his targeted spells in the last 4 seconds, then the nearest enemy. Heroic Swing can be cast during Akshan\'s other abilities.',
          },
        ],
        cost: [
          70,
        ],
        cooldown: [
          18,
          16.5,
          15,
          13.5,
          12,
        ],
        targeting: 'Auto / Location',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'basic',
        projectile: 'TRUE',
        notes: 'The second cast\'s dash will displace Akshan around the terrain in either a clockwise or counterclockwise direction, with the specific direction being determined by the position of the player\'s cursor relative to his facing direction.\nThe dash will move clockwise if the player\'s cursor is anywhere to the left of Akshan from his facing direction (or perspective), and counterclockwise if the cursor is anywhere to his right.\nAkshan will not stop swinging until his dash is stopped.\nThe swing will end prematurely if the terrain the hook was attached to no longer exists, such as player-generated terrain.\nAkshan will prioritize firing at enemies he damaged with any unit-targeted ability or spell within the last 4 seconds, such as  Comeuppance or  Ignite.\nHeroic Swing grants a buff to Akshan for 2 seconds that indicates and determines the first cast\'s duration.\nThis buff starts as soon as the ability is cast, and lingers for 0.125 seconds after it expires.\nThis means the hook can be attached to terrain for longer if it hits it earlier in the duration, and vice versa.\nIf Akshan  dashes (excluding second cast\'s dash) or  blinks or becomes affected by  immobilization,  ground, or  polymorph in the duration, the buff is removed immediately, causing the first cast to be lost and cancelling Heroic Swing entirely.\nAkshan immediately fires one shot at the beginning of his swing and a final shot while dismounting from the swing.\nAkshan can fire at any targetable enemy unit excluding structures and jungle plants.\nOnly Heroic Swing\'s first cast is disabled while  grounded or  rooted. The third cast is still usable during those effects.\nHeroic Swing\'s second and third cast can both be used while  silenced.\n Takedowns against  clones do not count for resetting Heroic Swing\'s cooldown.\nIf a  takedown is scored while Heroic Swing is active, the cooldown afterwards will be 0.5 seconds.\nAkshan will attempt to basic attack the target he fired at with the last shot after the third cast\'s dash ends, if there is no other input given.\nEach shot generates a stack of  Conqueror.\n Spell shield will only block a single shot.\nThe attack speed scaling on the damage of the attacks includes the bonus attack speed gained from Akshan\'s innate attack speed growth.\nAt level 18, each shot at minimum deals 108.36 (+ 18.06% AD) physical damage.\nDespite this ability not applying on-attack effects, it does apply  Navori Flickerblade\'s Transcendence.(bug)\nUnder certain circumstances, upon attaching the hook to terrain, Akshan will create a particle on the location permanently.(bug)\nThis particle can be attacked by minions.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.\nPENDING FOR TEST: Hook range including lollipop against walls, automated attacks range while swinging, final dash distance and speed.\nThe following table refers for interactions while the hook is attached or in flight:\n\n\nAttacking\n\nAutomatically initiates the second cast.\n\n\nAbilities\n\n Avengerang and  Going Rogue are disabled.  Comeuppance is usable.\n\n\nMovement\n\nAutomatically initiates the second cast.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects\n\nThe following table refers for interactions while Akshan is swinging:\n\n\nAttacking\n\nAutomatically initiates the third cast.\n\n\nAbilities\n\n Avengerang and  Going Rogue are disabled.  Comeuppance is usable.\n\n\nMovement\n\nAutomatically initiates the third cast.\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya\'s Hourglass  Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Hexflash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Immobilizing effects',
        blurb: 'First Cast:  Akshan prepares to swing by firing a hook that embeds in the first terrain hit. Heroic Swing\'s second cast can be used while the hook is attached.',
        speed: '2500 / 1200 / 3000',
        castTime: 'none',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Comeuppance',
        icon: 'https://cdn.communitydragon.org/latest/champion/Akshan/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Akshan locks onto the target enemy champion and begins channeling for 2.5 seconds, revealing them as well as revealing himself. He gradually stores bullets into his weapon over the duration.</p>',
            leveling: [
              {
                attribute: 'Maximum Bullets Stored',
                modifiers: [
                  {
                    values: [
                      5,
                      6,
                      7,
                    ],
                  },
                ],
              },
              {
                attribute: 'Bullet Storing Interval Time',
                modifiers: [
                  {
                    values: [
                      0.625,
                      0.5208,
                      0.4167,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Comeuppance will recast after the duration, or can be recast early after 0.5 seconds. Comeuppance is placed on a 5-second cooldown if the channel is cancelled.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Akshan fires all stored bullets at the target, each briefly granting sight around their trajectory and dealing physical damage to the first enemy hit, increased by 50% of critical chance and critical damage bonuses as well as by 0% - 200% (based on target\'s missing health). The shots can hit structures.</p>',
            leveling: [
              {
                attribute: 'Minimum Physical Damage per Bullet',
                modifiers: [
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '[25 / 30 / 35 / 40 / 45 ] × [1',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '0 : 0.5 ',
                    ],
                  },
                  {
                    values: [
                      0.2,
                    ],
                    units: [
                      ']',
                    ],
                  },
                  {
                    values: [
                      15,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      'based on critical strike chance',
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Physical Damage per Bullet',
                modifiers: [
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '[75 / 90 / 105 / 120 / 135 ] × [1',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '0 : 0.5 ',
                    ],
                  },
                  {
                    values: [
                      0.2,
                    ],
                    units: [
                      ']',
                    ],
                  },
                  {
                    values: [
                      45,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      'based on critical strike chance',
                    ],
                  },
                ],
              },
              {
                attribute: 'Minimum Charged Physical Damage',
                modifiers: [
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '[125 / 210 / 315 ] × [1',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '0 : 0.5 ',
                    ],
                  },
                  {
                    values: [
                      0.2,
                    ],
                    units: [
                      ']',
                    ],
                  },
                  {
                    values: [
                      75,
                      90,
                      105,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      'based on critical strike chance',
                    ],
                  },
                ],
              },
              {
                attribute: 'Damage to target on 67% missing hp',
                modifiers: [
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '[375 / 630 / 945 ] × [1',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      '0 : 0.5 ',
                    ],
                  },
                  {
                    values: [
                      0.2,
                    ],
                    units: [
                      ']',
                    ],
                  },
                  {
                    values: [
                      225,
                      270,
                      315,
                    ],
                    units: [
                      '% AD',
                    ],
                  },
                  {
                    values: [
                      0,
                    ],
                    units: [
                      'based on critical strike chance',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'Each bullet\'s damage applies life steal at 100% effectiveness and executes minions.',
          },
          {
            description: 'Akshan can move while channeling Comeuppance.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          100,
          85,
          70,
        ],
        targeting: 'Unit',
        affects: 'Self, Enemies',
        spellshieldable: 'special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        projectile: 'TRUE',
        notes: 'Comeuppance refreshes the duration of  Dirty Fighting stacks on the target every 0.25 seconds.\nA kill threshold will appear on the health bar of the target locked onto during the channel, which increases each time Akshan stores a bullet. If the target\'s current health falls below the threshold, their health bar will be framed in red.\nThe indicator factors the bonus damage applied by  Dirty Fighting as well as damage modifiers and the target\'s resistances.\nIt also factors the projected increase in the target\'s missing health, from which each consecutive bullet scales more.\nIt updates dynamically over the channel\'s duration, reacting to fluctuations of the target\'s health and damage mitigations.\nThe  reveal will linger for 2 seconds after the channel has ended.\n Spell shield will not prevent the lock-on and will only block a single bullet.\nComeuppance will not go on a reduced cooldown if Akshan  dies during the channel.\nComeuppance will cancel if the target becomes  untargetable or  dies during the channel.\nDamage to structures does scale with their missing health.\nThis ability\'s damage is calculated based on the caster\'s current stats and changes dynamically.\nThe following table refers for interactions while Akshan is  channeling:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Avengerang and  Going Rogue are disabled.  Heroic Swing is usable.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects',
        blurb: 'Active:  Akshan locks onto the target enemy champion and begins  channeling power into his gun to store bullets,  revealing them as well as  revealing himself. Comeuppance will recast after the channel, or can recast early.',
        speed: '3200',
        width: '120',
        castTime: 'none',
        targetRange: '2500',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra\'s many scoundrels while living by his own moral code: “Don\'t be an ass.”',
}
export default champion