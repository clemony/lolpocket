// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "E",
  "name": "Flap, Flap, Flap",
  "affects": "Self, Enemies",
  "blurb": "Active:  Smolder takes flight for a short time, becoming  ghosted and gaining  bonus movement speed and the ability to ignore terrain collision. While in flight, he automatically fires bolts at a nearby enemy, dealing physical damage with each hit. The number of attacks increases based on  critical strike chance.",
  "castTime": "none",
  "cooldown": "24 / 22 / 20 / 18 / 16",
  "cost": "65",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Smolder takes flight for 1.25 seconds, becoming ghosted and gaining 75% bonus movement speed, unobstructed vision, and the ability to ignore terrain collision. While in flight, he automatically fires up to 5 (+ 1 per 100 Dragon Practice stacks) bolts at the nearest and most wounded visible enemy, dealing physical damage with each hit and prioritizing enemy champions.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage per Hit",
          "modifiers": [
            {
              "values": "10 / 15 / 20 / 25 / 30"
            },
            {
              "unit": "% AD",
              "values": "30"
            }
          ]
        },
        {
          "attribute": "Minimum Total Physical Damage",
          "modifiers": [
            {
              "values": "50 / 75 / 100 / 125 / 150"
            },
            {
              "unit": "% AD",
              "values": "150"
            }
          ]
        }
      ]
    },
    {
      "description": "Flap, Flap, Flap ends immediately if Smolder casts another ability or becomes immobilized."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Smolder/ability-icon/e",
  "notes": "Smolder's  attack range is reduced to 0 for the duration of Flap, Flap, Flap.\nBased on game engine ticks Smolder may not be able to declare  basic attacks for up to 0.264 seconds after the end of the effect.(note)\nThe number of additional bolts based on  Dragon Practice stacks is rounded down.\nSmolder reveals himself while attacking enemies, even inside terrain.\n Spell shield will block only one bolt.\nSelf  immobilizations such as  Zhonya's Hourglass also count for ending Flap, Flap, Flap.\n Recall is disabled while Smolder is inside terrain.\nFlap, Flap, Flap can interact with player-generated terrain.\nIf Smolder is inside terrain when the effect ends, he will be placed correspondingly to the nearest valid space.\nThe following table refers for interactions while Smolder is flying:\n\n\nAttacking\n\nCauses Smolder to move towards the attack target.\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\n\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\n Zhonya's Hourglass\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\nAll summoner spells are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath Immobilizing effects",
  "resource": "Mana",
  "speed": "1800",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
