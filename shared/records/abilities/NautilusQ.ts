// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Dredge Line",
  "width": "180 /  0",
  "affects": "Self, Enemies",
  "castTime": "0.25",
  "cooldown": "14 / 13 / 12 / 11 / 10",
  "cost": "60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Nautilus hurls his anchor in the target direction that stops on the first enemy or terrain hit.</p>"
    },
    {
      "description": "If the anchor hits an enemy, it deals magic damage, reveals them for 1.15 seconds, stuns them for 1 second, and drags them toward Nautilus while he also dashes toward them, both over 0.9 seconds.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "85 / 130 / 175 / 220 / 265"
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
      "description": "If the anchor hits terrain, Nautilus dashes to that location and 50% of Dredge Line's cooldown and mana cost are refunded."
    },
    {
      "description": "Nautilus is unable to move or attack while Dredge Line is in flight. He can cast any of his abilities during the dash."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Nautilus/ability-icon/q",
  "notes": "Dredge Line has two hitboxes. The outer hitbox, shown by a visual effect on the ground, will hit champions edge-to-edge. The inner hitbox, shown by the anchor, can hit terrain. Near thinner walls, this can cause the ability to hit a champion on the other side.\nDredge Line turns Nautilus' facing direction accordingly upon hitting a valid target.\nDredge Line can interact with player-generated terrain.\nNautilus will  dash all the way to the target's location if Dredge Line executed them or they negated the  displacement.\nDredge Line will not interrupt any movement commands Nautilus was issued pre-cast so long as their directions somewhat correlate (this is intentional to smooth out traveling/escaping).\n Spell shield will block the ability but Nautilus will still dash partway to the target.\nThe anchor projectile will stop if Nautilus dies while the projectile is traveling. Enemies hit will still be dealt damage. The  drag and  root are not applied if Nautilus did not initiate the dash.\n Displacement immunity will not resist the application of the  stun.\nThis ability will cast from wherever the caster is at the start of the cast time.\nThe following table refers for interactions during Dredge Line's cast time.\n\n\nType\n\nCast time\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\n Shurelya's Battlesong  Youmuu's Ghostblade  Randuin's Omen\n\n\nDisabled\n\nAll the other item-actives are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nUsable\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2000",
  "spellEffects": "spell",
  "spellshieldable": "Special",
  "targeting": "Direction"
}
export default ability
