// Updated Patch 25.17 - 09/18/2025 02:20:04 AM CDT

const champion: Champion = {
  id: 16,
  key: 'Soraka',
  name: 'Soraka',
  title: 'the Starchild',
  abilities: [
    {
      key: 'P',
      name: 'Salvation',
      affects: 'Self',
      blurb: 'Innate:  Soraka gains tremendous  bonus movement speed while facing nearby allied  champions that are at low health.',
      effectRadius: '2500',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Innate:</span> Soraka gains 90% bonus movement speed while facing nearby allied champions that are below 40% of their maximum health.</p>'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/p',
      notes: 'Soraka will see an arrow indicating the direction in which she can gain the bonus movement speed.',
      targeting: 'Passive'
    },
    {
      key: 'Q',
      name: 'Starcall',
      affects: 'Self, Enemies',
      blurb: 'Active:  Soraka calls down a star upon the target location that deals magic damage and briefly  slows enemies hit. If this hits at least one enemy  champion, the star dust returns to Soraka to grant her Rejuvenation for a short time.',
      castTime: '0.25',
      cooldown: '8 / 7 / 6 / 5 / 4',
      cost: '45 / 50 / 55 / 60 / 65',
      damageType: 'Magic damage',
      effectRadius: '265',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Soraka calls down a star upon the target location that grants sight of the area before landing after 0.25 - 1 (based on target range) seconds, dealing magic damage to enemies hit and slowing them by 30% for 1.5 seconds.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '85 / 120 / 155 / 190 / 225'
                },
                {
                  unit: '% AP',
                  values: '35'
                }
              ]
            }
          ]
        },
        {
          description: 'If this hits at least one enemy champion, star dust returns to Soraka, granting her Rejuvenation for 2.5 seconds. While Soraka has Rejuvenation, casting Astral Infusion will also grant Rejuvenation to the target for the same duration.'
        },
        {
          description: '<p class="ability-effect"><span class="ability-header">Rejuvenation:</span> Heal every 0.5 seconds and gain bonus movement speed that decays over the duration.</p>',
          leveling: [
            {
              attribute: 'Total Heal',
              modifiers: [
                {
                  values: '60 / 75 / 90 / 105 / 120'
                },
                {
                  unit: '% AP',
                  values: '30'
                }
              ]
            },
            {
              attribute: 'Heal per Tick',
              modifiers: [
                {
                  values: '12 / 15 / 18 / 21 / 24'
                },
                {
                  unit: '% AP',
                  values: '6'
                }
              ]
            },
            {
              attribute: 'Bonus Movement Speed',
              modifiers: [
                {
                  unit: '%',
                  values: '20 / 22.5 / 25 / 27.5 / 30'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/q',
      maxCharges: -1,
      notes: 'Starcall counts as hitting even if it gets blocked by  spell shield, granting Rejuvenation.\nBoth the initial hit and the Rejuvenation projectile can be  intercepted.\nRejuvenation heals over 12 ticks, with the first 4 each healing for about 15% of the heal, the next 4 ticks for about 5.5% each, and the last 4 for about 4.5% each.\nRejuvenation won\'t be granted to Soraka and she won\'t be able to make use of the health cost reduction on  Astral Infusion until the projectile gets to her, but she is able to Rejuvenate allies as soon as the target is hit.',
      projectile: 'TRUE',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'True',
      targeting: 'Location',
      targetRange: '800'
    },
    {
      key: 'W',
      name: 'Astral Infusion',
      affects: 'Allies / Self',
      blurb: 'Active:  Soraka consumes a portion of her maximum health to  heal the target allied champion.',
      castTime: '0.25',
      cooldown: '6 / 5 / 4 / 3 / 2',
      cost: '40 / 45 / 50 / 55 / 60',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Soraka heals the target allied champion.</p>',
          leveling: [
            {
              attribute: 'Heal',
              modifiers: [
                {
                  values: '90 / 110 / 130 / 150 / 170'
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
          description: 'If cast while under Rejuvenation, the health cost will be reduced by a percentage.',
          leveling: [
            {
              attribute: 'Health Cost Reduction',
              modifiers: [
                {
                  unit: '%',
                  values: '80 / 85 / 90 / 95 / 100'
                }
              ]
            },
            {
              attribute: 'Reduced Health Cost',
              modifiers: [
                {
                  unit: '% of maximum health',
                  values: '2 / 1.5 / 1 / 0.5 / 0'
                }
              ]
            }
          ]
        },
        {
          description: 'Astral Infusion cannot be cast if Soraka is below 5% of her maximum health.'
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/w',
      maxCharges: -1,
      notes: 'Astral Infusion can also be targeted on allied  decoys.\nAstral Infusion can be cast even if Soraka doesn\'t have the sufficient amount of health to pay for the health cost while above  5% of her maximum health.\nAs with all abilities with health costs, Astral Infusion will not reduce Soraka\'s health below 1.\n Spirit Visage will only increase the health donated to allies if the target ally possesses it, although owning it will boost the heal that Soraka receives from  Starcall and  Wish.\nAstral Infusion\'s effects occur before the cast time.\nAstral Infusion has a  forgiveness radius of 175 units.',
      projectile: 'FALSE',
      resource: 'Other',
      targeting: 'Unit',
      targetRange: '550'
    },
    {
      key: 'E',
      name: 'Equinox',
      affects: 'Enemies',
      blurb: 'Active:  Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within upon casting. The zone then persists for a brief moment and  siliences enemies within.',
      castTime: '0.25',
      cooldown: '20 / 19 / 18 / 17 / 16',
      cost: '70 / 75 / 80 / 85 / 90',
      damageType: 'Magic damage',
      effectRadius: '260',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within at the time of cast. The zone then persists for 1.5 seconds and silences enemies within.</p>',
          leveling: [
            {
              attribute: 'Magic Damage',
              modifiers: [
                {
                  values: '70 / 95 / 120 / 145 / 170'
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
          description: 'Afterwards, the zone erupts to deal the same damage to enemy champions within and root them for a duration.',
          leveling: [
            {
              attribute: 'Total Magic Damage',
              modifiers: [
                {
                  values: '140 / 190 / 240 / 290 / 340'
                },
                {
                  unit: '% AP',
                  values: '80'
                }
              ]
            },
            {
              attribute: 'Root Duration',
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
      icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/e',
      maxCharges: -1,
      notes: 'Equinox\'s  silence is marked as non-dispellable, so it is not removed by most  cleanses. It is however allowed to be removed by cleanses that also grant immunity to it, such as  Olaf\'s  Ragnarok.\n Spell shield will not block the  silence.',
      resource: 'Mana',
      spellEffects: 'spellaoe',
      spellshieldable: 'special',
      targeting: 'Location',
      targetRange: '925'
    },
    {
      key: 'R',
      name: 'Wish',
      affects: 'Allies',
      blurb: 'Active:  Soraka calls upon the stars,  healing herself and all allied  champions, regardless of distance. The healing is increased on targets at low health.',
      castTime: '0.25',
      cooldown: '150 / 135 / 120',
      cost: '100',
      effectRadius: 'Global',
      effects: [
        {
          description: '<p class="ability-effect"><span class="ability-header">Active:</span> Soraka calls upon the stars, healing herself and all allied champions, increased by 50% on targets below 40% of their maximum health.</p>',
          leveling: [
            {
              attribute: 'Heal',
              modifiers: [
                {
                  values: '150 / 250 / 350'
                },
                {
                  unit: '% AP',
                  values: '50'
                }
              ]
            },
            {
              attribute: 'Increased Heal',
              modifiers: [
                {
                  values: '225 / 375 / 525'
                },
                {
                  unit: '% AP',
                  values: '75'
                }
              ]
            }
          ]
        }
      ],
      icon: 'https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/r',
      maxCharges: -1,
      notes: 'Due to several character stats needing to be recalculated each time a character spawns, casting Wish immediately upon respawning will cause its cooldown to be unaffected by ability haste, and the healing will not be increased by Soraka\'s ability power. (bug)\n Untargetability does not invalidate the targeting of the heal.\nWish will not credit Soraka for assisting in a champion kill if the target ally is at full health.\nWish will apply heal effects (such as  Summon Aery) prioritizing targets based on the Spawn ID, which is the order in which units were added to an ongoing game. For  champions, this is the order they appear in from left to right in the loading screen.\nWish\'s effects occur before the cast time.\nWish will apply to units that are affected by Mordekaiser\'s R even if Soraka is not in the same realm.',
      resource: 'Mana',
      targeting: 'Auto'
    }
  ],
  adaptiveType: 'Magic damage',
  attackType: 'Ranged',
  attributeRatings: {
    abilityReliance: 100,
    control: 2,
    damage: 1,
    difficulty: 1,
    mobility: 1,
    toughness: 1,
    utility: 3
  },
  faction: 'mount-targon',
  lore: 'A wanderer from the celestial dimensions beyond Mount Targon, Soraka gave up her immortality to protect the mortal races from their own more violent instincts. She endeavors to spread the virtues of compassion and mercy to everyone she meets—even healing those who would wish harm upon her. And, for all Soraka has seen of this world\'s struggles, she still believes the people of Runeterra have yet to reach their full potential.',
  patchLastChanged: '14.24',
  positions: [
    'Support'
  ],
  price: {
    blueEssence: 225,
    rp: 260
  },
  releaseDate: '2009-02-21',
  resource: 'Mana',
  roles: [
    'Enchanter',
    'Mage',
    'Support'
  ],
  stats: {
    acquisitionRadius: {
      flat: 600
    },
    armor: {
      flat: 32,
      perLevel: 5
    },
    attackCastTime: {
      flat: 0.3
    },
    attackDamage: {
      flat: 50,
      perLevel: 3
    },
    attackDelayOffset: {
      flat: -0.113
    },
    attackRange: {
      flat: 550
    },
    attackSpeed: {
      flat: 0.625,
      perLevel: 2.14
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
      flat: 605,
      perLevel: 88
    },
    healthRegen: {
      flat: 2.5,
      perLevel: 0.5
    },
    magicResistance: {
      flat: 30,
      perLevel: 1.3
    },
    mana: {
      flat: 425,
      perLevel: 40
    },
    manaRegen: {
      flat: 11.5,
      perLevel: 0.4
    },
    movespeed: {
      flat: 325
    },
    pathingRadius: {
      flat: 44.2
    },
    selectionRadius: {
      flat: 110
    }
  }
}
export default champion