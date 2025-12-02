// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Black Shield",
  "affects": "Self, Allies",
  "blurb": "Active:  Morgana  shields the target allied champion or herself for a few seconds, which absorbs magic damage and grants  crowd control immunity while the shield holds.",
  "castTime": "none",
  "cooldown": "26 / 23.5 / 21 / 18.5 / 16",
  "cost": "80",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Morgana grants a shield to the target allied champion or herself for 5 seconds, which absorbs incoming magic damage and grants crowd control immunity while it holds.</p>",
      "leveling": [
        {
          "attribute": "Magic Shield Strength",
          "modifiers": [
            {
              "values": "100 / 155 / 210 / 265 / 320"
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
  "icon": "https://cdn.communitydragon.org/latest/champion/Morgana/ability-icon/e",
  "notes": "Black Shield will not resist self nor allied  crowd control (including e.g. an allied  Tempered Fate).\nBlack Shield will not resist  nearsight.\nBlack Shield negates  crowd control effects before any magic damage is absorbed; even if the shield is broken by an enemy dealing enough damage, its associated disables will not apply. Shield-destroying effects bypass this however, since they destroy the shield before applying their effects.\nBlack Shield will not prevent effects other than  crowd control from triggering (e.g.  Malzahar's  Nether Grasp will not  suppress a target protected by Black Shield but the  tether still applies).\nAlthough not considered a crowd control effect, Black Shield is special-cased to block  Illaoi's  Test of Spirit's spirit pull.\nBlack Shield takes priority over other sources of  crowd control immunity and those that grant immunity to specific types of crowd control ( displacement immunity and  slow immunity).\n Spell shield will take priority over Black Shield.\nBlack Shield will always take priority over regular  shields. If used in conjunction with Lifeline, the most recently-applied one will have priority however.\nBlack Shield has a  forgiveness radius of 175 units.",
  "resource": "Mana",
  "targeting": "Unit",
  "targetRange": "800"
}
export default ability
