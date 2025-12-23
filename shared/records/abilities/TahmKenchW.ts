// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Abyssal Dive",
  "affects": "Self, Allies",
  "castTime": "none",
  "cooldown": "21 / 20 / 19 / 18 / 17",
  "cost": "60 / 75 / 90 / 105 / 120",
  "damageType": "Magic damage",
  "effectRadius": "275 /  200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tahm Kench channels for 1.35 seconds as he dives into the waters, then blinks to the target location after a 0.15-second delay and remains unable to act for 0.65 seconds after the channel completes. Abyssal Dive grants sight of the area during the channel.</p>"
    },
    {
      "description": "Tahm Kench emerges to deal magic damage to nearby enemies, as well as knock up and stun them for 1 second. If this hits at least one enemy champion, 40% of Abyssal Dive's mana cost as well as a percentage of its cooldown are refunded.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "100 / 135 / 170 / 205 / 240"
            },
            {
              "unit": "% AP",
              "values": "150"
            }
          ]
        },
        {
          "attribute": "Cooldown Refund",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 42.5 / 45 / 47.5 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies can see the indicator for Tahm Kench's destination after he has channeled for 0.75 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/w",
  "notes": "Tahm Kench is  vanished (but does not become untargetable) during the 0.15 seconds delay.\nThe following table refers for interactions while Tahm Kench is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nThe following table refers for interactions while Tahm Kench is unable to act:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Location",
  "targetRange": "1000 / 1050 / 1100 / 1150 / 1200"
}
export default ability
