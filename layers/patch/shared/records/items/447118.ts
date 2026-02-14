// Updated Patch 16.1 - 02/13/2026 11:21:52 PM CST
      import type { Item } from "#shared/types"

      const item: Item =  {
  "name": "Pyromancer's Cloak",
  "id": 447118,
  "rank": "Special",
  "specialRecipe": 220007,
  "noEffects": false,
  "removed": false,
  "nicknames": [
    "burn"
  ],
  "passives": [
    {
      "unique": true,
      "mythic": false,
      "name": "Spark",
      "effects": "Basic attacks and ability hits against enemies inflicts them with a Burn that deals 100 – 350 (based on level) magic damage over 3 seconds.",
      "cooldown": "5"
    },
    {
      "unique": true,
      "mythic": false,
      "name": "Cleansing Flame",
      "effects": "Inflicting an enemy champion with a Burn buzzword 3 effect releases a fireball from the target, landing to a location near you after 0.5 seconds. Upon landing, a blaze is created at the impact area with a radius of 175 units, lasting for 5 seconds (3 second cooldown per target). While you are within the blaze, gain 20% <b>bonus total</b> movement speed, lingering for 0.75 seconds after exiting, and <img src=\"/img/icons/heal.webp\" class=\"tip-icon light:invert\" />heal for 60 – 150 (based on level) upon entering and each second of the blaze's lifetime thereafter. While enemies are within the blaze, they are dealt 100 magic damage every second.<br><br>For each unique Burn buzzword 3 effect source that you have, up to 10, increase the blaze's size by 40 units, and its strength by 4% <b>bonus total</b> movement speed and 30 hsp healing per second for the buff and 60 magic damage per tick for the enemy effect."
    }
  ],
  "stats": {
    "health": 400,
    "abilityHaste": 15
  },
  "description": "85 Adaptive Force\n400 Health\n15 Ability Haste\n\nSpark (5s) Cooldown\nAttack or Ability hits against an enemy champion Burn them for  magic damage over 3 seconds.\n\nCleansing Flame (0s) per champion\nApplying a Burn to an enemy champion creates a nearby Blaze for 5 seconds. While in a Blaze, you gain  Move Speed and restore  Health per second, while enemies take  magic damage per second.\n\nThe size and strength of each Blaze scale the number unique Burn sources you have.",
  "gold": {
    "base": 1000,
    "purchasable": true,
    "total": 1000,
    "sell": 400
  },
  "maps": [
    30
  ]
}
export default item