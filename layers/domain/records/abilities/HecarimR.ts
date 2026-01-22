// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Onslaught of Shadows",
  "width": "80 / 480",
  "blurb": "Active:  Hecarim summons spectral riders and  charges in the target direction, dealing magic damage to enemies they pass through.",
  "castTime": "none",
  "cooldown": "140 / 120 / 100",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "315",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Hecarim dashes with displacement immunity to the target location and summons 5 spectral riders in an arrow formation that charge alongside him in the target direction, dealing magic damage to all enemies in their path and revealing them for 2.5 seconds.</p>",
      "leveling": [
        {
          "attribute": "Magic damage",
          "modifiers": [
            {
              "values": "150 / 250 / 350"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "Upon arrival, he fears nearby enemies for 0.75 - 1.5 (based on distance traveled) seconds and slows them by 0% - 99% (based on distance from Hecarim)."
    },
    {
      "description": "The wave of spectral riders travels independently of Hecarim and will always charge at the same distance."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Hecarim/ability-icon/r",
  "notes": "The spectral rider missiles originate at Hecarim's location, 145 units behind and 100 units to either side of him, and 290 units behind and 200 units to either side. They travel 1510 units forward parallel to Hecarim from their origin each.\nOnly the spectral riders deal damage to enemies they pierce, Hecarim only dashes and fears enemies at the end of it.\nThe slow improperly counts as an additive percent movement speed modifier rather than a multiplicative one.(bug)\nThe strength is unaffected by  slow resist as a result of this behavior.\nThis means it can unintentionally stack with the effects of other slows.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1100",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "300 / 1000"
}
export default ability
