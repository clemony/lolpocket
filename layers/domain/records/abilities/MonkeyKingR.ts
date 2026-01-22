// Updated Patch 15.24.1 - 12/26/2025 07:04:07 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Cyclone",
  "affects": "Enemies, Self",
  "blurb": "Active:  Wukong spins his staff around for a short time, becoming  ghosted and gaining  bonus movement speed. The staff continually deals physical damage to enemies hit based on their maximum health, and can briefly  knock them up once.",
  "castTime": "none",
  "cooldown": "130 / 110 / 90",
  "cost": "100",
  "damageType": "Physical damage",
  "effectRadius": "162.5",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Wukong spins his staff around for up to 2 seconds, becoming ghosted and gaining 20% bonus movement speed. The staff deals physical damage every 0.25 seconds to enemies hit, and can knock them up once for 0.6 seconds. Cyclone will not knock up enemies who were already hit by either Wukong or his clone within the same cast.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage Per Tick",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "1 / 1.5 / 2"
            },
            {
              "unit": "% AD",
              "values": "34.38"
            }
          ]
        },
        {
          "attribute": "Total Physical Damage",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "8 / 12 / 16"
            },
            {
              "unit": "% AD",
              "values": "275"
            }
          ]
        }
      ]
    },
    {
      "description": "Cyclone can be recast after 0.5 seconds within the duration, and does so automatically afterwards or by casting another ability."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Wukong ends Cyclone. After 1 second, he can cast Cyclone a second time within 8 seconds of the first cast.</p>",
      "leveling": [
        {
          "attribute": "Maximum Total Physical Damage",
          "modifiers": [
            {
              "unit": "% of target's maximum health",
              "values": "16 / 24 / 32"
            },
            {
              "unit": "% AD",
              "values": "550"
            }
          ]
        }
      ]
    },
    {
      "description": "Nimbus Strike's bonus attack speed duration is continuously refreshed while spinning."
    },
    {
      "description": "Cyclone's damage is capped at 200 / 400 / 600 (based on level) per second against monsters."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/MonkeyKing/ability-icon/r",
  "notes": "Cyclone is special cased to grant stacks of  Conqueror for each tick of damage.\nCasting a basic ability will always interrupt Wukong's Cyclone. A clone can be interrupted by casting  Crushing Blow, but only if the clone was made during the current Cyclone cast and only for that cast. This means if both Wukong and his clone are spinning, the clone cannot be interrupted.\nCyclone's remaining duration always stays the same even after the clone replicated the ability.\nDuring Cyclone, Wukong and his clone's  attack ranges are reduced[ to 50 ][ by 125 ].\n Spell shield will block one instance of damage.\nBlocking the  knock up will still grant immunity to it from either of Cyclone's casts.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nOther abilities are disabled for the first 0.3 seconds, casting them afterwards interrupts.\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nAll items are usable\n\n\nDisabled\n\nN/A\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash  Teleport  Hexflash\n\n\nDisabled\n\n Recall\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "resource": "Mana",
  "spellEffects": "aoedot",
  "spellshieldable": "Special",
  "targeting": "Auto"
}
export default ability
