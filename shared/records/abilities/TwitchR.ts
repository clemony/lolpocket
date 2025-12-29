// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Spray and Pray",
  "width": "120",
  "affects": "Self",
  "blurb": "Active:  Twitch gains  bonus attack damage and  bonus attack range for a few seconds, during which his basic attacks are replaced with bolts that deal the attack's damage to all enemies in a line.",
  "castTime": "none",
  "cooldown": "90",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Twitch gains bonus attack damage and 300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit.</p>",
      "leveling": [
        {
          "attribute": "Bonus Attack Damage",
          "modifiers": [
            {
              "values": "30 / 45 / 60"
            }
          ]
        }
      ]
    },
    {
      "description": "The bolts deal 100% - 60% (based on enemies hit) of the triggering attack's damage, apply on-hit effects, and can critically strike for (175% + 40%) damage."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Twitch/ability-icon/r",
  "notes": "The extra distance that the bolts travel scales with bonus attack range.\nSpray and Pray allows Twitch to outrange  turrets by 50 units, allowing him to hit them without them returning fire.\nTwitch targets his line attack at his target's location at the start of his attack windup.\nThe bolts reach targets at a delay, composed of Twitch's windup time and distance the bolt has to travel at finite speed. Even the primary target can dodge the attack if they are moving quickly enough.\nThe bolt projectiles will naturally pass through terrain and enemy structures (the latter will be damaged by bolts even if they are not directly targeted).\nIf Twitch is  blinded before winding up the attack, the hits will miss against all targets.\n Runaan's Hurricane's Wind's Fury interacts with Spray and Pray's  bonus attack range but not with the modified missile effect (the secondary bolts will not have pass-through effects).\nWhenever the bolts penetrate a target, a small elongated cloud appears at the location, which's VFX and SFX can be seen and heard inside the Fog of War.\nThe bolts' travel distance scales with the full value of Twitch's  attack range increases such as  Rapid Firecannon, but not with size increases (which only increase his effective attack range, thereby the target range).\n(Outdated as of V10.13, now can hit everything with edge range, except for turrets) The  center of a unit must be within the maximum travel distance of the bolt missile, and in front of the spawn location (Twitch's  center) for the bolt to be able to hit them.\nOther than this condition, the bolt missile has to only touch (pass within its half width of 60 units) the  edge of the unit's radius.\nThis is standard behaviour for linear skillshots.\n Malignance's Hatefog is special cased to work with Spray and Pray.\n Axiom Arcanist amplifies bolt damage as  area of effect.",
  "projectile": "TRUE",
  "resource": "Mana",
  "speed": "5000",
  "spellEffects": "basic",
  "targeting": "Auto",
  "targetRange": "Twitch's  attack range"
}
export default ability
