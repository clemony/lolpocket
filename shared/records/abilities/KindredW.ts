// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Wolf's Frenzy",
  "affects": "Enemies",
  "blurb": "Passive: As  Kindred move and attack, they build up stacks of Hunter's Vigor. At full stacks,  Lamb's next basic attack  heals her.",
  "castTime": "none",
  "cooldown": "18 / 17 / 16 / 15 / 14",
  "cost": "40",
  "damageType": "Magic damage",
  "effectRadius": "800",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Lamb generates 1 stack of Hunter's Vigor for every 27 units she travels by any means and 5 stacks on-attack, up to a maximum of 100 stacks. At maximum stacks, her next basic attack heals her for 0% - 100% (based on Kindred's missing health) of 47 - 81 (based on level). The heal is not triggered if Kindred is at full health.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Wolf dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb. He automatically attacks the closest nearby visible enemy within the area, prioritizing the last enemy Lamb has attacked, then enemy champions, then non-champions.</p>"
    },
    {
      "description": "Wolf's attacks deal magic damage and the rate at which he attacks scale with 25% of Kindred's bonus attack speed. Against monsters, his attacks deal 150% damage and slow the target by 50% for 2 seconds. The damage based on the target's health ratio is capped at 112.5 (+ 15 per mark) against monsters.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "25 / 30 / 35 / 40 / 45"
            },
            {
              "unit": "% bonus AD",
              "values": "20"
            },
            {
              "unit": "% AP",
              "values": "20"
            },
            {
              "unit": "% (+ 1% per mark) of target's current health",
              "values": "1.5"
            }
          ]
        },
        {
          "attribute": "Monster Damage",
          "modifiers": [
            {
              "values": "37.5 / 45 / 52.5 / 60 / 67.5"
            },
            {
              "unit": "% bonus AD",
              "values": "30"
            },
            {
              "unit": "% AP",
              "values": "30"
            },
            {
              "unit": "% (+ 1.5% per mark) of target's current health",
              "values": "2.25"
            }
          ]
        }
      ]
    },
    {
      "description": "Wolf's Frenzy ends immediately if Lamb leaves the area or dies."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Kindred/ability-icon/w",
  "notes": "Hunter's Vigor's heal is not triggered on attacks against structures and wards.\nWolf is  untargetable and  ghosted but he cannot move through terrain other than the initial dash on activation.\nWolf is not able to re-target  Rift Scuttler if he loses  sight of her while he's attacking it.\nWolf grants the same  vision as a  champion.\nWolf's Frenzy does not end if Lamb enters  resurrection.\nWolf's Frenzy applies ability haste to its cooldown post-effect.\nGiven a base cooldown of 14 seconds at rank 5 with 100 ability haste, casting the ability and then ending it after 4 seconds will result in a remaining cooldown of (14−4)×0.5=5 seconds, where 0.5 is derived from ability haste.\nBecause of this, there will always be some cooldown time remaining post-effect regardless of the amount of ability haste, unlike certain other abilities with cooldowns that start on-cast.\nPENDING FOR TEST:: Interaction with enemy vision and spectator mode.",
  "projectile": "FALSE",
  "resource": "Mana",
  "speed": "1400",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "500"
}
export default ability
