// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Ragnarok",
  "affects": "Self",
  "blurb": "Passive:  Olaf gains  bonus armor and  bonus magic resist.",
  "castTime": "none",
  "cooldown": "100 / 90 / 80",
  "cost": "100",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Olaf gains bonus armor and bonus magic resistance.</p>",
      "leveling": [
        {
          "attribute": "Bonus Resistances",
          "modifiers": [
            {
              "values": "10 / 15 / 20"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Olaf becomes enraged for 3 seconds, cleansing himself of all crowd control and becoming immune to them, as well as gaining bonus attack damage and 10% increased size. For the first second of Ragnarok, he also gains bonus movement speed while facing visible enemy champions within 2000 units.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "values": "10 / 20 / 30"
            },
            {
              "unit": "% AD",
              "values": "25"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 45 / 70"
            }
          ]
        }
      ]
    },
    {
      "description": "Ragnarok's duration is increased by and up to 2.5 seconds for each basic attack on-hit or cast of Reckless Swing against an enemy champion."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Olaf/ability-icon/r",
  "notes": "Ragnarok removes the underlying  stun from  airborne effects, but not the forced displacement, which requires him to use a  blink or  dash ability to override it.\nRagnarok does not negate any debuffs other than  crowd control from being applied unless absolutely necessary.\nThe bonus attack damage updates dynamically over the duration; Increases or reductions in attack damage after the effect has been applied will still be amplified.\nThe 25% attack damage scaling amplifies the flat attack damage bonus as well.\nRagnarok will not expire during  Reckless Swing's cast time.\nRagnarok's duration will not be increased if the basic attack is  dodged.\nRagnarok's duration will be increased if the basic attack is  blocked.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
