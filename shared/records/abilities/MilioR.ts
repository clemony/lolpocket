// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Breath of Life",
  "affects": "Self, Allies",
  "blurb": "Active:  Milio explodes in soothing flames,  healing and  cleansing himself and nearby allied  champions of non- airborne  crowd control and granting them  tenacity for a short time.",
  "castTime": "none",
  "cooldown": "160 / 145 / 130",
  "cost": "100",
  "effectRadius": "700",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Milio explodes in soothing flames, healing and cleansing himself and nearby allied champions of non- airborne crowd control, and granting them 65% tenacity for 3 seconds.</p>",
      "leveling": [
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        }
      ]
    },
    {
      "description": "Milio cannot cast his other abilities for 0.75 seconds after Breath of Life's activation. Breath of Life cannot be used while affected by cast-inhibiting crowd control."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Milio/ability-icon/r",
  "notes": "Breath of Life affects  untargetable units.",
  "resource": "Mana",
  "targeting": "Auto"
}
export default ability
