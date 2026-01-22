// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Way of the Hunter",
  "affects": "Self, Enemies",
  "blurb": "Innate - Intent:  Yone gains increased  critical strike chance.",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Intent:</span> Yone's total critical strike chance is doubled from all other sources. Additionally,[ every 1% critical strike chance in excess of 100% is converted into 0.5 bonus attack damage. ][ every 50% critical strike chance in excess of 100% is converted into 25 bonus attack damage. ]</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Steel and Spirit:</span> Yone's basic attacks alternate between his Steel Sword and Azakana Sword on-attack. Yone begins attacking with Steel Sword, and basic attacks with Azakana Sword deal 50% AD physical damage and 50% AD magic damage.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/p",
  "notes": "There is no attack time-out between alternating swords. It will persist through  death.\n50% of  Spellblade and  Demolish damage will be converted to magic damage if applied by the Azakana Sword.\nThis will also occur if applied by  Guinsoo's Rageblade's Phantom Hit after having last attacked with the Azakana Sword.\nThis will also occur if applied by  Mortal Steel after having last attacked with the Azakana Sword.(bug)\nThe mixed damage is dealt in two simultaneous instances of damage, but will pretend to be a single instance for most effects (such as  Conqueror's stacks).\nBoth instances deal  basic damage and thus natively apply  life steal.\nThe attack applies on-hit effects only once, right at the start.\nEven if the target dies from the magic damage, the physical damage will still be applied to it.\nIf the target dies from on-hit damage, the magic damage portion will be skipped and only the physical damage applied.(bug)\nYone requires at least  50% critical strike chance in order to reach 100% critical strike chance from Way of the Hunter's multiplier.",
  "spellEffects": "basic",
  "targeting": "Passive"
}
export default ability
