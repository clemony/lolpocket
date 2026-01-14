// Updated Patch 16.1.1 - 01/13/2026 08:49:58 AM CST
      const item: Item =  {
  "name": "Regicide",
  "id": 447115,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "End the Line",
      "effects": "At the start of the combat phase in each round, declare the enemy champion with the lowest <b>total maximum</b> health as the <i>Regent</i>. Scoring a <img src=\"/img/icons/takedown.webp\" class=\"tip-icon\" />takedown against the <i>Regent</i> for the first time in the combat phase grants you 10 <b>bonus</b> attack damage permanently and sets the <b>current</b> cooldown of your ultimate ability to 0.5 seconds."
    }
  ],
  "stats": {
    "attackDamage": 60,
    "lethality": 15,
    "percentMovespeed": 8
  },
  "description": "60 Attack Damage\n15 Lethality\n8% Move Speed\n\nEnd the Line\nAt the start of each round, declare the lowest health enemy the Regent. Getting a takedown on the Regent grants you a permanent 10 Attack Damage and refreshes your Ultimate's Cooldown.",
  "maps": [
    30
  ],
  "gold": {
    "base": 1000,
    "total": 1000,
    "sell": 400
  }
}
export default item