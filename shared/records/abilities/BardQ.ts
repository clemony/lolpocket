// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Cosmic Binding",
  "width": "120",
  "affects": "Enemies",
  "blurb": "Active:  Bard fires an energy bolt in the target direction that deals magic damage and  slows the first enemy hit.",
  "castTime": "0.25",
  "cooldown": "11 / 10 / 9 / 8 / 7",
  "cost": "60",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Bard fires an energy bolt in the target direction that deals magic damage to the first enemy hit and slows them by 60% for a duration.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            },
            {
              "unit": "% AP",
              "values": "80"
            }
          ]
        },
        {
          "attribute": "Disable Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1 / 1.2 / 1.4 / 1.6 / 1.8"
            }
          ]
        }
      ]
    },
    {
      "description": "After Cosmic Binding hits an enemy, the bolt continues behind them for 300 units. If the bolt hits terrain or a second enemy, it stuns both targets for the same duration, dealing the same damage to the secondary target."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Bard/ability-icon/q",
  "notes": "Cosmic Binding's interaction with  spell shields:\nIf the first target has a spell shield, they will block the damage but the bolt will still pass through them.\nIf the bolt hits a second target, only they will be stunned.\nIf the bolt hits terrain, the first target will be stunned.\nIf the second target has a spell shield, they will block the stun and damage.\nThe first target will still be stunned.\nIf the first target gains a spell shield after being hit, the stun will not be blocked.\nThe  stun will apply even if the first target becomes  untargetable.\nCosmic Binding can interact with player-generated terrain.\nThe  stun is still applied even if the first or second target dies to the ability itself or before the projectile can bind them.\nCosmic Binding does not grant  sight of enemies hit, but a hit can be seen and heard to indicate that at least one enemy is there.\nThis ability will cast from wherever the caster is at the end of the cast time.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "1500",
  "spellEffects": "aoe",
  "spellshieldable": "Special",
  "targeting": "Direction",
  "targetRange": "850"
}
export default ability
