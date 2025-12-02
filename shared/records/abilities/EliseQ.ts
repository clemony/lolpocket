// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Venomous Bite",
  "affects": "Enemies",
  "blurb": "Active:  Elise  pounces at the target enemy and deals damage based on the target's missing health, applying  on-hit effects.",
  "castTime": "0.25",
  "cooldown": "6",
  "cost": "80 / 85 / 90 / 95 / 100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Elise pounces at the target enemy with her fangs and bites them, dealing magic damage and applying on-hit effects, as well as revealing them for 0.528 seconds from the start of the cast time. The damage based on the target's health ratio is capped against monsters.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "50 / 80 / 110 / 140 / 170"
            },
            {
              "unit": "% (+ 3% per 100 AP) of target's missing health",
              "values": "8"
            }
          ]
        },
        {
          "attribute": "Capped Monster Damage",
          "modifiers": [
            {
              "values": "75 / 100 / 125 / 150 / 175"
            }
          ]
        }
      ]
    },
    {
      "description": "If there are active Spiderlings or Volatile Spiderlings nearby, they will dash alongside Elise to the target upon Venomous Bite's cast and reprioritize them."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Elise/ability-icon/q",
  "notes": "Elise will not dash if the target is within basic attack range.\nThis ability is disabled while  grounded or  rooted even if Elise is in the range in which she does not dash.\nIf Elise is allowed to dash, Venomous Bite can be used to cross sufficiently thin terrain.\n Spiderlings can cross walls and terrain to reach Venomous Bite's target and will attack provided Elise stays within their leash range.\nThere is a maximum range in which Spiderlings or Volatile Spiderlings can dash to the target.\n Spiderlings will dash even if they are  crowd controlled.\nVenomous Bite will always apply its effects after the cast time, even if the dash is interrupted.\nVenomous Bite's  reveal is a small area around the target, making it possible for them to exit the reveal radius and lose vision.\nVenomous Bite will still deal its damage but not apply on-hit effects if it is  blocked or  dodged. It cannot be missed while Elise is  blinded.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nWith the exceptions of Elise's Death Blossom, Victorious, Blood Moon, and Super Galaxy skins; Venomous Bite's VFX size will scale uncapped based off the total damage it does. (note)",
  "speed": "1150",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "475"
}
export default ability
