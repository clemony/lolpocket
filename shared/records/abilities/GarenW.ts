// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Courage",
  "affects": "Self",
  "blurb": "Passive:  Garen permanently gains bonus  armor and  magic resist by killing enemies, up to a cap. Upon reaching the cap, he gains another permanent boost to these defenses.",
  "castTime": "none",
  "cooldown": "22 / 19.5 / 17 / 14.5 / 12",
  "cost": "0",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Whenever Garen kills an enemy, he generates a stack of Courage, stacking up to 150 times.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Courage:</span> For each stack, Garen gains 0.2 bonus armor and 0.2 bonus magic resistance, up to a maximum of 30 bonus resistances each.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Garen reduces incoming damage for 4 seconds. For the first 0.75 seconds, Garen additionally grants himself a shield and 60% tenacity.</p>",
      "leveling": [
        {
          "attribute": "Damage Reduction",
          "modifiers": [
            {
              "unit": "%",
              "values": "25 / 29 / 33 / 37 / 41"
            }
          ]
        },
        {
          "attribute": "Shield Strength",
          "modifiers": [
            {
              "values": "65 / 85 / 105 / 125 / 145"
            },
            {
              "unit": "% bonus health",
              "values": "18"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Garen/ability-icon/w",
  "notes": "Courage's bonus resistances are only gained when it is ranked up at least once, but Courage's passive is retroactive for units killed before it was learned.\nCourage's bonus resistances can be obtained by any of Garen's damage sources (basic attacks, abilities, summoner spells, runes, item actives).\nThis does not include last hits transferred to Garen artificially.\nThe kills on these enemy unit types count towards Courage stacks:\n Champions (Only kills, assists don't grant stacks)\nAll  minions and  monsters\nChampion summoned units (e.g.  Noxious Trap,  Powder Keg,  Dark Procession)\nAll  pets and  clones.\nThe bonus is equal for all these units; large units do not grant a larger bonus.\nThe kills on these enemy unit types do not count towards Courage stacks:\n Wards.\n Turrets (including  Sun Disk) and other  structures\nJungle plants.\nUnits destroyed by 'trampling' such as  Zyra's  seeds,  Zac's  goo or  Rek'Sai's  tunnels.\nCourage will only grant bonus resistances from units killed by Garen himself.  Eye of the Herald does not count.\nThe  Tenacity increase  stacks additively with the tenacity reduction from  Brittle, but multiplicatively with other sources.",
  "targeting": "Auto"
}
export default ability
