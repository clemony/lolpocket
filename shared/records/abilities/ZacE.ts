// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Elastic Slingshot",
  "affects": "Enemies",
  "castTime": "none",
  "cooldown": "22 / 19 / 16 / 13 / 10",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "265",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zac charges for up to 4.5 seconds to increase Elastic Slingshot's range over a cone in the target direction.</p>",
      "leveling": [
        {
          "attribute": "Maximum Range Channel Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "0.9 / 1 / 1.1 / 1.2 / 1.3"
            }
          ]
        }
      ]
    },
    {
      "description": "Elastic Slingshot can be recast within the duration. If Zac cancels the channel himself, or the charge completes without reactivation, 50% of Elastic Slingshot's health cost and cooldown are refunded."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Zac leaps to the target location within the boundaries of the cone. Upon landing, he deals magic damage to nearby enemies and knocks them up and stuns them for 0.5 seconds, increased to 1 second if Elastic Slingshot was charged for more than 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "60 / 105 / 150 / 195 / 240"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/e",
  "notes": "Quick casting: Elastic Slingshot's channel begins when the key is pressed and held, launching Zac towards the cursor when released.\nElastic Slingshot will not  knock up if the targeted location was directly on top of Zac (in which case he will not  dash at all).(note)\nThe  knock up will occasionally end early if the targeted location was slightly away from Zac.(note)\n Displacement immunity will also resist the application of the  stun.\nElastic Slingshot may sometimes fail to indicate Zac's target location.(bug)\nElastic Slingshot may sometimes go on cooldown while not being shown as on cooldown.(bug)\nThe following table refers for interactions while Zac is  channeling:\n Recall is disabled for the first 0.9 seconds and otherwise interrupts the channel if used.\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Stretching Strikes and  Unstable Matter interrupt.  Let's Bounce! initiates the recast and is buffered to cast itself at the end of the dash.\n\n\nMovement\n\nDisabled for the first 0.9 seconds, otherwise, interrupts.\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\n Hextech Rocketbelt\n\n\nInterrupted by\n\nAll item-actives not specified above interrupt\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport\n\n\nInterrupted by\n\n Recall  Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects",
  "resource": "Current health",
  "speed": "1350",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction / Location",
  "targetRange": "1200 / 1350 / 1500 / 1650 / 1800"
}
export default ability
