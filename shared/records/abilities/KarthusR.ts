// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Requiem",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "200 / 180 / 160",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "Global",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Karthus channels for 3 seconds, then deals magic damage to all targetable enemy champions upon completion.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "200 / 350 / 500"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Karthus/ability-icon/r",
  "notes": "Requiem's channel is telegraphed to all enemy champions by a beam of light that descends on all targets, including if they are  untargetable or even  dead.\nRequiem will affect  clones.\nThe damage will apply spell effects to targets in order of being spawned. Single target spell effects (such as  Luden's Companion) are thus triggered on the leftmost champion on the loading screen.\nRequiem will not affect  Neeko if she's  disguised as a non-champion if Karthus is affected by  Death Defied.(bug)\nThe following table refers for interactions while Karthus is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Teleport  Recall  Hexflash\n\n\nInterrupted by\n\n Flash\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects",
  "resource": "Mana",
  "spellEffects": "Aoe",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
