// Updated Patch 15.23.1 - 11/30/2025 12:23:58 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Bone Skewer",
  "width": "140 / 200",
  "affects": "Enemies",
  "castTime": "0.25",
  "cooldown": "10 / 9.5 / 9 / 8.5 / 8",
  "cost": "70 / 75 / 80 / 85 / 90",
  "damageType": "Physical damage",
  "effectRadius": "550",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Pyke charges while being slowed by 20% for up to 3 seconds to increase Bone Skewer's range over the first second of the channel. Bone Skewer can be recast within the duration.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Pyke hurls his harpoon in the target direction, becoming unable to act while it is in flight and dealing physical damage to the first enemy hit and pulling them, during which they are also revealed, then slowing them by 90% for 1 second.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "100 / 150 / 200 / 250 / 300"
            },
            {
              "unit": "% bonus AD",
              "values": "75"
            }
          ]
        }
      ]
    },
    {
      "description": "Releasing the ability within 0.4 seconds causes Pyke to instead thrust his blade in the target direction, dealing the same damage to the closest enemy champion, or closest enemy otherwise."
    },
    {
      "description": "If the charge is interrupted or completes without reactivation, Bone Skewer is cancelled and the ability is put on full cooldown but refunds 75% of the mana cost. Bone Skewer's mana cost is also refunded if it hits an enemy champion."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Pyke/ability-icon/q",
  "notes": "This ability always employs Quick cast.\nOnly the charged version of Bone Skewer will be  intercepted.\nThe pull can fling an enemy behind Pyke if the harpoon hits at close range.\nThis ability will cast from wherever the caster is at the end of the cast time.\nThe following table refers for interactions while Pyke is  channeling:\n\n\nType\n\nCharge channel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nInterrupts\n\n\nMovement\n\nAllowed\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled, but can use trinkets\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite  Flash\n\n\nDisabled\n\n Teleport  Recall\n\n\nInterrupted by\n\n Hexflash (Recasts)\n\n\nInterrupted by\n\nDeath Cast-inhibiting effects\n\nThe following table refers for interactions while Pyke is locked out from the harpoon being in flight:\nThe lockout ends as soon as the missile fizzles from hitting a target or reaching maximum range, or being  intercepted.\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "Spell",
  "spellshieldable": "True",
  "targeting": "Auto / Direction",
  "targetRange": "400 : 1100 (based on channel time)"
}
export default ability
