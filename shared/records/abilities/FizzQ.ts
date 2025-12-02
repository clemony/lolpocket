// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Urchin Strike",
  "affects": "Enemies",
  "blurb": "Active:  Fizz  dashes through the target enemy, dealing magic damage, physical damage, and applying  on-hit effects.",
  "castTime": "none",
  "cooldown": "8 / 7.5 / 7 / 6.5 / 6",
  "cost": "50",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fizz dashes a fixed distance in the direction of the target enemy. If they are in range upon arrival, he deals magic damage plus 100% AD physical damage and applies on-hit effects.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "10 / 25 / 40 / 55 / 70"
            },
            {
              "unit": "% AP",
              "values": "55"
            }
          ]
        }
      ]
    },
    {
      "description": "Seastone Trident and Chum the Waters can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fizz/ability-icon/q",
  "notes": "Urchin Strike can only go through walls if the target is on the other side.\nUrchin Strike only damages targets if within 200 units of their original location upon completion of the dash.\nFizz will be automatically ordered to  basic attack the target after Urchin Strike.\nUrchin Strike does not deal damage if the target is  untargetable.\n Life steal applies only on the physical damage component.  Spell vamp applies to both the physical damage and bonus magic damage.",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "550"
}
export default ability
