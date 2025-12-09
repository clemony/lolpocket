// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Fury of the North",
  "affects": "Self, Enemies",
  "blurb": "Innate - Icebreaker: Enemies  stunned by  Sejuani are also marked Frozen at the same time. Her next  basic attack or  ability against a Frozen target will consume the mark to deal bonus magic damage based on their maximum health.",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Icebreaker:</span> Enemies stunned by Sejuani are marked Frozen for the disable's duration. Sejuani's next basic attack or ability against a Frozen enemy will consume the mark to deal bonus magic damage equal to 10% of their maximum health, capped at 250 against epic monsters.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Frost Armor:</span> Sejuani gains Frost Armor, which lingers for 3 seconds after taking damage from enemy champions, turrets, or large monsters. She restores it after 12 - 6 (based on level) seconds without taking damage from them.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Frost Armor:</span> Sejuani gains slow immunity, cripple immunity, 10 (+ 75% bonus armor) bonus armor, and 10 (+ 75% bonus magic resistance) bonus magic resistance.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sejuani/ability-icon/p",
  "notes": "Gaining Frost Armor does not remove any pre-existing  slows or  cripples.\nIcebreaker will not trigger if the basic attack is  blocked.\nPENDING FOR TEST:: Icebreaker's  interactions with  dodging and  blinding effects via basic attack.\nPENDING FOR TEST::  Spell shield interaction with Icebreaker.",
  "spellEffects": "proc",
  "spellshieldable": "unknown",
  "targeting": "Passive"
}
export default ability
