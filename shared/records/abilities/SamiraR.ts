// Updated Patch 15.23.1 - 11/30/2025 12:24:02 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Inferno Trigger",
  "affects": "Enemies",
  "blurb": "Active:  Samira unleashes a torrent of shots, reducing her  movement speed and rapidly firing shots that deal physical damage to nearby enemies.",
  "castTime": "none",
  "cooldown": "5",
  "cost": "0",
  "damageType": "Physical damage",
  "effectRadius": "600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Samira unleashes a torrent of shots for 2.277 seconds, reducing her movement speed by 30% and rapidly shooting at nearby enemies over 2.013 seconds at sporadic times in 0.2-second intervals each (up to 10 times per enemy), dealing physical damage with each shot, reduced by 75% against minions. This damage is affected by critical strike modifiers and applies life steal at 80% effectiveness.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Per Shot",
          "modifiers": [
            {
              "values": "5 / 15 / 25"
            },
            {
              "unit": "% AD",
              "values": "45"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "values": "50 / 150 / 250"
            },
            {
              "unit": "% AD",
              "values": "450"
            }
          ]
        },
        {
          "attribute": "Minion Damage Per Shot",
          "modifiers": [
            {
              "values": "1.25 / 3.75 / 6.25"
            },
            {
              "unit": "% AD",
              "values": "11.25"
            }
          ]
        },
        {
          "attribute": "Total Minion Damage",
          "modifiers": [
            {
              "values": "12.5 / 37.5 / 62.5"
            },
            {
              "unit": "% AD",
              "values": "112.5"
            }
          ]
        }
      ]
    },
    {
      "description": "A nearby visible enemy is required to cast this ability, and targets do not have to be visible to be shot at. Style stacks are consumed at the end of the effect."
    },
    {
      "description": "Samira cannot basic attack nor cast Flair and Blade Whirl during Inferno Trigger, but she can still move. Inferno Trigger will end prematurely if Samira is affected by any form of cast-inhibiting crowd control as well as disarm. Inferno Trigger cannot be cast while Samira is disarmed."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Samira/ability-icon/r",
  "notes": "Samira's facing direction remains as it had been or, if she is moving, towards that direction during Inferno Trigger.\nThe  movement speed reduction stacks additively with other movement speed bonuses.\nIt is a negative bonus, not a  slow, and is thus not reduced by  slow resist.\nInferno Trigger's area of effect is fixed around Samira.\n Spell shield will block the damage of one shot.\nInferno Trigger will not end if there are no enemies that remain in range.\nThe bottom of the player's screen will have a fiery visual effect while Samira is at S rank and Inferno Trigger has at least one rank.\nSince  Inferno Trigger's cooldown is static,  Ultimate Hunter will be swapped with  Treasure Hunter for Samira at the start of the game.",
  "projectile": "TRUE",
  "spellEffects": "aoedot",
  "spellshieldable": "special",
  "targeting": "Proximity"
}
export default ability
