// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "E",
  "name": "Flay",
  "width": "220",
  "affects": "Enemies",
  "castTime": "0.3889",
  "cooldown": "13 / 12.25 / 11.5 / 10.75 / 10",
  "cost": "60 / 65 / 70 / 75 / 80",
  "damageType": "Magic damage",
  "effectRadius": "270",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Thresh's basic attacks are empowered to deal bonus magic damage, with the AD ratio increasing over 10 seconds without basic attacking enemies.</p>",
      "leveling": [
        {
          "attribute": "Minimum Bonus Magic Damage",
          "modifiers": [
            {
              "unit": " per Soul collected",
              "values": "1.7"
            },
            {
              "unit": "% AD",
              "values": "0"
            }
          ]
        },
        {
          "attribute": "Maximum Bonus Magic Damage",
          "modifiers": [
            {
              "unit": " per Soul collected",
              "values": "1.7"
            },
            {
              "tooltip": "Scaling per rank:\n90 / 120 / 150 / 180 / 210% AD",
              "unit": "% AD",
              "values": "90 - 210"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Thresh sweeps his chain across the ground in a broad line and a radius around him, starting behind him and towards the target direction. Enemies hit are dealt magic damage and knocked 200 units in the target direction, and then are slowed for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "75 / 120 / 165 / 210 / 255"
            },
            {
              "unit": "% AP",
              "values": "70"
            }
          ]
        },
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "20 / 25 / 30 / 35 / 40"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Thresh/ability-icon/e",
  "notes": "Flay's effects start at the start of the cast time. Thresh can cast other spells once the cast time completes, but remains unable to attack and move and use mobility spells (such as  Flash) until the chain completed its way entirely.\nApplies  area damage on the ability and deals  proc damage on the enhanced basic attack.\nThe knockback's  airborne debuff is set to last longer than the forced movement, but gets removed as soon as the forced movement from Flay ends or is overridden by another.\nFlay's passive's buff icon changes colors depending on charge level. At 100%, Thresh's scythe will glow green and a sound effect will play.\n\n\n\n0 - 50%\n\n\n\n50 - 75%\n\n\n\n75% - 100%\n\n\n\n100%\n\n\n Runaan's Hurricane's Wind's Fury will apply Flay's passive to each enemy hit, with the secondary targets taking minimum damage (charge resets upon hitting the primary target).\nThe enhanced attack applies other on-hit effects and can  critically strike as normal (the bonus damage cannot).\nFlay's passive enhanced attack can be  dodged (the enhanced attack is not consumed and the charge is not reset) and  blocked (the enhanced attack is consumed and the charge is reset).\nThe empowered attack will not trigger against structures nor wards.\nPENDING FOR TEST:: Enhanced attack's interactions with  blinding effects (regarding both bonus damage and charge reset).\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "FALSE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "special",
  "spellshieldable": "True",
  "targeting": "Direction"
}
export default ability
