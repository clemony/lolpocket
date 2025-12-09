// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Allure",
  "affects": "Enemies",
  "blurb": "Active:  Evelynn curses the target enemy, causing her next  basic attack or  ability against the target to expunge the curse,  slowing the target and refunding the  mana cost.",
  "castTime": "0.25",
  "cooldown": "15 / 14 / 13 / 12 / 11",
  "cost": "60 / 70 / 80 / 90 / 100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Evelynn curses the target enemy champion or medium or large monster for 5 seconds.</p>"
    },
    {
      "description": "Evelynn's next basic attack or ability against the accursed target expunges them, slowing them by 45% for 0.75 seconds."
    },
    {
      "description": "Expunging a target will refund Allure's mana cost. If the target is cursed for at least 2.5 seconds, the expunge also charms them for a few seconds and the duration of the slow is increased to last for this time, as well as applying additional effects based on the target type.",
      "leveling": [
        {
          "attribute": "Disable Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.25 / 1.5 / 1.75 / 2 / 2.25"
            }
          ]
        }
      ]
    },
    {
      "description": "Against champions, the expunge also inflicts magic resistance reduction for 4 seconds.",
      "leveling": [
        {
          "attribute": "Magic Resistance Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "35 / 37.5 / 40 / 42.5 / 45"
            }
          ]
        }
      ]
    },
    {
      "description": "Against monsters, the expunge deals bonus magic damage and increases the duration of the charm by 2 seconds.",
      "leveling": [
        {
          "attribute": "Bonus Magic Damage",
          "modifiers": [
            {
              "values": "250 / 300 / 350 / 400 / 450"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Monster Disable Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "3.25 / 3.5 / 3.75 / 4 / 4.25"
            }
          ]
        }
      ]
    },
    {
      "description": "Casting Allure does not break Demon Shade nor its fade into it."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Evelynn/ability-icon/w",
  "notes": "The mark fully forming signifies the 2.5 seconds have elapsed, meaning the  charm will be applied on the triggering attack or ability.\nAn enemy champion cursed by Allure is alarmed of her presence and after the mark has fully formed, an arrow will appear next to them pointing towards Evelynn's direction. This is visible to both teams.\nThe  magic resistance reduction will be applied to the attack or ability that triggers it.\nAllure's mark application on a target cannot be blocked by  spell shield.\nThe expunge will not occur if the ability is blocked by a spell shield. The mark does not trigger and will remain on the target in this case.\nThe  magic resistance reduction debuff is applied independently of the  Charm debuff when the matured mark is expunged, meaning a target can still have their magic resistance reduced while they are resisting applications of CC debuffs (e.g.  Morgana's  Black Shield).\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but still go on  cooldown and pay its cost.(bug)\nAllure will restart its cooldown whenever the mark debuff is removed.(bug)",
  "resource": "Mana",
  "spellEffects": "Single target",
  "spellshieldable": "Special",
  "targeting": "Unit",
  "targetRange": "1200 / 1300 / 1400 / 1500 / 1600"
}
export default ability
