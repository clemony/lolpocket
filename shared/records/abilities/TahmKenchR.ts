// Updated Patch 15.23.1 - 11/30/2025 12:24:05 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Regurgitate",
  "affects": "Enemies / Allies",
  "blurb": "Active: Tahm Kench  spits the swallowed champion in the target direction. If they are an enemy, he deals magic damage based on the target's maximum health.",
  "castTime": "0.25",
  "cooldown": "0",
  "cost": "100",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tahm Kench detaches the swallowed champion from himself and spits them out in the target direction. If they are an enemy, he deals magic damage to them at the end of the displacement.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "100 / 250 / 400"
            },
            {
              "unit": "% (+ 7% per 100 AP) of the target's maximum health",
              "values": "15"
            }
          ]
        }
      ]
    },
    {
      "description": "If Regurgitate was cast automatically, Tahm Kench spits the target out in his facing direction."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/TahmKench/ability-icon/r",
  "notes": "The displacement from spitting the target out also uniquely counts as the enemy's  dash.\nThe target will face in the direction of Regurgitate's cast for the duration of the displacement.\nThe target will  blink to Tahm Kench's location at the start of Regurgitate's cast time.\nRegurgitate will also automatically cast if the target is affected by  Fate's Call or enters  resurrection.\nTahm Kench becomes  unable to act for 0.25 seconds upon casting Regurgitate.",
  "spellEffects": "spell",
  "spellshieldable": "false",
  "targeting": "Direction"
}
export default ability
