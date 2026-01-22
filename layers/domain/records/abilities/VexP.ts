// Updated Patch 15.24.1 - 12/26/2025 07:04:15 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Doom 'n Gloom",
  "affects": "Self, Enemies",
  "blurb": "Passive - Doom: Periodically,  Vex empowers her next basic ability to  knock down and briefly  fear enemies hit.",
  "damageType": "Magic damage",
  "effectRadius": "1600",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive - Doom:</span> Periodically, Vex empowers her next basic ability to knock down and fear enemies hit for 0.75 / 1 / 1.25 / 1.5 (based on level) seconds, during which they are slowed by 60% - 99% (based on distance from Vex). If Looming Darkness triggers Doom, enemies hit will flee from the epicenter instead.Doom's cooldown resets upon respawning.</p>"
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate - Gloom:</span> Nearby enemy champions and monsters that dash or blink will be marked with Gloom for 6 seconds. Vex's next basic attack, which becomes non-projectile, or basic ability hit against an enemy with Gloom will detonate the mark. Looming Darkness will also inflict Gloom, but cannot detonate it.</p>"
    },
    {
      "description": "Gloom's detonation deals 40 - 150 (based on level) (+ 25% AP) bonus magic damage and refunds 25% of Doom's cooldown. Against non-champions, this instead deals 40% / 45% / 50% / 55% / 60% (based on level) damage and refunds 10% of Doom's cooldown."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Vex/ability-icon/p",
  "notes": "Gloom will mark  Rift Herald and  Rift Scuttler when they use their dashes.\nGloom can mark  clones, but not other  pets.\nGloom's mark has a very brief cooldown and refreshes on subsequent dashes or blinks nearby enemies use.\nGloom's mark duration will refresh to 0.5 seconds when Vex starts an attack windup against a target that has a mark which is about to expire.\nGloom will mark enemies even if they are  untargetable.\nGloom will mark enemies that are inside the detection radius when they blink, but will not mark those that blink inside from far away.(note)\nDoom's cooldown starts as soon as the basic ability is cast.\nDoom's  fear will not be removed when Vex dies, unlike any other  fear in the game.(bug)\nNon-champions (e.g.  Rift Scuttler) are not  knocked down by the fear-empowered ability.(note)\n Spell shield will block all of Doom's effects but not Gloom's empowered attack nor mark.\nNearby enemies that become displaced do not count for being marked by Gloom.\n Yone's  Soul Unbound's recast does not cause the caster to be marked by Gloom.(bug)\nVex's basic abilities use a different icon when Doom is ready:\n Mistral Bolt\n Personal Space\n Looming Darkness",
  "projectile": "FALSE",
  "spellEffects": "proc",
  "spellshieldable": "special",
  "targeting": "Passive"
}
export default ability
