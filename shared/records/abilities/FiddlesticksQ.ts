// Updated Patch 15.24.1 - 12/26/2025 07:03:45 PM CST

const ability: Ability = {
  "key": "Q",
  "name": "Terrify",
  "affects": "Enemies",
  "blurb": "Passive: While  Fiddlesticks is unseen or impersonating an  effigy, its next damaging ability will briefly  fear targets hit.",
  "castTime": "0.35",
  "cooldown": "15 / 14.5 / 14 / 13.5 / 13",
  "cost": "65",
  "damageType": "Magic damage",
  "effects": [
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Passive:</span> While Fiddlesticks has been out of combat for at least 2.5 seconds and is not visible to the enemy team, or is pretending to be an Effigy, its next damaging ability will additionally fear targets hit for a duration.</p>",
      "leveling": [
        {
          "attribute": "Fear Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.2 / 1.4 / 1.6 / 1.8 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "<p class=\"ability-effect\"><span class=\"ability-header\">Active:</span> Fiddlesticks launches a crow at the target enemy which arrives after 0.35 seconds, dealing magic damage and fearing them for a duration. Terrify has a minimum damage threshold and is capped at 400 against monsters.</p>",
      "leveling": [
        {
          "attribute": "Magic Damage",
          "modifiers": [
            {
              "unit": "%  of target's current health",
              "values": "4 / 4.5 / 5 / 5.5 / 6"
            },
            {
              "unit": "% per 100 AP",
              "values": "3"
            }
          ]
        },
        {
          "attribute": "Minimum Damage",
          "modifiers": [
            {
              "values": "40 / 60 / 80 / 100 / 120"
            }
          ]
        },
        {
          "attribute": "Fear Duration",
          "modifiers": [
            {
              "unit": " seconds",
              "values": "1.2 / 1.4 / 1.6 / 1.8 / 2"
            }
          ]
        }
      ]
    },
    {
      "description": "Targets feared by Fiddlesticks by any means cannot be affected by it again for a duration equal to Terrify's cooldown. Against these targets, Terrify's damage and minimum threshold are doubled.",
      "leveling": [
        {
          "attribute": "Increased Magic Damage",
          "modifiers": [
            {
              "unit": "%  of target's current health",
              "values": "8 / 9 / 10 / 11 / 12"
            },
            {
              "unit": "% per 100 AP",
              "values": "6"
            }
          ]
        },
        {
          "attribute": "Increased Minimum Damage",
          "modifiers": [
            {
              "values": "80 / 120 / 160 / 200 / 240"
            }
          ]
        }
      ]
    },
    {
      "description": "Terrify slows affected targets by 90%."
    }
  ],
  "icon": "https://cdn.communitydragon.org/latest/champion/Fiddlesticks/ability-icon/q",
  "notes": "The fear-immunity timer is not refreshed by subsequent attempts to fear the target.\nThe  fear is applied at the end of the cast time, regardless of the target's distance.\nThe missile cannot be destroyed except by  projectile-interception effects.\nFiddlesticks is considered \"seen\" if it is visible and is inside an enemy champion's sight radius. Vision from  minions,  wards, and  turrets will not prevent Fiddlesticks from  fearing if there are no nearby enemy champions.\nThere is a very brief grace period after being seen or when entering combat. This can allow for multiple spells to inflict  fear.\n Monsters are feared by Fiddlesticks's abilities when Fiddlesticks is out of combat, with some exceptions.\nIf Fiddlesticks has recently damaged a monster from a camp with a basic attack or abilities (including  Smite but not item active abilities), monsters in that camp will not be feared by his other abilities.\n Bountiful Harvest will not fear monsters unless Fiddlesticks is pretending to be an  Effigy or is not visible to them.\n Minions are always feared if Fiddlesticks is not attacking them and there is no enemy champion in its view.\nThe passive portion does not currently communicate any information to Fiddlesticks, its allies nor its enemies. There is no indicator to say that Fiddlesticks is out of combat; and no indicator or debuff icon on affected enemies.\nA visual indicator will circle around all enemy champions while Fiddlesticks is channeling  Crowstorm if it is unseen. This is only visible to Fiddlesticks.\nThe fear immunity applies even if the target is  crowd control immune. It is not applied if it is blocked by  spell shield.\nTerrify will still cast and affect the target even if Fiddlesticks dies or loses  sight of them during the cast time.\nTerrify will still cast but not affect the target if they die or become  untargetable during the cast time. There is no compensation.\nThe player's screen will have a visual effect when successfully  feared by Terrify.\n -  Surprise Party Fiddlesticks has a special icon for this ability.\n Crowstorm will not fear enemy champions if cast while they have vision of Fiddlesticks, even if Fiddlesticks is pretending to be an  Effigy.",
  "projectile": "TRUE",
  "resource": "Mana",
  "spellEffects": "Spell",
  "spellshieldable": "true",
  "targeting": "Unit",
  "targetRange": "575"
}
export default ability
