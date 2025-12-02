// Updated Patch 15.23.1 - 11/30/2025 12:24:08 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Venom Cask",
  "affects": "Enemies",
  "blurb": "Active:  Twitch tosses a cask that explodes at the target location, inflicting  Deadly Venom to enemies hit.",
  "castTime": "0.25",
  "cooldown": "13 / 12 / 11 / 10 / 9",
  "cost": "70",
  "effectRadius": "300",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twitch hurls a cask of venom that explodes at the target location, applying Deadly Venom to enemies hit and granting sight of the area.</p>"
    },
    {
      "description": "The area then becomes contaminated for 3 seconds, applying a Deadly Venom stack each second to enemies within and slowing them.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "30 / 35 / 40 / 45 / 50"
            },
            {
              "unit": "% per 100 AP",
              "values": "6"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/w",
  "notes": "Venom Cask can apply a maximum of 4  Deadly Venom stacks per enemy per cast.\nVenom Cask's missile will fail to fire if Twitch is  suppressed during the cast time.(note)",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1400",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "950"
}
export default ability
