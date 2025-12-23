// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Endless Banquet",
  "affects": "Self, Enemies",
  "blurb": "Passive: Every second basic attack on the same target deals bonus true damage and generates a stack that increases the damage. This can stack infinitely, and expires after a short time or upon switching targets.",
  "castTime": "1",
  "cooldown": "1",
  "cost": "0",
  "damageType": "True damage",
  "effectRadius": "500",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Bel'Veth's basic attacks on-hit apply a mark to the target for 5 seconds, refreshing on subsequent hits. Every second attack on-hit against the marked target deals bonus true damage and generates a stack of Endless Banquet that increases this damage by the same value. This effect stacks infinitely, but is capped at 5 stacks against epic monsters. The mark and stacks expire upon attacking a new target.</p>",
      "leveling": [
        {
          "attribute": "Bonus True Damage",
          "modifiers": [
            {
              "values": "6 / 8 / 10"
            },
            {
              "unit": "% bonus AD",
              "values": "12"
            }
          ]
        },
        {
          "attribute": "Maximum Monster Damage",
          "modifiers": [
            {
              "values": "30 / 40 / 50"
            },
            {
              "unit": "% bonus AD",
              "values": "60"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> When Bel'Veth scores a takedown against an enemy champion or epic monster while alive, a Void Coral is spawned from their corpse for 15 seconds. Baron Nashor, the pit Rift Herald, and Voidgrubs (once per spawn group) spawn an Enhanced Void Coral.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bel'Veth dashes to the target Void Coral to consume it over the cast time, slowing nearby enemies by 25% - 96% (based on seconds elapsed) for the duration. She then creates an explosion at the location to deal true damage to enemies within, capped at 1500 versus monsters, and assumes her True Form for 60 seconds.</p>\nBel'Veth consumes all existing Void Corals at once, generating a stack of Lavender for each one consumed.",
      "leveling": [
        {
          "attribute": "True Damage",
          "modifiers": [
            {
              "values": "150 / 200 / 250"
            },
            {
              "unit": "% AP",
              "values": "100"
            },
            {
              "unit": "% of target's missing health",
              "values": "25"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">True Form:</span> Bel'Veth evolves into a monster, gaining bonus health, bonus movement speed out-of-combat, 75 bonus attack range, as well as increased total attack speed. Void Surge can dash through terrain. Consuming a Void Coral refreshes the duration of True Form and heals Bel'Veth.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\">Enhanced Void Coral Bonus:</span> True Form is empowered to last 180 seconds and causes Void Remora to spawn from allied and enemy minions that die nearby.</p>",
      "leveling": [
        {
          "attribute": "Bonus Health",
          "modifiers": [
            {
              "values": "100 / 150 / 200"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        },
        {
          "attribute": "Bonus Movement Speed",
          "modifiers": [
            {
              "values": "10 / 45 / 80"
            }
          ]
        },
        {
          "attribute": "Increased Total Attack Speed",
          "modifiers": [
            {
              "unit": "%",
              "values": "10 / 15 / 20"
            }
          ]
        },
        {
          "attribute": "Heal",
          "modifiers": [
            {
              "values": "100 / 150 / 200"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            },
            {
              "unit": "% AP",
              "values": "90"
            }
          ]
        }
      ]
    },
    {
      "description": "A nearby Void Coral is required to cast this ability. The on-hit modifiers from Death in Lavender, Void Surge and Royal Maelstrom affect the bonus true damage applied by Endless Banquet's passive. See Pets for details about Void Remora and Void Corals."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Belveth/ability-icon/r",
  "notes": "Applies  proc damage on the bonus true damage and deals  area damage on the explosion.\nEndless Banquet's  takedown effect will not trigger against monsters if they were slain by an enemy.\nEndless Banquet's true damage based on the target's missing health is calculated before the base damage is dealt.\nTrue Form's duration is displayed in Bel'Veth's resource bar, in seconds.\nTrue Form's duration is refreshed based on the type of Void Coral that Bel'Veth consumes.\nConsuming a normal Void Coral in a normal True Form state refreshes the duration to 60 seconds.\nConsuming an enhanced Void Coral refreshes the duration to 180 seconds and grants the enhanced effects regardless of current True Form state.\nIf she consumes a normal Void Coral while in an enhanced True Form state, the current duration is extended by 60 seconds.\nThe enhanced effects are not lost in this case.\nBel'Veth will consume all existing Void Corals at once, therefore she is able to acquire the enhanced effects of True Form even if she does not physically consume an enhanced Void Coral.\nThe Void Coral that Bel'Veth consumes herself will not expire in the process of her doing so.\nBel'Veth will consume all other Void Corals upon consumption regardless of range.\nRanking up Endless Banquet will update the bonuses dynamically; if Bel'Veth has True Form upon the level-up, she will receive the upgraded stats.\nBel'Veth gains the bonus health and heal from Endless Banquet at the start of the cast time.\nBel'Veth will be able to consume the target Void Coral even if her dash is interrupted.\nShe dashes at the start of the cast time.\nA Void Coral will not spawn when scoring a  takedown against a summoned  Rift Herald.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions while Bel'Veth is in cast time:\nMovement summoner spells can be buffered to cast after the cast time completes if permitted.\nShe is locked out of movement and attack actions for 0.5 seconds after the cast time completes and no buffering of them is permitted for the entirety of her lockout.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Mark\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash  Dash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "spellEffects": "special",
  "spellshieldable": "true",
  "targeting": "Unit"
}
export default ability
