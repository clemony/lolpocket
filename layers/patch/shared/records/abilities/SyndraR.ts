// Updated Patch 16.1 - 01/29/2026 04:27:10 PM CST
  import type { Ability } from "#shared/types"

  const ability: Ability = {
  "key": "R",
  "name": "Unleashed Power",
  "affects": "Enemies",
  "blurb": "Active:  Syndra creates a few  Dark Spheres and grabs a few more nearby, then barrages them at the target enemy champion. Each sphere deals magic damage upon hit, and remains on the ground for a few seconds.",
  "castTime": "none",
  "cooldown": "120 / 100 / 80",
  "cost": "100",
  "damageType": "Magic damage",
  "effectRadius": "3000",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> Dark Sphere gains ability haste.</p>",
      "leveling": [
        {
          "attribute": "Ability Haste",
          "modifiers": [
            {
              "values": "10 / 20 / 30"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Syndra enters a 0.264 seconds cast time, creating 3 Dark Spheres and grabbing up to 4 nearby Dark Spheres that were last spawned. Afterwards, the collected Dark Spheres are barraged at the target enemy champion, each dealing magic damage upon hit.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage per Sphere",
          "modifiers": [
            {
              "values": "90 / 130 / 170"
            },
            {
              "unit": "% AP",
              "values": "20"
            }
          ]
        },
        {
          "attribute": "Minimum Magic Damage",
          "modifiers": [
            {
              "values": "270 / 390 / 510"
            },
            {
              "unit": "% AP",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Maximum Magic Damage",
          "modifiers": [
            {
              "values": "630 / 910 / 1190"
            },
            {
              "unit": "% AP",
              "values": "140"
            }
          ]
        }
      ]
    },
    {
      "description": "The Dark Spheres will then remain on the ground for 6 seconds."
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Transcendent Bonus:</span> Collecting 100 Splinters of Wrath enhances Unleashed Power to execute the target if it would damage them to below 15% of their maximum health.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Syndra/ability-icon/r",
  "notes": "Unleashed Power makes Syndra enter a brief cast time, but the initial cast is completed instantly. If she dies during this cast time, Unleashed Power will still complete the remaining effect.\nCasting Unleashed Power on a target that becomes  untargetable while the spheres are in flight will not destroy them but cause them to deal no damage instead.\nSpheres already in flight will still travel if Syndra's target dies, but any remaining spheres will not. However, their duration will still get reset.\nA Dark Sphere summoned very shortly before Unleashed Power will be used as one of the spheres that get thrown.\nDepending on how many spheres are on the map and how far away the enemy is upon casting Unleashed Power it is possible that Syndra would conjure the sphere behind her as if she was going to throw it, but she won't.\nUnleashed Power will not add a Sphere that Syndra is holding with  Force of Will.\nSpheres that are being pushed by  Scatter the Weak (normally ones that were made late during the push) will not get picked up for Unleashed Power.\n Spell shield will only block the damage of a single sphere.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "spell",
  "spellshieldable": "Special",
  "targeting": "Unit",
  "targetRange": "675"
}
  export default ability
