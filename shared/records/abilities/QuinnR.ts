// Updated Patch 15.23.1 - 11/30/2025 12:24:00 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Skystrike",
  "affects": "Enemies",
  "blurb": "Active:  Quinn disbands from  Valor and rains arrows down around her, dealing physical damage to nearby enemies.",
  "castTime": "none",
  "cooldown": "3",
  "cost": "100 / 50 / 0",
  "damageType": "Physical damage",
  "effectRadius": "700",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Quinn detaches from Valor, ending Behind Enemy Lines' effects and raining arrows down around her, dealing physical damage to nearby enemies and marking them as Vulnerable.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120"
            },
            {
              "unit": "% bonus AD",
              "values": "35"
            }
          ]
        }
      ]
    },
    {
      "description": "Declaring a basic attack or casting Blinding Assault or Vault during Behind Enemy Lines automatically activates Skystrike."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Quinn/ability-icon/r",
  "notes": "If Quinn uses  Vault while  Behind Enemy Lines is active, Skystrike will activate at her target's location after she bounces back.\nUpon respawning or recalling, Quinn's first Skytrike will deal double the normal amount of damage to enemies hit if activated by an ability.(bug)",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
