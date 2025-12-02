// Updated Patch 15.23.1 - 11/30/2025 12:24:04 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Equinox",
  "affects": "Enemies",
  "blurb": "Active:  Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within upon casting. The zone then persists for a brief moment and  siliences enemies within.",
  "castTime": "0.25",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effectRadius": "260",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Soraka creates a celestial zone at the target location that deals magic damage to enemy champions within at the time of cast. The zone then persists for 1.5 seconds and silences enemies within.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 95 / 120 / 145 / 170"
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
      "description": "Afterwards, the zone erupts to deal the same damage to enemy champions within and root them for a duration.",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "140 / 190 / 240 / 290 / 340"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Root Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.25 / 1.5 / 1.75 / 2"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Soraka/ability-icon/e",
  "notes": "Equinox's  silence is marked as non-dispellable, so it is not removed by most  cleanses. It is however allowed to be removed by cleanses that also grant immunity to it, such as  Olaf's  Ragnarok.\n Spell shield will not block the  silence.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Location",
  "targetRange": "925"
}
export default ability
