// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Eulogy of the Isles",
  "affects": "Self",
  "blurb": "Active:  Yorick summons the  Maiden of the Mist and a few Mist Walkers at the target location. The Maiden will automatically raise Mist Walkers from dead enemies, and mark her attack target with Touch of the Maiden.",
  "castTime": "0.5",
  "cooldown": "160 / 130 / 100",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yorick summons the Maiden of the Mist over 1.5 seconds, along with a number of Mist Walkers surrounding her at the target location, which remain on the battlefield until she or Yorick dies. Eulogy of the Isles can be recast once while the Maiden is alive after 10 seconds of the activation.</p>",
      "leveling": [
        {
          "attribute": "Mist Walkers",
          "modifiers": [
            {
              "values": "2 / 3 / 4"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Yorick sets the Maiden free, allowing her to push the nearest lane until she dies.</p>"
    },
    {
      "description": "See Pets for more details about The Maiden of the Mist."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yorick/ability-icon/r",
  "notes": "See the Pets section below for more details about The Maiden of the Mist and Mist Walkers.\nThe extra Mist Walkers spawn 250 units from the Maiden summon location.\nThe Maiden updates her stats when Yorick's stats change, and as Eulogy of the Isles is ranked up.\nWhen Yorick dies, The Maiden rapidly loses portions of her maximum health over 3 seconds until she dies.\nThe loss of maximum health occurs in 0.6-second intervals, in which she loses 20% on the first, 25% on the second, 33.3% on the third, 50% on the fourth, and 100% on the fifth.\nYorick will snap his facing direction towards the target location at the start of the cast time.",
  "resource": "Mana",
  "targeting": "Location",
  "targetRange": "600"
}
export default ability
