// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "R",
  "name": "Lilting Lullaby",
  "affects": "Enemies",
  "blurb": "Active:  Lillia casts a magical lullaby over all enemy  champions affected by  Dream Dust, making them  drowsy before falling  asleep for a few seconds.",
  "castTime": "0.4",
  "cooldown": "140 / 120 / 100",
  "cost": "50",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Lillia casts a magical lullaby over all enemy champions affected by Dream Dust, which arrives after 0.3 seconds and renders them drowsy for 1.5 seconds, slowing them by 10%. After the duration, they fall asleep for 2 seconds.</p>"
    },
    {
      "description": "The next instance of non- persistent damage that a sleeping target takes from champions, large monsters or turrets consumes the debuff to deal additional magic damage.",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "150 / 200 / 250"
            },
            {
              "unit": "% AP",
              "values": "45"
            }
          ]
        }
      ]
    },
    {
      "description": "An enemy champion affected by Dream Dust is required to cast this ability. Lillia can move during Lilting Lullaby's cast time."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Lillia/ability-icon/r",
  "notes": "Spell shield will not prevent falling  asleep nor block the wake-up damage.\nThe lullaby's  drowsy application will be blocked.\nThe additional magic damage dealt is accredited to Lillia and benefits from her  magic penetration.\nLilting Lullaby's missile will not hit a target that becomes  untargetable during the cast time or while it is travelling, or is in another realm.\nLilting Lullaby's application does not trigger aggro from  turrets, only its triggering damage does.\n Dream Dust's persistent damage will still cause Lillia to trigger turret aggro, unless she casts Lilting Lullaby right before it runs out.\n Dream Dust will mark targets if Lilting Lullaby is learned.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "special",
  "targeting": "Auto",
  "targetRange": "Global"
}
export default ability
