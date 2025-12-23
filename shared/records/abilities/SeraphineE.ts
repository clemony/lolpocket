// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Beat Drop",
  "width": "140",
  "affects": "Enemies",
  "blurb": "Active:  Seraphine fires a heavy soundwave in the target direction that deals magic damage and briefly  slows enemies hit.",
  "castTime": "0.25",
  "cooldown": "11 / 10.5 / 10 / 9.5 / 9",
  "cost": "60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Seraphine fires a heavy soundwave in the target direction that deals magic damage to enemies hit, reduced to 70% against minions, and slows them by 99% for a few seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "70 / 100 / 130 / 160 / 190"
            },
            {
              "unit": "% AP",
              "values": "50"
            }
          ]
        },
        {
          "attribute": "Minion Damage",
          "modifiers": [
            {
              "values": "49 / 70 / 91 / 112 / 133"
            },
            {
              "unit": "% AP",
              "values": "35"
            }
          ]
        },
        {
          "attribute": "Disable Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.1 / 1.2 / 1.3 / 1.4 / 1.5"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies that are already slowed are also rooted for the same duration."
    },
    {
      "description": "Enemies that are immobilized or grounded are also stunned for the same duration."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Seraphine/ability-icon/e",
  "notes": "Beat Drop will only be empowered from  slows,  immobilizes, and  grounding effects applied by herself or her allies.\nBeat Drop uses a modified icon for the  second and  third stack of  Stage Presence.\nBeat Drop may still be empowered even if the disable ends shortly after the ability hits.\nThe  root and the  stun cannot apply at the same time.\nThe root will only apply if the target is  slowed and not  immobilized or  grounded.\nThe stun will apply as normal; it does not consider if the target is  slowed.\nThe root will be overridden by the stun if the target is hit by Beat Drop again while they were rooted by it.\nA quarter note will appear next to an enemy  champion while they are  slowed and two quarter notes tied will appear if they are  immobilized or  grounded.\nThis indicates if Beat Drop will apply an additional crowd control effect if it strikes the target.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1200",
  "spellEffects": "spellaoe",
  "spellshieldable": "true",
  "targeting": "Direction",
  "targetRange": "1300"
}
export default ability
