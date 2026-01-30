// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Mosstomper Seedling",
  "id": 1103,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "jungle",
    "green",
    "salamander",
    "lizard",
    "frog"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Jungle Companions",
      "effects": "Summon a <i>Mosstomper Seedling</i> companion to assist you in combat against monsters."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Mosstomper's Courage",
      "effects": "Feed your companion enough treats to evolve it and upgrade your <img src=\"/img/icons/smite.webp\" class=\"tip-icon\" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Mosstomper&#039;s Courage|Mosstomper&#039;s Courage}} buff."
    }
  ],
  "stats": {},
  "description": "Jungle Companions\nSummon a Jungle Pet that assists you against monsters.\n\nMosstomper's Courage\nThe companion grows as you hunt monsters, empowering your Smite. When fully grown, it completes your Jungle Quest. ",
  "gold": {
    "base": 450,
    "total": 450,
    "sell": 0
  },
  "maps": [
    11,
    21
  ]
}
export default item