// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Ethereal Chains",
  "width": "110",
  "affects": "Enemies",
  "blurb": "Active:  LeBlanc flings an illusory chain in the target direction that deals magic damage and  tethers the first enemy hit,  revealing them.",
  "castTime": "0.25",
  "cooldown": "14 / 13.25 / 12.5 / 11.75 / 11",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> LeBlanc flings an illusory chain in the target direction that deals magic damage to the first enemy it hits and forms a tether between LeBlanc and the target for 1.5 seconds, during which they are revealed.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 70 / 90 / 110 / 130"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "If the tether is not broken by the end of its duration, it fractures to deal magic damage to the target and root them for 1.5 seconds, during which they are revealed.",
      "leveling": [
        {
          "attribute": "Fracture Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "85"
            }
          ]
        },
        {
          "attribute": "Total Damage",
          "modifiers": [
            {
              "values": "130 / 190 / 250 / 310 / 370"
            },
            {
              "unit": "% AP",
              "values": "125"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Leblanc/ability-icon/e",
  "notes": "Both the initial and the delayed damage can detonate  Sigil of Malice.\nEthereal Chains and  Mimic: Ethereal Chains are separate debuffs, and can both be tethered to the same target without overriding each other. The  root duration for either one are unchanged.\n Spell shield will block the tether's application and initial damage but not the aftereffects of one already applied.\nThe tether remains for a minimum of 0.25 seconds regardless of distance.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1750",
  "spellEffects": "spell",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "950",
  "tetherRadius": "865"
}
export default ability
