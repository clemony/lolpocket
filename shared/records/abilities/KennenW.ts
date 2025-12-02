// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Electrical Surge",
  "affects": "Enemies",
  "blurb": "Passive:  Kennen's basic attacks  on-attack generate a stack of Electrical Surge, which stacks up to a cap. At max stacks, his next basic attack consumes them all to deal bonus magic damage and apply a stack of  Mark of the Storm.",
  "castTime": "0.25",
  "cooldown": "13 / 11.25 / 9.5 / 7.75 / 6",
  "cost": "40",
  "damageType": "Magic damage",
  "effectRadius": "775",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Kennen's basic attacks on-attack generate a stack of Electrical Surge, stacking up to 4 times. At 4 stacks, his next basic attack on-attack is empowered to consume all stacks on-hit to deal bonus magic damage and apply a stack of Mark of the Storm.Kennen gains maximum stacks of Electrical Surge upon respawning.</p>",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "35 / 45 / 55 / 65 / 75"
            },
            {
              "unit": "% bonus AD",
              "values": "80 / 90 / 100 / 110 / 120"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kennen sends out a surge of electricity that deals magic damage to all nearby enemies afflicted by Mark of the Storm or within Slicing Maelstrom.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 95 / 120 / 145 / 170"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "An enemy within 775 units with Mark of the Storm or inside Slicing Maelstrom is required to cast this ability. The target does not have to be visible to be targeted by this ability."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kennen/ability-icon/w",
  "notes": "The empowered basic attack applies bonus  spell damage, while the electrical surge deals  area damage.\nElectrical Surge's enhanced attack will be consumed and the bonus damage will not be applied if Kennen is  blinded.\nElectrical Surge's enhanced attack cannot be  dodged or  blocked.\nThe empowered attack will trigger but not be consumed nor apply its effects against  structures and  wards.",
  "projectile": "FALSE",
  "resource": "Energy",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Proximity"
}
export default ability
