// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "P",
  "name": "Cosmic Creator",
  "affects": "Self",
  "blurb": "Innate:  Aurelion Sol's damaging abilities against enemies generate him permanent stacks of Stardust, which gradually augments his abilities.\n Breath of Light's bursts deal bonus magic damage based on the target's maximum health.\n Astral Flight's distance is increased.\n Singularity's area and execute threshold are increased.\n Falling Star/ The Skies Descend has increased impact area.",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Innate:</span> Aurelion Sol's damaging abilities against enemies generate him permanent stacks of Stardust, which gradually augments his abilities.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Breath of Light:</span> Bursts deal bonus magic damage based on the target's maximum health.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Astral Flight:</span> Range is increased by 7.5 units per Stardust.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Singularity:</span> Outer and inner radius increased equal to 15% Stardust, and the execution threshold is increased.</p>\n<p class=\"ability-effect\"><span class=\"ability-header\"> Falling Star / The Skies Descend:</span> Impact radius increased equal to 15% Stardust.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/AurelionSol/ability-icon/p",
  "notes": "Singularity's relative size and ratio stays the same when affected by Cosmic Creator's size modifier.",
  "targeting": "Passive"
}
export default ability
