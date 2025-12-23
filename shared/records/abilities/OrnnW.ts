// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "W",
  "name": "Bellows Breath",
  "affects": "Self / Enemies",
  "blurb": "Active:  Ornn marches in the target direction with  displacement immunity, belching fire in a cone that continually deals magic damage for a brief time. The final gout of flame will apply  Brittle for a short time.",
  "castTime": "none",
  "cooldown": "12 / 11.5 / 11 / 10.5 / 10",
  "cost": "45 / 50 / 55 / 60 / 65",
  "damageType": "Magic damage",
  "effectRadius": "175",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Ornn marches forward in the target direction over 0.75 seconds, gaining displacement immunity and becoming unable to act for the duration.</p>"
    },
    {
      "description": "Over the march he belches fire over a cone in front of him, dealing magic damage every 0.15 seconds to enemies hit. The final gout of flame can reach slightly farther and will apply Brittle for 3 seconds.",
      "leveling": [
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "12 / 13 / 14 / 15 / 16"
            }
          ]
        },
        {
          "attribute": "Magic Damage Per Tick",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "2.4 / 2.6 / 2.8 / 3 / 3.2"
            }
          ]
        }
      ]
    },
    {
      "description": "Bellows Breath has a minimum damage threshold, which is also the damage dealt to minions, and is capped against monsters.",
      "leveling": [
        {
          "attribute": "Total Minimum/Minion Damage",
          "modifiers": [
            {
              "values": "80 / 130 / 180 / 230 / 280"
            }
          ]
        },
        {
          "attribute": "Minimum/Minion Damage Per Tick",
          "modifiers": [
            {
              "values": "16 / 26 / 36 / 46 / 56"
            }
          ]
        },
        {
          "attribute": "Total Monster Damage Cap",
          "modifiers": [
            {
              "values": "260 / 320 / 380 / 440 / 500"
            }
          ]
        },
        {
          "attribute": "Monster Damage Cap Per Tick",
          "modifiers": [
            {
              "values": "52 / 64 / 76 / 88 / 100"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Ornn/ability-icon/w",
  "notes": "Ornn's lunge distance is based on the distance he would travel in the target direction by standard movement over a time period of 0.75 seconds with 35% of his total movement speed.\nHis movement speed during the lunge does not actually change in this case and is only used as a scaling.\nThe scaling is based on the total movement speed Ornn had at the time of casting Bellows Breath.\nIf his total movement speed was less than or equal to an estimated value of 190, then Ornn will not lunge at all.\nWhile lunging, special VFX will be played when Ornn is first affected by  crowd control, even if that crowd control is not resisted by  displacement immunity.\n Spell shield will negate the final instance of damage and prevents  Brittle from being applied.\nOrnn can see the on-target VFX on targets that are being struck even while they are in the fog of war.\nThe following table refers for interactions while Ornn is performing Bellows Breath:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "FALSE",
  "resource": "Mana",
  "spellEffects": "aoe",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "500 / 560"
}
export default ability
