// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "The Culling",
  "width": "220 (plus offset)",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "110 / 100 / 90",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lucian channels for up to 3 seconds, rapidly firing up to 22 (+ 1 per 4% critical strike chance) shots in the target direction. Each shot deals physical damage to the first enemy hit, doubled against minions. The Culling can be recast after 0.75 seconds during the channel, and does so automatically when the channel ends.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Per Shot",
          "modifiers": [
            {
              "values": "15 / 30 / 45"
            },
            {
              "unit": "% AD",
              "values": "25"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Additional Damage per 20% Crit Chance",
          "modifiers": [
            {
              "values": "75 / 150 / 225"
            },
            {
              "unit": "% AD",
              "values": "125"
            },
            {
              "unit": "% AP",
              "values": "75"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "unit": "  ",
              "values": "330 / 660 / 990"
            },
            {
              "unit": "   per 4% critical strike chance",
              "values": "15 / 30 / 45"
            },
            {
              "unit": "% AD",
              "values": "550"
            },
            {
              "unit": "% AP",
              "values": "330"
            },
            {
              "unit": "% AD",
              "values": "25"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Minion Damage Per Shot",
          "modifiers": [
            {
              "values": "30 / 60 / 90"
            },
            {
              "unit": "% AD",
              "values": "50"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Additional Minion Damage per 20% Crit Chance",
          "modifiers": [
            {
              "values": "150 / 300 / 450"
            },
            {
              "unit": "% AD",
              "values": "250"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        },
        {
          "attribute": "Total Minion Damage",
          "modifiers": [
            {
              "unit": "  ",
              "values": "660 / 1320 / 1980"
            },
            {
              "unit": "   per 4% critical strike chance",
              "values": "30 / 60 / 90"
            },
            {
              "unit": "% AD",
              "values": "1100"
            },
            {
              "unit": "% AP",
              "values": "660"
            },
            {
              "unit": "% AD",
              "values": "50"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        }
      ]
    },
    {
      "description": "While channeling, Lucian is ghosted and may still move."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Lucian ends The Culling.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lucian/ability-icon/r",
  "notes": "At 100% critical strike chance, The Culling fires up to 25 additional shots, for a total of 47 shots.\nThe total damage at the maximum number of shots (at 100% critical strike chance) is 705 / 1057.5 / 1410 / 1762.5 / 2115 (+ 1175% AD) (+ 705% AP) physical damage.\nAgainst minions, this is increased to 1410 / 2115 / 2820 / 3525 / 4230 (+ 2350% AD) (+ 1410% AP).\nThe fire rate increases with the number of shots.\nDuring The Culling, Lucian's facing direction is in the direction that he is firing.\nLucian can interact with  Dark Passage or allied  Devour without  interrupting The Culling.\nThe Culling creates the shots at an offset of 35 units to the front plus 35 units towards each side of Lucian (sides alternating, first shot fired from Lucian's right gun), unlike the missiles of most abilities.\nThe damage dealt by each bullet of The Culling is calculated when the bullet reaches a target, just like single missile abilities.\n Spell shield only blocks one instance of damage.\nThe following table refers for interactions while Lucian is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Relentless Pursuit is usable.  Piercing Light and  Ardent Blaze are disabled. This ability recasts to end channel.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport\n\n\nDisabled\n\n Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2800",
  "spellEffects": "aoedot",
  "spellshieldable": "Special",
  "targeting": "Direction / Auto"
}
export default ability
