// Updated Patch 15.24.1 - 12/26/2025 07:03:51 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Bouncing Blade",
  "affects": "Enemies",
  "blurb": "Active:  Katarina throws a Dagger at the target enemy that can bounce to up to two additional nearby enemies, dealing magic damage.",
  "castTime": "0.25",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "0",
  "damageType": "Magic damage",
  "effectRadius": "450",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Katarina throws a Dagger at the target enemy that deals magic damage and can bounce to up to two additional visible nearby enemies.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 115 / 150 / 185 / 220"
            },
            {
              "unit": "% AP",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "The Dagger lands 1.023 seconds after striking the first target, about 350 units opposite from their position when it struck them."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Katarina/ability-icon/q",
  "notes": "Bouncing Blade will not be destroyed in-flight if the target dies before reaching them but it will on  clones that expire.\nIf the Dagger's intended landing position is inside terrain it will instead land at the closest spot that isn't inside terrain.\nValid targets are determined after each bounce.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "speed": "1600 / 0.15 seconds",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "625"
}
export default ability
