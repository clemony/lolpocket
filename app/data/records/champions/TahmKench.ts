// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 223,
  key: 'TahmKench',
  name: 'Tahm Kench',
  title: 'The River King',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 640,
      perLevel: 103,
    },
    healthRegen: {
      flat: 6.5,
      perLevel: 0.55,
    },
    mana: {
      flat: 325,
      perLevel: 50,
    },
    manaRegen: {
      flat: 8,
      perLevel: 1,
    },
    armor: {
      flat: 39,
      perLevel: 4.7,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 56,
      perLevel: 3.2,
    },
    movespeed: {
      flat: 335,
    },
    acquisitionRadius: {
      flat: 600,
    },
    selectionRadius: {
      flat: 125,
    },
    pathingRadius: {
      flat: 50,
    },
    gameplayRadius: {
      flat: 80,
    },
    criticalStrikeDamage: {
      flat: 175,
    },
    criticalStrikeDamageModifier: {
      flat: 1,
    },
    attackSpeed: {
      flat: 0.658,
      perLevel: 2.5,
    },
    attackSpeedRatio: {
      flat: 0.658,
    },
    attackCastTime: {
      flat: 0.38,
    },
    attackTotalTime: {
      flat: 1.519,
    },
    attackRange: {
      flat: 175,
    },
  },
  positions: [
    'Support',
    'Top',
  ],
  roles: [
    'Support',
    'Tank',
    'Warden',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 2,
    mobility: 1,
    utility: 3,
    abilityReliance: 65,
    difficulty: 1,
  },
  abilities: {
    P: [
      {
        name: 'An Acquired Taste',
        icon: 'https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Tahm Kench\'s basic attacks on-hit and Tongue Lash are empowered to deal 6 - 48 (based on level) (+ 1.5% AP per 100 bonus health) (+ 4% of his bonus health) bonus magic damage and apply a stack of An Acquired Taste against enemy champions for 5 seconds, refreshing on subsequent hits and stacking up to 3 times. Stacks expire by one every 0.67 seconds when the duration ends.</p>',
          },
          {
            description: 'Tongue Lash and Devour gain additional effects against enemies with 3 stacks, consuming them all.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        damageType: 'Magic damage',
        spellEffects: 'Proc',
        notes: 'The passive bonus damage applies to turrets.',
        blurb: 'Innate:  Tahm Kench\'s basic attacks and  Tongue Lash deal bonus magic damage based on his bonus health, and apply a stack of An Acquired Taste against  champions that stacks up to a cap.',
      },
    ],
    Q: [
      {
        name: 'Tongue Lash',
        icon: 'https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tahm Kench lashes his tongue in the target direction that deals magic damage to the first enemy hit and slows them by 50% for 2 seconds. If this hits an enemy champion, Tahm Kench also heals himself.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      120,
                      165,
                      210,
                      255,
                    ],
                    units: [
                      ' ',
                    ],
                  },
                  {
                    values: [
                      6,
                      8.470588235294118,
                      10.941176470588236,
                      13.411764705882353,
                      15.882352941176471,
                      18.352941176470587,
                      20.823529411764707,
                      23.294117647058826,
                      25.764705882352942,
                      28.235294117647058,
                      30.705882352941178,
                      33.1764705882353,
                      35.64705882352941,
                      38.11764705882353,
                      40.58823529411765,
                      43.05882352941177,
                      45.529411764705884,
                      48,
                    ],
                  },
                  {
                    values: [
                      100,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                  {
                    values: [
                      1.5,
                    ],
                    units: [
                      '% AP per 100 bonus health',
                    ],
                  },
                  {
                    values: [
                      4,
                    ],
                    units: [
                      '% bonus health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Heal',
                modifiers: [
                  {
                    values: [
                      10,
                      15,
                      20,
                      25,
                      30,
                    ],
                  },
                  {
                    values: [
                      5,
                      5.5,
                      6,
                      6.5,
                      7,
                    ],
                    units: [
                      '% of missing health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">An Acquired Taste Bonus:</span> The target is stunned for 1.5 seconds. Devour can be cast during Tongue Lash at no cost to pull the target to Tahm Kench before swallowing them.</p>',
          },
          {
            description: 'Tahm Kench is unable to move, attack, or cast Abyssal Dive or Devour on a different target while his tongue is in flight. Tongue Lash\'s range and travel speed can be increased by Tahm Kench\'s size.',
          },
        ],
        cost: [
          50,
          46,
          42,
          38,
          34,
        ],
        cooldown: [
          7,
          6.5,
          6,
          5.5,
          5,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'Spell',
        projectile: 'TRUE',
        notes: 'Tongue Lash\'s range and speed scale 1:1 alongside any size modifiers to Tahm Kench, but will not be reduced below their base values if his overall size modifier is smaller than 100%.\nAs the missile range and speed scale simultaneously, Tongue Lash will always take 0.33 seconds to reach its maximum range (no matter the cast range).\nBecause of this, increasing Tahm Kench\'s size with items such as  Elixir of Iron allows him to hit targets at even the same distance more quickly and giving them less time to dodge.\n Devour can be \'queued\' at any point during Tongue Lash (including the wind-up animation) and will not go on cooldown if Tahm Kench fails to hit a valid target with Tongue Lash.\nAll three  An Acquired Taste stacks will be consumed even if Tongue Lash\'s  stun is negated.\n An Acquired Taste is applied in a separate damage instance from Tongue Lash.\nThis causes effects like  Bone Plating and  Bloodletter\'s Curse\'s Vile Decay to be applied twice.(note)\nThis ability will cast from wherever the caster is at the start of the cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        speed: '2800',
        width: '140',
        castTime: '0.25',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Abyssal Dive',
        icon: 'https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tahm Kench channels for 1.35 seconds as he dives into the waters, then blinks to the target location after a 0.15-second delay and remains unable to act for 0.65 seconds after the channel completes. Abyssal Dive grants sight of the area during the channel.</p>',
          },
          {
            description: 'Tahm Kench emerges to deal magic damage to nearby enemies, as well as knock up and stun them for 1 second. If this hits at least one enemy champion, 40% of Abyssal Dive\'s mana cost as well as a percentage of its cooldown are refunded.',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      135,
                      170,
                      205,
                      240,
                    ],
                  },
                  {
                    values: [
                      150,
                    ],
                    units: [
                      '% AP',
                    ],
                  },
                ],
              },
              {
                attribute: 'Cooldown Refund',
                modifiers: [
                  {
                    values: [
                      40,
                      42.5,
                      45,
                      47.5,
                      50,
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
            description: 'Enemies can see the indicator for Tahm Kench\'s destination after he has channeled for 0.75 seconds.',
          },
        ],
        cost: [
          60,
          75,
          90,
          105,
          120,
        ],
        cooldown: [
          21,
          20,
          19,
          18,
          17,
        ],
        targeting: 'Location',
        affects: 'Self, Allies',
        spellshieldable: 'true',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'spellaoe',
        notes: 'Tahm Kench is  vanished (but does not become untargetable) during the 0.15 seconds delay.\nThe following table refers for interactions while Tahm Kench is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Tahm Kench is unable to act:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath',
        blurb: 'blurb2',
        effectRadius: '275 /  200',
        targetRange: '1000 / 1050 / 1100 / 1150 / 1200',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Thick Skin',
        icon: 'https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Tahm Kench stores a portion of the post-mitigation damage he takes as grey health on his health bar, increased while there are at least 2 nearby visible enemy champions either dead or alive. He can store up to 300% of his maximum health.</p>',
            leveling: [
              {
                attribute: 'Damage Stored into Grey Health',
                modifiers: [
                  {
                    values: [
                      15,
                      23,
                      31,
                      39,
                      47,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Increased Damage Stored into Grey Health',
                modifiers: [
                  {
                    values: [
                      42,
                      44,
                      46,
                      48,
                      50,
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
            description: 'While Thick Skin is not on cooldown, and after 4 seconds without taking damage, Tahm Kench rapidly consumes his grey health to restore 45% - 100% (based on level) of the amount, healing for 10% of his maximum health every 0.264 seconds.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tahm Kench converts his current grey health into a shield that lasts for 2.5 seconds.</p>',
          },
        ],
        cost: [
          0,
        ],
        cooldown: [
          3,
        ],
        targeting: 'Auto',
        affects: 'Self',
        notes: 'Thick Skin shield value and grey health percentage heal are both boosted by effects that increase heal and shield power. This means Tahm Kench can technically heal more than the normal amount of grey health and get a shield bigger than his maximum health.\nAt level 18 Tahm Kench would need 53.8%  heal power to heal for 100% of the damage he takes, reduced to 34.9% with  Revitalize, 23.1% with  Spirit Visage, and 6.9% with both.\nGrey health converts all post-mitigation damage, Thick Skin effectively grants Tahm Kench a form of true damage mitigation.\nGrey health can temporarily exceed 100% of his missing health when Tahm Kench heals through other means with a grey health bar at 100%. In that case he will keep the higher grey health value for a few moments until it updates and removes the amount that he healed.',
        blurb: 'Passive:  Tahm Kench stores grey health equal to a portion of damage taken, increased while he is near at least 2 enemy champions.',
        castTime: '0.25',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Devour',
        icon: 'https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tahm Kench abducts the target champion, pulling them to him over the cast time and then swallowing them to carry them in his belly for up to 3 seconds. While inside, the target is attached to Tahm Kench and is rendered untargetable and displacement immune. Devour can be cast on enemies only with 3 stacks of An Acquired Taste.</p>',
          },
          {
            description: 'If the target is an ally, they become unable to act and are granted a shield, which decays in strength by 50 every 0.25 seconds after they are Regurgitated. Tahm Kench will also gain 40% bonus movement speed for 3 seconds and is unable to cast movement spells besides Abyssal Dive while an ally is inside of his belly.',
            leveling: [
              {
                attribute: 'Shield Strength',
                modifiers: [
                  {
                    values: [
                      650,
                      800,
                      950,
                    ],
                  },
                  {
                    values: [
                      100,
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
            description: 'After 1 second, Tahm Kench can cast Regurgitate while a target is inside of his belly, and automatically does so after the duration. The swallowed ally can also input a movement command to force Tahm Kench to cast Regurgitate in a target direction of their choice, unless they are immobilized.',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">An Acquired Taste Bonus:</span> The target is suppressed during Devour\'s cast time and while attached. Tahm Kench will also be grounded and slowed by 40% under those same conditions.</p>',
          },
          {
            description: 'If Tahm Kench is performing Abyssal Dive, Regurgitate will not automatically cast until after he finishes.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          0,
        ],
        targeting: 'Unit',
        affects: 'Self, Enemies / Allies',
        spellshieldable: 'True',
        resource: 'Mana',
        notes: 'Devour\'s initial pull is a non- airborne displacement that displaces the target toward Tahm Kench over the ability\'s cast time.\nThis is also the same displacement that is used for when Devour is cast with  Tongue Lash, though with a greater pull distance as well as faster pull speed to account for Devour\'s short cast time.\nThe target will  blink to Tahm Kench\'s location at the end of this displacement, including if it is interrupted.\nAgainst enemies, Devour\'s pull from abducting the target depends on the application of the  suppression; if the suppression is not applied, neither is the pull. Similarly, if the suppression is removed, the displacement from the pull is stopped.\nThe attachment also depends upon the occurrence of the pull; if the target is not pulled, they are not attached to Tahm Kench and the swallow fails, cancelling the ability entirely.\nIf the target resists the suppression by being  immune to crowd control,  displacement immune, or having a  spell shield, Tahm Kench will not pull the target towards him.\nIf the target removes the suppression by any means, including with an applicable  cleanse effect or  dispel, one of two of the following interactions will occur based on the timing of the removal:\nIf the suppression was removed during Devour\'s cast time, the target will stop the displacement from the pull instantly and prevent themselves from being attached to Tahm Kench after the cast time.\nIf the suppression was removed while the target is attached to Tahm Kench (in other words, inside of his belly), the target will detach themselves from him instantly without Tahm Kench performing  Regurgitate.\nThe  untargetability and  displacement immunity is granted to the target during Devour\'s cast time as well. Enemies are granted these effects while they are suppressed; they are removed when the suppression is.\nDevour\'s suppression against enemies is removed if Tahm Kench dies, enters  resurrection, or transitions in or out of the  Realm of Death.\nEnemies will be dealt  Regurgitate\'s damage regardless of Tahm Kench casting the ability if Devour\'s suppression ends by any means other than transitioning out of  Realm of Death(bug) or  dismounting(bug) (including during Devour\'s cast time).\nIf the target transitions into the  Realm of Death or enters  resurrection, Tahm Kench will  Regurgitate them automatically.\nThis only occurs for the former if Tahm Kench is in a different dimension from the target.\nDevour cannot be used on allies that are  channeling or using an ability that preloads UnstoppableForceMarker.\nThe  self-slow is affected by  slow resist.\nTahm Kench cannot use gates during Devour.\nAllies can see if this spell is ready next to Tahm Kench\'s health bar.\nThe swallowed target is not considered to be  vanished. They are instead hidden below the visible map plane, to maintain ongoing effects such as  Senna\'s  Curse of the Black Mist.\nDuring Devour\'s attachment and  Regurgitate\'s displacement, the swallowed target\'s camera is locked and centered on their champion.\nThis does not affect Tahm Kench.\nThe following table refers for interactions while the target is unable to act:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nIf an ally, forces Tahm Kench to use  Regurgitate unless movement commands are otherwise restricted. If an enemy, movement commands are disabled.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        castTime: '0.25',
        targetRange: '250',
        maxCharges: -1,
      },
      {
        name: 'Regurgitate',
        icon: 'https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Tahm Kench detaches the swallowed champion from himself and spits them out in the target direction. If they are an enemy, he deals magic damage to them at the end of the displacement.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      250,
                      400,
                    ],
                  },
                  {
                    values: [
                      15,
                    ],
                    units: [
                      '% (+ 7% per 100 AP) of the target\'s maximum health',
                    ],
                  },
                ],
              },
            ],
          },
          {
            description: 'If Regurgitate was cast automatically, Tahm Kench spits the target out in his facing direction.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          0,
        ],
        targeting: 'Direction',
        affects: 'Enemies / Allies',
        spellshieldable: 'false',
        damageType: 'Magic damage',
        spellEffects: 'spell',
        notes: 'The displacement from spitting the target out also uniquely counts as the enemy\'s  dash.\nThe target will face in the direction of Regurgitate\'s cast for the duration of the displacement.\nThe target will  blink to Tahm Kench\'s location at the start of Regurgitate\'s cast time.\nRegurgitate will also automatically cast if the target is affected by  Fate\'s Call or enters  resurrection.\nTahm Kench becomes  unable to act for 0.25 seconds upon casting Regurgitate.',
        blurb: 'Active: Tahm Kench  spits the swallowed champion in the target direction. If they are an enemy, he deals magic damage based on the target\'s maximum health.',
        castTime: '0.25',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Known by many names throughout history, the demon Tahm Kench travels the waterways of Runeterra, feeding his insatiable appetite with the misery of others. Though he may appear singularly charming and proud, he swaggers through the physical realm like a vagabond in search of unsuspecting prey. His lashing tongue can stun even a heavily armored warrior from a dozen paces, and to fall into his rumbling belly is to tumble into an abyss from which there is little hope of return.',
}
export default champion