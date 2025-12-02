// Updated Patch 15.23.1 - 11/30/2025 12:24:06 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Buster Shot",
  "affects": "Enemies",
  "blurb": "Active:  Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also briefly  knocked back and  stunned, during which they are  revealed.",
  "castTime": "0.25",
  "cooldown": "100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "200",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also knocked back and stunned for a duration, during which all targets are revealed.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "225 / 275 / 325"
            },
            {
              "unit": "% bonus AD",
              "values": "70"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Knock Back Distance",
          "modifiers": [
            {
              "values": "600 / 800 / 1000"
            }
          ]
        },
        {
          "attribute": "Stun Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "0.4 / 0.55 / 0.7"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Tristana/ability-icon/r",
  "notes": "Applies  spell damage to the primary target and deals 0  default damage to secondary targets.\nThe 0 damage to secondary targets triggers  turret aggro, but does not stack  Explosive Charge.\nTristana will attempt to basic attack the target afterwards.\nBuster Shot's  displacement direction is based on Tristana's location at the end of the cast time.\nThe primary target is pushed in a straight line away from that location, but the knockback distance and speed may be impeded by terrain.\nSecondary targets are displaced parallel to the primary target's displacement.\nThe  debuff is removed early when the forced movement stops.\n Displacement immunity will also resist the application of the  stun.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000 / 1500",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "550 : 700 (based on level)"
}
export default ability
