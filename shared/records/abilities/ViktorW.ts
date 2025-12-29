// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Gravity Field",
  "affects": "Enemies",
  "blurb": "Active:  Viktor deploys a gravity field that remains at the target location for a few seconds. After a brief delay, the field will activate to continually  slow enemies within and inflict  stack of Gravity Field.",
  "castTime": "0.25",
  "cooldown": "17 / 16 / 15 / 14 / 13",
  "cost": "65",
  "effectRadius": "340",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Viktor deploys a gravity field at the target location for 4.5 seconds. After a 0.75-second delay, it activates to slow enemies within for 1 second, refreshing every 0.25 seconds while they remain inside.</p>",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "33 / 36 / 39 / 42 / 45"
            }
          ]
        }
      ]
    },
    {
      "description": "The field applies a stack to enemies within every 0.25 seconds, stacking up to 5 times. The fifth stack consumes them all to knock down and stun the target for 1.5 seconds. The knockdown and stun can be triggered only once per cast per enemy."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Augment:</span> Magnetize — Viktor's other abilities, excluding Arcane Storm's persistent damage, slow enemies hit by 20% for 1 second.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Viktor/ability-icon/w",
  "notes": "Gravity Field applies a single debuff for both the slow and the stack.\nTargets can be applied further stacks after having their stacks consumed for the first time.\nStacks are always consumed upon the fifth stack, but only the first instance of stacks being consumed can trigger the crowd control effects.\nThe debuff lasts for 1 second.\nGravity Field will remain active if Viktor dies.\nGravity Field's animation can be seen by both teams through  fog of war.\nIf an enemy enters the area of effect while  untargetable, they may generate stacks even after becoming stunned once, causing them to get stunned up-to 3 times by a single Gravity Field.(bug)",
  "resource": "Mana",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "800"
}
export default ability
