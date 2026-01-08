const item: Item =  {
  "name": "Doran's Shield",
  "id": 1054,
  "rank": "Starter",
  "specialRecipe": 0,
  "noEffects": false,
  "removed": false,
  "simpleDescription": "Good defensive starting item",
  "nicknames": [
    "dshield"
  ],
  "passives": [
    {
      "name": "Enduring Focus",
      "effects": "After taking damage from a champion, gain <b>bonus</b> health regeneration per second equal to (<img src=\"/img/icons/melee.webp\" class=\"inline-icon\" />0 – 5 /<img src=\"/img/icons/ranged.webp\" class=\"inline-icon\" />0 – 3.75) health for 8 seconds, refreshing on subsequent champion damage taken. Area of effect, damage over time, or proc damage taken trigger this effect with the <img src=\"/img/icons/ranged.webp\" class=\"tip-icon\" />ranged values.",
      "unique": true
    },
    {
      "name": "Helping Hand",
      "effects": "Basic attacks deal 5 <b>bonus</b> physical damage on-hit against minions.",
      "unique": true
    }
  ],
  "stats": {
    "health": 110,
    "healthRegen": 4
  },
  "maps": [
    11,
    12,
    21
  ],
  "gold": {
    "base": 450,
    "total": 450,
    "sell": 180
  }
}
export default item