// Updated Patch 15.23.1 - 11/30/2025 12:23:55 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Tidal Wave",
  "width": "500",
  "affects": "Enemies",
  "castTime": "0.5",
  "cooldown": "120 / 110 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "750",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nami surges a tidal wave in the target direction, granting sight around its trajectory as it travels, dealing magic damage to enemies hit, knocking them up for 0.5 seconds, and slowing them by 70% for 2 - 4 (based on distance traveled) seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nami/ability-icon/r",
  "notes": "This ability will cast from wherever the caster is at the end of the cast time.\n Surging Tides will trigger immediately on Nami on-cast.\nThe wave travels over 3.267 seconds.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "850",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Direction",
  "targetRange": "2750"
}
export default ability
