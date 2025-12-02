// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Mystic Shot",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Ezreal fires a bolt of energy that deals physical damage to the first enemy hit.",
  "castTime": "0.25",
  "cooldown": "5.5 / 5.25 / 5 / 4.75 / 4.5",
  "cost": "28 / 31 / 34 / 37 / 40",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit, applying on-hit effects and triggering on-attack effects.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "20 / 45 / 70 / 95 / 120"
            },
            {
              "unit": "% AD",
              "values": "130"
            },
            {
              "unit": "% AP",
              "values": "15"
            }
          ]
        }
      ]
    },
    {
      "description": "If Mystic Shot successfully hits an enemy, the current cooldowns of Ezreal's abilities, including Mystic Shot's, are reduced by 1.5 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ezreal/ability-icon/q",
  "notes": "Mystic Shot deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nMystic Shot benefits from  life steal,  omnivamp, and  physical vamp, but not  spell vamp.\nEven if the ability is blocked by  spell shield it will still trigger the cooldown reduction.\nThis ability will cast from wherever the caster is at the end of the cast time.\nMystic Shot will be buffered and cast when the cooldown ends if the player attempts to cast it within 0.05 seconds of the cooldown ending.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "1200"
}
export default ability
