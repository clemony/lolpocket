// Updated Patch 15.24.1 - 12/23/2025 09:26:31 AM CST

const ability: Ability = {
  "key": "Q",
  "name": "Parrrley",
  "affects": "Enemies, Self",
  "blurb": "Active:  Gangplank shoots the target enemy with his pistol, dealing physical damage and applying  on-hit and  on-attack effects.",
  "castTime": "0.25",
  "cooldown": "4.5",
  "cost": "50 / 45 / 40 / 35 / 30",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Gangplank fires a shot at the target enemy that deals physical damage, applies on-hit effects as a ranged attack, and triggers on-attack effects. Parrrley can critically strike for (175% + 40%) damage.</p>",
      "leveling": [
        {
          "attribute": "Physical Damage",
          "modifiers": [
            {
              "values": "10 / 40 / 70 / 100 / 130"
            },
            {
              "unit": "% AD",
              "values": "100"
            }
          ]
        }
      ]
    },
    {
      "description": "If Parrrley kills the target, Gangplank plunders gold and Silver Serpents. Each enemy killed by a Powder Keg explosion that was originally set off by Parrrley also counts for the plunder.",
      "leveling": [
        {
          "attribute": "Gold Plunder",
          "modifiers": [
            {
              "values": "3 / 4 / 5 / 6 / 7"
            }
          ]
        },
        {
          "attribute": "Silver Serpent Plunder",
          "modifiers": [
            {
              "values": "4 / 5 / 6 / 7 / 8"
            }
          ]
        }
      ]
    },
    {
      "description": "Silver Serpents can be spent in the shop to upgrade Cannon Barrage."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Gangplank/ability-icon/q",
  "notes": "Parrrley deals  basic damage, but also triggers spell effects by also being tagged as  spell damage.\n Fleet Footwork will always trigger its melee effect, even when it is triggered by Parrrley.\n On-hit effects that deal damage to secondary targets will allow Parrrley to plunder from enemies killed that way, much like with  Powder Kegs.\n Ravenous Hydra and  Titanic Hydra work like this and will grant additional plunder from enemies they kill when triggered by Parrrley as their cast instance.\nEven spell effects such as  Luden's Companion will work with this when triggered by Parrrley as their cast instance. Spell effects that do not belong to their triggering cast instance, such as  Liandry's Torment's damage debuff, do not grant plunder for enemies they kill.\nIf the target becomes  untargetable,  dies, or is too far away or no longer in  sight during the cast time, this ability will cancel but does not go on  cooldown nor pay its cost (if applicable).",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "2600",
  "spellEffects": "Special",
  "spellshieldable": "True",
  "targeting": "Unit",
  "targetRange": "625"
}
export default ability
