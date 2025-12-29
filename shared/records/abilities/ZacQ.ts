// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Stretching Strikes",
  "width": "160",
  "affects": "Enemies",
  "castTime": "0.33",
  "cooldown": "14 / 12.5 / 11 / 9.5 / 8",
  "cost": "0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Zac stretches his left arm in the target direction that catches the first enemy hit, dealing magic damage, slowing them by 40% for 0.5 seconds, and forming a tether between Zac and the target for 2 seconds, during which they are revealed.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "40 / 55 / 70 / 85 / 100"
            },
            {
              "unit": "% AP",
              "values": "30"
            },
            {
              "unit": "% of Zac's maximum health",
              "values": "3"
            }
          ]
        },
        {
          "attribute": "Total Magic Damage",
          "modifiers": [
            {
              "values": "80 / 110 / 140 / 170 / 200"
            },
            {
              "unit": "% AP",
              "values": "60"
            },
            {
              "unit": "% of Zac's maximum health",
              "values": "6"
            }
          ]
        }
      ]
    },
    {
      "description": "While the tether persists, Zac's next basic attack is replaced by a second Stretching Strike, empowering it to have a 0.25-second cast time and gain 25 bonus attack range. This attack cannot critically strike, nor apply on-hit effects."
    },
    {
      "description": "If the two Stretching Strikes affect different targets, both are knocked down and rooted for 0.5 seconds while the secondary target is dealt the initial magic damage and applied the same slow. After a 0.4-second delay, Zac displaces them toward each other over 300 units, though not through terrain."
    },
    {
      "description": "If the two targets are within 700 units of each other, they are instead slammed together through the displacement. Upon impact of each other, both targets are knocked up and stunned for 0.25 seconds and all enemies within the impact are dealt the initial magic damage and applied the same slow."
    },
    {
      "description": "Both Stretching Strikes (the cast and the empowered attack) reset Zac's basic attack timer. Zac is unable to move or attack while his left arm is in flight."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Zac/ability-icon/q",
  "notes": "If both Stretching Strikes affect the same target, the target will be dealt the damage and applied the slow for both hits.\nThe following features were added in patch V7.10 to increase Stretching Strikes' reliability and usability:\nIf the second attack's target would die from the damage, it won't be dealt until they are slammed to the first target.\nIf the first target is standing on top of other enemies, the second hit will reliably choose a different target from the first.\nNon-champion units that are affected by Stretching Strikes' displacement are prevented from taking any damage until they are slammed together. Note that this often confuses players who are trying to secure  monsters via  Smite while Zac is slamming the wanted target, resulting in Smite dealing no damage to it. It is currently unknown whatever the side effects of this feature are intentional or not.\n Spell shield's interactions with Stretching Strikes:\nThe first Stretching Strike will have its damage, slow, and tether application all blocked.\nIf as the primary target and affected by the tether already from the first Stretching Strike:\nThe damage and slow from the empowered attack if targeted again by the second Stretching Strike will be blocked.\nThe damage, slow, stun, and knock up from the impact of the second Stretching Strike hitting a different target will all be blocked, but not the root and the displacement.\nIf as the primary target of the second Stretching Strike, the root will be blocked, but the displacement, damage, slow, stun, and knock up afterwards will not.(note)\nIf as the secondary target of the impact, the damage and slow will be blocked.\nIf the tethered target is  untargetable during the second Stretching Strike via basic attack, they are completely unaffected by the ability.\n Displacement immunity will also resist the application of the  stun.\nThis ability will cast from wherever the caster is at the end of the cast time.\nIf the target becomes  untargetable,  dies, or is too far away during the empowered attack's cast time, it is cancelled but not consumed.\nIf either target dies while being displaced towards the other, no slam occurs.(note)\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Current health",
  "speed": "2800",
  "spellEffects": "Single target",
  "spellshieldable": "special",
  "targeting": "Direction",
  "targetRange": "800 /  80",
  "tetherRadius": "900"
}
export default ability
