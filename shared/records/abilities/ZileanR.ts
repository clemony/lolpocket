// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Chronoshift",
  "affects": "Self, Allies",
  "blurb": "Active:  Zilean places a protective time rune on himself or the target allied champion for a few seconds.",
  "castTime": "none",
  "cooldown": "120 / 90 / 60",
  "cost": "125 / 150 / 175",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zilean places a protective time rune on the target allied champion or himself for 5 seconds.</p>"
    },
    {
      "description": "If the target takes fatal damage within the duration, they enter resurrection for 3 seconds, becoming invulnerable, untargetable, and unable to act. Afterwards, they revive while being healed.",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "600 / 850 / 1100"
            },
            {
              "unit": "% AP",
              "values": "200"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zilean/ability-icon/r",
  "notes": "Upon trigger, Chronoshift places all summoner spells that are not already on cooldown on a 3-second  cooldown.\nChronoshift's  untargetability does not  destroy in-flight  projectiles.\nChronoshift cannot target  clones.\nChronoshift takes priority over all other  resurrection effects as well as all  zombie state effects.\nChronoshift does not activate if the target is killed by the  Nexus Obelisk.\nChronoshift has a  forgiveness radius of 175 units.\nWhile in resurrection, the target's health regeneration is set to 0.\nThe target's screen will have a white tint.\nThe following table refers for interactions while the target is unable to act:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Mark  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "targeting": "Unit",
  "targetRange": "900"
}
export default ability
