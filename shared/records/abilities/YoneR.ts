// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Fate Sealed",
  "width": "225",
  "affects": "Self, Enemies",
  "blurb": "Active:  Yone prepares a strike over an area in the target direction,  knocking down and briefly  stunning enemies within. He then  blinks behind the furthest target, else to max range.",
  "castTime": "0.75",
  "cooldown": "120 / 100 / 80",
  "cost": "0",
  "damageType": "Other damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Yone prepares a strike over the cast time, then marks all enemies within an area in the target direction, knocking them down and stunning them for 1 second. He blinks 200 units beyond the center of the last enemy champion struck, or else to maximum range instead.</p>"
    },
    {
      "description": "After 0.3 seconds, a gust rushes along the same area that deals equal parts physical and magic damage to marked enemies within and pulls them towards the location Yone blinked to, then knocks them up for 0.75 seconds.",
      "leveling": [
        {
          "attribute": "Total Mixed Damage",
          "modifiers": [
            {
              "values": "200 / 400 / 600"
            },
            {
              "unit": "% bonus AD",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "100 / 200 / 300"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        },
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "100 / 200 / 300"
            },
            {
              "unit": "% bonus AD",
              "values": "40"
            }
          ]
        }
      ]
    },
    {
      "description": "The stun ends prematurely upon the pull."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Yone/ability-icon/r",
  "notes": "Yone will  blink after a 0.05-second delay of the cast time being completed.\nMarked enemies that are not within the area will not be affected by the second portion of the ability.\nIf Fate Sealed's maximum range is inside terrain, enemies will not be  pulled through walls.\nFate Sealed  pulls targets to the location Yone would  blink to, and not towards his current position by the end of the cast time.\nFate Sealed can hit targets whose center is behind Yone, if their  radius overlaps with the rectangle hitbox in front of him.\nEnemies are  pulled with 3000 speed.\nThis ability will cast from wherever the caster is at the end of the cast time.\nFate Sealed will not  stun enemies that are  displacement immune.\nYone can blink up to 1200 units + enemy size, if the last enemy champion's radius intersects with the maximum range slightly.\nThe mixed damage is applied in two instances, and the magic damage will be dealt first within the same game tick.\nIf the magic damage finishes off the unit, the physical damage will not be dealt against it.(bug)\nYone will  reveal himself during the cast time if there is an enemy champion nearby.\nWhen striking against  spell shield, Yone will still  blink to the last champion hit even if they block the effects to themselves.\nThe  knock up starts once the pull ends.\nYone is  locked out of performing actions for 0.45 seconds after the cast time. All abilities that have been buffered during this time will cast shortly before the lock out ends.\nThe following table refers for interactions while Yone is in cast time:\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\nDisabled\n\n\nMovement\n\nDisabled\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\n Barrier  Clarity  Cleanse  Exhaust  Ghost  Heal  Ignite  Smite\n\n\nDisabled\n\n Flash  Teleport  Recall  Hexflash\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath, unless protected by  Resurrection",
  "projectile": "FALSE",
  "spellEffects": "aoe",
  "spellshieldable": "special",
  "targeting": "Direction"
}
export default ability
