// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Hero's Entrance",
  "affects": "Allies, Enemies",
  "castTime": "none",
  "cooldown": "180 / 160 / 140",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "650",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Galio prepares to make an entrance, channeling for 2.75 seconds and designating the target allied champion's location at the time of cast as his landing spot. Additionally, he resets Shield of Durand's passive shield for himself and grants it to all allied champions within the area for 5 seconds.</p>"
    },
    {
      "description": "After channeling for 1.25 seconds, he gains crowd control immunity for the remaining duration, becomes untargetable, and leaps into the air for 0.8 seconds before dashing to his destination over 0.2 seconds. Afterwards, he lands and becomes targetable again, dealing magic damage to all nearby enemies upon impact, knocking them back 100 units over 0.75 seconds, and remaining in place for 0.5 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
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
  "icon": "https://cdn.communitydragon.org/latest/champion/Galio/ability-icon/r",
  "notes": "Hero's Entrance does not resist allied  crowd control.\nHero's Entrance has a  forgiveness radius of 175 units.\nGalio cannot cast Hero's Entrance on allies he cannot  see while  nearsighted.\nGalio will still cause an impact to occur at the destination even if he is unable to travel the full distance with the dash (e.g. by  The Hextech Ultimatum's and  Realm of Death's borders and terrain). Galio will dash as far as he can go, and thus, does not end the dash prematurely.\nGalio will always dash 100 units minimum, and dash over his target's location if they are less than 100 units away from him.\nThe following table refers for interactions while Galio is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nHero's Entrance's channel can only be  interrupted by  crowd control in the first 1.25 seconds.",
  "resource": "Mana",
  "spellEffects": "Area of Effect",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "4000 / 4750 / 5500"
}
export default ability
