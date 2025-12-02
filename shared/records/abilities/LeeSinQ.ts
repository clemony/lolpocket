// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Resonating Strike",
  "affects": "Enemies",
  "blurb": "Active:  Lee Sin  dashes to the nearby enemy marked by  Sonic Wave, consuming the mark upon arrival to deal physical damage based on the target's missing health.",
  "castTime": "none",
  "cooldown": "10 / 9 / 8 / 7 / 6",
  "cost": "50",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lee Sin dashes to the nearby enemy marked by Sonic Wave. Upon arrival, he consumes the mark and deals physical damage, increased by 0% - 100% (based on target's missing health).</p>",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "95"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "120 / 180 / 240 / 300 / 360"
            },
            {
              "unit": "% bonus AD",
              "values": "190"
            }
          ]
        }
      ]
    },
    {
      "description": "The marked enemy must be within range in order to cast this ability. Iron Will and Cripple can be cast during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/LeeSin/ability-icon/q",
  "notes": "Lee Sin will track the target if they change locations.\nHe will dash to the target's previous location without consuming the mark if the target is too far away or moves beyond 2000 units.\nLee Sin will attempt to place himself on top of the target upon arrival.\nThe damage dealt by Resonating Strike can be negated if the target  blinks. Sometimes, Lee Sin will end the dash at their last location but appear on top of the target after a short delay.\nOriginally, Lee Sin would land 50 units in front of his target. Since there are no patch notes where this is noted to have changed, landing on top of his target may be a bug.\nResonating Strike cannot be cast without the marked target nearby or if the target is  untargetable.\nIf Resonating Strike interrupts another dash,  Tempest and  Dragon's Rage can be cast during it (both otherwise cannot be cast).\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Safeguard,  Iron Will, and  Cripple can be cast.  Tempest and  Dragon's Rage are disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nAll the other item-actives are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Hextech Rocketbelt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Teleport\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath",
  "resource": "Energy",
  "speed": "1350 + 100% movement speed",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Proximity"
}
export default ability
