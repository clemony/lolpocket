// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Command: Attack",
  "width": "160",
  "affects": "Enemies",
  "blurb": "Active:  Orianna commands  The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival.",
  "castTime": "None",
  "cooldown": "6 / 5.25 / 4.5 / 3.75 / 3",
  "cost": "35",
  "damageType": "Magic damage",
  "effectRadius": "175",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Orianna commands The Ball to fly to the target location and remain there, dealing magic damage to enemies it passes through and nearby enemies upon arrival, reduced to 70% against those hit beyond the first.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "42 / 63 / 84 / 105 / 126"
            },
            {
              "unit": "% AP",
              "values": "38.5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Orianna/ability-icon/q",
  "notes": "If The Ball is currently on Orianna herself, Command: Attack will have it cast to fly at least 150 units if the player attempts to cast it closer.\nThe Ball does not grant  sight while in flight, but the sound effect of striking an enemy is audible through the Fog of War.\nOrianna cannot use  Command: Protect while The Ball is in transit with Command: Attack but she may buffer  Command: Dissonance and  Command: Shockwave to cast once it has reached the location.\nThe Ball will remain at the target location until Orianna retrieves it or if she goes beyond its leash range.\nThe Ball will also never exceed its leash range regardless of target direction.\nPENDING FOR TEST: The Ball will drop to the ground upon colliding with  Yasuo's  Wind Wall but not with  Braum's  Unbreakable.\n Samira's  Blade Whirl?",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "Spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "825"
}
export default ability
