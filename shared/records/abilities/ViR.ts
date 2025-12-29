// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Cease and Desist",
  "affects": "Enemies",
  "blurb": "Active:  Vi  reveals the target enemy champion and  dashes to them with  displacement immunity, dealing physical damage to enemies she passes through and briefly  knocking aside and  stunning them.",
  "castTime": "0.25",
  "cooldown": "140 / 115 / 90",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Vi singles out the target enemy champion, dashing with displacement immunity towards them and revealing them. Upon approaching within 300 units of the target, she dashes through and grabs them over 1.05 seconds, knocking them up for 1.3 seconds and dealing physical damage after 0.75 seconds into the grab duration.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% bonus AD",
              "values": "90"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies she dashes through are dealt the same damage, knocked aside by 350 units over 0.25 seconds, and stunned for 0.75 seconds."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vi/ability-icon/r",
  "notes": "Vi will track the target if they change locations.\nShe will stop dashing if the target is too far away or moves beyond 1500 units.\nVi will land to the opposite side of the target from the dash after the grab ends.\nShe will not dash through the target if she would not be able to land to the opposite side of them, such as by terrain.\nSecondary targets will be affected as soon as they come into contact with Vi, and cannot be affected by this again for ~4 seconds.\nThe  airborne debuff cannot be overridden.\nThe dash will not be overridden if Vi  blinks during it.\nVi's  displacement immunity and the target's  reveal both last until the grab ends.\nIf the dash ends from entering resurrection or the target being too far away, the displacement immunity will remain for 7 seconds, and will otherwise be lost.(bug)\nThe dash speed increases with time travelled.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).\nThis will also occur for when Vi enters  resurrection during the cast time.\nIf the target becomes untargetable during the dash, Vi ends the dash prematurely and moves towards the target briefly, ignoring any movement commands. If Vi enters grabbing range, she will apply the  airborne effect but not deal any damage.\nCease and Desist will cancel and go on full cooldown if Vi is affected by  Fear Beyond Death's recast during the cast time.\n Displacement immunity will not resist the application of the  stun.\nThe following table refers for interactions while Vi is  dashing and has grabbed the target:\n Flash cannot be used during the grab.\nThis lockout is removed as soon as the grab ends, after which the the target's remaining  airborne time will be 0.25 seconds.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Relentless Force is usable.  Vault Breaker is disabled.\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Hexflash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "speed": "800",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "800"
}
export default ability
