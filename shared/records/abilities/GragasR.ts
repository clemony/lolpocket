// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Explosive Cask",
  "affects": "Enemies",
  "blurb": "Active:  Gragas hurls a cask to the target location that explodes upon impact, dealing magic damage to nearby enemies and  knocking them back.",
  "castTime": "0.25",
  "cooldown": "100 / 85 / 70",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gragas hurls a cask that travels to the target location over 0.5 seconds, exploding on impact to deal magic damage to all enemies within the area and knock them back 900 units, though not through terrain, from the epicenter of the explosion, as well as granting sight of the area for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 300 / 400"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gragas/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "1000"
}
export default ability
