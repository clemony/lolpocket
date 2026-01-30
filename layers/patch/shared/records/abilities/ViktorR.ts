// Updated Patch 16.1 - 01/29/2026 04:27:15 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Arcane Storm",
  "affects": "Enemies",
  "blurb": "Active:  Viktor conjures an arcane singularity at the target location that deals magic damage to enemies within and  disrupts their channeled abilities. The singularity then remains for a duration, continually dealing magic damage to enemies within the area. If the initial hit has struck at least one enemy  champion, it will automatically follow the nearest one hit.",
  "castTime": "0.25",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "325",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viktor conjures an arcane singularity at the target location, dealing magic damage to enemies within the area and disrupting their channeled abilities.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "100 / 175 / 250"
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
      "description": "The singularity then remains active as a moving storm for 6.5 seconds, striking a bolt of electricity onto enemies within it every second to deal magic damage, as well as granting sight of the area within its radius and the surrounding area. The singularity will target the nearest champion hit by its initial damage and will follow them. The singularity moves faster based on its proximity to Viktor.",
      "leveling": [
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "values": "65 / 105 / 145"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "490 / 805 / 1120"
            },
            {
              "unit": "% AP",
              "values": "260"
            }
          ]
        }
      ]
    },
    {
      "description": "Arcane Storm can be recast at any time while the singularity is active."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Viktor directs the singularity to the target location, or to follow the target enemy champion or himself for its remaining duration.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Augment:</span> Perfect Storm — The singularity moves 25% faster. Additionally, whenever an enemy champion is taken down after being damaged by Arcane Storm, the singularity increases the storm's size by 40% and extends its duration by 3 seconds. The storm's radius can be increased up to 6 times and the singularity's duration can be extended only up to the original duration.</p>"
    },
    {
      "description": "Arcane Storm's recast can be used while affected by cast-inhibiting crowd control."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/r",
  "notes": "Viktor can command the singularity regardless of how far away he is from it.\nThe singularity will remain active even if Viktor dies and will automatically follow the nearest enemy champion in range at the time of his death, if it wasn't locked on already.\nThe singularity will only be issued to automatically follow a nearby champion once; it will not lock on to a new target if its current target becomes invalid.\nAny commands it was issued prior to his death will not be interrupted.\n Spell shield will only block the initial damage.\nIf Perfect Storm's singularity scores the killing blow on an enemy champion with the initial damage, it will spawn with the increased size.\nIf multiple champions are dealt the killing blow by the initial hit, the singularity will spawn with the increased size respective to the number of champions killed.\nThe base duration allows for 7 strikes (including the initial one).\nThe storm will follow its target even if they are not  visible, effectively giving away their position.\nArcane Storm is not obstructed by terrain.\nThe  disrupt is 'wrapped' into a status effect that causes affected champions to display the \" Silenced\" UI on their health bar for 0.25 seconds, without actually applying the disabling effects of the  silence crowd control type (functions as an indicator of the target becoming disrupted). This however ensures that the disrupt is also prevented by effects that would negate  silences (such as  crowd control immunity).\nAfter becoming augmented, an  alternate icon is used for the recast of Arcane Storm.\nThe champion that Arcane Storm is following will have an overhead indicator.",
  "resource": "Mana",
  "speed": "200 : 300 / 250 : 375",
  "spellEffects": "spellaoe",
  "spellshieldable": "special",
  "targeting": "Location / Unit",
  "targetRange": "700"
}
  export default ability
