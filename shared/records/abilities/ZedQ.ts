// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Razor Shuriken",
  "width": "100",
  "affects": "Enemies",
  "blurb": "Active:  Zed throws a shuriken in the target direction that deals physical damage to enemies hit.",
  "castTime": "0.25",
  "cooldown": "6",
  "cost": "75 / 70 / 65 / 60 / 55",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zed throws a shuriken in the target direction that deals physical damage to enemies hit, reduced to 60% against targets beyond the first.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "48 / 72 / 96 / 120 / 144"
            },
            {
              "unit": "% bonus AD",
              "values": "60"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zed/ability-icon/q",
  "notes": "Shurikens blocked by  spell shield still count as being hit for the reduced pass-through damage.\nIf Zed buffers an attack command during Razor Shuriken's cast time the attack will perform slower than if Zed had attacked after the cast time.\nThe same does not happen if Zed recasts  Living Shadow during Razor Shuriken's cast time.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Energy",
  "speed": "1700",
  "spellEffects": "Area of effect",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "925"
}
export default ability
