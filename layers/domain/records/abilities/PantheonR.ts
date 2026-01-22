// Updated Patch 15.24.1 - 12/26/2025 07:04:11 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Grand Starfall",
  "affects": "Enemies",
  "castTime": "0.1",
  "cooldown": "180 / 165 / 150",
  "cost": "100",
  "damageType": "Other damage",
  "effectRadius": "450 / 125",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Pantheon gains armor penetration.</p>",
      "leveling": [
        {
          "attribute": "Armor Penetration",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 20 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pantheon channels for 2 seconds, then leaps high into the air, vanishing and becoming immune to crowd control until he reappears. While in the air, Pantheon channels again for 2.25 seconds and grants sight around the target location 0.5 seconds into the channel.</p>"
    },
    {
      "description": "After 0.8 seconds into the channel, Pantheon prepares for landing by hurling his spear to the target location over 0.2 seconds that deals 40 - 190 (based on Comet Spear's rank) (+ 115% bonus AD) (+ 50% AP) physical damage to enemies near its landing point and slows them by 50% for 2 seconds."
    },
    {
      "description": "Over the remaining 1.25 seconds, Pantheon crashes down after 0.55 seconds and creates a shockwave alongside himself that travels toward the target location over 0.7 seconds, dealing magic damage to enemies hit, reduced by up to 50% for those hit at the edge of the area. Upon completion of the channel, Pantheon reappears at the target location and gains maximum stacks of Mortal Will.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "300 / 500 / 700"
            },
            {
              "unit": "% AP",
              "values": "100"
            }
          ]
        },
        {
          "attribute": "Reduced Damage",
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
    },
    {
      "description": "Grand Starfall is placed on a 30-second cooldown if the first channel is canceled."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pantheon/ability-icon/r",
  "innerRadius": "225 / 450",
  "notes": "Grand Starfall's first channel can be interrupted by  cast-inhibiting crowd control, but its second channel cannot because Pantheon gains crowd control immunity during it.\nThe spear's damage is not empowered by  Mortal Will, nor increased against enemies below 20% of their maximum health.\nDuring the second channel, Pantheon gains a  minimum health threshold of 1.\nPantheon will instantly die upon reappearing if he reaches this threshold.\nAbilities that target Pantheon will redirect to the last location.\nPinging the ability will inform allies in chat which  visible enemy champions are in range of Grand Starfall.\nPantheon is considered to be in his original casting position even after leaping, but he will  blink to the target location the moment the second channel completes.\nUsing Grand Starfall will inform allies with a ping.\nIf Pantheon leaves the  Death Realm during Grand Starfall's shockwave, its hitbox will become invisible but it will still deal damage.(bug)\nThe following table refers for interactions while Pantheon is  channeling (first channel):\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Grounding effects Immobilizing effects Cast-inhibiting effects\n\nThe cast time and second channel have the same interactions except they can only be interrupted by  death.\nGrand Starfall's first channel will also be interrupted if he enters or leaves the  Death Realm.",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "spellaoe",
  "spellshieldable": "True",
  "targeting": "Location",
  "targetRange": "5500 / 1350 + 450"
}
export default ability
