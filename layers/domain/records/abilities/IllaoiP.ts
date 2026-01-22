// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Prophet of an Elder God",
  "affects": "Enemies",
  "blurb": "Innate: Periodically, a Tentacle will spawn next to nearby terrain. It can be killed by enemy basic attacks and will become dormant if  Illaoi leaves it alone.",
  "damageType": "Physical damage",
  "effectRadius": "1000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Periodically, Illaoi spawns a Tentacle on the nearest terrain perpendicular to her location, if no other Tentacles are already nearby it. Tentacles fully spawn after a 2 second delay and are untargetable in the meantime.</p>"
    },
    {
      "description": "Tentacles are commanded to attack by Illaoi's abilities, dealing 9 - 162 (based on level) (+ 110% AD) (+ 40% AP) physical damage to all enemies struck, increased by 0% - 30% (based on Tentacle Smash's rank).Each enemy individually reduces the slam damage by 50% for every slam they were hit by in the last 0.66 seconds, capped at 75% less damage."
    },
    {
      "description": "Each Tentacle also heals Illaoi for 5% of her missing health if it hits at least one enemy champion."
    },
    {
      "description": "See Pets for more details about Tentacles."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Illaoi/ability-icon/p",
  "notes": "Illaoi cannot spawn Tentacles on ally invulnerable  structures [4] (note), in addition to neither her nor the Vessel being able to spawn them in Nexus Obelisk's attack range.\nEven after Nexus turrets have lost their invulnerability, Illaoi still has issues spawning Tentacles on them (probably because of the nearby invulnerable Nexus). [5] (bug)\nTentacles will prioritize spawning on map terrain before player-made ones.\nIf multiple Tentacles hit simultaneously, the received healing is calculated iteratively based on the new amount of missing health, as per this formula: (maximum health − current health) × (1 − 0.95n), with 'n' the number of Tentacle hits.",
  "projectile": "FALSE",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Passive"
}
export default ability
