// Updated Patch 16.1 - 01/29/2026 04:28:49 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Duskblade of Draktharr",
  "id": 446691,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "lethality"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Nightstalker",
      "effects": "Your abilities deal (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />0% – 70% (based on target's missing health) /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />0% – 70% (based on target's missing health)) hp (based on target's <b>missing</b> health) increased damage against enemy champions. Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against an enemy champion within 3 seconds of damaging them renders you <img src=\"/img/icons/untargetable.webp\" class=\"tip-icon\" />untargetable for 1.5 seconds, which ends prematurely if you perform an action that <img src=\"/img/icons/break-stealth.webp\" class=\"tip-icon\" />breaks stealth."
    }
  ],
  "stats": {
    "attackDamage": 50,
    "lethality": 20,
    "abilityHaste": 20
  },
  "description": "50 Attack Damage\n20 Lethality\n20 Ability Haste\n\nNightstalker\nYour Abilities deal up to an additional percent damage based on the target's missing health. When a champion that you have damaged within the last 3 seconds dies, you become Untargetable from non-structures for 1.5 seconds (0s).",
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item