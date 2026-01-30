// Updated Patch 16.1 - 01/29/2026 04:26:53 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "W",
  "name": "Void Swarm",
  "affects": "Enemies",
  "blurb": "Passive:  Malzahar generates a stack of Zz'Rot Swarm when he casts another  ability, up to a maximum.",
  "castTime": "none",
  "cooldown": "8",
  "cost": "40 / 45 / 50 / 55 / 60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Malzahar generates a stack of Zz'Rot Swarm when he casts another ability, up to a maximum of 2.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Malzahar consumes all Zz'Rot Swarm stacks and, after a 0.5-second delay, summons a Voidling at the target location. Additional Voidlings are then summoned for each Zz'Rot Swarm stack consumed, with each Voidling being summoned 0.5 seconds after the previous one.</p>",
      "leveling": [
        {
          "attribute": "Voidling Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "8 / 8 / 9 / 9 / 10"
            }
          ]
        }
      ]
    },
    {
      "description": "Voidlings deal magic damage with their attacks, reduced by 50% against epic monsters and increased by 200% to enemy minions infected by Malefic Visions.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "5 / 8.5 / 12 / 15.5 / 19 / 22.5 / 26 / 29.5 / 33 / 36.5 / 40 / 43.5 / 47 / 50.5 / 54 / 57.5 / 61 / 64.5"
            },
            {
              "values": "12 / 14 / 16 / 18 / 20"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Minion Damage",
          "modifiers": [
            {
              "values": "15 / 25.5 / 36 / 46.5 / 57 / 67.5 / 78 / 88.5 / 99 / 109.5 / 120 / 130.5 / 141 / 151.5 / 162 / 172.5 / 183 / 193.5"
            },
            {
              "values": "36 / 42 / 48 / 54 / 60"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        }
      ]
    },
    {
      "description": "See Pets for more details about Voidlings."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Malzahar/ability-icon/w",
  "notes": "Malzahar loses all  stacks upon  death.\nZz'Rot Swarm stacks are gained per cast and not per ability activation. For example, if  Malefic Visions is cast and the ability cancels under certain circumstances, a Zz'Rot Swarm stack will still be granted despite the ability's failure to complete.",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "targeting": "Location",
  "targetRange": "150"
}
  export default ability
