// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Grand Challenge",
  "affects": "Self, Enemies",
  "blurb": "Passive:  Duelist's Dance's  bonus movement speed is increased.",
  "castTime": "none",
  "cooldown": "110 / 90 / 70",
  "cost": "100",
  "effectRadius": "550 / 500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Duelist's Dance's bonus movement speed is increased.</p>",
      "leveling": [
        {
          "attribute": "Additional Bonus Movement Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 20 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiora challenges the target enemy champion for 8 seconds, highlighting all four of their Vitals after a 0.5-second delay. While in effect, Duelist's Dance does not identify new Vitals on Fiora's target.</p>"
    },
    {
      "description": "While near the target, Fiora gains Duelist's Dance's bonus movement speed."
    },
    {
      "description": "If Fiora triggers at least one Vital before the target dies, or triggers all four, she creates a Victory Zone at their location for 5 seconds, which heals Fiora and all allies within the area every 0.25 seconds.",
      "leveling": [
        {
          "attribute": "Heal per Tick",
          "modifiers": [
            {
              "values": "18.75 / 25 / 31.25"
            },
            {
              "unit": "% bonus AD",
              "values": "15"
            }
          ]
        },
        {
          "attribute": "Heal per Second",
          "modifiers": [
            {
              "values": "75 / 100 / 125"
            },
            {
              "unit": "% bonus AD",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Maximum Heal",
          "modifiers": [
            {
              "values": "375 / 500 / 625"
            },
            {
              "unit": "% bonus AD",
              "values": "300"
            }
          ]
        }
      ]
    },
    {
      "description": "Unlike Duelist's Dance, the Vitals will continue to linger even if Fiora is not nearby."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiora/ability-icon/r",
  "notes": "Grand Challenge is dispelled instantly if targeting a decoy.\nGrand Challenge can't be cast on  Sion's  Glory in Death.\nThe damage of this ability scales with  Duelist's Dance.\nEven if Fiora dies, the  Victory Zone will trigger so long as she hit at least one Vital and they die before the Vitals wear off.\n Resurrection effects will not prevent the activation of the  Victory Zone.\nThe  Victory Zone will not heal  untargetable units.\nFiora will automatically attack the target upon casting if the target was selected while they weren't in range of the ability.",
  "resource": "Mana",
  "spellshieldable": "false",
  "targeting": "Unit",
  "targetRange": "500"
}
export default ability
