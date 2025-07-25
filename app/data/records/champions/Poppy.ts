// Updated Patch 25.11 - 06/16/2025 01:01:42 PM CDT

const champion: Champion = {
  id: 78,
  key: 'Poppy',
  name: 'Poppy',
  title: 'Keeper of the Hammer',
  resource: 'Mana',
  attackType: 'Melee',
  stats: {
    health: {
      flat: 610,
      perLevel: 110,
    },
    healthRegen: {
      flat: 8,
      perLevel: 0.8,
    },
    mana: {
      flat: 280,
      perLevel: 40,
    },
    manaRegen: {
      flat: 7,
      perLevel: 0.7,
    },
    armor: {
      flat: 35,
      perLevel: 5,
    },
    magicResistance: {
      flat: 32,
      perLevel: 2.05,
    },
    attackDamage: {
      flat: 60,
      perLevel: 4,
    },
    movespeed: {
      flat: 345,
    },
    acquisitionRadius: {
      flat: 400,
    },
    selectionRadius: {
      flat: 100,
    },
    pathingRadius: {
      flat: 35,
    },
    gameplayRadius: {
      flat: 55,
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
      flat: 0.625,
    },
    attackCastTime: {
      flat: 0.375,
    },
    attackTotalTime: {
      flat: 1.6,
    },
    attackRange: {
      flat: 125,
    },
  },
  positions: [
    'Jungle',
    'Top',
  ],
  roles: [
    'Fighter',
    'Tank',
    'Warden',
  ],
  attributeRatings: {
    damage: 2,
    toughness: 3,
    control: 3,
    mobility: 2,
    utility: 1,
    abilityReliance: 75,
    difficulty: 2,
  },
  abilities: {
    P: [
      {
        name: 'Iron Ambassador',
        icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/p',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Periodically, Poppy\'s next basic attack is empowered to throw her buckler, gaining 350 bonus range and dealing 20 - 180 (based on level) bonus magic damage. After it hits, the buckler then falls to a location near the target over 1 second, landing and remaining there for up to 4 seconds.</p>',
          },
          {
            description: 'Poppy can move over the buckler to retrieve it, gaining a shield for 11% - 20% (based on level) of her maximum health for 3 seconds. If the buckler kills the target, or if the target is already dead when the buckler hits it, the buckler will bounce back to Poppy instead of falling. Enemy champions can move over the buckler to destroy it.',
          },
        ],
        targeting: 'Passive',
        affects: 'Self',
        spellshieldable: 'False',
        damageType: 'Magic damage',
        spellEffects: 'Proc',
        projectile: 'TRUE',
        notes: 'No additional details.',
        blurb: 'Innate: Periodically,  Poppy  throws her buckler as her next basic attack, which has  bonus range and deals bonus magic damage. The buckler then falls nearby and remains for a few seconds, which she and enemy champions can step over to either retrieve or destroy it.',
        speed: '1600',
      },
    ],
    Q: [
      {
        name: 'Hammer Shock',
        icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/q',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy smashes the area in the target direction, dealing physical damage to enemies hit. Against monsters, the damage based on their health ratio is capped.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      30,
                      55,
                      80,
                      105,
                      130,
                    ],
                  },
                  {
                    values: [
                      100,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                  {
                    values: [
                      9,
                    ],
                    units: [
                      '% of target\'s maximum health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Capped Monster Health Damage',
                modifiers: [
                  {
                    values: [
                      75,
                      105,
                      135,
                      165,
                      195,
                    ],
                  },
                ],
              },
              {
                attribute: 'Maximum Monster Damage',
                modifiers: [
                  {
                    values: [
                      105,
                      160,
                      215,
                      270,
                      325,
                    ],
                  },
                  {
                    values: [
                      100,
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
            description: 'The impact creates a field for 1 second that slows enemies within, which then ruptures to deal the same physical damage.',
            leveling: [
              {
                attribute: 'Slow',
                modifiers: [
                  {
                    values: [
                      20,
                      25,
                      30,
                      35,
                      40,
                    ],
                    units: [
                      '%',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      60,
                      110,
                      160,
                      210,
                      260,
                    ],
                  },
                  {
                    values: [
                      200,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                  {
                    values: [
                      18,
                    ],
                    units: [
                      '% of target\'s maximum health',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Maximum Monster Damage',
                modifiers: [
                  {
                    values: [
                      210,
                      320,
                      430,
                      540,
                      650,
                    ],
                  },
                  {
                    values: [
                      200,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          35,
          40,
          45,
          50,
          55,
        ],
        cooldown: [
          8,
          7,
          6,
          5,
          4,
        ],
        targeting: 'Direction',
        affects: 'Enemies',
        spellshieldable: 'Special',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spellaoe',
        projectile: 'FALSE',
        notes: 'Spell shields will block only a single instance of damage.\nThis ability will cast from wherever the caster is at the end of the cast time.',
        blurb: 'Active:  Poppy smashes the area in the target direction, dealing physical damage to enemies hit based on their maximum health.',
        width: '160',
        castTime: '0.3325',
        maxCharges: -1,
      },
    ],
    W: [
      {
        name: 'Steadfast Presence',
        icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/w',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Passive:</span> Poppy increases her total armor and total magic resistance by 12%, doubled to 24% while she is below 40% maximum health.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy gains 40% bonus movement speed and creates an aura around herself for 2 seconds, causing all enemies who attempt to dash into or within it to be dealt magic damage and knocked up for 0.5 seconds. If a target was successfully interrupted, they become grounded and slowed by 25% for 2 seconds.</p>',
            leveling: [
              {
                attribute: 'Magic Damage',
                modifiers: [
                  {
                    values: [
                      70,
                      110,
                      150,
                      190,
                      230,
                    ],
                  },
                  {
                    values: [
                      70,
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
            description: 'Steadfast Presence can only block a single dash per enemy per cast.',
          },
        ],
        cost: [
          50,
        ],
        cooldown: [
          20,
          18,
          16,
          14,
          12,
        ],
        targeting: 'Auto',
        affects: 'Self',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Magic damage',
        spellEffects: 'aoe',
        notes: 'Steadfast Presence does not stop  dashes if the unit is  crowd control immune,  displacement immune,  untargetable, or protected by  spell shield in the process (e.g.  Death Mark,  Stormbringer,  Unstoppable Force).\nDashes when the unit is  crowd control immune or  displacement immune still trigger the aura and take the damage, but do not get  knocked up and thus also never become  grounded and  slowed.\n Spell shields deny all the effects if Steadfast Presence is triggered by their holder, and are consumed in the process.\nBeing  untargetable prevents Steadfast Presence from triggering, but this does not prevent it from triggering against another, targetable dash.\nSteadfast Presence does not trigger against  lunges.',
        blurb: 'Passive:  Poppy increases her  total armor and  total magic resist. This effect is doubled while she is at low health.',
        castTime: 'none',
        effectRadius: '400',
        maxCharges: -1,
      },
    ],
    E: [
      {
        name: 'Heroic Charge',
        icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/e',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy dashes to the target enemy\'s location. If they are in range upon arrival, she deals physical damage and carries them along with her for up to 400 units.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      40,
                      60,
                      80,
                      100,
                      120,
                    ],
                  },
                  {
                    values: [
                      60,
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
            description: 'If the target hits terrain, she stops to deal the same physical damage again and stuns them for a duration.',
            leveling: [
              {
                attribute: 'Stun Duration',
                modifiers: [
                  {
                    values: [
                      1.6,
                      1.7,
                      1.8,
                      1.9,
                      2,
                    ],
                    units: [
                      ' seconds',
                    ],
                  },
                ],
              },
              {
                attribute: 'Total Physical Damage',
                modifiers: [
                  {
                    values: [
                      80,
                      120,
                      160,
                      200,
                      240,
                    ],
                  },
                  {
                    values: [
                      120,
                    ],
                    units: [
                      '% bonus AD',
                    ],
                  },
                ],
              },
            ],
          },
        ],
        cost: [
          70,
        ],
        cooldown: [
          14,
          13,
          12,
          11,
          10,
        ],
        targeting: 'Unit',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'spell',
        notes: 'Poppy will be ordered to basic attack the target.\nHeroic Charge can apply spell effects twice (once when Poppy hits her target and once she stuns them against a wall).\nBoth instances of damage and crowd control are all the same cast instance. Effects that only trigger once per spell cast will not trigger twice.\nPoppy dashes slightly less far than the distance she pushes the target.\nHeroic Charge can interact with player-generated terrain.\nThe  dash does not follow targets. The target\'s position at the time of Heroic Charge\'s cast is the direction Poppy will dash towards.\nPoppy does not  carry nor deal damage to the target if they have left a certain radius before she collides with them.',
        blurb: 'Active:  Poppy  dashes to the target enemy, dealing physical damage and  carrying them forward. If the target hits terrain, Poppy deals the same physical damage again and briefly  stuns them.',
        speed: '1800',
        castTime: 'none',
        targetRange: '475',
        maxCharges: -1,
      },
    ],
    R: [
      {
        name: 'Keeper\'s Verdict',
        icon: 'https://cdn.communitydragon.org/latest/champion/Poppy/ability-icon/r',
        effects: [
          {
            description: '<p class="ability-effect"><span class="ability-header">Active:</span> Poppy charges while being slowed by 15% for up to 4 seconds to increase Keeper\'s Verdict\'s range and knock back distance over 0.5 seconds after the first 0.5 seconds of the channel. Keeper\'s Verdict can be recast within the duration.</p>',
          },
          {
            description: '<p class="ability-effect"><span class="ability-header">Recast:</span> Poppy releases the charge to launch her hammer upwards, dealing physical damage to enemies nearby and in an area in front of her and knocking them up for 1 second.</p>',
            leveling: [
              {
                attribute: 'Physical Damage',
                modifiers: [
                  {
                    values: [
                      100,
                      150,
                      200,
                    ],
                  },
                  {
                    values: [
                      45,
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
            description: 'If Keeper\'s Verdict was charged for at least 0.5 seconds, it deals 100% increased damage and enemies hit are knocked back up-to 3400 units toward the enemy team\'s fountain, during which they are revealed and rendered untargetable. Additionally, if no enemies are hit in front of Poppy, she sends a shockwave that travels in the target direction until it collides with an enemy champion, which causes a hammer to erupt. Targets hit by the shockwave or the eruption receive the charged effects.',
            leveling: [
              {
                attribute: 'Increased Damage',
                modifiers: [
                  {
                    values: [
                      200,
                      300,
                      400,
                    ],
                  },
                  {
                    values: [
                      90,
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
            description: 'If the charge is interrupted or completes without reactivation, Keeper\'s Verdict is cancelled and the ability is put on a 15-second cooldown.',
          },
        ],
        cost: [
          100,
        ],
        cooldown: [
          140,
          120,
          100,
        ],
        targeting: 'Auto / Direction',
        affects: 'Enemies',
        spellshieldable: 'True',
        resource: 'Mana',
        damageType: 'Physical damage',
        spellEffects: 'Area of effect',
        projectile: 'TRUE',
        notes: 'During the Recast\'s cast time, Poppy\'s  Flash is  sealed.\nThe erupting hammer of the charged cast that sends out a missile will be centered on the first champion struck, not at the location the missile collided with them.\nEnemies within the enemy team\'s fountain (at least 400 units away from the center of the fountain) that are hit by a Keeper\'s Verdict that would knock them back are instead  knocked up for 0.75 seconds and not rendered  untargetable, like the uncharged effect. They still receive the full damage.\nKeeper\'s Verdict does not destroy in-flight  projectiles for enemies hit if they are rendered  untargetable.\nThe  knock back will only displace enemies as far as they can go (e.g. to the furthest current spot available of  Realm of Death\'s and  The Hextech Ultimatum\'s borders and to the corner of the fountain).\nThe displacement\'s duration will remain unchanged regardless of if the knock back cannot achieve its full distance due to the affected target being restricted by boundaries they are unable to cross. In order for this to be possible, the speed of the knock back is decreased (based on where the actual landing point is) to match the amount of distance covered to time spent displaced.\nKeeper\'s Verdict\'s  airborne debuff is non-dispellable and thus cannot be removed by  cleansing effects.\nThe debuff will remove itself automatically when the forced movement ends.\nThe following table refers for interactions while Poppy is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Teleport  Recall  Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya\'s Battlesong  Youmuu\'s Ghostblade  Randuin\'s Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection',
        blurb: 'blurb2',
        speed: '2500',
        width: '180',
        castTime: '0.25 / 0.35',
        effectRadius: '180 / 225',
        maxCharges: -1,
      },
    ],
  },
  lore: 'Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing the legendary hammer of Orlon, a weapon twice her size, this determined yordle has spent untold years searching in secret for the fabled “Hero of Demacia,” said to be its rightful wielder. Until then, she dutifully charges into battle, pushing back the kingdom\'s enemies with every whirling strike.',
}
export default champion