// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Miasma",
  "affects": "Enemies",
  "blurb": "Active:  Cassiopeia spews several clouds of  Poison that linger, continually dealing magic damage to enemies within. They are also  slowed and  grounded.",
  "castTime": "0.25",
  "cooldown": "24 / 22 / 20 / 18 / 16",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cassiopeia spews forth 7 bolts of venom in an arc at the target location, creating toxic clouds at the area for 5 seconds.</p>"
    },
    {
      "description": "Enemies within the clouds are poisoned to take magic damage every 0.263 seconds and become grounded and slowed by an amount that decays over the area's duration.",
      "leveling": [
        {
          "attribute": "Magic Damage Per Second",
          "modifiers": [
            {
              "values": "20 / 25 / 30 / 35 / 40"
            },
            {
              "unit": "% AP",
              "values": "10"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "100 / 125 / 150 / 175 / 200"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 50 / 60 / 70 / 80"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/w",
  "notes": "Miasma's  slow and  ground debuffs are each marked as non-dispellable, so they are not removed by most  cleanses. Each is however allowed to be removed by cleanses that also grant immunity to the debuff type, such as  Olaf's  Ragnarok.\nIf a target becomes  untargetable while affected by the  ground, the debuff will refresh to 0.25 seconds.\n Wind Wall will block the portion of Miasma it destroys.\nMiasma inflicts 5 / 6.25 / 7.5 / 8.75 / 10 (+ 2.5% AP) magic damage per tick, and in fact because there is 19 ticks and not 20 ticks, the total magic damage is currently not 100 / 125 / 150 / 175 / 200 (+ 50% AP) but 95 / 118.75 / 142.5 / 166.25 / 190 (+ 47.5% AP).\nSometimes Miasma randomly inflicts only 18 ticks of damage.(bug)",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "3000",
  "spellEffects": "aoedot",
  "spellshieldable": "False",
  "targeting": "Location",
  "targetRange": "700"
}
export default ability
