// Updated Patch 15.23.1 - 12/06/2025 02:55:20 PM CST

const ability: Ability = {
  "key": "R",
  "name": "Unstoppable Onslaught",
  "affects": "Self, Enemies",
  "castTime": "none",
  "cooldown": "140 / 100 / 60",
  "cost": "100",
  "damageType": "Physical damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Sion becomes immune to crowd control and ghosted and, after a brief delay, charges forward in the direction of the cursor for up to 8 seconds, during which he is able to steer at a slow turn rate while automatically navigating his movement. Unstoppable Onslaught can be recast after 0.4 seconds during the channel.</p>"
    },
    {
      "description": "The charge ramps up Sion's movement speed at the time of cast by 40 movement speed every 0.1 seconds, up to 950 total movement speed."
    },
    {
      "description": "At the end of the charge's duration, Sion leaps forward 300 units, landing after 0.55 seconds and slamming the ground beneath him. Sion will stop upon colliding with an enemy champion or terrain during the charge, ending Unstoppable Onslaught with a slam. Crashing into terrain stuns Sion for 0.5 seconds."
    },
    {
      "description": "Enemies hit by Sion's charge are dealt physical damage. The base damage increases by 0% - 166.67% (based on channel time) and the scaling increases by 0% - 100% (based on channel time).",
      "leveling": [
        {
          "attribute": "Minimum Physical Damage",
          "modifiers": [
            {
              "values": "150 / 300 / 450"
            },
            {
              "unit": "% bonus AD",
              "values": "60"
            }
          ]
        },
        {
          "attribute": "Maximum Physical Damage",
          "modifiers": [
            {
              "values": "400 / 800 / 1200"
            },
            {
              "unit": "% bonus AD",
              "values": "120"
            }
          ]
        }
      ]
    },
    {
      "description": "Enemies, including turrets, hit by the slam are dealt the same damage and are slowed for 3 seconds. Enemies in a smaller radius are also pulled towards Sion over 0.5 seconds and become stunned after a brief delay for 0.25 - 1.75 (based on channel time) seconds.",
      "leveling": [
        {
          "attribute": "Slow",
          "modifiers": [
            {
              "unit": "%",
              "values": "40 / 45 / 50"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Recast:</span> Sion leaps forward, causing him to stop charging and slam the ground beneath him as if Unstoppable Onslaught had reached the end of its duration.</p>"
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Sion/ability-icon/r",
  "notes": "This ability always employs Quick cast.\nWhen Sion casts Unstoppable Onslaught a global warning can be heard.\nUnstoppable Onslaught does not apply the knock up nor stun to enemies from slamming on collision with terrain.\nUnstoppable Onslaught does not  knock up non-champions hit by the charge.(bug)\nUnstoppable Onslaught can be activated twice or held down and released on both normal cast and quick cast. There is no other difference between normal cast and quick cast for this ability, either.\nThe initial cast counts as an ability activation for the purposes of on-cast effects such as  Spellblade.\nThe recast does not.\n Zeke's Convergence's Frostfire Tempest and  Experimental Hexplate's Overdrive trigger at the end of the charge or  leap.\nUnstoppable Onslaught does not benefit from  Axiom Arcanist's cooldown refund during  Glory in Death.(bug)\nAn enemy can only be affected by Unstoppable Onslaught once every 1 second.\nAfter reaching maximum damage and stun duration (at 3 seconds) Sion will transition from using his haste animation to his unique charging one.\nReaching the threshold on  Mecha Zero Sion changes his particle effects instead, most notably the 'Boosters' behind the vehicle.\nThe turning angle is not based on time and can easily be seen in practice when a Sion charges in-place due to bugs.\nSion's movement speed gains during the charge are unaffected by movement speed caps. Effects that would increase or decrease his movement speed do not affect him as well.\n Nami's  Surging Tides is the only known effect that can affect Sion's movement speed during the charge and that can place him above the normal MS value. However, without further multipliers, surpassing the 950 movement speed cap will require  Nami to have over 2150 ability power.\nSion does not always crash with terrain immediately upon touching it, enabling the player to turn beyond his maximum turning angle.\nCasting the ability at point blank of a terrain will most often automatically change the charge's direction.\nThis is not usually possible with player-generated terrain.\nUnstoppable Onslaught cannot charge through but can leap over player-generated terrain.\nSion loses the  crowd control immunity after finishing the leap.\nSion is not immune to an allied  Bard's  Tempered Fate if it hits Sion during the 0.05-second delay before he starts the channel, he will not resist the effect and will initiate the slam immediately while in  stasis.(bug)\nUnstoppable Onslaught cannot strike the same non-champion twice in less than 1 second.\nEven though the cooldown of Unstoppable Onslaught starts at the end of the effect, gaining or losing ability haste, or upgrading the ability during the effect, will not change the resuming cooldown.\n Removing the  airborne before 0.5 seconds will not prevent the  stun from being applied.\n Displacement immunity will also resist the application of the  stun.\nSion can occasionally cast Unstoppable Onslaught while  rooted. In this case, he will stand in place until the root's debuff duration ends. During this time, the damage, stun duration and movement speed granted by the ability will still ramp up, and enemies that come into contact with him will be affected by the collision normally.(bug)\nA similar case allows him to cast it during crowd control that would disable it. However, the channel would be interrupted almost immediately, and he will initiate the leap as well.\n Fate's Call deferment of Unstoppable Onslaught will still allow Sion to leap forward at the end of the channel.\nMoving the cursor onto HUD elements (e.g mini map / champion portraits) does not jeopardize the cast and steering of Unstoppable Onslaught. The targeting will act as if the ground was targeted below the display element.\nPENDING FOR TEST: The distance between Sion's center and the center of the ground slam scales slightly with movement speed. This is suspected because running into a wall within half a second of charge time after starting at multiple thousands of movement speed shows a considerable difference, however this could also be due to a bug.\nPENDING FOR TEST: The leap appears to always have the same speed regardless of Sion's, at roughly 750.\nThe following table refers for interactions while Sion is  channeling:\n\n\nType\n\nChannel\n\n\nAttacking\n\nDisabled\n\n\nAbilities\n\n Soul Furnace and its  recast are usable.  Decimating Smash and  Roar of the Slayer are disabled. This ability recasts to end channel.\n\n\nMovement\n\nAllowed, but cannot input movement commands.\n\n\nItems\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll items are disabled\n\n\nInterrupted by\n\nN/A\n\n\nConsumables\n\nDisabled\n\n\nSpells\n\nUsable\n\nN/A\n\n\nDisabled\n\nAll summoner spells are disabled\n\n\nInterrupted by\n\nN/A\n\n\nInterrupted by\n\nDeath\n\nIf Unstoppable Onslaught's channel is interrupted despite the immunity to crowd control or  Decimating Smash is cast within 0.25 seconds after starting the charge, it will also initiate the leap. If the channel ends due to collision or death, there is no  leap and the effect occurs immediately.",
  "resource": "Mana",
  "spellEffects": "Area of effect",
  "spellshieldable": "True",
  "targeting": "Direction / Auto"
}
export default ability
