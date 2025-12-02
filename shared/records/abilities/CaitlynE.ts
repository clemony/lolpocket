// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "E",
  "name": "90 Caliber Net",
  "affects": "Self, Enemies",
  "blurb": "Active:  Caitlyn fires a heavy net that  slows the first target hit and deals magic damage to them.",
  "castTime": "0.15",
  "cooldown": "16 / 14 / 12 / 10 / 8",
  "cost": "75",
  "damageType": "Magic damage",
  "effectRadius": "140",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Caitlyn fires a net in the target direction and recoils 390 units in the opposite direction. The net deals magic damage to the first enemy hit and slows them by 50% for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 130 / 180 / 230 / 280"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        }
      ]
    },
    {
      "description": "Caitlyn will not dash backwards if she is immobilized or grounded during the cast time. She can cast any of her abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Caitlyn/ability-icon/e",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\nThe recoil can be used to pass through terrain.\nIf Caitlyn buffers  Piltover Peacemaker during 90 Caliber Net's cast time,  Piltover Peacemaker will start after the cast time.\nIf Caitlyn buffers an ability or basic attack during this ability's cast time, the buffered ability or basic attack will instead start after the dash ends.\nOther abilities can be cast while  dashing if they are input after the cast time.\n90 Caliber Net's missile will fail to fire if Caitlyn is  suppressed during the cast time.(note)",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1600 / 1000",
  "spellEffects": "Single target",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
