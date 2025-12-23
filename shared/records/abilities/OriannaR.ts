// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Command: Shockwave",
  "affects": "Enemies",
  "blurb": "Active:  Orianna commands  The Ball to unleash a shockwave that deals magic damage to nearby enemies, briefly  stunning and  pulling them inward.",
  "castTime": "0.5",
  "cooldown": "110 / 95 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "415",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Orianna commands The Ball to unleash a shockwave that deals magic damage to nearby enemies, stuns them for 0.75 seconds, and pulls them over 325 units, though not through terrain.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "250 / 400 / 550"
            },
            {
              "unit": "% AP",
              "values": "95"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/r",
  "notes": "Command: Shockwave tosses enemies a set distance (those on the edge of the flinging area will be tossed to the center while those close to the middle will go over The Ball towards the edge) and can send them through walls.\nThis ability will cast from wherever the caster is at the end of the cast time.\nCommand: Shockwave will cast from wherever the unit the The Ball is attached to is at the end of the cast time, even if the unit exceeds max tether range.\n Displacement immunity will not resist the application of the  stun.",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
