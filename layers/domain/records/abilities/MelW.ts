// Updated Patch 15.24.1 - 12/26/2025 07:04:04 PM CST

const ability: Ability = {
  "key": "W",
  "name": "Rebuttal",
  "affects": "Self, Enemies",
  "blurb": "Active:  Mel forms a protective barrier around herself for 0.75 seconds, becoming  invulnerable to non- turret damage and gaining decaying  bonus move speed.",
  "castTime": "none",
  "cooldown": "35 / 32 / 29 / 26 / 23",
  "cost": "80 / 60 / 40 / 20 / 0",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Mel forms a protective barrier around herself for 0.75 seconds, becoming invulnerable to non- turret damage and gaining 30% decaying bonus movement speed for the duration. Additionally, all hostile projectiles sourced from enemy champions that collide with the barrier will be destroyed instantly before Mel fires the same projectiles as her own, either toward or in the direction of the original sources, or toward herself.</p>"
    },
    {
      "description": "Replicated projectiles have the same features that the original ones do, but they retain a ratio of the damage that the original ones would deal, and all of their damage is converted to magic damage.",
      "leveling": [
        {
          "attribute": "Replicated Projectile Damage Modifier",
          "modifiers": [
            {
              "unit": "%  of the original damage",
              "values": "40 / 45 / 50 / 55 / 60"
            },
            {
              "unit": "% per 100 AP",
              "values": "5"
            }
          ]
        }
      ]
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Mel/ability-icon/w",
  "notes": "Rebuttal's barrier will also instantly destroy missiles that are already within its radius when the ability is cast.\nThe replicated missile will mimic all of the original missile's properties, which includes its range, width, speed, acceleration, angle (if a cone), height, and sight radius.\nSpell effects, as well as interactions with  spell shield and  projectile-interception effects, all vary based on the original missile that was replicated.\nThe only exception to this is the copied missile's path, or trajectory, which is based on the targeting paradigm that the original missile used when fired by its source. The replicated missile acquires the original missile source as the target.\nIf the original missile was fired by a  unit or  auto-targeted effect, the replicated missile will be fired as a homing missile with the target being the original missile source.\nHealing projectiles, such as  Soraka's  Rejuvenation and  Sona's  Aria of Perseverance, will instead target Mel.\nIf the original missile was fired via any other targeting paradigm, the replicated missile will by default fire in the direction of the original missile source at the time of replication. This includes  vector-targeted projectiles (currently only  Viktor's  Hextech Ray), for which the origin will always be Mel's center (since she cannot control the cast point).\nThe replicated missile will mimic all of the functions of and copy the behavior of the original missile, unless otherwise stated. This includes every aspect and effect of the missile conforming to the attack or spell from which the missile originated.\nThe scaling of the effects of the copied missile is calculated using the original missile source's attributes (namely their stats). The damage of the missile only benefits from Mel's damage modifiers and magic penetration, and not the original source's.\nThe following missiles are destroyed, but not replicated:\n Draven's  Whirling Death on its way back to him.\n Gnar's  Boomerang Throw on its way back to him.\n Illaoi's  Test of Spirit\n Sivir's  Boomerang Blade on its way back to her.\n Sylas'  Hijack\n Xayah's  Bladecaller and  Featherstorm\n Zac's  Stretching Strikes\nThe following abilities will be stopped short of their trajectory without replication:\n Azir's  Emperor's Divide\n Syndra's  Spheres thrown with her  Scatter the Weak\nMel may occasionally fail to attribute  Echoes of Helia's Soul Siphon's damage projectile to herself.(bug)\nThis can cause the enemy to be able to kill their own allies, and gain all the kill's rewards.\nRebuttal will play distinct sound cues from destroying and replicating projectiles fired from specific types of abilities:\nNon-ultimate ability missile: \nUltimate ability missile: \nAbility with global or near-global range missile:",
  "projectile": "SPECIAL",
  "resource": "Mana",
  "spellEffects": "special",
  "spellshieldable": "special",
  "targeting": "Auto"
}
export default ability
