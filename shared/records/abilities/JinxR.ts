// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Super Mega Death Rocket!",
  "width": "280",
  "affects": "Enemies",
  "blurb": "Active:  Jinx fires a rocket in the target direction that explodes upon the first enemy champion hit, dealing physical damage to the target and surrounding enemies.",
  "castTime": "0.6",
  "cooldown": "85 / 65 / 45",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "400 /  1000 / 1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Jinx fires a massive rocket in the target direction, briefly granting sight of its surroundings and exploding upon colliding with an enemy champion. The explosion deals physical damage to nearby enemies and grants sight of the area for 2 seconds.</p>"
    },
    {
      "description": "Super Mega Death Rocket! deals 10% - 100% (based on distance traveled) damage. This does not affect the bonus damage based on the target's missing health.",
      "leveling": [
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "250 / 400 / 550"
            },
            {
              "unit": "% bonus AD",
              "values": "130"
            },
            {
              "tooltip": "Scaling per rank:\n25 / 30 / 35% of target's missing health",
              "unit": "% of target's missing health",
              "values": "25 - 35"
            }
          ]
        },
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "25 / 40 / 55"
            },
            {
              "unit": "% bonus AD",
              "values": "13"
            },
            {
              "tooltip": "Scaling per rank:\n25 / 30 / 35% of target's missing health",
              "unit": "% of target's missing health",
              "values": "25 - 35"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies surrounding the primary target take 80% damage. The bonus damage based on the target's missing health is capped at 1200 against monsters.",
      "leveling": [
        {
          "attribute": "Maximum Secondary Damage",
          "modifiers": [
            {
              "values": "200 / 320 / 440"
            },
            {
              "unit": "% bonus AD",
              "values": "104"
            },
            {
              "tooltip": "Scaling per rank:\n20 / 24 / 28% of target's missing health",
              "unit": "% of target's missing health",
              "values": "20 - 28"
            }
          ]
        },
        {
          "attribute": "Minimum Secondary Damage",
          "modifiers": [
            {
              "values": "20 / 32 / 44"
            },
            {
              "unit": "% bonus AD",
              "values": "10.4"
            },
            {
              "tooltip": "Scaling per rank:\n20 / 24 / 28% of target's missing health",
              "unit": "% of target's missing health",
              "values": "20 - 28"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Jinx/ability-icon/r",
  "notes": "Spell shield will not prevent the explosion.\nSuper Mega Death Rocket's projectile has an  icon on the mini-map while it is in flight. It can be seen by only Jinx and her allies.\nThe bonus damage based on missing health is based on each unit's own missing health and not the primary target's.\nUnlike similar spells, Super Mega Death Rocket will not increase it's damage when ranked up while the missile is in flight.(note)\nThis is because the base damage is fixed at a multiple of the damage the rocket initially started with.\nThe bonus AD ratio will still update when AD is gained or lost between the cast and hit of the missile.\nThis ability will cast from wherever the caster is at the start of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1700 / 2200",
  "spellEffects": "Area of effect",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "Global"
}
export default ability
