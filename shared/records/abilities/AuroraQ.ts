// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Twofold Hex",
  "width": "210 /  90",
  "affects": "Enemies, Self",
  "blurb": "Active:  Aurora fires a bolt of energy that deals magic damage to enemies hit and marks them for a short time. Twofold Hex can be recast while at least one target is marked.",
  "castTime": "0.25 / None",
  "cooldown": "9 / 8.5 / 8 / 7.5 / 7",
  "cost": "60",
  "damageType": "Magic damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Aurora fires a bolt of energy in the target direction that deals magic damage to enemies hit and marks them with a curse for 3.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "45 / 70 / 95 / 120 / 145"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "Twofold Hex can be recast after 0.1 seconds while at least one target is marked, and does so automatically at the end of the mark's duration."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Aurora expunges the curse from all marked targets, drawing the spiritual energy back to her as bolts that each deal magic damage to all enemies they pass through, reduced to 40% against minions and 50% against monsters and increased by 0% - 50% (based on target's missing health). Subsequent bolts against an enemy deal 20% damage.</p>",
      "leveling": [
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "45 / 70 / 95 / 120 / 145"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "67.5 / 105 / 142.5 / 180 / 217.5"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Subsequent Bolt Minimum Magic Damage",
          "modifiers": [
            {
              "values": "9 / 14 / 19 / 24 / 29"
            },
            {
              "unit": "% AP",
              "values": "8"
            }
          ]
        },
        {
          "attribute": "Subsequent Bolt Maximum Magic Damage",
          "modifiers": [
            {
              "values": "13.5 / 21 / 28.5 / 36 / 43.5"
            },
            {
              "unit": "% AP",
              "values": "12"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Aurora/ability-icon/q",
  "notes": "Twofold Hex can also be recast for 0.66 seconds after the 0.1-second delay. If the recast is used during this time window, Twofold Hex will be buffered to recast automatically as soon as the bolt missile from the first cast has fizzled from reaching maximum range, even if no targets are marked. This automatic recast can also be buffered during Twofold Hex's cast time.\n Spell shield can block the effects of the active and the recast.\nThe marked targets do not need to be visible in order for Aurora to recast Twofold Hex.\nThey do however need to be targetable; if all marked targets are  untargetable, Twofold Hex's recast is disabled.\nOnce Aurora has successfully recast Twofold Hex, she will not be able to recast it again for the duration regardless of any number of marked enemies still remaining.\nIf all enemies marked by Twofold Hex are  untargetable when Aurora manually recasts Twofold Hex, the ability will be consumed but evidently without effect. It will however automatically recast again at the end of the marks' duration to expunge any remaining marks.(note)\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600 / 2000",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction / Auto"
}
export default ability
