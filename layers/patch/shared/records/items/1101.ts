// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Scorchclaw Pup",
  "id": 1101,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "jungle",
    "red",
    "cat",
    "kitty",
    "meow"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Jungle Companions",
      "effects": "Summon a <i>Scorchclaw Pup</i> companion to assist you in combat against monsters."
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Scorchclaw's Slash",
      "effects": "Feed your companion enough treats to evolve it and upgrade your <img src=\"/img/icons/smite.webp\" class=\"tip-icon\" />Smite. Upon the companion reaching its final evolution, this item is consumed, granting you the {{bi|Scorchclaw&#039;s Slash|Scorchclaw&#039;s Slash}} buff."
    }
  ],
  "stats": {},
  "description": "Jungle Companions\nSummon a Scorchclaw that assists you against monsters.\n\nScorchclaw's Slash\nThe companion grows as you hunt monsters, empowering your Smite. When fully grown, it periodically imbues your next Attack or Ability to burn enemies and Slow them. Killing large monsters readies this immediately.",
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