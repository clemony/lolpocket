// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Crowstorm",
  "castTime": "none",
  "cooldown": "140 / 110 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks channels for 1.5 seconds, then blinks to the target location upon completion with a murder of crows flying wildly around it for 5 seconds, dealing magic damage every 0.25 seconds to nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage per Tick",
          "modifiers": [
            {
              "values": "37.5 / 62.5 / 87.5"
            },
            {
              "unit": "% AP",
              "values": "12.5"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "750 / 1250 / 1750"
            },
            {
              "unit": "% AP",
              "values": "250"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/r",
  "notes": "Roots do not  interrupt the ability despite being a movement channel.\nFiddlesticks will always  blink to its intended location even if its position changes during the  channel without being interrupted (e.g. by  Realm Warp).\n -  Surprise Party Fiddlesticks has a special icon for this ability.\nThe following table refers for interactions while Fiddlesticks is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "aoe",
  "targeting": "Location",
  "targetRange": "800"
}
export default ability
