// Updated Patch 16.1 - 01/29/2026 04:26:48 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "Q",
  "name": "Pocket Pistol",
  "width": "80",
  "affects": "Enemies",
  "angle": "20°",
  "blurb": "Active:  Kled sprays a cone of pellets in the target direction that deal physical damage to enemies hit, during which he also  recoils backward. Each pellet that hits an enemy  champion or epic  monster restores  Courage.",
  "castTime": "0.25",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "0",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Kled sprays a cone of five pellets in the target direction while recoiling 300 units in the opposite direction, dealing physical damage to enemies hit.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "35 / 50 / 65 / 80 / 95"
            },
            {
              "unit": "% bonus AD",
              "values": "65"
            }
          ]
        }
      ]
    },
    {
      "description": "Kled periodically stocks a Pocket Pistol charge, up to a maximum of 2. He will restore both charges after dismounting."
    },
    {
      "description": "Pellets collide with the first enemy champion they hit, and deal 20% damage per pellet beyond the first. Each pellet that hits an enemy champion or epic monster restores Courage, by 5 and 2.5 respectively, for up to a total restore of 25 against champions and 12.5 versus epic monsters.",
      "leveling": [
        {
          "attribute": "Reduced Damage",
          "modifiers": [
            {
              "values": "7 / 10 / 13 / 16 / 19"
            },
            {
              "unit": "% bonus AD",
              "values": "13"
            }
          ]
        },
        {
          "attribute": "Maximum Damage",
          "modifiers": [
            {
              "values": "63 / 90 / 117 / 144 / 171"
            },
            {
              "unit": "% bonus AD",
              "values": "117"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kled/ability-icon/q",
  "notes": "Applies  spell damage to champions and  area damage to non-champions.\nThe backwards  dash from Pocket Pistol can pass terrain.\nPocket Pistol can be cast while  grounded or  rooted but Kled will not dash backwards.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIn addition to its  projectiles, Pocket Pistol will check for enemy champions within a 55-unit center-to-edge radius area from the projectiles' origin point.\nThe projectiles interact with projectile-blocking effects but the area check doesn't.\n Black Cleaver will specifically apply a stack for every pellet hit.\n Spell shield will negate multiple pellets if they hit at the same time.\nEven if the first pellet is negated, subsequent non-negated pellets will still only deal 20% of the damage.\nPellets will restore Courage when colliding with units protected by  spell shield, but will not restore Courage when colliding with  Fiora's  Riposte.\nPENDING FOR TEST: Pocket Pistol will have no charges if Kled  dismounts and triggers  Transcendence at the same time.(bug)\nPENDING FOR TEST: Pocket Pistol will falsely visually appear to have another charge ready if the end of its cast time coincides with a charge being stocked.(bug)\nThe following table refers for interactions while Kled is dashing:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Recall  Mark\n\n\nDisabled\n\n Flash  Teleport  Hexflash  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\nBuffering Interactions\n\nAttempting to use any effect that would be buffered until the end of the cast time will instead delay it until the end of the dash, even if that effect is usable during the dash.",
  "projectile": "TRUE",
  "rechargeRate": "18 / 16 / 14 / 12 / 10",
  "resource": "Charge",
  "speed": "3000 / 1025",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Direction"
}
  export default ability
