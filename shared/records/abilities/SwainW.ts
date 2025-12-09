// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Vision of Empire",
  "affects": "Enemies",
  "blurb": "Active:  Swain summons a demonic eye at the target location that explodes after a brief moment, dealing magic damage and  slowing enemies within for a short time.",
  "castTime": "0.25",
  "cooldown": "22 / 21 / 20 / 19 / 18",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effectRadius": "325",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Swain summons a demonic eye at the target location that grants sight of the area for 2 seconds and explodes after 1.5 seconds, dealing magic damage to enemies within, halved against minions, and slowing them for 1.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Minion Damage",
          "modifiers": [
            {
              "values": "35 / 52.5 / 70 / 87.5 / 105"
            },
            {
              "unit": "% AP",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "50 / 55 / 60 / 65 / 70"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemy champions hit are also revealed for 6 seconds and have a Soul Fragment collected from them."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Swain/ability-icon/w",
  "notes": "Enemy  champions protected by a  spell shield do not have a Soul Fragment collected from them but are  revealed anyway.\nVision of Empire will grant Soul Fragments from hitting  clones.\nSwain will not receive the Soul Fragments if Vision of Empire hits enemy champions while he is dead.\nVision of Empire is visible and audible to enemies through the fog of war.\nHitting an enemy champion with Vision of Empire collects nearby Soul Fragments.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "Special",
  "targeting": "Location",
  "targetRange": "5500 / 6000 / 6500 / 7000 / 7500"
}
export default ability
