// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Loaded Dice",
  "affects": "Self",
  "blurb": "Innate: Whenever  Twisted Fate kills an enemy, he generates a small amount of  bonus gold based on chance.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Whenever Twisted Fate kills an enemy, he generates 1 - 6 (based on probability). He also has a chance equal to his critical strike chance to generate an additional 1 - 6 (based on probability).</p>"
    },
    {
      "description": "As you'd expect, Twisted Fate plays with loaded dice. His initial dice roll is weighted to have an increased chance of granting 6, while his critical dice roll is weighted against him and has an increased chance of granting 1."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TwistedFate/ability-icon/p",
  "notes": "The expected bonus gold gained per unit killed is  4.\nThe expected additional gold due to critical strike chance is  3.",
  "targeting": "Passive"
}
export default ability
