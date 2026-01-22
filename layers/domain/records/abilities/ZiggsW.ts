// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Satchel Charge",
  "affects": "Enemies / Self",
  "blurb": "Active:  Ziggs hurls a charge to the target location that remains for a few seconds. Satchel Charge can be recast within the duration, and does so automatically afterwards.",
  "castTime": "0.25",
  "cooldown": "20 / 18 / 16 / 14 / 12",
  "cost": "80",
  "damageType": "Magic damage",
  "effectRadius": "325 /  400",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ziggs hurls a charge to the target location, remaining there for 4 seconds and granting sight of the area. Satchel Charge can be recast within the duration, and does so automatically afterwards. If recast while in flight, the charge will explode immediately upon landing.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Ziggs detonates the charge, causing it to explode to deal magic damage to nearby enemies and knock them back over 0.5 seconds up to 500 units away from the center of the explosion, though not through terrain. If this hits Ziggs, he will dash up to 825 units away from the center.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 105 / 140 / 175 / 210"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Turret Explosion:</span> The explosion also executes enemy turrets within that are below a maximum health threshold.</p>",
      "leveling": [
        {
          "attribute": "Demolition Threshold",
          "modifiers": [
            {
              "unit": "% of turret's maximum health",
              "values": "25 / 27.5 / 30 / 32.5 / 35"
            }
          ]
        }
      ]
    },
    {
      "description": "Ziggs does not dash if he is immobilized or grounded. He can cast any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ziggs/ability-icon/w",
  "notes": "The initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade and triggering  Force Pulse's passive.\nDetonating the ability manually does not.\nDeals  area damage to non-turrets and  raw damage to turrets.\nSatchel Charge's distance increases with proximity to the charge, resulting in being knocked straight up when aligned directly on top of it.\nZiggs will not dash from Satchel Charge's detonation while  Teleporting but he will while  Recalling.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1750",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Location / Auto",
  "targetRange": "1000"
}
export default ability
