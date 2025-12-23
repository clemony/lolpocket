// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Hounds' Pursuit",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "110 / 95 / 80",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "2100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Naafiri and her Packmates channel for 0.75 seconds to single out the target enemy champion, revealing them in the duration. Upon completion of the channel, they dash to the target; upon arrival Naafiri deals physical damage and slows the target by 99% for 0.25 seconds, whereas each Packmate deals 10% of that damage. Packmates become untargetable during their channel and dash.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            }
          ]
        },
        {
          "attribute": "Physical Damage per Packmate",
          "modifiers": [
            {
              "values": "15 / 25 / 35"
            },
            {
              "unit": "% bonus AD",
              "values": "12"
            }
          ]
        }
      ]
    },
    {
      "description": "If Naafiri scores a champion takedown within 7 seconds of cast, she triggers a pulse that grants sight of the surrounding area for 1 second and reveals enemy champions within for 4 seconds. She can also recast Hounds' Pursuit once from triggering this effect within 12 seconds at no cost."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Naafiri immediately grants herself a shield for 3 seconds before mimicking the first cast's effects.</p>",
      "leveling": [
        {
          "attribute": "Shield",
          "modifiers": [
            {
              "values": "100 / 150 / 200"
            },
            {
              "unit": "% bonus AD",
              "values": "150"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Naafiri/ability-icon/r",
  "notes": "Hounds' Pursuit's theoretical total physical damage from  Packmates only, assuming Naafiri has the maximum number of them active and Hounds' Pursuit is always ranked at the earliest  levels permitted (ranks 1 / 2 / 3 at levels 6 / 11 / 16):\nLevels 6:8: 30 (+ 24% bonus AD) /  60 (+ 48% bonus AD).\nLevels 9:10: 45 (+ 36% bonus AD) /  75 (+ 60% bonus AD).\nLevel 11: 75 (+ 36% bonus AD) /  125 (+ 60% bonus AD).\nLevels 12:14: 100 (+ 48% bonus AD) /  150 (+ 72% bonus AD).\nLevel 15: 125 (+ 60% bonus AD) /  175 (+ 84% bonus AD).\nLevels 16:18: 175 (+ 60% bonus AD) /  245 (+ 84% bonus AD).\nNaafiri marks the enemy champion targeted by Hounds' Pursuit in order to gain assist credit on them, lasting for the standard credit timer.\n Spell shield will block Naafiri's collision damage but cannot prevent collision damage from Packmates.\nNaafiri will track the target if they change locations, up to a maximum distance.\nShe will dash to the target's previous location if they move too far away during the dash.\nNaafiri will be ordered to basic attack the target at the end of the dash.\nNaafiri will windup a basic attack while dashing.(note)\nPackmates hitting the same target as Naafiri will count as dealing \"additional\" damage.\nThe target is  revealed for another 1.5 seconds after the channel completes.\nThe following table refers for interactions while Naafiri is  channeling:\nIf Naafiri's channel is interrupted, the Packmates'  channels will be canceled as well.\nThe channel is cancelled if the target dies or moves too far away, but not if they become  untargetable.\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
  "resource": "Mana",
  "speed": "1800",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Unit",
  "targetRange": "900"
}
export default ability
