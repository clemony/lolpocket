// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Lunge",
  "affects": "Enemies",
  "blurb": "Active:  Fiora  dashes in the target direction and then stabs a nearby enemy, dealing physical damage and applying  on-hit effects.",
  "castTime": "none",
  "cooldown": "13 / 11.25 / 9.5 / 7.75 / 6",
  "cost": "20",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora dashes in the target direction, then stabs a nearby enemy. Lunge can hit structures and wards. Stabbing a target reduces Lunge's cooldown by 50%.</p>"
    },
    {
      "description": "The stab deals physical damage and applies on-hit effects.",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "70 / 80 / 90 / 100 / 110"
            },
            {
              "tooltip": "Scaling per rank:\n90 / 95 / 100 / 105 / 110% bonus AD",
              "unit": "% bonus AD",
              "values": "90 - 110"
            }
          ]
        }
      ]
    },
    {
      "description": "Fiora can cast any of her abilities during the dash. The target does not have to be visible to be hit by this ability, unless it is a ward."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/q",
  "notes": "Lunge's dash speed is modified by her bonus movement speed at the time of cast:\n1100 + 350% bonus movement speed, capped at 1600 maximum dash speed if bonus movement speed is positive.\n1100 + 300% bonus movement speed, capped at 850 minimum dash speed if bonus movement speed is negative.\nFiora does not stab if the  dash is  interrupted.\n Flash gets sealed during the dash so Fiora cannot interrupt herself with it. This also means she cannot buffer Flash during the dash for it to be cast right afterward, however.\nFiora can cast  Hextech Rocketbelt during the dash, potentially interrupting it based on the timing, preventing the stab if it does.\nThe dash can pass through walls.\nThe dash has no forgiveness mechanic to clear distant or wider walls with. Any wall wider than 400 units is not crossable.\nThe stab searches for targets in its radius and prioritizes in order of:\nNearest enemy champion affected by  Grand Challenge with a Vital facing Fiora.\nNearest enemy champion Vital facing Fiora.\nNearest enemy champion affected by  Grand Challenge\nEnemy champion with the lowest percent health out of all champions <20% remaining health.\nNearest enemy champion, minion, or monster within 60% of the radius ( 252) with current health below Lunge's raw damage.\nNearest enemy champion in the radius check.\nNearest champion in a  rectangular check with 160 width and 450 units length backwards from Fiora's current facting direction, ignoring the normal radius check.\nTurning Fiora's facing direction during the dash (e.g. by casting  Riposte) can create some very long range hits opposite to her new facing direction, especially against targets with a large gameplay radius.(bug)\nNearest enemy minion with current health below Lunge's raw damage.\nAny nearest enemy minion or monster.\nStructures.\nVisible wards.\nLunge will not attempt to strike jungle plants.\nLunge deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\nLunge cannot  critically strike.\nLunge won't deal damage, if the spell is  dodged or  blocked, but will deal damage if Fiora is  blinded.\nLunge does not apply  on-attack effects apart from certain exceptions.\nIt does apply  Energized as if it was an  on-hit effect.\nIt does not stack  Guinsoo's Rageblade nor trigger Phantom Hit.",
  "resource": "Mana",
  "speed": "See notes",
  "spellEffects": "Special",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "50 / 400"
}
export default ability
