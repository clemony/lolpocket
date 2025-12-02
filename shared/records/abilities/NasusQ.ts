// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Siphoning Strike",
  "affects": "Self",
  "blurb": "Active:  Nasus' next basic attack within a period will gain  bonus range and deal bonus physical damage based on the amount of Siphoning Strike stacks.",
  "castTime": "none",
  "cooldown": "7.5 / 6.5 / 5.5 / 4.5 / 3.5",
  "cost": "20",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nasus empowers his next basic attack within 10 seconds to have an uncancellable windup, gain 50 bonus range, and deal bonus physical damage. Siphoning Strike's base damage is affected by critical strike modifiers.</p>",
      "leveling": [
        {
          "attribute": "Bonus Physical Damage",
          "modifiers": [
            {
              "values": "35 / 55 / 75 / 95 / 115"
            },
            {
              "unit": "% of Siphoning Strike stacks",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "If Siphoning Strike kills the target, Nasus permanently gains 3 stacks, increased to 12 if the target is a champion, large minion, or large monster."
    },
    {
      "description": "Siphoning Strike resets Nasus' basic attack timer."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nasus/ability-icon/q",
  "notes": "Both Siphoning Strike's base damage and damage from stacks are treated as  basic damage but also trigger spell effects by also being tagged as  spell damage.\nThe  basic attack is also considered a part of Siphoning Strike and treated as both  basic damage and  spell damage.\nNasus can gain Siphoning Strike stacks by killing any enemy unit, this includes  champions,  minions,  monsters,  wards,  turrets, and  pets.\nJungle plants and  structures that are not turrets (e.g. inhibitors) will not grant stacks.\nSiphoning Strike will not generate stacks from secondary units killed by other effects (e.g.  Tiamat).\nSiphoning Strike will trigger  Tear of the Goddess' Manaflow.",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "false",
  "targeting": "Auto"
}
export default ability
