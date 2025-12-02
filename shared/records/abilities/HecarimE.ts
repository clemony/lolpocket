// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Devastating Charge",
  "affects": "Self",
  "blurb": "Active:  Hecarim becomes  ghosted and builds up  bonus movement speed over a short time.",
  "castTime": "none",
  "cooldown": "20 / 19 / 18 / 17 / 16",
  "cost": "60",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Hecarim becomes ghosted and gains 25% - 65% (based on time active) bonus total movement speed for 4 seconds.</p>"
    },
    {
      "description": "During this time, Hecarim's next basic attack is replaced by a Devastating Charge, empowering it to gain 50 - 250 (based on distance traveled) bonus range and cause him to dash in the target's direction, revealing them for 1 second. If the target remains nearby during the dash, the ghosting and bonus movement speed ends prematurely and Hecarim knocks them back 150 - 350 (based on distance traveled) units, though not through terrain, stuns them for 0.25 seconds, and deals them modified physical damage, increased by 0% - 100% (based on distance traveled).",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "30 / 45 / 60 / 75 / 90"
            },
            {
              "unit": "% bonus AD",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "60 / 90 / 120 / 150 / 180"
            },
            {
              "unit": "% bonus AD",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Devastating Charge can critically strike for (75% + 40%) AD bonus physical damage."
    },
    {
      "description": "Devastating Charge resets Hecarim's basic attack timer. Hecarim can cast any of his abilities during the dash. Devastating Charge's duration is paused during Onslaught of Shadows."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/e",
  "notes": "Hecarim can cast any of his abilities while  dashing.\n Onslaught of Shadows will interrupt the dash.\nIf the target does not remain nearby during the dash, Devastating Charge's effect will not be consumed.\nThe bonus movement speed  stacks multiplicatively with other sources of movement speed boosts.\nThe bonus attack range stacks additively with  Rapid Firecannon.\nDevastating Charge will still apply its effects to the target even if the  dash is  interrupted, but not if he goes into  resurrection.\nDevastating Charge's damage will apply  life steal and will affect structures.\n\"Distance traveled\" can be simple movement as well as  dashing and  blinking.\nDevastating Charge's damage will not bypass  block or  dodge but the  knock back will still be applied.\nDevastating Charge will still deal damage while  blinded.\nWhile  grounded or  rooted, Hecarim loses the  bonus attack range from Devastating Charge.\nHecarim will not use the empowered attack while  rooted.\nThe  dash does not follow targets. The target's position at the time of the enhanced attack is the direction Hecarim will leap to.\n Displacement immunity will not resist the application of the  stun.",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "True",
  "targeting": "Auto"
}
export default ability
