// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Petrifying Gaze",
  "affects": "Enemies",
  "angle": "80°",
  "blurb": "Active:  Cassiopeia blasts in a cone, dealing magic damage to enemies hit and  stunning any that are facing her, while  slowing any others with their back turned.",
  "castTime": "0.5",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "850",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Cassiopeia blasts enemies in a cone in the target direction, dealing magic damage to enemies struck within and slowing them by 40% for 2 seconds. Enemies with their facing direction towards her are instead stunned for the same duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
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
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Cassiopeia/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nCassiopeia will turn to face the target direction over the cast time.\nPetrifying Gaze's target direction will change if Cassiopeia's facing direction changes during the cast time (i.e. through  knockbacks).\nThe visual effect will not follow changes in Cassiopeia's facing direction and may not portray Petrifying Gaze's target direction accurately.(bug)\nThe facing direction of champions whose abilities/animations cause them to lock their facing or spin is always the direction they are moving in. For abilities that cause the champion to spin in place (e.g.  Death Lotus,  Judgment) it will factor the direction they were facing on cast.\n Lucian's  The Culling is an exception and his facing direction is actually considered to be the direction he is facing.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
