// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const champion: Champion = {
  "id": 235,
  "key": "Senna",
  "name": "Senna",
  "title": "the Redeemer",
  "abilities": [
    {
      "key": "P",
      "name": "Absolution",
      "affects": "Self, Enemies",
      "blurb": "Innate - Weakened Soul:  Senna's  basic attacks  on-hit and  abilities against enemy  champions apply a  stack of Mist for a few seconds. Subsequent hits collect the Mist, dealing bonus physical damage based on the target's current health and rendering the target immune to further Mist applications for a few seconds.",
      "effectRadius": "2000",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Weakened Soul:</span> Senna's basic attacks on-hit and abilities mark enemy champions hit for 4 seconds. Subsequent attacks or ability hits against marked targets will consume the mark to grant Senna a stack of Mist and deal bonus physical damage equal to 1% - 10% (based on level) of the target's current health, rendering the target immune to being marked again for a few seconds. This damage applies life steal at 100% effectiveness.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Enemies that die near Senna may spawn a Mist Wraith from their corpse. A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with Piercing Darkness or Dawning Shadow to kill it instantly, granting her 8 and a stack of Mist.</p>\nEnemy champions and large monsters will spawn a Mist Wraith.\nEpic monsters will spawn 2 Mist Wraiths.\n Minions and lesser monsters that Senna kills have a 10% chance to spawn a Mist Wraith.\nLarge minions that Senna does not kill will always spawn a Mist Wraith, while lesser minions and lesser monsters that Senna does not kill have a 28% chance to spawn one.\nLesser minions executed by an allied champion's Support Quest item have a 8.4% chance to spawn a Mist Wraith."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Mist:</span> For each stack of Mist, Senna gains 0.75 bonus attack damage. For every 20 stacks, she also gains 20 bonus attack range and 10% critical strike chance. Additionally, every 1% critical strike chance in excess of 100% is converted into 0.35% life steal.</p>"
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Relic Cannon:</span> Senna's basic attacks on-hit deal 20% AD bonus physical damage and grant her 10% / 15% / 20% (based on level) of the target's movement speed as bonus movement speed for 0.5 seconds. The damage applies life steal at 100% effectiveness.</p>"
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/p",
      "notes": "If a target's mark has a remaining duration less than 0.25 seconds, and Senna starts her basic attack windup on the target during this time, the mark's duration will be modified to 0.75 seconds. Subsequent windups on the marked target will refresh this modified duration if the previous attack windup did not complete.\nDespite Senna dealing 1 damage to Mist Wraiths, attacking them will calculate the attack's damage (including  critical strike modifiers) and any on-hit effects for the purposes of  life steal and  drain effects.\nRelic Cannon is only applied if the attack deals more than 0 damage.\nHence, it is not applied if the target is  invulnerable or Senna's basic attack's  attack damage is reduced to 0 or below.\nThe bonus damage is also not applied against structures (regardless of their vulnerability).\nDealing 0 damage is valid for marking and collecting Mist from champions, but dealing no damage at all is not.\nHence, Senna can mark and collect from  invulnerable enemies.\n Dodge prevents marking and collecting a Mist via Senna's basic attacks and  Piercing Darkness.\nPENDING FOR TEST:: Mist interaction with  block and  blind.\n Nunu & Willump spawn a wraith each.\nEnemies will not see newly spawned wraiths while Senna is not visible.\nA wraith can be hit by  Cosmic Binding and it will interact with it the same way minions or monsters interact with Cosmic Binding but it will not take damage.\nMist Wraith has a spawn animation, but is targetable immediately.\nMist Wraith grants a small amount of  sight around itself.\n Runaan's Hurricane secondary bolts will ignore Mist Wraiths.\nAttacking a Mist Wraith will not consume Energized.\nExcluding the range increase and the bonus shielding on  Dawning Shadow, one stack of Mist is worth  46.25 ( +8 from Mist Wraith pickup ( 54.25 total)),  35.62125 if the critical chance is converted to life steal.\n 0.75 AD is worth  26.25.\n 0.5% critical strike chance is worth  20.\n 0.175% life steal is worth  9.37125.\nThe bonus on-hit damage applies an additional stack of  Black Cleaver's Carve.\n Critical strike chance gained from  Yun Tal Wildarrows' Practice Makes Lethal does not interact with the life steal conversion.(bug)\nThe buff will be granted even when hitting units that have zero movement speed (from which Senna cannot gain any movement speed).\nAttacking structures is special-cased to not grant it at all, however.\nPinging Absolution in the HUD will send a chat message to the team that displays its stack count and her total  attack range accumulated.",
      "onTargetCdStatic": "6 / 5 / 4 (based on level)",
      "spellshieldable": "False",
      "targeting": "Passive"
    },
    {
      "key": "Q",
      "name": "Piercing Darkness",
      "width": "100 / 280",
      "affects": "Allies, Enemies, Turrets, Wards",
      "blurb": "Active:  Senna fires a spectral laser toward the target unit. Senna and allied champions hit are  healed. Enemies hit are dealt physical damage, which applies  life steal and  on-hit effects, and  slowed for a short time.",
      "castTime": "80% of Senna's windup time (0.4 at base attack speed)",
      "cooldown": "15",
      "cost": "70 / 80 / 90 / 100 / 110",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna fires a beam in the direction of the target unit. The beam consists of a wider ray of light, and a narrower ray of shadow at the center.The shadow ray deals physical damage to enemies hit and slows them by 15% (+ 15% per 100 bonus AD) (+ 10% per 100 AP) for a duration. The damage dealt to enemy champions applies life steal at 100% effectiveness.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "30 / 60 / 90 / 120 / 150"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                }
              ]
            },
            {
              "attribute": "Slow Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1 / 1.25 / 1.5 / 1.75 / 2"
                }
              ]
            }
          ]
        },
        {
          "description": "The light ray heals Senna and allied champions hit.",
          "leveling": [
            {
              "attribute": "Healing",
              "modifiers": [
                {
                  "values": "40 / 60 / 80 / 100 / 120"
                },
                {
                  "unit": "% bonus AD",
                  "values": "40"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                }
              ]
            }
          ]
        },
        {
          "description": "Piercing Darkness is considered to trigger a single basic attack against turrets, wards, jungle plants, Mist Wraiths and any other attack-interactive units hit. It also applies on-hit effects against champions and turrets hit."
        },
        {
          "description": "Piercing Darkness' current cooldown is reduced by 1 second on-hit."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/q",
      "notes": "The ability's cast time respects the attack speed floor and cap.\nPiercing Darkness also applies most  on-attack effects to one enemy champion struck, and ocassionally to two.(note)\n Hail of Blades will spend a stack on hitting a champion with Piercing Darkness but only if  Hail of Blades was activated first by an auto-attack.\nSenna can generally target anything that is not either explicitly  untargetable or herself.\nValid targets include anything that can be targeted by a basic attack from someone.\nPiercing Darkness respects all  turret-specific rules when striking them.\nOn-hit effects are applied in order of struck units' spawn IDs. This matters for effects that are consumed on-hit (e.g.  Spellblade), which are applied to the target with the lowest Spawn ID.\n\"Spawn ID\" is an unofficial abbreviation to describe the spawn order for all units at the start of a game, below are some examples.\nIf Senna targets an enemy champion but hits at least one more enemy champion simultaneously,  Press the Attack's first stack will be applied to that target. If no champion was targeted, it will default to the champion with the lowest Spawn ID out of the ones struck by the ability. Whether the effect stacks up on a champion or not when multiple enemy champions are stuck also depends on Spawn ID.\nIf Piercing Darkness struck an enemy champion and turret simultaneously, with  Rapid Firecannon fully charged, the passive effect will most likely trigger on the turret since towers are often spawned before champions.\nFor on-attack effects, they are also applied in order of struck units' spawn IDs. However, there are some specific on-attack effects that will apply to both the target of Piercing Darkness and the target with the lowest Spawn ID if the two unit is not identical.(note) Confirmed cases:\nEnergized effects are stacked twice the amount.\nPENDING FOR TEST:\n Spell shield will not prevent on-hit effects from being applied.\nPENDING FOR TEST: Piercing Darkness interaction with  dodging,  blocking, and  blinding effects.",
      "projectile": "FALSE",
      "resource": "Mana",
      "spellEffects": "AoE",
      "spellshieldable": "special",
      "targeting": "Unit",
      "targetRange": "600 : 1100"
    },
    {
      "key": "W",
      "name": "Last Embrace",
      "width": "140",
      "affects": "Enemies",
      "blurb": "Active:  Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and sticks onto them.",
      "castTime": "0.25",
      "cooldown": "11",
      "cost": "50 / 55 / 60 / 65 / 70",
      "damageType": "Physical damage",
      "effectRadius": "280",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "70 / 115 / 160 / 205 / 250"
                },
                {
                  "unit": "% bonus AD",
                  "values": "70"
                }
              ]
            }
          ]
        },
        {
          "description": "After the duration or when the target dies, the Black Mist spreads out of the target, rooting them and surrounding enemies for a few seconds.",
          "leveling": [
            {
              "attribute": "Root Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "1.25 / 1.5 / 1.75 / 2 / 2.25"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/w",
      "notes": "Last Embrace will not  root the primary target if they are  untargetable.\nThis ability will cast from wherever the caster is at the end of the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "1200",
      "spellEffects": "spell",
      "spellshieldable": "True",
      "targeting": "Direction",
      "targetRange": "1300"
    },
    {
      "key": "E",
      "name": "Curse of the Black Mist",
      "affects": "Self",
      "blurb": "Active:  Senna creates an aura of mist and gains  camouflage for a few seconds. She will quickly regain camouflage after breaking stealth.",
      "castTime": "1",
      "cooldown": "26 / 24.5 / 23 / 21.5 / 20",
      "cost": "70",
      "effectRadius": "400",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna shrouds herself in an aura of Black Mist and gains camouflage for a duration. If Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth.</p>",
          "leveling": [
            {
              "attribute": "Effect Duration",
              "modifiers": [
                {
                  "unit": " seconds",
                  "values": "6 / 6.5 / 7 / 7.5 / 8"
                }
              ]
            }
          ]
        },
        {
          "description": "Allied champions who enter the mist gain Wraith Form for a duration equal to the aura's remaining duration."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Wraith Form:</span> Gain camouflage. Enemies will have obscured vision of camouflaged Wraiths moving outside of the mist. Wraith Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth. Wraith Form ends immediately upon Senna's death.</p>"
        },
        {
          "description": "Senna and allies camouflaged by Curse of the Black Mist also gain 20% (+ 5% per 100 AP) bonus movement speed."
        },
        {
          "description": "Senna can move during Curse of the Black Mist's cast time."
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/e",
      "notes": "Senna can move while casting Curse of the Black Mist.\nAllies affected by the Curse of the Blast Mist aura receive a buff called Cloak of Mist.\nObscured units appear as Wraiths, hence the name. The wraith model does not distinguish which champion is obscured.\nOn the mini-map, obscured champions will be displayed as wraith icons instead of champion icons to the enemy team.\nIn-game, the 'Cloak of Mist' buff grants camouflage and the 'Wraith Form' buff obscures the unit and grants movement speed. However, 'Cloak of Mist' has the unspecified effect of negating the obscuring effects of 'Wraith Form' (i.e. the unit is not a wraith while inside the mist); the unit has the bonus movement speed even when they are not a wraith (e.g. inside the mist or an enemy is nearby); and 'Wraith Form' also grants the functionality of camouflage (i.e. the unit is treated as a camouflaged unit with regards to  True Sight,  Control Wards, and enemy  champions).\nGiven this overly complex interaction between the two buffs granted as well as the overlapping effects, it is easier to describe the effects as a single buff that is modified in specific circumstances rather than trying to establish a new game mechanic.\nSenna likewise has her aura buff and the 'Wraith Form' buff, but her 'Wraith Form' does not share gameplay functionality with other allies benefiting from Wraith Form. For Senna, the appearance of being a wraith is a form-swap while camouflaged (similar to  Evelynn's  Demon Shade). Senna will remain in her wraith form when she is detected so long as the camouflage effect isn't broken, and her wraith's appearance is very distinct from other wraiths.\nAllied champions who enter the mist and have  stealth of their own will still gain the Wraith Form buff but they will not grant  obscured vision of themselves to the enemy while out of the mist nor will they appear as a Wraith.\nAllies who have their own  camouflage and also have Wraith Form will be revealed to enemies from their stealth's detection range, not Wraith Form's.\nIf Senna gains  invisibility while  camouflaged by Curse of the Black Mist, the visual effects of her aura will be hidden while she is invisible.\nCurse of the Black Mist will not activate if Senna enters  resurrection during the cast time.\nWraith Form will not be granted to allies that are in a  zombie state or are  channeling. It will be granted to allies even if they are  untargetable.\nUsing a basic attack breaks the stealth at the start of the attack windup.\nThe stealth regain timer is refreshed from basic attacks at the start of their attack windup.",
      "resource": "Mana",
      "targeting": "Auto"
    },
    {
      "key": "R",
      "name": "Dawning Shadow",
      "width": "320 / 2400",
      "affects": "Allies / Enemies",
      "blurb": "Active:  Senna fires a massive beam in the target direction.",
      "castTime": "1",
      "cooldown": "140 / 120 / 100",
      "cost": "100",
      "damageType": "Physical damage",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Senna fires a massive beam in the target direction. The beam consists of a broad wave of light, and a narrow wave of shadow at the center.</p>"
        },
        {
          "description": "The shadow wave deals physical damage to enemy champions hit and reveals them for 3 seconds, as well as hits all Mist Wraiths.",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                {
                  "values": "250 / 400 / 550"
                },
                {
                  "unit": "% bonus AD",
                  "values": "115"
                },
                {
                  "unit": "% AP",
                  "values": "70"
                }
              ]
            }
          ]
        },
        {
          "description": "The light wave grants a shield to Senna and allied champions hit for 3 seconds, and grants sight of the area along the path for 2 seconds.",
          "leveling": [
            {
              "attribute": "Shield Strength",
              "modifiers": [
                {
                  "values": "120 / 160 / 200"
                },
                {
                  "unit": "% AP",
                  "values": "50"
                },
                {
                  "unit": " per Mist",
                  "values": "1.5"
                }
              ]
            }
          ]
        }
      ],
      "icon": "https://cdn.communitydragon.org/latest/champion/Senna/ability-icon/r",
      "notes": "The broad wave is a singular projectile that can be  destroyed.\nThe narrow wave will be destroyed with it in the process.\nThis ability will cast from wherever the caster is at the start of the cast time.\nSenna reveals herself during the cast time.",
      "projectile": "TRUE",
      "resource": "Mana",
      "speed": "20000",
      "spellEffects": "aoe",
      "spellshieldable": "true",
      "targeting": "Direction",
      "targetRange": "Global"
    }
  ],
  "adaptiveType": "Physical damage",
  "attackType": "Ranged",
  "attributeRatings": {
    "damage": 2,
    "toughness": 1,
    "control": 2,
    "mobility": 1,
    "utility": 3,
    "abilityReliance": 30,
    "difficulty": 2
  },
  "fullName": "Senna Abaru",
  "lore": "Cursed from childhood to be haunted by the supernatural Black Mist, Senna joined a sacred order known as the Sentinels of Light, and fiercely fought back—only to be killed, her soul imprisoned in a lantern by the cruel specter Thresh. But refusing to lose hope, within the lantern Senna learned to use the Mist, and reemerged to new life, forever changed. Now wielding darkness along with light, Senna seeks to end the Black Mist by turning it against itself—with every blast of her relic weapon, redeeming the souls lost within.",
  "patchLastChanged": "25.17",
  "positions": [
    "Bottom",
    "Support"
  ],
  "price": {
    "blueEssence": 1575,
    "rp": 790
  },
  "releaseDate": "2019-11-10",
  "resource": "Mana",
  "roles": [
    "Enchanter",
    "Marksman",
    "Support"
  ],
  "stats": {
    "health": {
      "flat": 530,
      "perLevel": 89
    },
    "healthRegen": {
      "flat": 3.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 350,
      "perLevel": 45
    },
    "manaRegen": {
      "flat": 11.5,
      "perLevel": 0.7
    },
    "armor": {
      "flat": 25,
      "perLevel": 4
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 50
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 115
    },
    "pathingRadius": {
      "flat": 35
    },
    "gameplayRadius": {
      "flat": 65
    },
    "criticalStrikeDamage": {
      "flat": 175
    },
    "criticalStrikeDamageModifier": {
      "flat": 1
    },
    "attackSpeed": {
      "flat": 0.625,
      "perLevel": 2.6
    },
    "attackSpeedRatio": {
      "flat": 0.4
    },
    "attackCastTime": {
      "flat": 0.5
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": 0
    },
    "attackRange": {
      "flat": 600
    }
  }
}
export default champion