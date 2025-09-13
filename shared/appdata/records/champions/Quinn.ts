// Updated Patch 25.17 - 09/12/2025 02:39:57 PM CDT

const champion: Champion = {
  "id": 133,
  "key": "Quinn",
  "name": "Quinn",
  "title": "Demacia's Wings",
  "fullName": "Quinn and Valor",
  "resource": "Mana",
  "attackType": "Ranged",
  "adaptiveType": "Physical damage",
  "stats": {
    "health": {
      "flat": 565,
      "perLevel": 107
    },
    "healthRegen": {
      "flat": 5.5,
      "perLevel": 0.55
    },
    "mana": {
      "flat": 269,
      "perLevel": 35
    },
    "manaRegen": {
      "flat": 7,
      "perLevel": 0.4
    },
    "armor": {
      "flat": 28,
      "perLevel": 4.7
    },
    "magicResistance": {
      "flat": 30,
      "perLevel": 1.3
    },
    "attackDamage": {
      "flat": 59,
      "perLevel": 2.7
    },
    "movespeed": {
      "flat": 330
    },
    "acquisitionRadius": {
      "flat": 800
    },
    "selectionRadius": {
      "flat": 120
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
      "flat": 0.668,
      "perLevel": 3.1
    },
    "attackSpeedRatio": {
      "flat": 0.668
    },
    "attackCastTime": {
      "flat": 0.3
    },
    "attackTotalTime": {
      "flat": 1.6
    },
    "attackDelayOffset": {
      "flat": -0.125
    },
    "attackRange": {
      "flat": 525
    }
  },
  "positions": [
    "Top"
  ],
  "roles": [
    "Assassin",
    "Marksman",
    "Specialist"
  ],
  "attributeRatings": {
    "damage": 3,
    "toughness": 1,
    "control": 2,
    "mobility": 3,
    "utility": 1,
    "abilityReliance": 20,
    "difficulty": 2
  },
  "abilities": [
    {
      "name": "Harrier",
      "key": "P",
      "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/p",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Quinn's Blinding Assault against the primary target, Vault, and Skystrike mark enemies hit with Vulnerable for 4 seconds, during which they are revealed. Valor will periodically mark a nearby visible enemy if no Vulnerable targets exist for 1 second.</p>"
        },
        {
          "description": "Quinn's basic attacks against Vulnerable targets are empowered to consume the mark to deal 10 - 95 (based on level) (+ 16% - 50% (based on level) AD) bonus physical damage."
        },
        {
          "description": "While Behind Enemy Lines is active, Harrier is disabled and all Vulnerable marks are removed."
        }
      ],
      "targeting": "Passive",
      "affects": "Self",
      "spellshieldable": "False",
      "damageType": "Physical damage",
      "spellEffects": "Proc",
      "notes": "If a mark applied by an ability is overwritten, consumed, or timed out, Harrier goes on a 1-second cooldown if it's not already on cooldown.\nHarrier's targeting priority:\nLast unit hit (if it was a small minion it appears to select a different target).\nLowest-health enemy champion.\nLowest-health enemy minion.\nHarrier is consumed even if it is parried, the attack is negated in any case.\nHarrier will not mark enemy  minions while Quinn is not  visible, but will mark enemy  champions.",
      "blurb": "Innate:  Quinn's damaging abilities mark enemies with Vulnerable and  reveal them for a few seconds. Periodically,  Valor marks a nearby enemy with Vulnerable.",
      "effectRadius": "525"
    },
    {
      "name": "Blinding Assault",
      "key": "Q",
      "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/q",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Quinn sends Valor in the target direction who stops upon hitting an enemy, marking them as Vulnerable and dealing physical damage to all nearby enemies.</p>",
          "leveling": [
            {
              "attribute": "Physical Damage",
              "modifiers": [
                "65 / 100 / 135 / 170 / 205",
                "80 / 90 / 100 / 110 / 120% bonus AD",
                "50% AP"
              ]
            }
          ]
        },
        {
          "description": "The primary target is nearsighted for 1.75 seconds if they are a champion, and disarmed for the same duration otherwise."
        }
      ],
      "cost": "50 / 55 / 60 / 65 / 70",
      "cooldown": "11 / 10.5 / 10 / 9.5 / 9",
      "targeting": "Direction",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "spellaoe",
      "projectile": "TRUE",
      "notes": "Blinding Assault's  nearsight will persist through  death.\nThis ability will cast from wherever the caster is at the start of the cast time.",
      "blurb": "Active:  Quinn sends  Valor in the target direction who stops upon hitting an enemy, dealing physical damage all nearby enemies.",
      "speed": "1550",
      "width": "120",
      "castTime": "0.25",
      "effectRadius": "210",
      "targetRange": "1050",
      "maxCharges": -1
    },
    {
      "name": "Heightened Senses",
      "key": "W",
      "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/w",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Whenever Quinn uses a basic attack on-attack against a Vulnerable target or consumes their mark, she gains bonus attack speed and bonus movement speed for 2 seconds.</p>",
          "leveling": [
            {
              "attribute": "Bonus Attack Speed",
              "modifiers": [
                "28 / 41 / 54 / 67 / 80%"
              ]
            },
            {
              "attribute": "Bonus Movement Speed",
              "modifiers": [
                "20 / 25 / 30 / 35 / 40%"
              ]
            }
          ]
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Valor grants sight of the surrounding area for 2 seconds and reveals enemy champions within for the same duration.</p>"
        }
      ],
      "cost": "0",
      "cooldown": "50 / 45 / 40 / 35 / 30",
      "targeting": "Auto",
      "affects": "Self",
      "spellshieldable": "false",
      "notes": "Quinn marks enemy champions who were previously unseen but were revealed Heightened Senses in order to gain assist credit, lasting for the standard credit timer.",
      "blurb": "Passive: Attacking a  Vulnerable target or consuming a mark grants  Quinn  bonus attack speed and  bonus movement speed for a short time.",
      "castTime": "none",
      "effectRadius": "2100",
      "maxCharges": -1
    },
    {
      "name": "Vault",
      "key": "E",
      "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/e",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Quinn dashes to the target enemy, marking them as Vulnerable, dealing physical damage, knocking them back a very short distance over 0.5 seconds, and slowing them by 50% decaying over 1.5 seconds. She then leaps back 525 units away from them.</p>",
          "leveling": [
            {
              "attribute": "Physical damage",
              "modifiers": [
                "40 / 65 / 90 / 115 / 140",
                "20% bonus AD"
              ]
            }
          ]
        },
        {
          "description": "Vault resets Quinn's basic attack timer shortly after the initial dash. Heightened Senses can be cast during either of the dashes."
        }
      ],
      "cost": "50",
      "cooldown": "12 / 11 / 10 / 9 / 8",
      "targeting": "Unit",
      "affects": "Enemies",
      "spellshieldable": "True",
      "resource": "Mana",
      "damageType": "Physical damage",
      "spellEffects": "Spell",
      "notes": "Quinn will track the target if they change locations.\nShe will dash to the target's previous location without applying Vault's effects if the target is too far away or moves beyond 1200 units.\nVault  resets Quinn's remaining attack cooldown a short delay after the first dash ends (even if interrupted).\nThis delay is a fuzzy 0.25 to 0.5 seconds and this matches up with the moment the target of Vault is marked as  Vulnerable.\nThe basic attack reset does not count as one for  Hail of Blades.\nQuinn will automatically attempt to attack the target once she completes Vault.\nThe target will turn to face the opposite direction after being  knocked back.\nUnlike its constant cast range Vault's bounce's can vary to allow Quinn to close or to make a gap between herself and the target (depending on casting position) or even to jump through a wall (if there is enough landing room on the other side).\nVault also interrupts basic attacks with  uncancellable windups.(note)",
      "blurb": "Active:  Quinn  dashes to the target enemy, dealing physical damage,  knocking them back, marking them as  Vulnerable, and briefly  slowing them. She then  leaps backward.",
      "speed": "2500 / 850",
      "castTime": "none",
      "targetRange": "600",
      "maxCharges": -1
    },
    {
      "name": "Behind Enemy Lines",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Quinn channels for 2 seconds, signaling Valor to pair up. Upon completion, he picks her up and they unite, increasing her total movement speed, granting her ghosting, and allowing her to cast Skystrike. Behind Enemy Lines can be recast after 0.5 seconds during the channel.</p>",
          "leveling": [
            {
              "attribute": "Total Movement Speed Increase",
              "modifiers": [
                "70 / 100 / 130%"
              ]
            }
          ]
        },
        {
          "description": "Taking damage from non- minions while Behind Enemy Lines is active or while Quinn is channeling the ability causes her to lose the bonus total movement speed for 3 seconds. Becoming immobilized, grounded, or silenced ends Behind Enemy Lines immediately and puts it on cooldown without performing Skystrike."
        },
        {
          "description": "Once Behind Enemy Lines has been learned, respawning or returning to the allied summoning platform will spawn Valor instantly."
        },
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Quinn cancels the channel, placing Behind Enemy Lines on cooldown.</p>"
        }
      ],
      "cost": "100 / 50 / 0",
      "cooldown": "3",
      "targeting": "Auto",
      "affects": "Self",
      "resource": "Mana",
      "notes": "Taking damage from non- minions removes the bonus movement speed buff temporarily by suppressing it with the status effect of a  slow.\nBehind Enemy Lines does not refund its  mana cost if the channel was canceled via recast.\nThe only exception is if Quinn's mana falls below the mana cost, in which case she is granted enough mana back (the equal amount needed) to be able to cast Behind Enemy Lines again.\nRespawning or returning to the summoning platform will not spawn  Valor if Behind Enemy Lines is on cooldown.\nIf  Valor is spawned by respawning or returning to the summoning platform,  Skystrike will be disabled from being manually cast for 2.5 seconds upon uniting. However, it will still automatically activate upon declaring a basic attack or casting  Blinding Assault or  Vault.\nBehind Enemy Lines ends immediately without  Skystrike being cast if she enters or is inside the enemy fountain. The ability will go on full  cooldown.\nQuinn will also spawn  Valor when entering the enemy fountain but she will instantly lose him afterwards.\nSelf- immobilizations such as  Zhonya's Hourglass also count for ending Behind Enemy Lines.\nThe following table refers for interactions while Quinn is  channeling:\nBehind Enemy Lines is not a movement channel, and so will not be  interrupted by  root and  ground.\n\n\nType\n\nChannel\n\n\nAttacking\n\nInterrupts\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
      "castTime": "0.25",
      "maxCharges": -1
    },
    {
      "name": "Skystrike",
      "key": "R",
      "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/r",
      "effects": [
        {
          "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Quinn detaches from Valor, ending Behind Enemy Lines' effects and raining arrows down around her, dealing 70% AD physical damage to nearby enemies and marking them as Vulnerable.</p>"
        },
        {
          "description": "Declaring a basic attack or casting Blinding Assault or Vault during Behind Enemy Lines automatically activates Skystrike."
        }
      ],
      "cost": "100 / 50 / 0",
      "cooldown": "3",
      "targeting": "Auto",
      "affects": "Enemies",
      "spellshieldable": "True",
      "damageType": "Physical damage",
      "spellEffects": "spellaoe",
      "notes": "If Quinn uses  Vault while  Behind Enemy Lines is active, Skystrike will activate at her target's location after she bounces back.\nUpon respawning, Quinn's first Skytrike will deal double the normal amount of damage (140% AD) to enemies hit.(bug)",
      "blurb": "Active:  Quinn disbands from  Valor and rains arrows down around her, dealing physical damage to nearby enemies.",
      "castTime": "none",
      "effectRadius": "700",
      "maxCharges": -1
    }
  ],
  "lore": "Quinn is an elite ranger-knight of Demacia, who undertakes dangerous missions deep in enemy territory. She and her legendary eagle, Valor, share an unbreakable bond, and their foes are often slain before they realize they are fighting not one, but two of the kingdom's greatest heroes. Nimble and acrobatic when required, Quinn takes aim with her crossbow while Valor marks their elusive targets from above, making them a deadly pair on the battlefield.",
  "faction": "demacia",
  "releaseDate": "2013-03-01",
  "patchLastChanged": "25.15",
  "price": {
    "blueEssence": 2400,
    "rp": 880
  }
}
export default champion