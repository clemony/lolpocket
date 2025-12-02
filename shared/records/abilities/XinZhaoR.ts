// Updated Patch 15.23.1 - 11/30/2025 12:24:11 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Crescent Guard",
  "affects": "Enemies",
  "blurb": "Passive - Challenge: The last enemy champion hit by  Xin Zhao's  basic attacks or  Audacious Charge is marked Challenged for a short time.",
  "castTime": "0.35",
  "cooldown": "120 / 110 / 100",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "500 / 450",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Xin Zhao's basic attacks and Audacious Charge apply the Challenged mark to enemy champions hit, with the latter applying the mark to the farthest champion hit in the area of effect or the primary target if they are a champion.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Xin Zhao sweeps his spear around him, dealing physical damage to nearby enemies, capped at 600 against minions and monsters, and knocking back all targets hit that are not Challenged up-to 700 units over 0.75 seconds, as well as stunning them for the same duration.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "75 / 175 / 275"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            },
            {
              "unit": "% AP",
              "values": "110"
            },
            {
              "unit": "% of target's current health",
              "values": "15"
            }
          ]
        }
      ]
    },
    {
      "description": "For the next 4 seconds, Xin Zhao is invulnerable against enemy champions far away from him."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/XinZhao/ability-icon/r",
  "notes": "Pets,  traps,  ground  AoEs,  DoTs, and delayed-damage abilities (e.g.  Death Mark,  Explosive Charge,  Hemoplague) will not damage Xin Zhao if the enemy champion source is outside the circle when the damage applies.\nThis ability will cast from wherever the caster is at the end of the cast time.\n Displacement immunity will also resist the application of the  stun.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
